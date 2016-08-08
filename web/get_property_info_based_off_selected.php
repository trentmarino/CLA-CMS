<?php

include 'envronment_test.php';


$response = array();
    $sql = "SELECT product.product_name , property.idproperty,product.idproduct, product.deposit_amount_min, product_images.image_url,
            product_images.is_thumb,product.max_pax, product.deposit_amount_max, property.property_name
            FROM property
            INNER JOIN product
            ON property.idproperty=product.idproperty
            INNER JOIN product_images
            ON product.`idproduct` = `product_images`.`productid`
            WHERE product.deleted = 0 AND product_images.is_thumb = 1" ;


    $result = $conn->query($sql);

if ($result->num_rows > 0) {
             $response["product"] = array();
        while($row = $result->fetch_assoc()) {
             $product = array();
             $product["idproduct"] = $row["idproduct"];
             $product["idproperty"] = $row["idproperty"];
             $product["product_name"] = $row["product_name"];
             $product["deposit_amount_min"] = $row["deposit_amount_min"];
             $product["is_thumb"] = $row["is_thumb"];
             $product["image_url"] = $row["image_url"];
             $product["max_pax"] = $row["max_pax"];
             $product["deposit_amount_max"] = $row["deposit_amount_max"];
             $product["property_name"] = $row["property_name"];


             array_push($response["product"], $product);
            }
 print(json_encode($response));
        }

  $conn->close();

?>
