function Pizza(pizzaSize, toppings, quantity) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.quantity = parseInt(quantity);
  this.cost = 0;
}

Pizza.prototype.sizePrice = function(){
  var sizePrice;
    if (this.pizzaSize === "Small"){
    sizePrice = 5;
  } else if(this.pizzaSize === "Medium"){
    sizePrice = 8;
  } else if(this.pizzaSize === "Large"){
    sizePrice = 10;
  } return sizePrice * this.quantity;
}

Pizza.prototype.addedToppings = function(){
  return this.quantity + " " + this.pizzaSize + "Pizza's with" + toppingsChoice;
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
    var selectedQuant = $(this).find("#quantity").val();
    var newPizza = new Pizza(selectedSize, selectedToppings, selectedQuant);
    console.log(newPizza);
});
});
