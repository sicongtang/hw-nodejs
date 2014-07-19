o = {x:1};
console.log(delete o.x);
console.log(delete o.x);
console.log(delete o.toString);
console.log(delete 1);

console.log(delete Object.prototype);// false
var x = 1;
console.log(delete this.x);
function f() {}
console.log(delete this.f);
