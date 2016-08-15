<?php
/**
 * Created by PhpStorm.
 * User: Nick
 * Date: 15-Aug-16
 * Time: 12:59 PM
 */
include "envronment_test.php";

$response = array();
$sql = " SELECT * FROM `customers` WHERE `id_cust` = '20'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $response["YourBooking"] = array();
    while ($row = $result->fetch_assoc()) {
        $booking = array();
        $booking["email"] = $row["email"];
        $booking["name"] = $row["name"];
        $booking["location"] = $row["location"];
        $booking["checkin"] = $row["checkin"];
        $booking["checkout"] = $row["checkout"];
        $booking["roomtype"] = $row["roomtype"];
        array_push($response["YourBooking"], $booking);
    }
    print(json_encode($response));

}


//print ("Welcome " . $response(0) . ",");
//echo print_r($response, true);
?>