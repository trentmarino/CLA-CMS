<?php
include "envronment_test.php";
$productID = $_GET['name'];
$sql = " SELECT * FROM `page_content` WHERE idproduct =".$productID;

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $response["page"] = array();
    while ($row = $result->fetch_assoc()) {
        $page = array();
        $page["idcontent"] = $row["idcontent"];
        $page["idproduct"] = $row["idproduct"];
        $page["Info_type"] = $row["Info_type"];
        $page["content"] = $row["content"];
        $page["content_order"] = $row["content_order"];
        array_push($response["page"], $page);
    }
//    echo json_encode($response);
    print(json_encode($response));
}
$conn->close();