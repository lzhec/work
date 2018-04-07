<?php
	$hour = $_GET['hour'];

	$dbloc = "localhost";
	$dbusername = "root";
	$dbpass = "Root";
	$dbname = "click_bd";   // В таблице 3 поля: id, hour, count
	
	$connect = mysqli_connect($dbloc,$dbusername,$dbpass,$dbname);
	if (!$connect){
		echo "ОШИБКА СОЕДИНЕНИЯ С БАЗОЙ ДАННЫХ";
		exit;
	}
	echo "СОЕДИНЕНИЕ С БАЗОЙ ДАННЫХ УСТАНОВЛЕНО<br>";
	
	$result = mysqli_query($connect, "SELECT id,count FROM activity_table WHERE hour=$hour");
	if(!$result){
		echo "НЕ УДАЛОСЬ СОБРАТЬ ДАННЫЕ ИЗ БАЗЫ ДАННЫХ. ПРОВЕРЬТЕ НЕ ПУСТА ЛИ ОНА";
		exit;
	}
	
	echo "ДАННЫЕ ИЗ БАЗЫ ДАННЫХ СОБРАНЫ<br>";
	
	while($row = mysqli_fetch_array($result)){
		$id = $row['id'];
		$count = intval($row['count']) + 1;
	}
	
	if ($id !== null){
		$sql = mysqli_query($connect, "UPDATE activity_table SET count=$count WHERE id=$id");
		if (!$sql){
			echo "ИНФОРМАЦИЯ НЕ ОБНОВЛЕНА. ПРОВЕРЬТЕ ПРАВИЛЬНОСТЬ ДАННЫХ";
			exit;
		}		
		echo "ИНФОРМАЦИЯ В БАЗЕ ДАННЫХ ОБНОВЛЕНА";
	} else{
		$sql = mysqli_query($connect, "INSERT INTO activity_table (hour,count) VALUES ($hour,1)");
		if(!$sql){
			echo "НЕ УДАЛОСЬ ЗАПИСАТЬ ДАННЫЕ В БАЗУ ДАННЫХ. ПРОВЕРЬТЕ ПРАВИЛЬНОСТЬ ДАННЫХ";
			exit;
		}
		echo "ИНФОРМАЦИЯ ЗАНЕСЕНА В БАЗУ ДАННЫХ";
	}
	
	mysqli_close($connect);
?>