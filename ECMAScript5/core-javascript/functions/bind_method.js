var sum = function(x,y){return x+y;};
var succ = sum.bind(null,1);
var res = succ(2);
console.log(res);

function f(y,z){
    return this.x + y + z;
}

var g = f.bind({x:1},2);
var result = g(3);
console.log(result);

