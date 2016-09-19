<?php
/**
 * Created by PhpStorm.
 * User: Nick
 * Date: 19-Sep-16
 * Time: 4:44 PM
 */
include "envronment_test.php";
$tours = $_POST['json'];
$toursWithSlashes = $tours;
$query  = 'UPDATE `tours` SET `tourpackages`='.$toursWithSlashes.' WHERE id=1';
echo $query;
if ($conn->query($query) === TRUE){
    echo 'New record created successfully';
}else{
    echo "Error: ". $query . "<br>" . $conn->error;
}