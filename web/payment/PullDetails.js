/**
 * Created by trentmarino on 15/08/2016.
 */
(function () {

    $.ajax({
        url: '../get_customer_info.php',
        type: 'get',
        dataType: 'json',
        success: function (json) {
            $.each(json, function (key, value) {
                console.log(key, value.name);
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
                    '</tr>');
            });

        }
    });


})();