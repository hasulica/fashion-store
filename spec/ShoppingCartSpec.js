'use strict';

describe("ShoppingCart", function() {
  var shoppingCart;
  var item;
  var itemTwo;

  beforeEach(function() {
    shoppingCart = new ShoppingCart();
    item = {
       "name":"Almond Toe Court Shoes",
       "color":"Patent Black",
       "category":"Women’s Footwear",
       "price":"99.00",
       "quantity":"5"
    };
    itemTwo = {
       "name":"Flip Flops",
       "color":"Red",
       "category":"Men's Footwear",
       "price":"19.00",
       "quantity":"6"
    };
  });

  it("can add products to cart", function() {
    shoppingCart.add(item);
    expect(shoppingCart.contents).toContain(item);
  });

  it("can remove products from cart", function() {
    shoppingCart.add(item);
    shoppingCart.remove(item);
    expect(shoppingCart.contents).not.toContain(item);
  });

  it("can show total price of items in cart", function(){
    shoppingCart.add(item);
    shoppingCart.add(itemTwo);
    expect(shoppingCart.total()).toEqual(118.00);
  });


});
