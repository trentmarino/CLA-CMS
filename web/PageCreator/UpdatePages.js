/**
 * Created by trentmarino on 11/08/2016.
 */

var updatePages = {
    UpdateBlock: function (field) {
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
            console.log(content.idcontent);
            updatedBlocks(content.Info_type, block, index, content.content, content.idcontent);
            count++;
        });
    }
};

var  updatedBlocks = function (type, block, index, content, contentid) {
    console.log(type, block, content);
    console.log(JSON.stringify(index));
    if (currentArray[index] != index) {
        index = currentArray.indexOf(index);
    }
    if (type === "Heading" || type == 1) {
        updatePageElements.HeadingObject(block, index, content, contentid)
    } else if (type === "Sub-Heading" || type == 2) {
        updatePageElements.SubHeadingObject(block, index, content, contentid);
    } else if (type === "Paragraph" || type == 3) {
        updatePageElements.ParaObject(block, index, content, contentid);
    } else if (type === "Image" || type == 4) {
        updatePageElements.ImageObject(block, index, content, contentid);
    } else if (type === "Tours" || type == 5) {
        updatePageElements.TourObject(block, index, content,contentid);

    } else if (type === "Rates" || type == 6) {
        updatePageElements.RateObject(block, index, content, contentid);

    } else if (type === "Footer" || type === 7) {
        updatePageElements.FooterObject(block, index, content, contentid);
    }


}
