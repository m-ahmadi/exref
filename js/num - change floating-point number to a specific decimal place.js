var n = 12.123456;

parseFloat( n.toFixed(2) ) // 12.12
parseFloat( n.toFixed(3) ) // 12.123

// fast trick for only two places:
Math.round(n * 100) / 100  // 12.12