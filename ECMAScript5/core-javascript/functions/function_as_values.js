var o = {square: function(x){return x*x;}};
var y = o.square(4);
console.log(y);

var a = [function(x){return x*x;}, 4];
console.log(a[0](a[1]));
