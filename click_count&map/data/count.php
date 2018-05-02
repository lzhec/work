<?php 

require_once 'config.php';
require_once 'functions.php';

$ref = $_GET['refname'];

connect(HOST,USER,PASS,DATABASE);
cnt($connect,$ref);

?>