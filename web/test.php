<?php
/**
 * Created by PhpStorm.
 * User: trentmarino
 * Date: 18/08/2016
 * Time: 9:27 PM
 */
include 'environment_test.php';

?>
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
<script>
    $.post("get_customer_info.php",
        {
            cust_email: "<?php echo $email;?>"
        },
    function(data){
        console.log("fdadsadfg" + data);
        $.each(data, function (key, value) {
            console.log(value);
            console.log(value.name);
            console.log(value.email);
            $.post('email_builder.php', {
                name: value.name,
                email: value.email,
                location: value.location,
                roomtype: value.roomtype,
                checkin: value.checkin,
                checkout: value.checkout
            });
        });
    },"json");
    


</script>