/**
 * Created by trentmarino on 11/08/2016.
 */

var container = document.getElementById("blocks");
var addBlock = document.getElementById("addBlock");
var loader = document.getElementById("loadPage");
var commit = document.getElementById("commit");
var preview = document.getElementById("preview");
var page = document.getElementById("description");
var count = 0;
var pageLoaded = false;
var contentType;
var product;
var colour = "red";
var hasBeenChanged;

// content arrays
var ArrayInformation = [];
var currentArray = [];
var contentIDArray = [];


var expandState = 0;
var needUpdating = false;

var items = ["Heading", "Sub-Heading", "Paragraph", "Image", "Tours"];


addBlock.onclick = function () {
    createPages.newBlock();
    ArrayInformation.push("");
};


function loadPage(product) {
    $.getJSON("existing_content.php", {name: product}, function (result) {
        $.each(result, function (index, field) {
            if(field !== null) {
                needUpdating = true;
                contentIDArray.push(field);
                updatePages.UpdateBlock(field);
            }else{
                needUpdating = false;
            }
        });
    });
}


loader.onclick = function () {
    ArrayInformation = [];
    currentArray = [];
    count = 0;
    if(product !== getProductID()){
        $('.itemBlock').remove();
        ArrayInformation = [];
        pageLoaded = false;
    }
    product = getProductID();

    page.style.visibility = "visible";
    if (pageLoaded === false){
        pageLoaded = true;
        loadPage(getProductID());
    }
};


commit.onclick = function () {
    var productsJSON = JSON.stringify(ArrayInformation);
    console.log(needUpdating);
    if(needUpdating === false) {
        $.ajax({
            url: 'insert_room_info.php',
            type: 'post',
            data: {"page": productsJSON},
            success: function (data) {
                console.log("Success");
                setInterval(function () {
                    $("#status").html(data).css("visibility", "visible");
                    $("#status-Block").css("visibility", "visible");

                },3000);
                $("#status").html(data).css("visibility", "hidden");
                $("#status-Block").css("visibility", "hidden");
            }

        });
    }else{
        $.ajax({
            url: 'update_room_content.php',
            type: 'post',
            data: {"page": productsJSON},
            success: function (data) {
                console.log("Success");
                $("#status").html(data).css("visibility", "visible");
                $("#status-Block").css("visibility", "visible");
                setInterval(function () {
                    $("#status").html(data).css("visibility", "hidden");
                    $("#status-Block").css("visibility", "hidden");
                },3000);

            }

        });
    }

    $("#result").val(productsJSON);

};


preview.onclick = function () {
    previewPage(ArrayInformation);
};


$('#removeBlock').click(function () {
    $('.itemBlock').last().remove();
    count--;
    var maxArray = [];
    for (var i = 0; i < ArrayInformation.length; i++) {
        maxArray.push(ArrayInformation[i].content_order);
        console.log(ArrayInformation[i].content_order)
    }
    ArrayInformation.pop();
    maxArray.pop();
    currentArray.pop();

});


// $("#blocks").sortable({
//     items: ".itemBlock",
//     placeholder: 'placeholder',
//     stop: function (event, ui) {
//         var prevElement = ui.item.prev().index();
//         var nextElement = ui.item.next().index();
//         var current = ui.item.index();
//         console.log("current index" + current);
//         console.log(prevElement);
//         currentArray[current] = $(ui.item).attr('data');
//         if (prevElement < 0) {
//             currentArray[0] = 0;
//         }
//         currentArray[prevElement] = $(ui.item).prev().attr('data');
//         currentArray[nextElement] = $(ui.item).next().attr('data');
//         console.log(currentArray.toString());
//         hasBeenChanged = true;
//         colour = "green"
//     }
// });


function jsonBuilder(type, product, data, order) {
    var pageOject = {
        type: type,
        productid: product,
        content: data,
        content_order: order
    };
    return pageOject;
}


function updateBuilder(type, product, data, order, contentID) {
    var pageOject = {
        type: type,
        productid: product,
        content: data,
        content_order: order,
        content_id: contentID
    };
    return pageOject;
}