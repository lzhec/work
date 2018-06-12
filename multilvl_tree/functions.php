<?php


//подключение к базе данных

function connect($host,$user,$pass,$database){
	global $connect; 
	$connect = mysqli_connect($host,$user,$pass,$database);
	
	if(!$connect){
		echo "ОШИБКА СОЕДИНЕНИЯ С БАЗОЙ ДАННЫХ";
		exit;
	}
	if(!mysqli_select_db($connect,$database)){
		echo "ОШИБКА СОЕДИНЕНИЯ С БАЗОЙ ДАННЫХ";
		exit;
	}
}


//вытаскиваем все категории из БД и формируем массив, с которым и будем работать дабы исключить многократное обращение к БД

function get(){
	global $connect;
	$result = mysqli_query($connect, "SELECT * FROM multilvl_tree"); //sql запрос на выборку данных из БД и формируем таблицу
	$array = array();
	$rows = mysqli_num_rows($result); //определяем количество строк
	for ($i = 0; $i < $rows; ++$i){ //проходим по каждой строке
		$row = mysqli_fetch_array($result); //сохраняем строку
		if(empty($array[$row['owner_id']])){
			$array[$row['owner_id']] = array();
		}
		$array[$row['owner_id']][] = $row; //сортируем массив по категориям
	}
	return $array;
}


//функция вывода меню на экран

function display($array, $owner_id = 0){  // id = 0 - выводим главные родителские категории
	if(empty($array[$owner_id])){ 
		return;
	}
	echo "<ul>";
	for($i = 0; $i < count($array[$owner_id]); ++$i){
		echo "<li><a href='?id=".$array[$owner_id][$i]['id'].
		"owner_id=".$owner_id."'>".$array[$owner_id][$i]['name']."</a>";
		display($array, $array[$owner_id][$i]['id']); // выводим дочерние категории, если они есть
		echo "</li>";
	}
	echo "</ul>";	
}
?>

