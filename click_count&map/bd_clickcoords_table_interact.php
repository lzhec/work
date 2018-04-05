<?php
	$coordX = $_GET['coordX'];
	$coordY = $_GET['coordY'];
	$dbloc = "localhost";
	$dbusername = "root";
	$dbpass = "Root";
	$dbname = "click_bd";  // В таблице 3 поля: id, coordX, coordY
	
	$connect = mysqli_connect($dbloc,$dbusername,$dbpass,$dbname);
	if (!$connect){
		echo "ОШИБКА СОЕДИНЕНИЯ<br>";
		exit;
	}
	echo "СОЕДИНЕНИЕ УСТАНОВЛЕНО<br>";

	$sql = mysqli_query($connect, "INSERT INTO clickcoords_table (coordX,coordY) VALUES($coordX,$coordY)");
	mysqli_close($connect);
?>