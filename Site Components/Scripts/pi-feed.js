updatePiLayout = () => {
    const igoBody = document.getElementsByClassName('igo_boxbody');
    const igoBox = document.querySelectorAll('.igo_product');
    let altText = '';
    let price = '';
    let sale = '';

    //add row to main body of feed
    igoBody[0].className += " row";

    //add bootstrap classes to each product box
    igoBox.forEach((box) => {
        let altText = box.getElementsByClassName('igo_product_product_name_value')[0].innerText;
        let price = box.getElementsByClassName('igo_product_regular_price_value')[0].innerText;
        let sale = box.getElementsByClassName('igo_product_sale_price_value')[0].innerText;
        let shopButton = box.getElementsByTagName('a')[1];
        
        
        //add bootstrap classes
        box.className += " col-md-3 center";
        box.getElementsByTagName('img')[0].alt = altText;

        //Check to make sure sale pricing isn't the same as full price
        if(sale == '$0.00' || price == sale) {
            box.getElementsByClassName('igo_product_sale_price_value')[0].remove();
        }

        //add Shop Button
        shopButton.className += "action primary";
        shopButton.innerText = 'SHOP';

    })

}

updatePiLayout();