<?php
//
//$server = "localhost";
//$username = "test1";
//$password = "test";
//$db = "claDB";
//
//$conn = new mysqli($server, $username, $password, $db);

$servername = "localhost";
$username = "test1";
$password = "test";

try {
    $conn = new PDO("mysql:host=$servername;dbname=claDB", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
{
    echo "Connection failed: " . $e->getMessage();
}



$url = parse_url(getenv("CLEARDB_DATABASE_URL"));

$server = $url["host"];
$username = $url["user"];
$password = $url["pass"];
$db = substr($url["path"], 1);

$conn = new mysqli($server, $username, $password, $db);
?>
