/**
 * Created by Nick on 11-Sep-16.
 */
/**
 * Created by Nick on 06-Sep-16.
 */

var selectedProperty;
var propertyID;
var populated = false;
var count  = 0;
var productID;
var currentLocation;
var loader = document.getElementById('loadPage');
var form = document.getElementById("update");
var updateButton = document.getElementById("update_room_info");
$.ajax({
    type: "POST",
    url: '../get_property_names.php',
    dataType: 'json',
    success: function(json) {
        console.log(JSON.stringify(json));
        $.each(json.product,function(key,value)
        {
            $(".property").append($('<option></option>').val(value.idproperty).html(value.property_name));
            currentLocation = value;
        });

        $('.property').ready(function () {
            $('.property').attr('value',currentLocation);
            $('.property').val(currentLocation);
            $('.room').css('visibility', "visible");
            $('#roomLabel').css('visibility', "visible");
            selectedProperty = $(this).val();
            otherDropDown();

        });

        if($('.property').val() == 1){
            $('.room').css('visibility', "visible");
            $('#roomLabel').css('visibility', "visible");
            selectedProperty = $('.property').val();
            otherDropDown();
        }

        $('.property').on('change', function () {
            $('.room').css('visibility', "visible");
            $('#roomLabel').css('visibility', "visible");
            selectedProperty = $('.property').val();
            if (populated === true) {
                $('.room').find('option').remove();
                otherDropDown();

            } else {
                otherDropDown();
            }
        });
    }
});

function otherDropDown() {
    $.ajax({
        type: "POST",
        url: '../get_property_info_based_off_selected.php',
        dataType: 'json',
        success: function (json) {
            $.each(json.product, function (key, value) {
                console.log("hotel type" + selectedProperty);
                console.log([key]);

                if ($('.property').val() === value.idproperty && value.is_thumb == 1) {
                    $(".room").append($('<option></option>').val(value.idproduct).html(value.product_name));
                    populated = true;
                    productID = value.idproduct;
                    podructName = value.product_name;
                    if(populated === true){
                        //loader.style.visibility = "visible";
                    }
                    console.log("this is the product id " +productID);
                    console.log("this is the product id " + podructName);


                }

            });




        }

    });
}


function getProductID(){
    return productID;
}

