<?php
$arr = ['motherboard','cpu','graphic','memory','myBeutiful_ass'];

array_splice($arr, array_search('cpu',$arr), 1);

in_array(2, [1,2,3])         // true
in_array('2', [1,2,3])       // true
in_array('2', [1,2,3], true) // false

// last item
end([1,2,3]) // 3
