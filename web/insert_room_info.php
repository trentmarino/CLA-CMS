<?php
include "db_connect.php";

$productsJSON = $_POST['page'];
$productsArr = json_decode($productsJSON);
$result_set = $conn->prepare("INSERT INTO page_content (idproduct, info_type, content, content_order)
    VALUES (:idproduct, :info_type, :content, :content_order)");

$valuesArr = array();
foreach($productsArr  as $product){
    $result_set->execute(array(
        ':idproduct' => $product->productid,
        ':info_type' => $product->type,
        ':content' => $product->content,
        ':content_order' => $product->content_order
    ));

}
$conn = null;;






?>