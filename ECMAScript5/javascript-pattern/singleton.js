function Universe() {
  var instance = this;

  this.start_time = 0;
  this.bang = 'big';

  //self-defining function pattern
  Universe = function () {
    return instance;
  };
}


var s1 = new Universe();
var s2 = new Universe();

var result = (s1 === s2);
console.log(result);
