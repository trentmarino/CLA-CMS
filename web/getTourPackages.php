<?php
/**
 * Created by PhpStorm.
 * User: Nick
 * Date: 19-Sep-16
 * Time: 4:44 PM
 */
include "envronment_test.php";

$response = array();
$sql = 'SELECT * FROM `tours`';
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $response = array();
    while ($row = $result->fetch_assoc()) {
        $tours = array();
        $tours['tourpackages'] = $row["tourpackages"];
        array_push($response, $tours);
    }
    print(json_encode($response));

}

$conn->close();
