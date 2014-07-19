var a1 = [,,,];
var a2 = new Array(3);
console.log(a1);
console.log(a2);

var r1 = 0 in a1;
var r2 = 0 in a2;

console.log(r1);//true
console.log(r2);//false
