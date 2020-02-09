var n = 42;

// very convenient:
'' + n                 // "42"
n + ''                 // "42"
(''+n)                 // "42"
'' + 1 + 2;            // "12"
'' + ( 1 + 2 );        // "3"
'' + 0.0000001;        // "1e-7"

// faster and better:
n.toString() // "42"