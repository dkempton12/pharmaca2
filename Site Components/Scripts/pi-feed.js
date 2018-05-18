updatePiLayout = () => {
    const igoBody = document.getElementsByClassName('igo_boxbody');
    const igoBox = document.querySelectorAll('.igo_product');

    //add row to main body of feed
    igoBody[0].className += " row";

    //add bootstrap classes to each product box
    igoBox.forEach(function(box) {
        box.className += " col-md-3 center";
    })
}

updatePiLayout();