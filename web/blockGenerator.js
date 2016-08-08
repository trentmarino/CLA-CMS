/**
 * Created by trentmarino on 26/04/2016.
 */
(function () {

    var container = document.getElementById("blocks");
    var addBlock = document.getElementById("addBlock");
    var removeBlock = document.getElementById("removeBlock");
    var loader = document.getElementById("loadPage");
    var commit = document.getElementById("commit");
    var preview = document.getElementById("preview");
    var page = document.getElementById("description");
    var optionChanged = false;
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


    var items = ["Heading", "Sub-Heading", "Paragraph", "Image", "Tours", "Rates", "Footer"];

    addBlock.onclick = function () {
        createBlock();
        ArrayInformation.push("");
    };

    function loadPage(product) {
        $.getJSON("existing_content.php", {name: product}, function (result) {
            $.each(result, function (index, field) {
                console.log(ArrayInformation);
                console.log(field);
                if(field !== null) {
                    updateBlock(field, index);
                }else{
                    createBlock();
                }
            });
        });
    }

    function updateBlock(field) {
        console.log(field);
        $.each(field, function (key, content) {
            var block = document.createElement("div");
            var index = count;
            block.setAttribute('class', "itemBlock");
            block.setAttribute('data', index.toString());
            block.style.marginLeft = "10%";
            block.style.marginBottom = "2%";
            console.log(key);
            console.log(content);
            container.appendChild(block);
            currentArray.push(index);
            updatedBlocks(content.Info_type, block, index, content.content);
            count++;
        });
    }

    function createBlock() {
        var index = count;
        var block = document.createElement("div");
        var select = document.createElement('select');
        var label = document.createElement('label');
        var expand = document.createElement('input');
        block.setAttribute('class', "itemBlock");
        block.setAttribute('data', count.toString());
        block.style.marginLeft = "10%";
        block.style.marginBottom = "2%";
        expand.setAttribute('id', "dropdown" + count);
        expand.setAttribute('data', count.toString());
        expand.setAttribute('type', "button");
        expand.setAttribute('class', "btn btn-default btn-sm");
        expand.value = "dropdown";
        select.setAttribute('id', "optionType");
        for (var i = 0; i < items.length; i++) {
            var option = document.createElement('option');
            option.value = items[i];
            option.text = items[i];
            select.appendChild(option)
        }
        label.innerHTML = "Block Type: " + count + "     ";
        block.appendChild(label);
        block.appendChild(select);
        block.appendChild(expand);
        container.appendChild(block);
        currentArray.push(count);
        $("#dropdown" + count).click(function () {
            console.log(count);

            blockType(select, block, count, index);
            expandState += 1;


        });
        hasBeenChanged = false;
        count++;
    }

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

    $("#blocks").sortable({
        items: ".itemBlock",
        placeholder: 'placeholder',
        stop: function (event, ui) {
            var prevElement = ui.item.prev().index();
            var nextElement = ui.item.next().index();
            var current = ui.item.index();
            console.log("current index" + current);
            console.log(prevElement);
            currentArray[current] = $(ui.item).attr('data');
            if (prevElement < 0) {
                currentArray[0] = 0;
            }
            currentArray[prevElement] = $(ui.item).prev().attr('data');
            currentArray[nextElement] = $(ui.item).next().attr('data');
            console.log(currentArray.toString());
            hasBeenChanged = true;
            colour = "green"
        }
    });

    function blockType(type, block, count, index, content) {
        if (currentArray[index] != index) {
            index = currentArray.indexOf(index);
        }
        switch (type.value) {
            case "Heading":
                HeadingObject(block, index, content);
                break;
            case "Sub-Heading":
                SubHeadingObject(block, index, content);
                break;
            case "Paragraph":
                ParaObject(block, index, content);
                break;
            case "Image":
                ImageObject(block, index, content);
                break;
            case "Tours":
                TourObject(block, index, content);
                break;
            case "Rates":
                RateObject(block, index, content);
                break;
            case "Footer":
                FooterObject(block, index, content);
                break;
        }
    }


    function updatedBlocks(type, block, index, content) {
        if (currentArray[index] != index) {
            index = currentArray.indexOf(index);
        }
        switch (true) {
            case type == 1:
                HeadingObject(block, index, content);
                break;
            case type == 2:
                SubHeadingObject(block, index, content);
                break;
            case type == 3:
                ParaObject(block, index, content);
                break;
            case type == 4:
                ImageObject(block, index, content);
                break;
            case type == 5:
                TourObject(block, index, content);
                break;
            case type == 6:
                RateObject(block, index, content);
                break;
            case type == 7:
                FooterObject(block, index, content);
                break;
        }
    }


    loader.onclick = function () {
        if(product !== getProductID()){
            console.log(product);
            $('.itemBlock').remove();
            ArrayInformation = [];
            pageLoaded = false;
            product = getProductID();
            count = 0;
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


        $.ajax({
            url: 'insert_room_info.php',
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
        console.log(JSON.stringify(ArrayInformation));
        previewPage(ArrayInformation);
        // $("#result").html(jsonOBJ(ArrayInformation));
    };

    function HeadingObject(block, index, content) {

        block.innerHTML += '<h1> Heading </h1>' +
            '                 <label> Heading: </label>' +
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


    }

    function SubHeadingObject(block, index, content) {
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
    }

    function ParaObject(block, index, content) {
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
    }

    function ImageObject(block, index, content) {
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

    }

    function TourObject(block, index) {
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

    function jsonBuilder(type, product, data, order) {
        var pageOject = {
            type: type,
            productid: product,
            content: data,
            content_order: order
        };
        return pageOject;
        // return object;
    }

    function jsonOBJ(content) {
        var pageinfo = '{[';
        pageinfo += content;
        pageinfo += ']}';
        return pageinfo;
    }
})();