/**
 * Created by trentmarino on 11/08/2016.
 */

var contentIDarray = [];

var addID = function (array) {
    contentIDarray.push(array);
};

var pageElements = {

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


        };

        headText.onkeyup = function () {
            console.log("product id is " + product);
            setField.style.backgroundColor = "green";
            ArrayInformation[index] = jsonBuilder(1, product, headText.value, currentArray[index]);

        };


    },
    SubHeadingObject: function (block, index, content, contentid) {
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
    ParaObject: function (block, index, content, contentid) {
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
    ImageObject: function (block, index, content, contentid) {
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
                        console.log(file.name);
                        imageElement.setAttribute('src', "server/php/files/" + file.name);

                    } else {
                        imageElement.setAttribute('src', "web/server/php/files/" + file.name);

                    }
                    imageElement.setAttribute('width', "100%");
                    imageElement.setAttribute('height', "100%");
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
            ArrayInformation[index] = jsonBuilder(4, product, "http://54.206.36.198/cla_php_scripts/server/php/files/" + image.name, currentArray[index]);
        };

    },
    TourObject: function (block, index, content) {

        var tourObject = {};

        block.innerHTML += '<h1> Tours </h1>';
        console.log(content);
        $.ajax({
            type: "get",
            url: "Tours/getTourPackages.php",
            dataType: "json",
            success: function (response) {
                console.log(response);
                $.each(response, function (key, value) {
                    var tours = JSON.parse(value.tourpackages);
                    console.log(tours);
                    block.innerHTML += '<select class="tours' + index + '" >';
                    $.each(tours.tours, function (key, value) {
                        console.log("dfgdfg" + value);
                        $(".tours" + index).append($('<option></option>').val(JSON.stringify(value)).html(value.name));
                    });
                    block.innerHTML += '</select>';
                    block.innerHTML += '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field">' +
                        '</br>';
                    block.innerHTML += '<input type="text" class="tourInfo' + index + '">';
                    block.innerHTML += '<input type="text" class="tourUrl' + index + '">';
                    block.innerHTML += '<input type="text" class="tourPrice' + index + '">';
                    block.innerHTML += '<input id="fileupload' + index + '" type="file" name="files[]" data-url="server/php/" multiple>';
                    var image = undefined;
                    var imageCount = 0;

                    $('#fileupload' + index).fileupload({
                        dataType: 'json',
                        done: function (e, data) {
                            $.each(data.result.files, function (index1, file) {
                                var imageElement = document.createElement("img");
                                if (content !== null) {
                                    console.log(file.name);
                                    imageElement.setAttribute('src', "server/php/files/" + file.name);

                                } else {
                                    imageElement.setAttribute('src', "web/server/php/files/" + file.name);

                                }
                                imageElement.setAttribute('width', "100%");
                                imageElement.setAttribute('height', "100%");
                                if (imageCount === 1) {
                                    block.replaceChild(imageElement, block.children[7]);
                                    imageCount = 0;
                                } else {
                                    block.insertBefore(imageElement, block.children[7]);
                                }
                                // block.innerHTML += "<img src='+ "'width='100%' height='75%'>";
                                image = file;
                                imageCount++;
                                tourObject.image = "http://54.206.36.198/cla_php_scripts/server/php/files/" + file.name;

                            });
                        }
                    });


                });

                $('.tours' + index).on('change', function () {
                    $('.tourInfo' + index).val(JSON.parse($('.tours' + index).val()).name);
                    $('.tourUrl' + index).val(JSON.parse($('.tours' + index).val()).url);
                    $('.tourPrice' + index).val(JSON.parse($('.tours' + index).val()).price);
                    console.log(JSON.parse($('.tours' + index).val()).name);
                    tourObject.title = JSON.parse($('.tours' + index).val()).name;
                    tourObject.url = JSON.parse($('.tours' + index).val()).url;
                    tourObject.price = JSON.parse($('.tours' + index).val()).price;

                });


                //sets the tour details
                $('#set' + index).click(function () {
                    colour = "green";
                    $('#set' + index).css('backgroundColor', colour);
                    console.log("product id is " + product);
                    console.log(tourObject);
                    ArrayInformation[index] = jsonBuilder(5, product, JSON.stringify(tourObject), currentArray[index]);
                    console.log(ArrayInformation);
                });
            }
        });

    }


};

