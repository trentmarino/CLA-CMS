/**
 * Created by trentmarino on 15/08/2016.
 */

(function () {
    var selectedProperty;
    var propertyID;
    var populated = false;
    var count  = 0;
    var productID;
    var currentLocation;
    var loader = document.getElementById('loadPage');
    var form = document.getElementById("update");
    var updateButton = document.getElementById("update_room_info");
    var self =  this;
    var pushID = undefined;
    var roomLocation = undefined;
    var roomType = undefined;
    var roomPrice = undefined;
    var email = undefined;
    var name = undefined;
    var bookingID = undefined;

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
                console.log(selectedProperty);
                    otherDropDown();

            });

            console.log($('.property').val());
            if($('.property').val() == 1){
                $('.room').css('visibility', "visible");
                $('#roomLabel').css('visibility', "visible");
                selectedProperty = $('.property').val();
                console.log(selectedProperty);
                otherDropDown();
            }

            $('.property').on('change', function () {
                $('.room').css('visibility', "visible");
                $('#roomLabel').css('visibility', "visible");
                selectedProperty = $('.property').val();
                console.log(selectedProperty);
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
                        if(populated === true){
                            //loader.style.visibility = "visible";
                        }
                        console.log("this is the product id " +productID);
                        console.log("this is the product id " +value.product_name);
                        roomLocation = value.property_name;
                        roomType = value.product_name;
                        roomPrice = value.deposit_amount_min;



                    }

                });

            }

        });
    }
    
    

    $('.addOptions').on('click',function () {
        var optionObject = {
            location: roomLocation,
            roomType: roomType,
            price: roomPrice,
            checkIn: $('#datepickerIn').datepicker({ dateFormat: 'dd-mm-yy' }).val(),
            checkOut: $('#datepickerOut').datepicker({ dateFormat: 'dd-mm-yy' }).val()
        };
        console.log(optionObject);
        $('.roomOptions').append(optionObject.location + " " + optionObject.roomType + " " + optionObject.checkIn + " " + optionObject.checkOut +" $"+ optionObject.price+"\n");
    });

    $.ajax({
        url: '../get_customer_info.php',
        type: 'get',
        dataType: 'json',
        success: function (json) {
            $.each(json, function (key, value) {
                console.log(key, value.name);
                pushID  = value.onesignalid;
                $('.customer').append('<tr class="elements" data="' + key + '">' +
                    '<td>' + key + '</td>' +
                    '<td>' + value.id_cust + '</td>' +
                    '<td>' + value.name + '</td>' +
                    '<td>' + value.email + '</td>' +
                    '<td>' + value.phone + '</td>' +
                    '<td>' + value.address + '</td>' +
                    '<td>' + value.location + '</td>' +
                    '<td>' + value.roomtype + '</td>' +
                    '<td>' + value.checkin + '</td>' +
                    '<td>' + value.checkout + '</td>' +
                    '<td>' + value.lateCheckIn + '</td>' +
                    '<td>' + value.pricepaid + '</td>' +
                    '<td>' +
                    '<div class="checkbox">' +
                    '<label><input type="checkbox" value="' + value.id_cust + '"></label>' +
                    '</div>' +
                    '</td>' +
                    '<td>' +
                    '<button id="'+key+'" class="btn" value="' + value.id_cust + '">' +
                    'not' +
                    '</button>' +
                    '</td>' +
                    '</tr>')

                ;

                $('#'+key).click(function() {
                    var inst = $('[data-remodal-id=modal]').remodal();
                    inst.open();
                    console.log("not available");
                    console.log(value.onesignalid);
                    email = value.email;
                    name = value.name;
                    bookingID = value.id_cust;
                    $.ajax({
                        url: 'SendPush.php',
                        type: 'post',
                        data: {"onesignalid": value.onesignalid, "checkin": value.checkin },
                        success : function (data) {
                            console.log(data);
                        }
                    })
                });


           


            });

        }
    })
    
    

    $( function() {
        $( "#datepickerIn" ).datepicker({
            dateFormat: "dd-mm-yy"
        });
    } );
    $( function() {
        $( "#datepickerOut" ).datepicker({
            dateFormat: "dd-mm-yy"
        });
    } );
    $('.remodal-confirm').click (function(){
        var x = document.getElementById("roomOptions").value;
        console.log(x);
        $.ajax({
            url: "notAvailable.php",
            type: "post",
            data: {'notAvailableEmail': x, 'email': email, 'name': name, 'bookingID': bookingID},
            success : function(response) {
                console.log(response);
            }
        })
    })
})();