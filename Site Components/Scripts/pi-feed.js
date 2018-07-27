require([
    'jquery'
], function ($) {
    'use strict';

    var scriptUrl = "https://85667.recs.igodigital.com/a/v2/85667/home/recommend.js";

    var updatePiLayout = function () {
    let igoBody = document.getElementsByClassName('igo_boxbody');
    let igoBox = document.querySelectorAll('.igo_product');

    //add row to main body of feed
    igoBody[0].className += " row";

    //add bootstrap classes to each product box
    igoBox.forEach(function (box) {
        let altText = box.getElementsByClassName('igo_product_product_name_value')[0].innerText;
        let price = box.getElementsByClassName('igo_product_regular_price_value')[0].innerText;
        let sale = box.getElementsByClassName('igo_product_sale_price_value')[0].innerText;
        let links = box.querySelectorAll("a");
        
        links.forEach((link) => {
            if (link.textContent) {
                let shopButton = link;
                shopButton.className += "action primary";
                shopButton.innerText = 'SHOP';
                $(link).closest('.igo_product').append(shopButton);
            }
        });

        //add bootstrap classes
        box.className += " col-md-3 center";
        box.getElementsByTagName('img')[0].alt = altText;

        //add strikethroughs
        if (price > sale && sale !== '$0.00') {
            box.getElementsByClassName('igo_product_regular_price_value')[0].className += ' strikethrough';
        }

        //Check to make sure sale pricing isn't the same as full price
        if (sale === '$0.00' || price === sale) {
            box.getElementsByClassName('igo_product_sale_price')[0].remove();

        }
    });
};

    $.getScript(scriptUrl, updatePiLayout);
});