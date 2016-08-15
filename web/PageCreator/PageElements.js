/**
 * Created by trentmarino on 11/08/2016.
 */

var pageElements = {

    HeadingObject: function (block, index, content,contentid) {

    block.innerHTML += '<h1> Heading </h1>' +
        '<label> Heading: </label>' +
        '<input id="head' + index + '" type="text">' +
        '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field"> ';
    var headText = document.getElementById("head" + index);

    if (content !== null) {
        headText.value = content;
    }
    var setField = document.getElementById("set" + index);
    setField.onclick = function () {
        colour = "green";
        setField.style.backgroundColor = colour;
        console.log("product id is " + product);
        console.log(currentArray[index]);
        ArrayInformation[index] = updateBuilder(1, product, headText.value, currentArray[index],contentid);
        blockID = contentId;


    };

    headText.onkeyup = function () {
        console.log("product id is " + product);
        setField.style.backgroundColor = "green";
        ArrayInformation[index] = updateBuilder(1, product, headText.value, currentArray[index],contentid);
        blockID = contentId;

    };


},
    SubHeadingObject: function (block, index, content,contentid) {
    block.innerHTML += '<h1> Sub-Heading </h1>' +
        '                  <label> Sub-Heading: </label>' +
        '<input id="subhead' + index + '" type="text">' +
        '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field"> ';

    var subText = document.getElementById("subhead" + index);
    if (content !== null) {
        subText.value = content
    }
    var setField = document.getElementById("set" + index);
    setField.onclick = function () {
        colour = "green";
        setField.style.backgroundColor = colour;
        console.log("product id is " + product);
        console.log(currentArray[index]);

        ArrayInformation[index] = updateBuilder(2, product, subText.value, currentArray[index], contentid);

    };

    subText.onkeyup = function () {
        console.log("product id is " + product);
        setField.style.backgroundColor = "green";
        ArrayInformation[index] = updateBuilder(2, product, subText.value, currentArray[index], contentid);
    };
},
    ParaObject: function (block, index, content,contentid) {
    block.innerHTML += '<h1> Paragraph </h1>' +
        '  <label> Paragraph</label>' +
        '<textarea id="paraField' + index + '" ></textarea>' +
        '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field"> ';
    var pText = document.getElementById("paraField" + index);
    if (content !== null) {
        pText.value = content
    }
    var setField = document.getElementById("set" + index);
    setField.onclick = function () {
        colour = "green";
        setField.style.backgroundColor = colour;
        console.log("product id is " + product);
        ArrayInformation[index] = updateBuilder(3, product, pText.value, currentArray[index],contentid);

    };

    pText.onkeyup = function () {
        console.log("product id is " + product);
        setField.style.backgroundColor = "green";

        ArrayInformation[index] = updateBuilder(3, product, pText.value, currentArray[index],contentid);
    };
},
    ImageObject: function (block, index, content,contentid) {
    block.innerHTML += '<h1> Image Upload </h1>' +
        '<label> Image</label>' +
        '<input id="fileupload' + index + '" type="file" name="files[]" data-url="server/php/" multiple> ' +
        '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field">';


    var setField = document.getElementById("set" + index);

    var image;
    var imageCount = 0;
    $('#fileupload' + index).fileupload({
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index1, file) {
                var imageElement = document.createElement("img");
                if (content !== null) {
                    imageElement.setAttribute('src', content);
                } else {
                    imageElement.setAttribute('src', "server/php/files/" + file.name);
                }
                imageElement.setAttribute('width', "100%");
                imageElement.setAttribute('height', "75%");
                if (imageCount === 1) {
                    block.replaceChild(imageElement, block.children[7]);
                    imageCount = 0;
                } else {
                    block.insertBefore(imageElement, block.children[7]);
                }
                // block.innerHTML += "<img src='+ "'width='100%' height='75%'>";
                image = file;
                imageCount++;

            });
        }
    });

    setField.onclick = function () {
        colour = "green";
        setField.style.backgroundColor = colour;
        console.log("product id is " + product);
        ArrayInformation[index] = updateBuilder(4, product, "http://cla-cms.me/cla_php_scripts/server/php/files/" + image.name, currentArray[index]),contentid;
    };

},
    TourObject: function (block, index,contentid) {
    block.innerHTML += '<h1> Tours </h1>' +
        '  <label> Tours</label>' +
        '<select id="tours' + index + '" >' +
        '<option>fdgfdgdgdgdg</option>' +
        '<option>fdgfdgdgdgdg</option>' +
        '<option>fdgfdgdgdgdg</option>' +
        '<option>fdgfdgdgdgdg</option>' +
        '</select>' +
        '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field"> ';
    var select = document.getElementById("tours" + index);
    var setField = document.getElementById("set" + index);
    setField.onclick = function () {
        colour = "green";
        setField.style.backgroundColor = colour;
        console.log("product id is " + product);
        ArrayInformation[index] = jsonBuilder(5, product, select.value, currentArray[index]);

    };

    // pText.onkeyup = function () {
    //     console.log("product id is " + product);
    //     setField.style.backgroundColor = "green";
    //
    //     ArrayInformation[index] = jsonBuilder(3, product, pText.value, currentArray[index]);
    // };
}

// function RateObject(block, index) {
//
// }
//
// function FooterObject(block, index) {
//
// }
  
 
    
};

