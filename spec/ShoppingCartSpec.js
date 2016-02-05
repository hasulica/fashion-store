'use strict';

describe("ShoppingCart", function() {
  var shoppingCart;
  var item;
  var itemTwo;
  var itemThree;
  var itemFour;
  var voucherFive;
  var voucherTen;
  var voucherFifteen;

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
    itemThree = {
       "name":"Lightweight Patch Pocket Blazer",
       "color":"Deer",
       "category":"Men’s Formalwear",
       "price":"175.50",
       "quantity":"1"
    };
    itemFour = {
       "name":"Flip Flops",
       "color":"Blue",
       "category":"Men's Footwear",
       "price":"19.00",
       "quantity":"0"
    };
    voucherFive = new Voucher(5);
    voucherTen = new Voucher(10);
    voucherFifteen = new Voucher(15);
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
    expect(shoppingCart.totalBalance).toEqual(118.00);
  });

  it("can add voucher to total order", function(){
    shoppingCart.add(item);
    shoppingCart.applyVoucher(voucherFive);
    expect(shoppingCart.totalBalance).toEqual(94.00);
  });

  it("cannot add £10 voucher if total order less than £50", function(){
    shoppingCart.add(itemTwo);
    expect(function(){shoppingCart.applyVoucher(voucherTen)}).toThrow(new Error("Your order must be over £50 to apply this voucher."))
  });

  it("can add £15 voucher if total order more than £75 and footwear puchased", function(){
    shoppingCart.add(item);
    shoppingCart.applyVoucher(voucherFifteen);
    expect(shoppingCart.totalBalance).toEqual(84.00);
  });

  it("cannot add £15 voucher if total order less than £75 and no footwear puchased", function(){
    shoppingCart.add(itemThree);
    expect(function(){shoppingCart.applyVoucher(voucherFifteen)}).toThrow(new Error("Your order must be over £75 and you must have purchased at least one footwear item to apply this voucher."));
  });

  it("cannot add voucher to empty cart", function(){
    expect(function(){shoppingCart.applyVoucher(voucherFive)}).toThrow(new Error("No items in cart yet!"));
  });

  it("cannot add items our of order to cart", function(){
    expect(function(){shoppingCart.add(itemFour)}).toThrow(new Error("Item out of stock!"));
  });

  it("cannot add more than one voucher", function(){
    shoppingCart.add(item);
    shoppingCart.applyVoucher(voucherFive);
    expect(function(){shoppingCart.applyVoucher(voucherFive)}).toThrow(new Error("You can only add one voucher!"));
  });

});
