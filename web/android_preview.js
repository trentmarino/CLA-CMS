/**
 * Created by trentmarino on 7/05/2016.
 */

function previewPage(jsonObject) {
    var displayorder = [];
    var currentProduct;
    var displayPage = document.getElementById("page");
    while (displayPage.firstChild) {
        displayPage.removeChild(displayPage.firstChild);
    }
    var loadedContent = [];
    for (var i = 0; i < jsonObject.length; i++) {
        displayorder.push(jsonObject[i].content_order);
        currentProduct = jsonObject[i].productid;
    }

    console.log(displayorder);
    for (var order = 0; order < displayorder.length; order++) {
        console.log("current order is: "+displayorder[order]);

        if (jsonObject[order].type === 1) {
               console.log(jsonObject[order].type +" "+ jsonObject[order].content +" "+ jsonObject[order].content_order);
               isHeading(jsonObject[order].content,jsonObject[order].content_order);
            }
            else if (jsonObject[order].type === 2) {
                isSubHeading(jsonObject[order].content,jsonObject[order].content_order);
            }
            else if (jsonObject[order].type === 3) {
                isParagraph(jsonObject[order].content,jsonObject[order].content_order);
            }
        else if (jsonObject[order].type === 4) {
            isImage(jsonObject[order].content,jsonObject[order].content_order);
        }
    }


    function isHeading(content,order) {

        console.log("heading conent is " + content);
        var heading = document.createElement('h1');
        heading.setAttribute('id', "previewHeading");
        heading.innerHTML = content;
        displayPage.insertBefore(heading, displayPage.children[order]);


    }

    function isSubHeading(content,order) {
        console.log("Sub-heading conent is " + content);
        var subHeading = document.createElement('h3');
        subHeading.setAttribute('id', "previewSub");
        subHeading.innerHTML = content;
        displayPage.insertBefore(subHeading, displayPage.children[order]);


    }

    function isParagraph(content,order) {
        console.log("paragraph conent is " + content);
        var para = document.createElement('p');
        para.setAttribute('id', "previewPara");
        para.innerHTML = content;
        displayPage.insertBefore(para, displayPage.children[order]);

    }
    function isImage(content,order) {
        console.log("Image conent is " + content);
        var imgage = document.createElement('p');
        imgage.setAttribute('id', "previewImg");


        imgage.innerHTML = '<img src="'+ content+'" width="100%" height="100"> </img>';
        displayPage.insertBefore(imgage, displayPage.children[order]);

    }

}