var updatePageElements = {
    HeadingObject: function (block, index, content, contentid) {


        var deleteBlock = document.createElement("button");


        block.innerHTML += '<h1> Heading </h1>' +
            '<label> Heading: </label>' +
            '<input id="head' + index + '" type="text">' +
            '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field"> ';

        var headText = document.getElementById("head" + index);
        if (content !== null) {
            headText.value = content;
        }

        deleteBlock.innerHTML = "X";
        deleteBlock.setAttribute('data', contentid);
        deleteBlock.setAttribute('type', "button");
        block.appendChild(deleteBlock);
        deleteBlock.onclick = function () {
            deletePost(contentid, index);
        };


        var setField = document.getElementById("set" + index);
        setField.onclick = function () {
            colour = "green";
            setField.style.backgroundColor = colour;
            ArrayInformation[index] = updateBuilder(1, product, headText.value, currentArray[index], contentid);


        };

        headText.onkeyup = function () {
            setField.style.backgroundColor = "green";
            ArrayInformation[index] = updateBuilder(1, product, headText.value, currentArray[index], contentid);
        };


    },
    SubHeadingObject: function (block, index, content, contentid) {
        block.innerHTML += '<h1> Sub-Heading </h1>' +
            '                  <label> Sub-Heading: </label>' +
            '<input id="subhead' + index + '" type="text">' +
            '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field"> ';

        var subText = document.getElementById("subhead" + index);
        if (content !== null) {
            subText.value = content
        }

        var deleteBlock = document.createElement("button");
        deleteBlock.innerHTML = "X";
        deleteBlock.setAttribute('data', contentid);
        deleteBlock.setAttribute('type', "button");
        block.appendChild(deleteBlock);
        deleteBlock.onclick = function () {
            deletePost(contentid, index);
        };

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
    ParaObject: function (block, index, content, contentid) {
        block.innerHTML += '<h1> Paragraph </h1>' +
            '  <label> Paragraph</label>' +
            '<textarea id="paraField' + index + '" ></textarea>' +
            '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field"> ';
        var pText = document.getElementById("paraField" + index);

        if (content !== null) {
            pText.value = content
        }

        var deleteBlock = document.createElement("button");
        deleteBlock.innerHTML = "X";
        deleteBlock.setAttribute('data', contentid);
        deleteBlock.setAttribute('type', "button");
        block.appendChild(deleteBlock);
        deleteBlock.onclick = function () {
            deletePost(contentid, index);
        };

        var setField = document.getElementById("set" + index);
        setField.onclick = function () {
            colour = "green";
            setField.style.backgroundColor = colour;
            console.log("product id is " + product);
            ArrayInformation[index] = updateBuilder(3, product, pText.value, currentArray[index], contentid);

        };

        pText.onkeyup = function () {
            console.log("product id is " + product);
            setField.style.backgroundColor = "green";

            ArrayInformation[index] = updateBuilder(3, product, pText.value, currentArray[index], contentid);
        };
    },
    ImageObject: function (block, index, content, contentid) {
        block.innerHTML += '<h1> Image Upload </h1>' +
            '<label> Image</label>' +
            '<input id="fileupload' + index + '" type="file" name="files[]" data-url="server/php/" multiple> ' +
            '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field">';


        var setField = document.getElementById("set" + index);
        var image = undefined;
        var imageCount = 0;
        var imageElement = document.createElement("img");
        imageElement.setAttribute('width', "100%");
        imageElement.setAttribute('height', "100%");
        if (content !== null) {
            console.log(content);
            // imageElement.setAttribute('src', content);
            imageElement.setAttribute('src', content);
            block.insertBefore(imageElement, block.children[7]);

        }

        var deleteBlock = document.createElement("button");
        deleteBlock.innerHTML = "X";
        deleteBlock.setAttribute('data', contentid);
        deleteBlock.setAttribute('type', "button");
        block.appendChild(deleteBlock);
        deleteBlock.onclick = function () {
            deletePost(contentid, index);
        };


        $('#fileupload' + index).fileupload({
            dataType: 'json',
            done: function (e, data) {
                $.each(data.result.files, function (index1, file) {
                    var imageElement = document.createElement("img");
                    imageElement.setAttribute('src', "server/php/files/" + file.name);
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
            ArrayInformation[index] = updateBuilder(4, product, "http://54.206.36.198/cla_php_scripts/server/php/files/" + image.name, currentArray[index], contentid);
        };

        // image.onclick = function () {
        //     console.log("product id is " + product);
        //     setField.style.backgroundColor = "green";
        //
        //     ArrayInformation[index] = jsonBuilder(4, product, image, currentArray[index]);
        // };

    },
    TourObject: function (block, index, content, contentid) {

        console.log(contentid);

        var content = JSON.parse(content);
        var tourObject = {
            title: content.title,
            url: content.url,
            image: content.image
        };


        block.innerHTML += '<h1> Tours </h1>';
        console.log(content);
        $.ajax({
            type: "get",
            url: "Tours/getTourPackages.php",
            dataType: "json",
            success: function (response) {

                $.each(response, function (key, value) {


                    var tours = JSON.parse(value.tourpackages);
                    block.innerHTML += '<select class="tours' + index + '" >';
                    $.each(tours.tours, function (key, value) {
                        $(".tours" + index).append($('<option></option>').val(JSON.stringify(value)).html(value.name));
                    });
                    block.innerHTML += '</select>';
                    block.innerHTML += '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field">' +
                        '</br>';
                    block.innerHTML += '<input type="text" class="tourInfo' + index + '">';
                    block.innerHTML += '<input type="text" class="tourUrl' + index + '">';
                    block.innerHTML += '<input type="text" class="tourPrice' + index + '">';
                    block.innerHTML += '<input id="fileupload' + index + '" type="file" name="files[]" data-url="server/php/" multiple>';


                    //deletes that block from the DB
                    var deleteBlock = document.createElement("button");
                    deleteBlock.innerHTML = "X";
                    deleteBlock.setAttribute('type', "button");
                    deleteBlock.setAttribute('data', contentid);
                    block.appendChild(deleteBlock);
                    deleteBlock.onclick = function () {
                        deletePost(contentid);
                    };


                    var image = undefined;
                    var imageCount = 0;
                    var imageElement = document.createElement("img");
                    imageElement.setAttribute('width', "100%");
                    imageElement.setAttribute('height', "100%");
                    if (content !== null) {
                        console.log(content);
                        imageElement.setAttribute('src', content.image);
                        block.insertBefore(imageElement, block.children[7]);

                    }

                    $('#fileupload' + index).fileupload({
                        dataType: 'json',
                        done: function (e, data) {
                            $.each(data.result.files, function (index1, file) {
                                var imageElement = document.createElement("img");
                                imageElement.setAttribute('width', "100%");
                                imageElement.setAttribute('height', "100%");
                                imageElement.setAttribute('src', "server/php/files/" + file.name);
                                block.replaceChild(imageElement, block.children[7]);
                                if (imageCount === 1) {
                                    block.replaceChild(imageElement, block.children[7]);
                                    imageCount = 0;
                                } else {
                                    block.insertBefore(imageElement, block.children[7]);
                                }
                                image = file;
                                imageCount++;
                                tourObject.image = "http://54.206.36.198/cla_php_scripts/server/php/files/" + file.name;

                            });
                        }
                    });


                });
                $('.tourInfo' + index).val(content.title);
                $('.tourUrl' + index).val(content.url);

                $('.tours' + index).on('change', function () {
                    $('.tourInfo' + index).val(JSON.parse($('.tours' + index).val()).name);
                    $('.tourUrl' + index).val(JSON.parse($('.tours' + index).val()).url);
                    $('.tourPrice' + index).val(JSON.parse($('.tours' + index).val()).price);
                    tourObject.title = JSON.parse($('.tours' + index).val()).name;
                    tourObject.url = JSON.parse($('.tours' + index).val()).url;
                    tourObject.price = JSON.parse($('.tours' + index).val()).price;

                });


                // var select = JSON.parse($('.tours'+index).val());

                $('#set' + index).click(function () {
                    colour = "green";
                    // console.log(select);
                    $('#set' + index).css("background-color", "green");
                    console.log("product id is " + product);
                    console.log(tourObject);
                    ArrayInformation[index] = updateBuilder(5, product, JSON.stringify(tourObject), currentArray[index], contentid);

                });

            }


        });


    }


};


var deletePost = function (id, index) {
    var origianllength = currentArray.length;

    console.log(contentIDarray);

    $.ajax({
        type: 'post',
        url: 'deletePost.php',
        data: {"contentID": id},
        success: function (data) {
console.log(data);
            contentIDarray.splice(contentIDarray.indexOf(id), 1);
            currentArray.splice(currentArray.indexOf(index), 1);
            if (currentArray.length < origianllength) {
                $.each(contentIDarray, function (key, value) {
                    $.ajax({
                        url: 'updateOrder.php',
                        type: 'post',
                        data: {"contentID": value, "contentOrder": key},
                        success: function (data) {
                            console.log(data);
                        }
                    });
                });
                $('.itemBlock').attr('data', index)[index].remove();


            } else {
                $('.itemBlock').remove();

            }


        }


    });


}

