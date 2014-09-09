function Gadget() {
  //private properties inside constructors
  var name = 'iPod';
  // public function
  this.getName = function() {
    return name;
  };
}

Gadget.prototype = (function() {
  //private properties in object literals.
  var browser = "Mobile Webkit";
  // public prototype members
  return {
    getBrowser: function() {
      return browser;
    }
  };
}());

var toy = new Gadget();
console.log(toy.getName()); // privileged "own" method
console.log(toy.getBrowser()); // privileged prototype method
