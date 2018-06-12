<?php
header("Content-Type:text/html;charset=UTF8");

include 'config.php'; //файл с данными авторизации к БД
include 'functions.php'; //функции вынесены в отдельный файл

connect(HOST,USER,PASS,DATABASE);
$result = get();
?>

<html>

<head>
	<meta charset="UTF-8"/>
	<title>MultiTree</title>
	<script src="jq/jquery-3.3.1.min.js"></script> <!--подключение jQuery-->
	<script type="text/javascript" src="showhide_script.js"></script> <!--подключение скрипта разворачивания/сворачивания пунктов меню-->
</head>
	
<body>
	<?php echo display($result)?>
</body>	
	
</html>