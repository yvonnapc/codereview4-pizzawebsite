describe('Pizza', function(){
  it("allows the user to choose their pizza features", function(){
    var testPizza = new Pizza("Large", ["pepperoni", "jalapeno"], "1");
    expect(testPizza.pizzaSize).to.equal("Large");
    expect(testPizza.toppings).to.eql(["pepperoni", "jalapeno"]);
    expect(testPizza.quantity).to.equal(1);
  });
  it("calculates cost based on size and toppings", function(){
    var testPizza = new Pizza("large", ["pepperoni", "jalapeno"], "1");
  expect(testPizza.sizePrice()).to.equal(10);
  });
  it("calculates a cost based on a small pizza with one topping", function(){
    var testPizza = new Pizza("small", ["pepperoni"], "1");
    expect(testPizza.addedToppings()).to.equal(6);
  });
});
