var checkBox = jQuery(".input-checkbox");
var totalPrice = 0;
checkBox.change(function() {
   var price = jQuery(this).parent().parent().siblings().find(".price")[0].dataset.itemPrice
   if (this.checked) {
     totalPrice += parseInt(price)
   } else {
	totalPrice -= parseInt(price)
   }
   console.log(totalPrice);
})

if (totalPrice < 10) {
    
}