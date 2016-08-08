<?php
if(file_exists("db_connect_production.php")){
    include "db_connect_production.php";
}else{
    include 'db_connect.php';

}