<?php
	$ref = $_GET['refname'];
	$dbloc = "localhost";
	$dbusername = "root";
	$dbpass = "Root";
	$dbname = "click_bd";   // В таблице 3 поля: id, ref, count
	
	
	$connect = mysqli_connect($dbloc,$dbusername,$dbpass,$dbname);
	if (!$connect){
		echo "ОШИБКА СОЕДИНЕНИЯ<br>";
		exit;
	}
	echo "СОЕДИНЕНИЕ УСТАНОВЛЕНО<br>";
	
	$result = mysqli_query($connect, "SELECT id,count FROM click_table WHERE ref='$ref'");
	while($row = mysqli_fetch_array($result)){
		$id = $row['id'];
		$count = intval($row['count']) + 1;
	}
	
	if ($id != null){
		$sql = mysqli_query($connect, "UPDATE click_table SET count=$count WHERE id=$id");
		if (!$sql){
			echo "ИНФОРМАЦИЯ НЕ ОБНОВЛЕНА";
			exit;
		}
		echo "ИНФОРМАЦИЯ В БАЗЕ ДАННЫХ ОБНОВЛЕНА";
	} else{
		$sql = mysqli_query($connect, "INSERT INTO click_table (ref,count) VALUES('$ref',1)");
		if (!$sql){
			echo "ИНФОРМАЦИЯ НЕ ЗАНЕСЕНА";
			exit;
		}
		echo "ИНФОРМАЦИЯ ЗАНЕСЕНА В БАЗУ ДАННЫХ";
	}
	
	mysqli_close($connect);
?>