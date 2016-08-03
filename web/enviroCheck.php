<?php
/**
 * Created by PhpStorm.
 * User: Nick
 * Date: 03-Aug-16
 * Time: 6:25 PM
 */


if (file_exists('db_connect_dev.php')) {
    include 'db_connect_dev.php';
} else {
    include 'db_connect.php';
    ?>
    <script>console.log('sick juanz');</script>
    <?php
}
?>