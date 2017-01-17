var shoppingBasket = {
  items: [],
  amount: 0,
  
  add: function(item){
    this.items.push(item);
  },

  remove: function(item){
    this.items.splice(this.items.indexOf(item), 1);
  },  


  total: function(){
  this.amount = 0;
  for(var item of this.items){
    this.amount += item.price
    }
  return this.amount;
  },

  discount: function(){
    if(this.amount >= 20){
      this.amount = this.amount * 0.9;
      return "You get 10% off "+ this.amount;
    }
    else {
      return "Sorry not enough for discount";
    }  
  }


};





module.exports = shoppingBasket;