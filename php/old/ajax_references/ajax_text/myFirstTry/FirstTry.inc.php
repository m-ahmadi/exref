<?php
$model = array('GA-Z77X-UD3H','GA-Z77X-UD5H','GA-Z77X-UD5H-WB WIFI','GA-Z77X-UD4H');


if (isset($_GET['ali'])){
	$ali = $_GET['ali'];
	if(empty($ali)){echo 'khalie';}


		switch($ali){
			
			case 'GIGA':
				 $select =      '<label>Chipset:</label>
			 
									 <select multiple="multiple" size="5" id="chipset">
											<option value="Z77" onclick="findmatch2()"> Z77 </option>
											<option value="H77y" onclick="findmatch2()"> H775555 </option>
											<option value="Q77" onclick="findmatch2()"> Q77 </option>
											<option value="B75" onclick="findmatch2()"> B75 </option>
									 </select>';
				 echo $select;
				 break;
			
			case 'chipset':
			 $showmodel = '<select multiple="multiple" size="5" id="model">
							 <option value="'.$model[0].'" id="num1" onclick="findmatch3(1);">'.$model[0].'</option>
							 <option value="'.$model[1].'" id="num2" onclick="findmatch3(2);">'.$model[1].'</option>
							 <option value="'.$model[2].'" id="num3" onclick="findmatch3(3);">'.$model[2].'</option>
							 <option value="'.$model[3].'" id="num4" onclick="findmatch3(4);">'.$model[3].'</option>
							</select>';
			 echo $showmodel;
			 break;
			 
			case $model[0]:
			 $header = '<h1>'.$model[0].'</h1>';
			 echo $header;
			 break;
			 
			case $model[1]:
			 $header = '<h1>'.$model[1].'</h1>';
			 echo $header;
			 break;
			 
			case $model[2]:
			 $header = '<h1>'.$model[2].'</h1>';
			 echo $header;
			 break;
			 
			case $model[3]:
			 $header = '<h1>'.$model[3].'</h1>';
			 echo $header;
			 break;
		}

} else {
	echo 'get var is not set';
}

?>
