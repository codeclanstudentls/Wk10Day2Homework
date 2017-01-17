var basket = require('../shopping_basket');
var item = require('../item');
var assert = require('assert');

describe('Shopping Basket', function(){
  // beforeEach(function(){
  //   basket.length = 0;
  // }); probably not a good idea as it would empty the basket everytime?
it('should be an empty basket before shopping', function(){
  assert.equal(0, basket.items.length);
});

it('should be able to add an item to basket', function(){
  basket.add({ item: "Milk", price: 0.80 });
  assert.equal(1, basket.items.length);
});

it('should be able to remove item from basket', function(){
  basket.remove({ item: "Milk", price: 0.80 });
  assert.equal(0, basket.items.length);
});

it('should be able get total price', function(){
  basket.add({ item: "Milk", price: 0.80 });
  basket.add({ item: "Bread", price: 1.00 });
  basket.add({ item: "Eggs", price: 0.70 });
  basket.total();
  assert.equal(2.50, basket.amount);
});

it('should be able to get 10% discount', function(){
  basket.add({ item: "Blue Milk", price: 40.50 });
  basket.total();
  basket.discount();
  assert.equal(38.70, basket.amount);
})


});