<!DOCTYPE html>

<html>

	<head>
		<meta charset="UTF-8"/>
		<title>Click Map</title>
		<link type="text/css" rel="stylesheet" href="css/map_style.css">
		<script type="text/javascript" src="jq/jquery-3.3.1.min.js"></script> 
	</head>
	
	<body>
		<div class="container">
			<canvas id = "mapCanvas" width="1920" height="1014"></canvas>
			<div id = "div-container">
				<div><a href="https://drom.ru">drom</a></div></br>
				<div><a href="https://facebook.com">facebook</a></div></br>
				<div><a href="https://meduza.io">meduza</a></div></br>
				<div>click me</div></br>
				<div>click me again</div></br>
				<div>Carrrrrambaaaaaaaaa!</div></br>	
			</div>	
		</div>
	</body>	
	
</html>

<?php
	$dbloc = "localhost";
	$dbusername = "root";
	$dbpass = "Root";
	$dbname = "click_bd";
	
	$connect = mysqli_connect($dbloc,$dbusername,$dbpass,$dbname);
	if (!$connect){
		echo "ОШИБКА СОЕДИНЕНИЯ";
		exit;
	}
	echo "СОЕДИНЕНИЕ УСТАНОВЛЕНО<br>";
	
	$result = mysqli_query($connect, "SELECT coordX,coordY FROM clickcoords_table");
	if(!$result){
		echo "НЕ УДАЛОСЬ СОБРАТЬ ДАННЫЕ ИЗ БАЗЫ ДАННЫХ. ПРОВЕРЬТЕ НЕ ПУСТА ЛИ ОНА";
		exit;
	}
	
	echo "ДАННЫЕ ИЗ БАЗЫ ДАННЫХ СОБРАНЫ";
	
	$rows = mysqli_num_rows($result);
	for ($i = 0; $i < $rows; ++$i){
		$row = mysqli_fetch_row($result);
		$x = $row[0];
		$y = $row[1];
		echo("<script type=\"text/javascript\">
		var canvas = document.getElementById('mapCanvas');
		var context = canvas.getContext('2d');
		context.fillStyle = 'red';
		context.beginPath();
		context.arc($x,$y,3,0,2*Math.PI);	
		context.fill();</script>");
	}
	
	mysqli_free_result($result);
	mysqli_close($connect);
?>