<?php
is_array  ( [1, 2]  )  // true
is_array  ( '12'    )  // false

is_string ( 'abc'   )  // true
is_string ( 12      )  // false

gettype   ( 'abc'   )  // string
gettype   ( 12      )  // integer
gettype   ( []      )  // array
gettype   ( new t() )  // object

isset     ( ''      )  // true
isset     ( null    )  // false
?>