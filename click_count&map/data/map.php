<?php

require_once 'config.php';
require_once 'functions.php';

$coordX = $_GET['coordX'];
$coordY = $_GET['coordY'];

connect(HOST,USER,PASS,DATABASE);
toMap($connect,$coordX,$coordY);

?>