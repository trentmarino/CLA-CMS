<?php

//include 'db_connect.php';
//
$server = "localhost";
$username = "test1";
$password = "test";
$db = "claDB";

$conn = new mysqli($server, $username, $password, $db);
$response = array();
$sql = " SELECT * FROM `page_content`";


$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $response["page"] = array();
    while($row = $result->fetch_assoc()) {
        $page = array();
        $page["idcontent"] = $row["idcontent"];
        $page["idproduct"] = $row["idproduct"];
        $page["Info_type"] = $row["Info_type"];
        $page["content"] = $row["content"];
        $page["content_order"] = $row["content_order"];
        
        array_push($response["page"], $page);
    }
    print(json_encode($response));
}

$conn->close();

?>