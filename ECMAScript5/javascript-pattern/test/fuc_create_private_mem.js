function Gadget() {
  var num = 0;
  this.getNum = function() {
    return num;
  };
}

Gadget.prototype.getName = (function() {
  var name = 'myname';
  return function() {
    return name;
  };

})();

var gad = new Gadget();
console.log('>>' + gad.getNum());
console.log('>>' + gad.getName());
