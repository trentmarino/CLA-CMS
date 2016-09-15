<?php
/**
 * Created by PhpStorm.
 * User: trentmarino
 * Date: 11/08/2016
 * Time: 4:19 PM
 */

include 'envronment_test.php';
$productsJSON = $_POST['page'];
$productsArr = json_decode($productsJSON);
$valuesArr = array();
foreach($productsArr  as $product){
    $type = $product->type;
    $idProduct =$product->productid;
    $content = $product->content;
    $contentOrder = $product->content_order;
    $contentId = $product->content_id;
    $valuesArr = array("idproduct='$idProduct'", "info_type='$type'",
        "content='$content'","content_order='$contentOrder'");
}

$query = "UPDATE `page_content` SET ";
$query = $query . implode(",", $valuesArr) . "WHERE idcontent=$contentId";

echo $query;


if ($conn->query($query) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
