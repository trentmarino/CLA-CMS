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
            ArrayInformation[index] = jsonBuilder(1, product, headText.value, currentArray[index]);


        };

        headText.onkeyup = function () {
            console.log("product id is " + product);
            setField.style.backgroundColor = "green";
            ArrayInformation[index] = jsonBuilder(1, product, headText.value, currentArray[index]);

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

            ArrayInformation[index] = jsonBuilder(2, product, subText.value, currentArray[index]);

        };

        subText.onkeyup = function () {
            console.log("product id is " + product);
            setField.style.backgroundColor = "green";
            ArrayInformation[index] = jsonBuilder(2, product, subText.value, currentArray[index]);
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
            ArrayInformation[index] = jsonBuilder(3, product, pText.value, currentArray[index]);

        };

        pText.onkeyup = function () {
            console.log("product id is " + product);
            setField.style.backgroundColor = "green";

            ArrayInformation[index] = jsonBuilder(3, product, pText.value, currentArray[index]);
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
            ArrayInformation[index] = jsonBuilder(4, product, "http://54.206.36.198/cla_php_scripts/server/php/files/" + image.name, currentArray[index]);
        };

    },
    TourObject: function (block, index,content) {

        var tourObject = {};

        block.innerHTML += '<h1> Tours </h1>';
        console.log(content);
        $.getJSON('PageCreator/tours.json',function (tours) {
            console.log(tours);

            block.innerHTML += '<select class="tours' + index + '" >';
            $.each(tours.tours,function (key,value) {
                $(".tours"+index).append($('<option></option>').val(JSON.stringify(value)).html(value.name));
            });
            block.innerHTML += '</select>';
            block.innerHTML += '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field">' +
                '</br>';
            block.innerHTML +='<input type="text" class="tourInfo'+index+'">';
            block.innerHTML +='<input type="text" class="tourUrl'+index+'">';
            block.innerHTML += '<input id="fileupload' + index + '" type="file" name="files[]" data-url="server/php/" multiple>';
            var image = undefined;
            var imageCount = 0;

            $('#fileupload' + index).fileupload({
                dataType: 'json',
                done: function (e, data) {
                    $.each(data.result.files, function (index1, file) {
                        var imageElement = document.createElement("img");
                        if (content !== null) {
                            console.log(content)
                            // imageElement.setAttribute('src', content);
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


            $('.tours'+index).on('change', function () {
                $('.tourInfo'+index).val(JSON.parse($('.tours'+index).val()).name);
                $('.tourUrl'+index).val(JSON.parse($('.tours'+index).val()).url);
                console.log(JSON.parse($('.tours'+index).val()).name);


            });

            tourObject.title  = JSON.parse($('.tours'+index).val()).name;
            tourObject.url  = JSON.parse($('.tours'+index).val()).url;

            // var select = JSON.parse($('.tours'+index).val());

            $('#set'+index).click(function () {
                colour = "green";
                // console.log(select);
                // setField.style.backgroundColor = colour;
                console.log("product id is " + product);
                console.log(tourObject);
                ArrayInformation[index] = jsonBuilder(5, product, JSON.stringify(tourObject), currentArray[index]);

            });

        });






        // pText.onkeyup = function () {
        //     console.log("product id is " + product);
        //     setField.style.backgroundColor = "green";
        //
        //     ArrayInformation[index] = jsonBuilder(3, product, pText.value, currentArray[index]);
        // };
    }





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
            ArrayInformation[index] = updateBuilder(1, product, headText.value, currentArray[index],contentid);
            //blockID = contentId;


        };

        headText.onkeyup = function () {
            console.log("product id is " + product);
            setField.style.backgroundColor = "green";
            ArrayInformation[index] = updateBuilder(1, product, headText.value, currentArray[index], contentid);
            //blockID = contentId;

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

            ArrayInformation[index] = updateBuilder(2, product, subText.value, currentArray[index],contentid);

        };

        subText.onkeyup = function () {
            console.log("product id is " + product);
            setField.style.backgroundColor = "green";
            ArrayInformation[index] = updateBuilder(2, product, subText.value, currentArray[index],contentid);
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
            ArrayInformation[index] = updateBuilder(3, product, pText.value, currentArray[index],contentid);

        };

        pText.onkeyup = function () {
            console.log("product id is " + product);
            setField.style.backgroundColor = "green";

            ArrayInformation[index] = updateBuilder(3, product, pText.value, currentArray[index],contentid);
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
            ArrayInformation[index] = updateBuilder(4, product, "http://54.206.36.198/cla_php_scripts/server/php/files/" + image.name, currentArray[index],contentid);
        };

        // image.onclick = function () {
        //     console.log("product id is " + product);
        //     setField.style.backgroundColor = "green";
        //
        //     ArrayInformation[index] = jsonBuilder(4, product, image, currentArray[index]);
        // };

    },
    TourObject: function (block, index, content, contentid) {

        console.log(contentid)

        var content =  JSON.parse(content);
        var tourObject = {
            title: content.title,
            url: content.url,
            image: content.image
        };
        console.log(tourObject);

        block.innerHTML += '<h1> Tours </h1>';
        console.log(content);
        $.getJSON('PageCreator/tours.json',function (tours) {
            console.log(tours);

            block.innerHTML += '<select class="tours' + index + '" >';
            $.each(tours.tours,function (key,value) {
                $(".tours"+index).append($('<option></option>').val(JSON.stringify(value)).html(value.name));
            });
            block.innerHTML += '</select>';
            block.innerHTML += '<input type="button" id="set' + index + '" style="margin-right: 0; background-color: red" value="Set Field">' +
                '</br>';
            block.innerHTML +='<input type="text" class="tourInfo'+index+'">';
            block.innerHTML +='<input type="text" class="tourUrl'+index+'">';
            block.innerHTML += '<input id="fileupload' + index + '" type="file" name="files[]" data-url="server/php/" multiple>';


            var image = undefined;
            var imageCount = 0;
            var imageElement = document.createElement("img");
            imageElement.setAttribute('width', "100%");
            imageElement.setAttribute('height', "100%");
            if (content !== null) {
                console.log(content);
                // imageElement.setAttribute('src', content);
                imageElement.setAttribute('src', 'server/php/files/'+content.image);
                block.insertBefore(imageElement, block.children[7]);

            }

            // block.innerHTML += "<img src='+ "'width='100%' height='75%'>";
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
                        // block.innerHTML += "<img src='+ "'width='100%' height='75%'>";
                        image = file;
                        imageCount++;
                        tourObject.image = "http://54.206.36.198/cla_php_scripts/server/php/files/" + file.name;

                    });
                }
            });
            $('.tourInfo'+index).val(content.title);
            $('.tourUrl'+index).val(content.url);



            $('.tours'+index).on('change', function () {
                $('.tourInfo'+index).val(JSON.parse($('.tours'+index).val()).name);
                $('.tourUrl'+index).val(JSON.parse($('.tours'+index).val()).url);
                tourObject.title  = JSON.parse($('.tours'+index).val()).name;
                tourObject.url  = JSON.parse($('.tours'+index).val()).url;

            });


            // var select = JSON.parse($('.tours'+index).val());

            $('#set'+index).click(function () {
                colour = "green";
                // console.log(select);
                // setField.style.backgroundColor = colour;
                console.log("product id is " + product);
                console.log(tourObject);
                ArrayInformation[index] = updateBuilder(5, product, JSON.stringify(tourObject), currentArray[index], contentid);

            });

        });






        // pText.onkeyup = function () {
        //     console.log("product id is " + product);
        //     setField.style.backgroundColor = "green";
        //
        //     ArrayInformation[index] = jsonBuilder(3, product, pText.value, currentArray[index]);
        // };
    }



};  


