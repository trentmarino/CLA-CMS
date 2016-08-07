<?php

include "db_connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $idproduct = $_POST["productid"];
    $product_name = $_POST["roomName"];
    $deposit_amount_min = $_POST["min-rate"];
    $deposit_amount_max = $_POST["max-rate"];
    $max_pax = $_POST["noGuests"];
}else{
    echo "zxdfghjcxfcvbnm";
}

$sql = "UPDATE `product` SET `max_pax`='.$max_pax.', `product_name`='".$product_name."' ,
deposit_amount_min='".$deposit_amount_min."',deposit_amount_max ='".$deposit_amount_max."'
WHERE `idproduct`= $idproduct";



if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
?>