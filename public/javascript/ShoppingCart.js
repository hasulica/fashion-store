'use strict';

function ShoppingCart() {
  this.contents = [];
  this.totalBalance = 0;
  this.voucher = false;
};

ShoppingCart.prototype.changeBalance = function(amount) {
  this.totalBalance += amount;
}

ShoppingCart.prototype.add = function(item) {
  if (parseInt(item.quantity) === 0) {
    throw new Error("Item out of stock!")
  }
  this.contents.push(item);
  item.quantity --;
  this.changeBalance(parseFloat(item.price));
};

ShoppingCart.prototype.remove = function(item) {
  var index = this.contents.indexOf(item);
  if (index >= 0) {
    this.contents.splice( index, 1 );
  }
  item.quantity ++;
  this.changeBalance(- parseFloat(item.price));
};

ShoppingCart.prototype.applyVoucher = function(voucher) {
  if(this.totalBalance === 0) {
    throw new Error("No items in cart yet!");
  }
  if(voucher.amount === 10 && this.totalBalance < 50) {
    throw new Error("Your order must be over £50 to apply this voucher.");
  }
  if(voucher.amount === 15) {
    if(this.totalBalance < 75 || !this.shoesInCart()) {
      throw new Error("Your order must be over £75 and you must have purchased at least one footwear item to apply this voucher.");
    }
  }
  if(this.voucher) {
    throw new Error("You can only add one voucher!");
  }
  this.voucher = true;
  this.changeBalance(-voucher.amount);
};

ShoppingCart.prototype.shoesInCart = function() {
  var numberOfItems = this.contents.length;
  for (var i = 0; i < numberOfItems; i++) {
    if (this.contents[i].category.indexOf("Footwear") > -1) {
      return true;
    };
  };
  return false;
};
