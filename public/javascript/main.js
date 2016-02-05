var storeItems = [];
var shoppingCart = new ShoppingCart();

$( document ).ready(function() {
  $('.error').hide();
});

$.get('/javascript/store.json', function(data){
  storeItems = data;
});

$('.item .add').on('click', function(event){
  event.preventDefault();
  var index = this.getAttribute('index');
  try {
    shoppingCart.add(storeItems[index]);
  }
  catch(err) {
    $('.error').show().delay(3000).queue(function(n) {
      $(this).hide();
      n();
    });
    $('.error').html(err);
  }
  $('#item-count').html(shoppingCart.contents.length + ' items.');
  $('#balance').html('£' + shoppingCart.totalBalance);
});

$('.voucher').on('click', function(event){
  event.preventDefault();
  var value = this.getAttribute('id');
  try {
    shoppingCart.applyVoucher(new Voucher(parseInt(value)));
  }
  catch(err) {
    $('.error').show().delay(3000).queue(function(n) {
      $(this).hide();
      n();
    });
    $('.error').html(err);
  }
  $('#item-count').html(shoppingCart.contents.length + ' items.');
  $('#balance').html('£' + shoppingCart.totalBalance);
});

$('.item .remove').on('click', function(event){
  event.preventDefault();
  shoppingCart.remove(storeItems[this.getAttribute('index')]);
  $('#item-count').html(shoppingCart.contents.length + ' items.');
  $('#balance').html('£' + shoppingCart.totalBalance);
});

$('#checkoutButton').on('click', function(event){
  var contents = JSON.stringify(cart.contents);
  var date = new Date();
  date.setTime(date.getTime() + (30 * 1000));
  $.cookie('cart', contents, {expires: date});
});
