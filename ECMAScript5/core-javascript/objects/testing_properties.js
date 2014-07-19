var o = {x:1};
console.log("x" in o);//true
console.log("y" in o);//false
console.log("toString" in o);//true

console.log(o.hasOwnProperty("x"));
console.log(o.hasOwnProperty("y"));
console.log(o.hasOwnProperty("toString"));

var o2 = Object.create({y:2});
o2.x = 1;
console.log(o2.propertyIsEnumerable("x"));//true
console.log(o2.propertyIsEnumerable("y"));//false
console.log(Object.prototype.propertyIsEnumerable("toString"));//false

// != & !==
var o3 = {x:1};
console.log(o3.x !== undefined);//true
console.log(o3.y !== undefined);//false
console.log(o.toString !== undefined);//true


//whose value is not null or undefined
if(o3.x != null) {
    console.log("o3.nextSibling != null >> true");
}
//whose value does not convert to false
if(o3.x){
    console.log("o3.x >> true");
}