var updatePageElements = {
    HeadingObject: function (block, index, content, contentid) {

        block.innerHTML += '<h1> Heading </h1>' +
            '<label> Heading: </label>' +
            '<input id="head' + index + '" type="text">' +
            '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field"> ';
        var headText = document.getElementById("head" + index);

        if (content !== null) {
            headText.value = content;
        }
        var setField = document.getElementById("set" + index);
        setField.onclick = function () {
            colour = "green";
            setField.style.backgroundColor = colour;
            console.log("product id is " + product);
            console.log(currentArray[index]);
            ArrayInformation[index] = jsonBuilder(1, product, headText.value, currentArray[index]);
            //blockID = contentId;


        };

        headText.onkeyup = function () {
            console.log("product id is " + product);
            setField.style.backgroundColor = "green";
            ArrayInformation[index] = jsonBuilder(1, product, headText.value, currentArray[index]);
            //blockID = contentId;

        };


    },
    SubHeadingObject: function (block, index, content) {
        block.innerHTML += '<h1> Sub-Heading </h1>' +
            '                  <label> Sub-Heading: </label>' +
            '<input id="subhead' + index + '" type="text">' +
            '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field"> ';

        var subText = document.getElementById("subhead" + index);
        if (content !== null) {
            subText.value = content
        }
        var setField = document.getElementById("set" + index);
        setField.onclick = function () {
            colour = "green";
            setField.style.backgroundColor = colour;
            console.log("product id is " + product);
            console.log(currentArray[index]);

            ArrayInformation[index] = jsonBuilder(2, product, subText.value, currentArray[index]);

        };

        subText.onkeyup = function () {
            console.log("product id is " + product);
            setField.style.backgroundColor = "green";
            ArrayInformation[index] = jsonBuilder(2, product, subText.value, currentArray[index]);
        };
    },
    ParaObject: function (block, index, content) {
        block.innerHTML += '<h1> Paragraph </h1>' +
            '  <label> Paragraph</label>' +
            '<textarea id="paraField' + index + '" ></textarea>' +
            '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field"> ';
        var pText = document.getElementById("paraField" + index);
        if (content !== null) {
            pText.value = content
        }
        var setField = document.getElementById("set" + index);
        setField.onclick = function () {
            colour = "green";
            setField.style.backgroundColor = colour;
            console.log("product id is " + product);
            ArrayInformation[index] = jsonBuilder(3, product, pText.value, currentArray[index]);

        };

        pText.onkeyup = function () {
            console.log("product id is " + product);
            setField.style.backgroundColor = "green";

            ArrayInformation[index] = jsonBuilder(3, product, pText.value, currentArray[index]);
        };
    },
    ImageObject: function (block, index, content) {
        block.innerHTML += '<h1> Image Upload </h1>' +
            '<label> Image</label>' +
            '<input id="fileupload' + index + '" type="file" name="files[]" data-url="server/php/" multiple> ' +
            '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field">';


        var setField = document.getElementById("set" + index);

        var image;
        var imageCount = 0;
        $('#fileupload' + index).fileupload({
            dataType: 'json',
            done: function (e, data) {
                $.each(data.result.files, function (index1, file) {
                    var imageElement = document.createElement("img");
                    if (content !== null) {
                        imageElement.setAttribute('src', content);
                    } else {
                        imageElement.setAttribute('src', "server/php/files/" + file.name);
                    }
                    imageElement.setAttribute('width', "100%");
                    imageElement.setAttribute('height', "75%");
                    if (imageCount === 1) {
                        block.replaceChild(imageElement, block.children[7]);
                        imageCount = 0;
                    } else {
                        block.insertBefore(imageElement, block.children[7]);
                    }
                    // block.innerHTML += "<img src='+ "'width='100%' height='75%'>";
                    image = file;
                    imageCount++;

                });
            }
        });

        setField.onclick = function () {
            colour = "green";
            setField.style.backgroundColor = colour;
            console.log("product id is " + product);
            ArrayInformation[index] = jsonBuilder(4, product, "http://cla-cms.me/cla_php_scripts/server/php/files/" + image.name, currentArray[index]);
        };

        // image.onclick = function () {
        //     console.log("product id is " + product);
        //     setField.style.backgroundColor = "green";
        //
        //     ArrayInformation[index] = jsonBuilder(4, product, image, currentArray[index]);
        // };

    },
    TourObject: function (block, index) {
        block.innerHTML += '<h1> Tours </h1>' +
            '  <label> Tours</label>' +
            '<select id="tours' + index + '" >' +
            '<option>fdgfdgdgdgdg</option>' +
            '<option>fdgfdgdgdgdg</option>' +
            '<option>fdgfdgdgdgdg</option>' +
            '<option>fdgfdgdgdgdg</option>' +
            '</select>' +
            '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field"> ';
        var select = document.getElementById("tours" + index);
        var setField = document.getElementById("set" + index);
        setField.onclick = function () {
            colour = "green";
            setField.style.backgroundColor = colour;
            console.log("product id is " + product);
            ArrayInformation[index] = jsonBuilder(5, product, select.value, currentArray[index]);

        };

        // pText.onkeyup = function () {
        //     console.log("product id is " + product);
        //     setField.style.backgroundColor = "green";
        //
        //     ArrayInformation[index] = jsonBuilder(3, product, pText.value, currentArray[index]);
        // };
    }
};  