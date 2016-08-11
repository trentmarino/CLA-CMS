/**
 * Created by trentmarino on 11/08/2016.
 */
var createPages = {
    
    newBlock: function (){
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

            BlockSelector(select, block, index);
            expandState += 1;


        });
        hasBeenChanged = false;
        count++;
    }


};


function BlockSelector(type, block, index, content) {

    console.log(JSON.stringify(index));
    if (currentArray[index] != index) {
        index = currentArray.indexOf(index);
    }
    if (type.value === "Heading" || type === 1) {
        pageElements.HeadingObject(block, index, content);
    } else if (type.value === "Sub-Heading" || type === 2) {
        pageElements.SubHeadingObject(block, index, content);
    } else if (type.value === "Paragraph" || type === 3) {
        pageElements.ParaObject(block, index, content);
    } else if (type.value === "Image" || type === 4) {
        pageElements.ImageObject(block, index, content);
    } else if (type.value === "Tours" || type === 5) {
        pageElements.TourObject(block, index, content);

    } else if (type.value === "Rates" || type === 6) {
        pageElements.RateObject(block, index, content);

    } else if (type.value === "Footer" || 7) {
        pageElements.FooterObject(block, index, content);
    }

}
