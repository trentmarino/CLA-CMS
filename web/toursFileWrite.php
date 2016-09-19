<?php
/**
 * Created by PhpStorm.
 * User: Nick
 * Date: 19-Sep-16
 * Time: 3:06 PM
 */
   $json = $_POST['json'];
    echo $json;
   /* sanity check */
file_put_contents('PageCreator/tours.json', json_encode($json));

if (json_decode($json) != null)
   {
//       $file = fopen('PageCreator/tours.json','w+');
//       fwrite($file, json_encode($json));
//       fclose($file);
   }
   else
   {
       echo "yjghjgjhgjhg";
       // user has posted invalid JSON, handle the error
   }
?>
