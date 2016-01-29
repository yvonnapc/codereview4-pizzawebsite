describe('Pizza', function(){
  it("allows the user to choose their pizza features", function(){
    var testPizza = new Pizza("Large", ["pepperoni", "jalapeno"], "1");
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.topping).to.equal("Pepperoni, jalapeno");
    expect(testPizza.quantity).to.equal("1");
  });
});
