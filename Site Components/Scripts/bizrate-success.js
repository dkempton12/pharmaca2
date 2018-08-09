
  var _cnx = _cnx || [];

  _cnx.push(['mid', 277059]);  // your unique store MID
  _cnx.push(['surveyType', 'pos']);
  _cnx.push(['orderId', 'dataLayer[0].ecommerce.purchase.actionField.id']); 
  _cnx.push(['customerId', 'dataLayer[1].customerId']); 
  _cnx.push(['referrerPage', 'dataLayer[0].pageName']);
  _cnx.push(['referrerUrl', 'https://pharmaca.com/checkout/onepage/success/']);
  var coupon = false;
  if (dataLayer[0].ecommerce.purchase.actionField.coupon.length > 0) {
      coupon = true
  }
  _cnx.push(['couponApplied', coupon]);

  (function (w, d, t) {
    var s = d.createElement(t);
    s.async = true;
    s.src = '//insights.bizrate.com/js/init.js';
    var h = d.getElementsByTagName(t)[0]; h.parentNode.insertBefore(s, h);
  })(window, document, 'script');


