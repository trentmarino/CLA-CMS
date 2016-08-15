/**
 * Created by trentmarino on 15/08/2016.
 */
(function () {

    console.log("bob");
    $.ajax({
        url: '../get_customer_info.php',
        type: 'get',
        dataType: 'json',
        success: function (json) {
            $.each(json.YourBooking, function (key, value) {


                console.log(key, value.name);

            });

        }
    });
    
    
})();