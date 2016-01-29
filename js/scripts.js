function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
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

// $(document).ready(function() {
//
//
//
// });
