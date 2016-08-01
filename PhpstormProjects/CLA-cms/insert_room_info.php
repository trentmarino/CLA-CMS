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
//    echo ""
//    $type = $product->type;
//    $idProduct =$product->productid;
//    $content = $product->content;
//    $contentOrder = $product->content_order;
//    $valuesArr[] = "('$idProduct', '$type', '$content','$contentOrder')";
    
}
$conn = null;;

//$sql .= implode(',', $valuesArr);
//
//if ($conn->query($sql) === TRUE) {
//    echo "New record created successfully";
//} else {
//    echo "Error: " . $sql . "<br>" . $conn->error;
//}


//
//$placeholders = array_fill(0, count($valuesArr), '?');
//
//$keys = $values = array();
//foreach($valuesArr as $k => $v){
//    $keys[] = $k;
//    $values[] = !empty($v) ? $v : null;
//}
//
//// assuming the PDO instance is $pdo
//$query = 'INSERT INTO `'.DB_TABLE_PAGES.'` '.
//    '('.implode(',', $keys).') VALUES '.
//    '('.implode(',', $placeholders).')';
//$stmt = $pdo->prepare($query);
//
//$stmt->execute($values);





//$result_set = $conn->prepare("INSERT INTO page_content (idproduct, info_type, content, content_order)
//    VALUES (:idproduct, :info_type, :content, :content_order)");
//
//foreach($productsArr  as $product) {
//    $result_set->execute(array(
//        ':idproduct' => $product->productid,
//        ':info_type' => $product->type,
//        ':content' => $product->content,
//        ':content_order' => $product->content_order
//    ));
//}






?>