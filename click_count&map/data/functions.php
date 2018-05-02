<?php 


//подключение к базе данных

function connect($host,$user,$pass,$database){

	global $connect; 
	$connect = mysqli_connect($host,$user,$pass,$database);	
}


//счетчик кликов

function cnt($connect, $ref){

	$result = mysqli_query($connect, "SELECT id,count FROM click_table WHERE ref='$ref'");

	while($row = mysqli_fetch_array($result)){
		$id = $row['id'];
		$count = intval($row['count']) + 1;
	}
		
	if ($id != null){
		mysqli_query($connect, "UPDATE click_table SET count=$count WHERE id=$id");
	} else{	
		mysqli_query($connect, "INSERT INTO click_table (ref,count) VALUES ('$ref',1)");
	}

	mysqli_close($connect);
}


//координаты кликов

function toMap($connect,$coordX,$coordY) {

	mysqli_query($connect, "INSERT INTO clickcoords_table (coordX,coordY) VALUES ($coordX,$coordY)");
	
	mysqli_close($connect);
}


//получение и отображение координат кликов

function fromMap($connect) {

	$result = mysqli_query($connect, "SELECT coordX,coordY FROM clickcoords_table");

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
}


// время кликов

function active($connect,$hour) {

	$result = mysqli_query($connect, "SELECT id,count FROM activity_table WHERE hour=$hour");
	
	while($row = mysqli_fetch_array($result)){
		$id = $row['id'];
		$count = intval($row['count']) + 1;
	}
	
	if ($id !== null){
		mysqli_query($connect, "UPDATE activity_table SET count=$count WHERE id=$id");
	} else{
		mysqli_query($connect, "INSERT INTO activity_table (hour,count) VALUES ($hour,1)");
	}
}


//получение времени кликов

function get($connect){
	$result = mysqli_query($connect, "SELECT hour as label,count as value FROM activity_table");
		
	while($row = mysqli_fetch_object($result)){
		$get['data'][] = $row;
		sort($get['data']);
	}
	
	$get['data'] = json_encode($get['data']);
	return $get;	
}
 
?>
