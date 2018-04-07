<?php
	$coordX = $_GET['coordX'];
	$coordY = $_GET['coordY'];
	
	$dbloc = "localhost";
	$dbusername = "root";
	$dbpass = "Root";
	$dbname = "click_bd";  // В таблице 4 поля: id, coordX, coordY, date
	
	$connect = mysqli_connect($dbloc,$dbusername,$dbpass,$dbname);
	if (!$connect){
		echo "ОШИБКА СОЕДИНЕНИЯ С БАЗОЙ ДАННЫХ<br>";
		exit;
	}
	echo "СОЕДИНЕНИЕ С БАЗОЙ ДАННЫХ УСТАНОВЛЕНО<br>";

	$sql = mysqli_query($connect, "INSERT INTO clickcoords_table (coordX,coordY) VALUES ($coordX,$coordY)");
	if(!$sql){
		echo "НЕ УДАЛОСЬ ЗАПИСАТЬ ДАННЫЕ В БАЗУ ДАННЫХ. ПРОВЕРЬТЕБ ПРАВИЛЬНОСТЬ ДАННЫХ<br>";
		exit;
	}	
	
	mysqli_close($connect);
?>