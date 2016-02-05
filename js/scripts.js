function Pizza(pizzaSize, toppings, quantity) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.quantity = parseInt(quantity);
  this.cost = 0;
}

Pizza.prototype.sizePrice = function(){
  var cost;
    if (this.pizzaSize === "small"){
    cost = 5;
  } else if(this.pizzaSize === "medium"){
    cost = 8;
  } else if(this.pizzaSize === "large"){
    cost = 10;
  } else {
    cost = 0;
  }
  return cost * this.quantity;
}

Pizza.prototype.addedToppings = function(){
  var toppingsChoices = this.toppings.toString();

  return this.quantity + " " + this.pizzaSize + " Pizzas " + toppingsChoices;
}

function Profile(name, address, pizzaHistory){
  this.name = name;
  this.address = address;
  this.pizzaHistory = [];
}

Profile.prototype.totalCost = function(){
  var totalNumber = 0;
  this.pizzaHistory.forEach(function(Pizza){
    totalNumber = totalNumber + Pizza.quantity;
  });
  return totalNumber;
}
//-----------------------------jQuery-------------------------------------//
$(document).ready(function() {

  $("form#userProfile").submit(function(event){
    event.preventDefault();

    var userName = $("input#name").val();
    var userAddress = $("#Address").val();
    var userOrder = new Profile (userName, userAddress);

    var selectedSize = $("input[name='optionsRadiosSML']:checked").val();
    var selectedToppings = []
    $("input[name='toppingCheck']:checked").each(function(){
      selectedToppings.push($(this).val());
    });
    var selectedQuant = $("#quantity").val();
    var pizzaHistory = [];
    var newPizza = new Pizza(selectedSize, selectedToppings, selectedQuant);
        // newPizza.pizzaHistory.push($(newPizza).val());
    newPizza.cost = newPizza.sizePrice();
console.log(newPizza);


    $(".orderConfirm").show();
    $(".printName").text(userOrder.name);
    $(".printAddress").text(userOrder.address);
    $(".toppings").text(newPizza.toppings);
    $("#printAdd").append(newPizza.selectedSize);
    $("#printTotal").append(newPizza.cost);
  });
});
