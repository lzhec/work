<?php 

//подключение к базе данных

function connect($host,$user,$pass,$database){

	global $connect; 
	$connect = mysqli_connect($host,$user,$pass,$database);	
}


//координаты кликов

function toMap($connect,$coordX,$coordY) {

	mysqli_query($connect, "INSERT INTO coords (coordX,coordY) VALUES ($coordX,$coordY)");
	
	mysqli_close($connect);
}


//получение и отображение координат кликов

function fromMap($connect) {
	$array = [];

	$result = mysqli_query($connect, "SELECT coordX,coordY FROM coords");

	$rows = mysqli_num_rows($result);
	for ($i = 0; $i < $rows; ++$i){
	    $row = mysqli_fetch_row($result);
	    array_push($array, $row);
	}

	$array = json_encode($array);

	echo("<script type='text/javascript'>
	    var canvas = document.getElementById('mapCanvas');
	    var context = canvas.getContext('2d');
	    context.fillStyle = 'red';
	    var array = Object.values($array);
	    for (var i in array){
	        context.beginPath();
	        context.arc(array[i][0],array[i][1],3,0,2*Math.PI);
	        context.fill();
	    }</script>"
	);
	
	mysqli_free_result($result);
	mysqli_close($connect);
}


// время кликов

function active($connect,$hour) {

	$result = mysqli_query($connect, "SELECT id,count FROM activities WHERE hour=$hour");
	
	while($row = mysqli_fetch_array($result)){
		$id = $row['id'];
		$count = intval($row['count']) + 1;
	}
	
	if ($id !== null){
		mysqli_query($connect, "UPDATE activities SET count=$count WHERE id=$id");
	} else{
		mysqli_query($connect, "INSERT INTO activities (hour,count) VALUES ($hour,1)");
	}

	mysqli_free_result($result);
	mysqli_close($connect);
}


//получение времени кликов

function getCount($connect){
	$count = 0;

	$result = mysqli_query($connect, "SELECT count FROM activities");

	while($row = mysqli_fetch_array($result)){
		$count += intval($row['count']);
	}
	return $count;

	mysqli_free_result($result);
	mysqli_close($connect);
}

function get($connect){
	$count = getCount($connect);
	
	$result = mysqli_query($connect, "SELECT hour as label,count as value FROM activities");
		
	while($row = mysqli_fetch_object($result)){
		$arr = (array) $row;
		$perc = round($arr['value']/$count*100, 1);
		$row->value = $perc;
		$get['data'][] = $row;
		sort($get['data']);
	}

	$get['data'] = json_encode($get['data']);
	return $get;	

	mysqli_free_result($result);
	mysqli_close($connect);
}

?>
