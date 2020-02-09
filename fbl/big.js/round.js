down = 0
half_up = 1
half_even = 2
up = 3

x = 123.45
Math.round(x)              // 123

y = new Big(x)
y.round()                  // '123'
y.round(2)                 // '123.45'
y.round(10)                // '123.45'
y.round(1, down)           // '123.4'
y.round(1, half_up)        // '123.5'
y.round(1, half_even)      // '123.4'
y.round(1, up)             // '123.5'
y.round(-1, down)          // '120'
y.round(-2, up)            // '200'
y                          // '123.45'