<?php

require_once 'config.php';
require_once 'functions.php';

$hour = $_GET['hour'];

connect(HOST,USER,PASS,DATABASE);
active($connect,$hour);

?>