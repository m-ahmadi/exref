<?php
if (isset($_GET['ali'])){
	$ali = $_GET['ali'];
	if(empty($ali)){echo 'khalie';}
	
		switch($ali){
		    case 'sto':
			    $sto = '<div class="search_options_motherboard">
					<label class="lbl">شرکت سازنده</label><br><br>
					<input type="checkbox"/><label>GIGA-BYTE</label><br />
					<input type="checkbox"/><label>ASUS</label><br />
					<input type="checkbox" /><label>ASROCK</label>
				</div>
				<div class="search_options_motherboard">
					<label class="lbl">پشتیبانی از سی پی یو</label><br />
					<input type="radio" /><label>INTEL</label><br />
					<input type="radio" /><label>AMD</label>
				</div>
				<div class="search_options_motherboard">
					<label class="lbl">سوکت سی پی یو</label><br />
					<input type="checkbox" /><label>2011</label><br />
					<input type="checkbox" /><label>1366</label><br />
					<input type="checkbox" /><label>1155</label><br />
					<input type="checkbox" /><label>1156</label><br />
					<input type="checkbox" /><label>775</label>
				</div>';
				echo $sto;
				break;
				
			case 'stt':
				$stt = '<div class="search_options_motherboard">
					<label class="lbl">سوکت سی پی یو</label><br />
					<input type="checkbox" /><label>2011</label><br />
					<input type="checkbox" /><label>1366</label><br />
					<input type="checkbox" /><label>1155</label><br />
					<input type="checkbox" /><label>1156</label><br />
					<input type="checkbox" /><label>775</label>
					</div>
					<div class="search_options_motherboard">
					<div>
						<label class="lbl">پشتیبانی از مموری</label><br />
						<label>DDR II </label><br />
						<label>Slots:</label><select><option>2</option><option>4</option></select><br>
						<label>Bus:</label><input type="checkbox">533<input type="checkbox">667<input type="checkbox">800
					</div><br>
					<div>
						<label>DDR III </label><br />
						<label>Slots:</label><select><option>2</option><option>4</option></select><br>
						<label>Bus:</label><input type="checkbox">667<input type="checkbox">800<input type="checkbox">1066
					</div>
				</div>';
				echo $stt;
				break;
		}
		
} else {
	echo 'get var is not set';
}
?>
