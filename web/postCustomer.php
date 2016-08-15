<?php
/**
 * Created by PhpStorm.
 * User: trentmarino
 * Date: 8/08/2016
 * Time: 7:12 PM
 */

echo "yep";

if($_SERVER["REQUEST_METHOD"] == "POST") {
    require "db_connect_production.php";
    echo "yep";

        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];
        $location = $_POST['location'];
        $checkin = $_POST['checkin'];
        $checkout = $_POST['checkout'];
        $roomtype = $_POST['roomtype'];
        $numberOfGuests = $_POST['numberofguests'];
        $pricePaid = $_POST['pricepaid'];
        $creditcardNumber = $_POST['creditcardNumber'];
        $creditcardExpiry = $_POST['creditcardExpiry'];
        $creditcardCode = $_POST['creditcardCode'];
        $lateCheckin = $_POST['lateCheckIn'];

        $sql = "INSERT INTO customers(name, email,phone,address,
        location,checkin,checkout,roomtype,numberOfGuests,pricePaid,
        creditcardNumber,creditcardExpiry,creditcardCode, lateCheckIn)
        VALUES ('$name','$email','$phone', '$address','$location','$checkin','$checkout',
        '$roomtype','$numberOfGuests','$pricePaid','$creditcardNumber','$creditcardExpiry',$creditcardCode, $lateCheckin) ";
        echo $sql;
        if ($conn->query($sql) === TRUE) {
            echo $sql;
            echo "Record updated successfully";
            include "email_builder.php";
        } else {
            echo "Error updating record: " . $conn->error;
        }

        $conn->close();

}


