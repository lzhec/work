<!DOCTYPE html>

<html>
<head>
	<meta charset="UTF-8"/>
	<title>Click Map</title>	
	<link type="text/css" rel="stylesheet" href="static/site_style.css">
	<link type="text/css" rel="stylesheet" href="static/map_style.css">
	<link rel="stylesheet" href="static/header-style.css">
    <link rel="stylesheet" href="static/content-style.css">
    <link rel="stylesheet" href="static/top-content-style.css">
    <link rel="stylesheet" href="static/center-content-style.css">
    <link rel="stylesheet" href="static/bottom-content-style.css">
    <link rel="stylesheet" href="static/footer-style.css">
    <link rel="stylesheet" href="static/bg-style.css">
	<script type="text/javascript" src="jq/jquery-3.3.1.min.js"></script>
	<script>
    	$(function() {
    		$('#header').load('landing/header.html');
    		$('#content').load('landing/content.html');
    		$('#footer').load('landing/footer.html');
    	});
    </script>
</head>

<body>
	<div class="container">
		
		<canvas id = "mapCanvas" width="1903" height="1570"></canvas> <!-- Размеры канваса выставляются вручную -->
		
		<div id = "div-container">
			<div id="header"></div>
			<div id="content"></div>
			<div id="footer"></div>
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