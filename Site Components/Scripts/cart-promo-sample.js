require([
        'jquery'
    ],
    function ($) {
        $(document).ready(function () {
            
            function checkPricing() {
                //recheck price everytime it runs in case subtotal updated
                var subTotalPrice = parseFloat($(".totals.sub .price").text().slice(1))
                var discount = parseFloat($('[data-th="Discount"] .price' ).text().slice(2));
                var samplesTitle = $('.Sample-products__title.title') ;
                var samplesBlock = $(".block.js-sample-products .content");
                if (discount) {
                    subTotalPrice = subTotalPrice - discount;
                }
                
                if (subTotalPrice >= 40.00) {
                    $('#samplemessage').removeClass('hidden').addClass("active");
                    $('.block.js-sample-products').addClass("active");
                    $(samplesTitle).attr({
                        "aria-expanded": "true",
                        "aria-selected": "true"
                    });
                    $(samplesBlock).show();
                    $(samplesBlock).attr("aria-hidden", "false");       

                } else if (subTotalPrice < 40.00) {
                    $('#samplemessage').removeClass("active").addClass('hidden');
                    $('.block.js-sample-products').removeClass("active");
                    $(samplesTitle).attr({
                        "aria-expanded": "false",
                        "aria-selected": "false"
                    });
                    $(samplesBlock).hide();
                    $(samplesBlock).attr("aria-hidden", "true");
                    
                }
            }
            //run first on page load
            checkPricing();
            //run on every ajax request with delay
            $(document).ajaxSuccess(function () {
                setTimeout(function () {
                    checkPricing();
                }, 1500)
            })
        })
    }
)