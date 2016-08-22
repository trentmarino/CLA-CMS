<?php
require 'PHPMailer/PHPMailerAutoload.php';
/**
 * Created by PhpStorm.
 * User: Nick
 * Date: 15-Aug-16
 * Time: 1:51 PM
 */
?>
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<script>
//    var name;
    //var location;
//    var checkin;
//    var checkout;
//    var roomtype;
    $.ajax({
        url: 'get_customer_info.php',
        type: 'get',
        dataType: 'json',
        success: function (json) {
            $.each(json.YourBooking, function (key, value) {
                $('#name').append(value.name);
                $('#location').append(value.location);
                $('#checkin').append(value.checkin);
                $('#checkout').append(value.checkout);
                $('#roomtype').append(value.roomtype);
                $('#email').append(value.email);

                console.log(key, value.name);
                
    });

    }
    })

</script>
<?php


$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'email-smtp.us-west-2.amazonaws.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'AKIAIOXJJCS5HS6FX3EA';                 // SMTP username
$mail->Password = 'AttkpSmJHBlCmJC481PhbmTwOS+O0VtomMlE1lEOOuVA';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('nickgrego3@gmail.com', 'Mailer');
$mail->addAddress('trentmarino@hotmail.com', 'Joe sick juanz User');     // Add a recipient

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Here is the subject';
$mail->Body    = '<div style="margin-left:17.5%;" class="confirmationEmail">
    <img src="CLA_banner.PNG">
<h2>Welcome <span id="name"></span>,</h2>
<br>
Thank you for booking with Cairns Luxury Apartments. Your booking of <b><span id="roomtype"></span></b> at <b><span id="location"></span></b> will be confirmed shortly.
    <br>
Your Check-In time is <b><span id="checkin"></span></b> and your Check-Out time is <b><span id="checkout"></span></b>
<br>
    <br>
Please enjoy your stay.
<br>
Kind Regards, The Cairns Luxury Apartments Team.
<br>
<img src="CLA_logo.png">
</div>';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

/*

$to = '<span id ="email"></span>';
echo $to;

$message = '
<div style="margin-left:17.5%;" class="confirmationEmail">
    <img src="CLA_banner.PNG">
<h2>Welcome <span id="name"></span>,</h2>
<br>
Thank you for booking with Cairns Luxury Apartments. Your booking of <b><span id="roomtype"></span></b> at <b><span id="location"></span></b> will be confirmed shortly.
    <br>
Your Check-In time is <b><span id="checkin"></span></b> and your Check-Out time is <b><span id="checkout"></span></b>
<br>
    <br>
Please enjoy your stay.
<br>
Kind Regards, The Cairns Luxury Apartments Team.
<br>
<img src="CLA_logo.png">
</div>';
echo $message;
*/
?>