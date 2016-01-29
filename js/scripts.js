function Pizza(size, toppings, quantity) {
  this.sizePizza = sizePizza;
  this.toppings = toppings;
  this.quantity = parseInt(quantity);
  this.cost = 0;
}

Pizza.prototype.sizePrice = function(){
  var sizePrice;
    if (this.sizePizza === "Small"){
    sizePrice = 5;
  } else if(this.sizePizza === "Medium"){
    sizePrice = 8;
  } else if(this.sizePizza === "Large"){
    sizePrice = 10;
  } return (sizePrice);
}

Pizza.prototype.about = function(){
  var toppingsChoice = this.toppings.toString();
  return this.quantity + " " + this.sizePizza + "Pizza's with" + toppingsChoice;
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
//-----------------------------jQuery-------------------------------------//
$(document).ready(function() {
  $("form#dallas").submit(function(event){
    event.preventDefault();
    var selectedSize = $(this).find("input[name='optionsRadiosSML']:checked").val();
    var selectedToppings = $(this).find("input[name='toppingCheck']:checked").val();

console.log(newPizza);
});
});
