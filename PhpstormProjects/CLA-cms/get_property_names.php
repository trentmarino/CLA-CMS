<?php
//include 'db_connect.php';
//
$server = "localhost";
$username = "test1";
$password = "test";
$db = "claDB";

$conn = new mysqli($server, $username, $password, $db);
//$url = parse_url(getenv("mysql://b9b98665377990:b375b17e@us-cdbr-iron-east-03.cleardb.net/heroku_0b5ab614720338a?reconnect=true"));
//
//$conn = new mysqli($server, $username, $password, $db);
$response = array();
$sql = "SELECT * FROM property WHERE deleted = 0";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $response["product"] = array();
    while ($row = $result->fetch_assoc()) {
        $product = array();
        $product["idproperty"] = $row["idproperty"];
        $product["property_name"] = $row["property_name"];
        array_push($response["product"], $product);
    }
    print(json_encode($response));

}

?>
