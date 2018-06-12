//create the short description field that accepts the content we pass in
function createShortDescriptionField(content) {
    var shortDescription = 
        '<div class="product attribute overview">'
            + '<div class="value" itemprop="description" style="max-height: none;">'
            +  content
            + '</div>'
        +'</div>';
    
    //find the area to place the short description fields
    var whereToPlace = jQuery('.product-info-price')[0];
    //insert the short description field into the page
    jQuery(shortDescription).insertAfter(whereToPlace)
    
}
    
function getShortDescriptionContent() {
    //get the long description
    var longDescription = document.querySelectorAll('.product.info.detailed .description .value')[0].innerHTML
    //create the short description from the long description
    var shortDescription = longDescription.slice(0, 150);
    shortDescription += '...<a href="#tab-label-product.info.description">Read More</a>';
    //Call the create function with the short description passed in as 'content'
    createShortDescriptionField(shortDescription)
}

//check if the short description exists and run the function if it does    
if (jQuery(".product.attribute.overview").length <= 0) {
    getShortDescriptionContent()
}
