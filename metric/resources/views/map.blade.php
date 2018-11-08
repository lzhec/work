<!DOCTYPE html>

<html>
<head>
	<meta charset="UTF-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Карта кликов</title>	
	<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
	<link type="text/css" rel="stylesheet" href="css/site_style.css">
	<link type="text/css" rel="stylesheet" href="css/map_style.css">
	<link type="text/css" rel="stylesheet" href="css/header-style.css">
	<link type="text/css" rel="stylesheet" href="css/content-style.css">
	<link type="text/css" rel="stylesheet" href="css/top-content-style.css">
	<link type="text/css" rel="stylesheet" href="css/center-content-style.css">
	<link type="text/css" rel="stylesheet" href="css/bottom-content-style.css">
	<link type="text/css" rel="stylesheet" href="css/footer-style.css">
	<link type="text/css" rel="stylesheet" href="css/bg-style.css">
</head>

<body>
	<div class="container">
		
		<canvas id = "mapCanvas" width="1903" height="1570"></canvas> <!-- Размеры канваса выставляются вручную -->
		
		<div id = "div-container">
			@yield('header')
			@yield('content')
			@yield('footer')
			<button id="switch">
				<a id="switchref" href="/graph">
					График суточной активности
				</a>
			</button>
		</div>
	</div>
</body>		
</html>

<?php
header ('Content-Type: text/html; charset=utf-8');
require_once '../app/config.php';
require_once '../app/functions.php';

connect(HOST,USER,PASS,DATABASE);
$data = fromMap($connect);
?>