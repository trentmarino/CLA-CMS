<?php
include "envronment_test.php";
$productID = 1;
$sql = " SELECT * FROM `page_content` WHERE idproduct =".$productID ;

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
    print(json_encode($response));
}
$conn->close();