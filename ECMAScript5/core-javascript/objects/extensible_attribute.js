//seal nonextensible/nonconfigurable
//freeze nonextensible/nonconfigurable/read-only
var o = Object.seal(Object.create(Object.freeze({x:1}), {y: {value: 2, writable: true}}));
console.log(o);
console.log(o.x);
console.log(o.y);

//only x is enumerable
for(p in o){
    console.log(p);
}

console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(o),"x"));
console.log(Object.getOwnPropertyDescriptor(o,"y"));
console.log("Object.isFrozen = " + Object.isFrozen(o));
console.log("Object.isSealed = " + Object.isSealed(o));
console.log("Object.isExtensible = " + Object.isExtensible(o));

console.log("-------------------test default propertydescriptor in Object.create()");
var o2 = Object.create({x:1});
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(o2),"x"));

