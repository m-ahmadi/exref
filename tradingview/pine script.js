study("My indicator", overlay=true)
plot(hl2[3])
foo = close < sma(close, 7)
plotchar(foo, char="S"), location=location.abovebar