<?php
	$coordX = $_GET['coordX'];
	$coordY = $_GET['coordY'];
	
	$dbloc = "localhost";
	$dbusername = "root";
	$dbpass = "Root";
	$dbname = "click_bd";  // В таблице 4 поля: id, coordX, coordY, date
	
	$connect = mysqli_connect($dbloc,$dbusername,$dbpass,$dbname);
	if (!$connect){
		echo "ОШИБКА СОЕДИНЕНИЯ С БАЗОЙ ДАННЫХ";
		exit;
	}
	echo "СОЕДИНЕНИЕ С БАЗОЙ ДАННЫХ УСТАНОВЛЕНО<br>";

	$sql = mysqli_query($connect, "INSERT INTO clickcoords_table (coordX,coordY) VALUES ($coordX,$coordY)");
	if(!$sql){
		echo "НЕ УДАЛОСЬ ЗАПИСАТЬ ДАННЫЕ В БАЗУ ДАННЫХ. ПРОВЕРЬТЕ ПРАВИЛЬНОСТЬ ДАННЫХ";
		exit;
	}	
	
	echo "ИНФОРМАЦИЯ ЗАНЕСЕНА В БАЗУ ДАННЫХ";
	
	mysqli_close($connect);
?>