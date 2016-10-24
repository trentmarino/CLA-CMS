/**
 * Created by trentmarino on 11/08/2016.
 */

var updatePages = {
    UpdateBlock: function (field) {
        console.log(field);
        
        // loops through the field object
        $.each(field, function (key, content) {

            var block = document.createElement("div");
            var index = count;
            block.setAttribute('class', "itemBlock");
            block.setAttribute('data', index.toString());
            block.style.marginLeft = "10%";
            block.style.marginBottom = "2%";
            container.appendChild(block);
            currentArray.push(index);
            addID(content.idcontent);
            updatedBlocks(content.Info_type, block, index, content.content, content.idcontent);
            count++;
        });
    }
};


/**
 * function that filters the block types that is relieved from the serve and generates that specific block according to
 * the specified type
 *
 * @param type
 * @param block
 * @param index
 * @param content
 * @param contentid
 */
var  updatedBlocks = function (type, block, index, content, contentid) {

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
        updatePageElements.TourObject(block, index, content, contentid);
    }


}
