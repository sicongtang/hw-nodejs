function inherit(C, P) {
  var F = function() {};
  F.prototype = P.prototype;
  C.prototype = new F();
  C.uber = P.prototype;
  C.prototype.constructor = C;
}


//A common optimization of the Holy Grail pattern is to avoid creating the temporary (proxy) constructor every time you need inheritance.
//It’s sufficient to create it once and only change its prototype.
//
var inherit = (function() {
  var F = function() {};
  return function(C, P) {
    F.prototype = P.prototype;
    C.prototype = new F();
    C.uber = P.prototype;
    C.prototype.constructor = C;
  };
}());
