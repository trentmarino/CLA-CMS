<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<?php
require_once('../stripe-php-master/init.php');
require_once('../PHPMailer/PHPMailerAutoload.php');
require '../emailConfig.php';


$name = $_POST['name'];
$email = $_POST['email'];
$bookingID = $_POST['bookingID'];
$bob = $_POST['notAvailableEmail'];
echo $bob."jdnfjnf";





    $message = '
<div style="margin-left:17.5%;" class="confirmationEmail">
<img src="http://cla-cms.me/cla_php_scripts/imgs/CLA_banner.PNG">
<p>
Hello ' . $name . '
Unfortunately the room you selected was unavailable, although, the following rooms are:
</p>
<p>
' . $bob . '
</p>
<p>
Please enjoy your stay.
Kind Regards, The Cairns Luxury Apartments Team.
</p>
<img src="http://cla-cms.me/cla_php_scripts/imgs/CLA_logo.png">
</div>';
echo  $message;
    $mail = new PHPMailer;

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = getenv('HOST');  // Specify main and backup SMTP servers
    $mail->SMTPAuth = getenv('SMTPAuth');                               // Enable SMTP authentication
    $mail->Username = getenv('Username');                 // SMTP username
    $mail->Password = getenv('password');                           // SMTP password
    $mail->SMTPSecure = getenv('SMTPSECURE');                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = getenv('PORT');

    $mail->setFrom('booking@cla-cms.me', 'Confirm');
    $mail->addAddress($email, $name);

    $mail->isHTML(true);

    $mail->Subject = 'Booking #' . $bookingID . 'Unavailable';
    $mail->Body = $message;


    if (!$mail->send()) {
        echo $message;
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent';
    }


