<?php
	$dbloc = "localhost";
	$dbusername = "root";
	$dbpass = "Root";
	$dbname = "click_bd";   
	
	$connect = mysqli_connect($dbloc,$dbusername,$dbpass,$dbname);
	if (!$connect){
		echo "ОШИБКА СОЕДИНЕНИЯ С БАЗОЙ ДАННЫХ<br>";
		exit;
	}
	echo "СОЕДИНЕНИЕ С БАЗОЙ ДАННЫХ УСТАНОВЛЕНО<br>";
	
	function get($connect){	
		$result = mysqli_query($connect, "SELECT hour as label,count as value FROM activity_table");
		if(!$result){
			echo "НЕ УДАЛОСЬ СОБРАТЬ ДАННЫЕ ИЗ БАЗЫ ДАННЫХ. ПРОВЕРЬТЕБ НЕ ПУСТА ЛИ ОНА<br>";
			exit;
		}
		
		while($row = mysqli_fetch_object($result)){
			$get['data'][] = $row;
		}
		
		$get['data'] = json_encode($get['data']);
		return $get;		
	}

?>