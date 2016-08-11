/**
 * Created by trentmarino on 11/08/2016.
 */

    var container = document.getElementById("blocks");
    var addBlock = document.getElementById("addBlock");
    var removeBlock = document.getElementById("removeBlock");
    var loader = document.getElementById("loadPage");
    var commit = document.getElementById("commit");
    var preview = document.getElementById("preview");
    var page = document.getElementById("description");
    var count = 0;
    var pageLoaded = false;
    var contentType;
    var product;
    var ArrayInformation = [];
    var colour = "red";
    var hasBeenChanged;
    var currentOrder;
    var currentArray = [];
    var expandState = 0;
    var blockID;

    var items = ["Heading", "Sub-Heading", "Paragraph", "Image", "Tours", "Rates", "Footer"];


addBlock.onclick = function () {
    createPages.newBlock();
    ArrayInformation.push("");
};


function loadPage(product) {
    $.getJSON("existing_content.php", {name: product}, function (result) {
        $.each(result, function (index, field) {
            console.log(field);
            if(field !== null) {
                updatePages.UpdateBlock(field,index);
            }
        });
    });
}


loader.onclick = function () {
    if(product !== getProductID()){
        console.log(product);
        $('.itemBlock').remove();
        ArrayInformation = [];
        pageLoaded = false;
        product = getProductID();
    }
    product = getProductID();
    console.log(product);

    page.style.visibility = "visible";
    if (pageLoaded === false){
        pageLoaded = true;
        loadPage(getProductID());
    }
};


commit.onclick = function () {
    var productsJSON = JSON.stringify(ArrayInformation);
    console.log(blockID);
    console.log(productsJSON);
    // $.ajax({
    //     url: 'insert_room_info.php',
    //     type: 'post',
    //     data: {"page": productsJSON},
    //     success: function (data) {
    //         console.log("Success");
    //         $("#status").html(data).css("visibility", "visible");
    //         $("#status-Block").css("visibility", "visible");
    //     }
    //
    // });

        $.ajax({
            url: 'update_room_content.php',
            type: 'post',
            data: {"page": productsJSON},
            success: function (data) {
                console.log("Success");
                $("#status").html(data).css("visibility", "visible");
                $("#status-Block").css("visibility", "visible");
            }

        });

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
    var maxNo = Math.max(maxArray);
    ArrayInformation.pop();
    console.log("max numvber" + maxNo);
    maxArray.pop();
    currentArray.pop();
    console.log(maxArray);

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