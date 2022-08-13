//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// color
color(gray, [alpha])
color(v1, v2, v3, [alpha])
color(value)
color(values)
color(color)

let c = color(255, 204, 0)
fill(c)
noStroke()
rect(30, 20, 55, 55)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// background
background(color)
background(colorstring, [a])
background(gray, [a])
background(v1, v2, v3, [a])
background(values)
background(image, [a])

// examples:
background(51)                              // grayscale integer value
background(255, 204, 0)                     // rgb integers

colorMode(HSB)
background(255, 204, 100)                   // hsb integers

background('red')                           // named svg/css color string
background('#fae')                          // 3-digit hex rgb
background('#222222')                       // 6-digit hex rgb
background('rgb(0,255,0)')                  // rgb notation
background('rgba(0,255,0, 0.25)')           // rgba
background('rgb(100%,0%,10%)')              // rgb percentage
background('rgba(100%,0%,100%,0.5)')        // rgba percentage
background( color(0, 0, 255) )              // p5 color object