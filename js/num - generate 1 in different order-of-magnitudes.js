// scientific number notation

// negative oom
parseFloat('1e-'+0) // 1
parseFloat('1e-'+1) // 0.1
parseFloat('1e-'+2) // 0.01
parseFloat('1e-'+3) // 0.001
parseFloat('1e-'+4) // 0.0001
parseFloat('1e-'+5) // 0.00001

// positive oom
parseFloat('1e'+0)  // 1
parseFloat('1e'+1)  // 10
parseFloat('1e'+2)  // 100


// manual construction

// negative oom
neg = dp => dp > 0 ? parseFloat('0.'+ ('0'.repeat(dp-1)) +'1') : 1;
f(0) // 1
f(1) // 0.1
f(2) // 0.01
f(3) // 0.001
f(4) // 0.0001
f(5) // 0.00001

// positive oom
f2 = n => parseInt('1'+'0'.repeat(n));
f2(0) // 1
f2(1) // 10
f2(2) // 100
