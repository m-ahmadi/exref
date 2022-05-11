reverseSign = n => -n;

reverseSign = n => n * -1;

reverseSign = n => 0 - n;

reverseSign = n => ~n + 1;

reverseSign = n => n - (n * 2);

reverseSign = n => (
  n < 0 ? n * 1 :
  n > 0 ? n * -1 :
  0
);

reverseSign = n => (
  n < 0 ? Math.abs(n) :
  n > 0 ? -Math.abs(num) :
  0
);