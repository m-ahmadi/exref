function perc(percent, n) {
  return n * (percent * 0.01);
}
function perc(percent, n) {
  return (n / 100) * percent;
}

function whatPerc(n, y) {
  return (y / n) * 100; // y is what percentage of n?
}

function percDiff(ferom, to) {
  const diff = to - ferom;
  return (diff / ferom) * 100;
}