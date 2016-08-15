<?php
/**
 * Created by PhpStorm.
 * User: trentmarino
 * Date: 15/08/2016
 * Time: 3:42 PM
 */

require_once('stripe-php-master/init.php');



\Stripe\Stripe::setApiKey("sk_test_zS3QfUb5yKlTT0WQmWlxdnd3");


// Create the charge on Stripe's servers - this will charge the user's card
try {
    $charge = \Stripe\Charge::create(array(
        "amount" => 1000, // amount in cents, again
        "currency" => "aud",
        "source" => "tok_18idDQL9x4tHfSCVmpW4t1y3",
        "description" => "Example charge"
    ));
} catch(\Stripe\Error\Card $e) {
    // The card has been declined
}