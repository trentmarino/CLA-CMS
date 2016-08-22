<?php
/**
 * Created by PhpStorm.
 * User: trentmarino
 * Date: 22/08/2016
 * Time: 1:47 PM
 */

$HOST = 'email-smtp.us-west-2.amazonaws.com';
$SMTPAuth = true;
$Username = 'AKIAIOXJJCS5HS6FX3EA';
$password = 'AttkpSmJHBlCmJC481PhbmTwOS+O0VtomMlE1lEOOuVA';
$SMTPSecure = 'tls';
$port = 587;

putenv("HOST=$HOST");
putenv("SMTPAuth=$SMTPAuth");
putenv("Username=$Username");
putenv("password=$password");
putenv("SMTPSECURE=$SMTPSecure");
putenv("PORT=$port");