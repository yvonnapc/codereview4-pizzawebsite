function Pizza(pizzaSize, toppings, quantity) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.quantity = parseInt(quantity);
  this.cost = 0;
}

Pizza.prototype.sizePrice = function(){
  var cost;
    if (this.pizzaSize === "Small"){
    cost = 5;
  } else if(this.pizzaSize === "Medium"){
    cost = 8;
  } else if(this.pizzaSize === "Large"){
    cost = 10;
  } return cost;

Pizza.prototype.addedToppings = function(){
  var toppingsChoice = this.toppings.toString();
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
  });
}
//-----------------------------jQuery-------------------------------------//
$(document).ready(function() {
  $("form#dallas").submit(function(event){
    event.preventDefault();
    var userName = $("input#name").val();
    var selectedSize = $(this).find("input[name='optionsRadiosSML']:checked").val();
    var selectedToppings = $(this).find();
    var selectedQuant = $(this).find("#quantity").val();

    var newPizza = new Pizza(selectedSize, selectedToppings, selectedQuant);

    $(".printName").text("input#yvonna");
    $(".orderConfirm").show();
    $("#result").append(this.size);

  });
});
