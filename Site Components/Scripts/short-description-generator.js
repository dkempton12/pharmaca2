function createShortDescriptionField(content) {
    var shortDescription = 
        '<div class="product attribute overview">'
            + '<div class="value" itemprop="description" style="max-height: none;">'
            +  content
            + '</div>'
        +'</div>';
    
    var whereToPlace = jQuery('.product-info-price')[0]
    jQuery(whereToPlace.after(decodeURI(shortDescription)))
    
}
    
function getShortDescriptionContent() {
    var longDescription = document.querySelectorAll('.product.info.detailed .description .value')[0].innerText
    var shortDescription = longDescription.slice(0, 120);
    shortDescription += '...'

    createShortDescriptionField(shortDescription)
}
    
    
getShortDescriptionContent()