console.log([].length);
console.log(['a','b','c'].length);

var a = [1,2,3,4,5];

console.log(a);
a.length = 3;
console.log(a);
a.length = 0;
console.log(a);
a.length = 5;
console.log(a);


var a2 = [1,2,3];
Object.defineProperty(a2, "length", {writable:false});
console.log(a2);
a2.length = 0;
console.log(a2);
