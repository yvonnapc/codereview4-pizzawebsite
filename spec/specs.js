describe('Pizza', function(){
  it("allows the user to choose their pizza features", function(){
    var testPizza = new Pizza("Large", ["pepperoni", "jalapeno"], "1");
    expect(testPizza.pizzaSize).to.equal("Large");
    expect(testPizza.toppings).to.eql(["pepperoni", "jalapeno"]);
    expect(testPizza.quantity).to.equal(1);
  });
});
