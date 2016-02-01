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

  $("form#dallas").submit(function(event){
    event.preventDefault();

    var userName = $("input#yvonna").val();
    var userAddress = $(".Address").val();
    var userOrder = new Profile (userName, userAddress);

      $("#toppy").each(function(){
      var selectedSize = $(this).find("[name='optionsRadiosSML']:checked").val();
      var selectedToppings = []
        $("input[name='toppingCheck']:checked").each(function(){
          selectedToppings.push($(this).val());
        });
      var selectedQuant = $(this).find("#quantity").val();
      var pizzaHistory = [];
      var newPizza = new Pizza(userName, userAddress, selectedSize, selectedToppings, selectedQuant);
        // newPizza.pizzaHistory.push($(newPizza).val());
        newPizza.cost = newPizza.sizePrice();
console.log(newPizza);

    });


    $(".orderConfirm").show();

    $(".printName").text(userOrder.name);
    $(".printAddress").text(userOrder.Address);
    // $(".toppings").;
    $("#result").append(this.size);

  });
});
