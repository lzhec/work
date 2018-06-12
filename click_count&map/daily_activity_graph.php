<?php
header ('Content-Type: text/html; charset=utf-8');
require_once 'data/config.php';
require_once "data/functions.php";

connect(HOST,USER,PASS,DATABASE);
$data = get($connect);
?>

<!DOCTYPE html>

<html>

	<head>
		<meta charset="UTF-8"/>
		<title>Daily Activity Graph</title>
		<link type="text/css" rel="stylesheet" href="css/graph_style.css">
		<script type="text/javascript" src="fc/fusioncharts.js"></script> <!--библиотека fusioncharts для построения графиков-->
		<script type="text/javascript" src="fc/fusioncharts.charts.js"></script> <!--непосредственное отображение диаграмм на экране-->
		<script type="text/javascript" src="fc/fusioncharts.theme.fint.js"></script> <!--графическая тема оформления из библиотеки-->
		<script>
			FusionCharts.ready(function(){
				var param = new FusionCharts({
					"type":"column2d", "renderAt":"graph","width":1700, "height":800, "dataFormat":"json",
					"dataSource":{
						"chart": {
							"caption":"daily activity graph", "xAxisName":"time, h", "yAxisName":"Activity, clicks",
							"theme":"fint", "numberPrefix":"",
						},
						"data": <?php echo $data['data']?>					
					}
				});
				param.render(); // запуск диаграммы
			});
		</script>
	</head>
	
	<body style="background-color: #AFEEEE">
		<div style="text-align: center" id="graph"></div>
		<button id="switch">
			<a id="switchref" href="click_map.php">
				Карта кликов
			</a>
		</button>		
	</body>	
	
</html>