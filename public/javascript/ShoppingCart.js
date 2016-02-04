'use strict';

function ShoppingCart() {
  this.contents = [];
};

ShoppingCart.prototype.add = function(item) {
  this.contents.push(item);
};

ShoppingCart.prototype.remove = function(item) {
  var index = this.contents.indexOf(item);
  if (index >= 0) {
    this.contents.splice( index, 1 );
  }
};

ShoppingCart.prototype.total = function() {
  var total = 0;
  var numberOfItems = this.contents.length;
  for (var i = 0; i < numberOfItems; i++) {
    total += parseFloat(this.contents[i].price);
  }
  return total;
};
