<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<?php
require_once('stripe-php-master/init.php');
require_once('PHPMailer/PHPMailerAutoload.php');
require 'emailConfig.php';
require "db_connect_production.php";


\Stripe\Stripe::setApiKey("sk_test_zS3QfUb5yKlTT0WQmWlxdnd3");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
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
    $lateCheckin = $_POST['lateCheckIn'];


    $customer = \Stripe\Customer::create(array(
        'description' => $name . " of " . $email,
        'source' => $creditcardNumber
    ));


    $sql = "INSERT INTO customers(name, email,phone,address,
        location,checkin,checkout,roomtype,numberOfGuests,pricePaid,
        creditcardNumber, lateCheckIn, stripeID)
        VALUES ('$name','$email','$phone', '$address','$location','$checkin','$checkout',
        '$roomtype','$numberOfGuests','$pricePaid','$creditcardNumber', '$lateCheckin','$customer->id') ";



    ?>

    <?php
    echo $sql;
    if ($conn->query($sql)) {
        echo $sql;
        echo "Record updated successfully";

        customerEmail($name, $email, $location, $checkin, $checkout,
            $roomtype, $pricePaid, $numberOfGuests, $conn->insert_id);

        businessEmail($email, $name, $phone, $address, $location,
            $checkin, $checkout, $roomtype, $numberOfGuests,
            $pricePaid, $creditcardNumber, $lateCheckin, $customer->id, $conn->insert_id);


    } else {
        echo "Error updating record: " . $conn->error;
    }



    $conn->close();


}


function customerEmail($name, $email, $location, $checkin, $checkout, $roomtype,
                       $pricePaid, $numberOfGuests, $bookingNumber)
{
    $message = '
<div style="margin-left:17.5%;" class="confirmationEmail">
<img src="http://cla-cms.me/cla_php_scripts/imgs/CLA_banner.PNG">
<h2>Welcome ' . $name . ',</h2>
<p>
Thank you for booking with Cairns Luxury Apartments. Your booking of <b>' . $roomtype . '</b> at <b>' . $location . '</b> will be confirmed shortly.
Your Check-In time is <b>' . $checkin . '</b> and your Check-Out time is <b>' . $checkout . '</b>
</p>
<h3>Deposit Price:  <b>' . $pricePaid . '</b></h3>
<h3>Full Price:  <b>' . ($pricePaid * 10) . '</b></h3>
<h3>Booking Number:  <b>'.$bookingNumber. '</b>
<h3>Number of Guests:  <b>'.$numberOfGuests. '</b>
<p>
Please enjoy your stay.
Kind Regards, The Cairns Luxury Apartments Team.
</p>
<img src="http://cla-cms.me/cla_php_scripts/imgs/CLA_logo.png">
</div>';

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

    $mail->Subject = 'Confirmation of booking';
    $mail->Body = $message;


    if (!$mail->send()) {
        echo $message;
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent';
    }


}

function businessEmail($email, $name, $phone, $address, $location,
                       $checkin, $checkout, $roomtype, $numberOfGuests,
                       $pricePaid, $creditcardNumber, $lateCheckin, $customer, $bookingNumber){

    $message = '
<div style="margin-left:17.5%;" class="confirmationEmail">
<img src="http://cla-cms.me/cla_php_scripts/imgs/CLA_banner.PNG">
<h2>A new customer has booked from the CLA mobile app:</h2>
<p>
Name: <b>' . $name . '</b>
</p>
<p>
Email:
</p>
<p>
Phone:
</p>
<p>
Address:
</p>
<p>
Check In: <b>' . $checkin . '</b>
</p>
<p>
Check Out: <b>' . $checkout . '</b>
</p>
<p>
Room Type: <b>' . $roomtype . '</b>
</p>
<p>
Location: <b>' . $location . '</b>
</p>
<p>
Number of Guests: <b>'.$numberOfGuests. '</b>
</p>
<p>
Customer ID:
</p>
<p>
Booking Number: <b>'.$bookingNumber. '</b>
</p>

<img src="http://cla-cms.me/cla_php_scripts/imgs/CLA_logo.png">
</div>';

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

    $mail->Subject = 'Confirmation of booking';
    $mail->Body = $message;


    if (!$mail->send()) {
        echo $message;
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent';
    }
}



