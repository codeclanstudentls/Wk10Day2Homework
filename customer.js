var customer = {
  name: "Mr. Shops-a-lot",
  
}

loyalty_card: function(){
  if(loyalty_card === "yes"){
    total.amount = total.amount * 0.05;
    return "Loyalty card holders get a discount";
  }
  else total.amount = total.amount;
    return total.amount;
  };
}


module.exports = customer;