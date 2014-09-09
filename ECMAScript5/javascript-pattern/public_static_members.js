// constructor
var Gadget = function(price) {
  this.price = price;
};

// a static method
Gadget.isShiny = function() {
  // this always works
  var msg = "you bet";
  if (this instanceof Gadget) {
    // this only works if called non-statically
    msg += ", it costs $" + this.price + '!';
  }
  return msg;
};


// a normal method added to the prototype
Gadget.prototype.isShiny = function() {
  return Gadget.isShiny.call(this);
};

Gadget.isShiny(); // "you bet"

var a = new Gadget('499.99');
a.isShiny(); // "you bet, it costs $499.99!"
