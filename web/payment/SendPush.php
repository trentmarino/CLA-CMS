<?php
/**
 * Created by PhpStorm.
 * User: trentmarino
 * Date: 4/09/2016
 * Time: 1:43 PM
 */

include('../httpful.phar');
$deviceID =$_POST['onesignalid'];
$checkInDate = $_POST['checkin'];
$data = '
{
  "app_id": "fd6c0c59-a053-4d00-96ee-774304545d17",
   "delayed_option":"timezone",
   "send_after":"2016-09-11 18:10:00 GMT-1000",
   "delivery_time_of_day": "9:00 AM",
  "include_player_ids": ["'.$deviceID.'"],
  "contents": {"en": 
  "TestMessage 
  '.$checkInDate.'
  "}
}
';

$response = \Httpful\Request::post('https://onesignal.com/api/v1/notifications')
    ->sendsJson()
    ->addHeader('Authorization', 'Basic NGExNDY0NzMtYjQ4Yy00YTQ2LWFlMTktMTE2MDEwNGRjZDJi')
//    ->addHeader('Authorization', 'Basic ZWE3YTI2ZDctZWU5YS00ZDNhLWFiZjAtODE5ODJjZjcwMmQ1')
    ->body($data)// attach a body/payload...
    ->send();

echo $response . $checkInDate . $data;

//"send_after": "'.$checkInDate.'",
