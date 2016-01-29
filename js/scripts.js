function Pizza(size, toppings, quantity) {
  this.size = size;
  this.toppings = toppings;
  this.quantity = parseInt(quantity);
  this.cost = 0;
}

Pizza.prototype.sizeCost = function(){
  var sizeCost;
  if (this.size === small){
  sizeCost = 5;
  } if(this.size === medium){
  sizeCost = 8;
  } if(this.size === large){
   sizeCost = 10;
  }
}
 
Pizza.prototype.numberOf = function(){
  var totalNumber = 0;
  this.pizzasOrdered.forEach(function(Pizza){
    totalNumber = totalNumber + Pizza.quantity;
  });
  return totalNumber;
}

Pizza.prototype.totalCost = function(){
  var orderTotal = 0;
  this.pizzasOrdered.forEach(function(Pizza){
    orderTotal = orderTotal + Pizza.quantity;
  })
}

$(document).ready(function() {
  $("form#dallas").submit(function(event){
    event.preventDefault();
    var selectedSize =

  });


});
