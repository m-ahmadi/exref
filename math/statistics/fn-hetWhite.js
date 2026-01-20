(() => {

function hetWhite(resid, X) {
  const n = resid.length;

  // Normalize X to matrix
  if (!Array.isArray(X[0])) {
    X = X.map(v => [v]);
  }

  const k = X[0].length;

  /* ---------- linear algebra helpers ---------- */

  const dot = (a, b) => a.reduce((s, v, i) => s + v * b[i], 0);

  const transpose = M =>
    M[0].map((_, i) => M.map(r => r[i]));

  const matMul = (A, B) =>
    A.map(r => transpose(B).map(c => dot(r, c)));

  const matVecMul = (A, v) =>
    A.map(r => dot(r, v));

  const identity = n =>
    Array.from({ length: n }, (_, i) =>
      Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
    );

  const inverse = M => {
    const n = M.length;
    let A = M.map(r => r.slice());
    let I = identity(n);

    for (let i = 0; i < n; i++) {
      let d = A[i][i];
      for (let j = 0; j < n; j++) {
        A[i][j] /= d;
        I[i][j] /= d;
      }
      for (let k = 0; k < n; k++) {
        if (k === i) continue;
        let f = A[k][i];
        for (let j = 0; j < n; j++) {
          A[k][j] -= f * A[i][j];
          I[k][j] -= f * I[i][j];
        }
      }
    }
    return I;
  };

  /* ---------- build White design matrix ---------- */

  let Z = Array.from({ length: n }, () => [1]);

  for (let i = 0; i < k; i++)
    for (let t = 0; t < n; t++)
      Z[t].push(X[t][i]);

  for (let i = 0; i < k; i++) {
    for (let t = 0; t < n; t++)
      Z[t].push(X[t][i] ** 2);

    for (let j = i + 1; j < k; j++)
      for (let t = 0; t < n; t++)
        Z[t].push(X[t][i] * X[t][j]);
  }

  const p = Z[0].length;

  /* ---------- auxiliary regression ---------- */

  const y = resid.map(u => u * u);
  const ZT = transpose(Z);

  const beta = matVecMul(
    matMul(inverse(matMul(ZT, Z)), ZT),
    y
  );

  const yHat = matVecMul(Z, beta);

  const yBar = y.reduce((a, b) => a + b, 0) / n;
  const SST = y.reduce((s, v) => s + (v - yBar) ** 2, 0);
  const SSR = yHat.reduce((s, v) => s + (v - yBar) ** 2, 0);

  const R2 = SSR / SST;

  /* ---------- test statistics ---------- */

  const lmStat = n * R2;
  const dfLm = p - 1;

  const fStat = (R2 / dfLm) / ((1 - R2) / (n - p));
  const dfF1 = dfLm;
  const dfF2 = n - p;

  /* ---------- p-values ---------- */

  const lmPvalue = 1 - chiSquareCDF(lmStat, dfLm);
  const fPvalue  = 1 - fCDF(fStat, dfF1, dfF2);

  return {
		'Test Statistic': lmStat,
		'Test Statistic p-value': lmPvalue,
		'F-Statistic': fStat,
		'F-Statistic p-value': fPvalue,
  };
}

/* ================= distributions ================= */

function chiSquareCDF(x, k) {
  return gammaP(k / 2, x / 2);
}

function fCDF(x, d1, d2) {
  const z = (d1 * x) / (d1 * x + d2);
  return betaInc(z, d1 / 2, d2 / 2);
}

/* ================= special functions ================= */

function gammaln(x) {
  const cof = [
    76.18009172947146, -86.50532032941677,
    24.01409824083091, -1.231739572450155,
    0.1208650973866179e-2, -0.5395239384953e-5
  ];

  let y = x;
  let tmp = x + 5.5;
  tmp -= (x + 0.5) * Math.log(tmp);
  let ser = 1.000000000190015;

  for (let j = 0; j < cof.length; j++) {
    ser += cof[j] / ++y;
  }

  return -tmp + Math.log(2.5066282746310005 * ser / x);
}

function gammaP(a, x) {
  if (x <= 0) return 0;

  if (x < a + 1) {
    let ap = a;
    let sum = 1 / a;
    let del = sum;

    for (let n = 1; n <= 100; n++) {
      ap++;
      del *= x / ap;
      sum += del;
      if (Math.abs(del) < Math.abs(sum) * 1e-14) break;
    }

    return sum * Math.exp(-x + a * Math.log(x) - gammaln(a));
  } else {
    let b = x + 1 - a;
    let c = 1e30;
    let d = 1 / b;
    let h = d;

    for (let i = 1; i <= 100; i++) {
      let an = -i * (i - a);
      b += 2;
      d = an * d + b;
      if (Math.abs(d) < 1e-30) d = 1e-30;
      c = b + an / c;
      if (Math.abs(c) < 1e-30) c = 1e-30;
      d = 1 / d;
      let del = d * c;
      h *= del;
      if (Math.abs(del - 1) < 1e-14) break;
    }

    return 1 - h * Math.exp(-x + a * Math.log(x) - gammaln(a));
  }
}

function betaInc(x, a, b) {
  const bt = Math.exp(
    gammaln(a + b) - gammaln(a) - gammaln(b) +
    a * Math.log(x) + b * Math.log(1 - x)
  );

  if (x < (a + 1) / (a + b + 2)) {
    return bt * betacf(x, a, b) / a;
  } else {
    return 1 - bt * betacf(1 - x, b, a) / b;
  }
}

function betacf(x, a, b) {
  let qab = a + b;
  let qap = a + 1;
  let qam = a - 1;
  let c = 1;
  let d = 1 - qab * x / qap;
  if (Math.abs(d) < 1e-30) d = 1e-30;
  d = 1 / d;
  let h = d;

  for (let m = 1; m <= 100; m++) {
    let m2 = 2 * m;
    let aa = m * (b - m) * x / ((qam + m2) * (a + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < 1e-30) d = 1e-30;
    c = 1 + aa / c;
    if (Math.abs(c) < 1e-30) c = 1e-30;
    d = 1 / d;
    h *= d * c;

    aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < 1e-30) d = 1e-30;
    c = 1 + aa / c;
    if (Math.abs(c) < 1e-30) c = 1e-30;
    d = 1 / d;
    let del = d * c;
    h *= del;

    if (Math.abs(del - 1) < 1e-14) break;
  }

  return h;
}

globalThis.hetWhite = hetWhite;
})();
