
    var selectedProperty;
    var propertyID;
    var populated = false;
    var count  = 0;
    var productID;
    var currentLocation;
    var edit = document.getElementById('editval');
    var loader = document.getElementById('loadPage');
    var form = document.getElementById("update");
    var updateButton = document.getElementById("update_room_info");
    $.ajax({
        type: "POST",
        url: 'get_property_names.php',
        dataType: 'json',
        success: function(json) {
            console.log(JSON.stringify(json));
                    $.each(json.product,function(key,value)
                    {
                        $(".property").append($('<option></option>').val(value.idproperty).html(value.property_name));
                        currentLocation = value;
                    });

            // $('.property').ready(function () {
            //     $('.property').attr('value',currentLocation);
            //     $('.property').val(currentLocation);
            //     $('.room').css('visibility', "visible");
            //     $('#roomLabel').css('visibility', "visible");
            //     selectedProperty = $(this).val();
            //     console.log(selectedProperty);
            //         otherDropDown();
            //
            // });

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
            url: 'get_property_info_based_off_selected.php',
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
                            loader.style.visibility = "visible";
                        }
                        console.log("this is the product id " +productID);
                        $("#roomName").val(value.product_name).prop("readonly", true);
                        $("#productid").val(value.idproduct).prop("readonly", true);
                        $("#location").val(value.property_name).prop("readonly", true);
                        $("#min-rate").val(value.deposit_amount_min).prop("readonly", true);
                        $("#max-rate").val(value.deposit_amount_max).prop("readonly", true);
                        $("#noGuests").val(value.max_pax).prop("readonly", true);
                        populateFields(value);


                    }

                });




            }

        });
    }
    function populateFields(value) {
        $('.room').on('change', function () {
            console.log("room type" + $('.room').val());
            if($('.room').val() === value.idproduct) {
                productID = value.idproduct;
                $("#roomName").val(value.product_name).prop("readonly", true);
                $("#productid").val(value.idproduct).prop("readonly", true);
                $("#location").val(value.property_name).prop("readonly", true);
                $("#min-rate").val(value.deposit_amount_min).prop("readonly", true);
                $("#max-rate").val(value.deposit_amount_max).prop("readonly", true);
                $("#noGuests").val(value.max_pax).prop("readonly", true);
            }
        });
    }
    edit.onclick = function(){
        $("#roomName").prop("readonly", false);
        $("#location").prop("readonly", false);
        $("#min-rate").prop("readonly", false);
        $("#max-rate").prop("readonly", false);
        $("#noGuests").prop("readonly", false);
    };
    
    function getProductID(){
        return productID;
    }

    updateButton.onclick = function () {

        // e.preventDefault();
        $(function () {
            $.ajax({
                type: 'post',
                url: 'update_room_info.php',
                data: $('#newInfo').serialize(),
                success: function () {
                    console.log("updated");
                    $("#beenUpdated").css("visibility", "visible");

                }
            });
        });

    };
