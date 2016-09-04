<?php
/**
 * Created by PhpStorm.
 * User: Nick
 * Date: 15-Aug-16
 * Time: 12:59 PM
 */
include "db_connect_production.php";
$response = array();
$sql = " SELECT * FROM `customers` WHERE confirmed = 0";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $response = array();
    while ($row = $result->fetch_assoc()) {
        $booking = array();
        $booking["id_cust"] = $row["id_cust"];
        $booking["email"] = $row["email"];
        $booking["name"] = $row["name"];
        $booking["location"] = $row["location"];
        $booking["checkin"] = $row["checkin"];
        $booking["phone"] = $row["phone"];
        $booking["address"] = $row["address"];
        $booking["checkout"] = $row["checkout"];
        $booking["roomtype"] = $row["roomtype"];
        $booking["numberofguests"] = $row["numberofguests"];
        $booking["pricepaid"] = $row["pricepaid"];
        $booking["creditcardNumber"] = $row["creditcardNumber"];
        $booking["lateCheckIn"] = $row["lateCheckIn"];
        $booking["stripeID"] = $row["stripeID"];
        $booking["confirmed"] = $row["confirmed"];
        $booking['onesignalid'] = $row["onesignalid"];
        array_push($response, $booking);
    }
    print(json_encode($response));

}

$conn->close();


