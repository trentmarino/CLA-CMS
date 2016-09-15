<?php
include "db_connect_production.php";

//$productsJSON = $_POST['page'];
//$productsArr = json_decode($productsJSON);
//$result_set = $conn->prepare("INSERT INTO page_content (idproduct, info_type, content, content_order)
//    VALUES (:idproduct, :info_type, :content, :content_order)");
//
//$valuesArr = array();
//foreach($productsArr  as $product){
//    $result_set->execute(array(
//        ':idproduct' => $product->productid,
//        ':info_type' => $product->type,
//        ':content' => $product->content,
//        ':content_order' => $product->content_order
//    ));
//
//}
//$conn = null;;


$productsJSON = $_POST['page'];

$productsArr = json_decode($productsJSON);
echo $productsArr;


$sql = "INSERT INTO page_content (idproduct, info_type, content, content_order)
    VALUES";


$valuesArr = array();
foreach($productsArr  as $product){
    $type = $product->type;
    $idProduct =$product->productid;
    $content = $product->content;
    $contentOrder = $product->content_order;
    $valuesArr[] = "('$idProduct', '$type', '$content','$contentOrder')";
}
$sql .= implode(',', $valuesArr);
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}



?>