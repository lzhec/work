<?php
	$hour = $_GET['hour'];

	$dbloc = "localhost";
	$dbusername = "root";
	$dbpass = "Root";
	$dbname = "click_bd";   // В таблице 3 поля: id, hour, count
	
	$connect = mysqli_connect($dbloc,$dbusername,$dbpass,$dbname);
	if (!$connect){
		echo "ОШИБКА СОЕДИНЕНИЯ С БАЗОЙ ДАННЫХ<br>";
		exit;
	}
	echo "СОЕДИНЕНИЕ С БАЗОЙ ДАННЫХ УСТАНОВЛЕНО<br>";
	
	$result = mysqli_query($connect, "SELECT id,count FROM activity_table WHERE hour=$hour");
	if(!$result){
		echo "НЕ УДАЛОСЬ СОБРАТЬ ДАННЫЕ ИЗ БАЗЫ ДАННЫХ. ПРОВЕРЬТЕБ НЕ ПУСТА ЛИ ОНА<br>";
		exit;
	}
	
	while($row = mysqli_fetch_array($result)){
		$id = $row['id'];
		$count = intval($row['count']) + 1;
	}
	
	if ($id !== null){
		$sql = mysqli_query($connect, "UPDATE activity_table SET count=$count WHERE id=$id");
		
	
	} else{
		$sql = mysqli_query($connect, "INSERT INTO activity_table (hour,count) VALUES ($hour,1)");
		
	}
	
	mysqli_close($connect);
?>