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
				<button id="switch">
					<a id="switchref" href="daily_activity_graph.php">
						График суточной активности
					</a>
				</button>	
			</div>	
		</div>
	</body>	
	
</html>

<?php
header ('Content-Type: text/html; charset=utf-8');
require_once 'data/config.php';
require_once 'data/functions.php';

connect(HOST,USER,PASS,DATABASE);
fromMap($connect);
?>