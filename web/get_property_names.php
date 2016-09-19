<?php

include "envronment_test.php";

if($_SERVER["REQUEST_METHOD"]=="POST") {
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
}

