<?php
//
//$server = "localhost";
//$username = "test1";
//$password = "test";
//$db = "claDB";
//
//$conn = new mysqli($server, $username, $password, $db);

$servername = "localhost";
$username = "root";
$password = "password";

try {
    $conn = new PDO("mysql:host=$servername;dbname=data", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
{
    echo "Connection failed: " . $e->getMessage();
}




?>
