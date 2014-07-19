var o = {x:1,y:2,z:3};
o.a = function(){};
console.log("loop each properties in object o");
for (p in o) {
    console.log(p);
}

console.log("loop each properties in object o except the inherited properties");
for(p in o){
    if(!o.hasOwnProperty(p)) continue;
    console.log(p);
}

console.log("loop each properties in object o except the function");
for(p in o){
    if(typeof o[p] === "function") continue;
    console.log(p);
}

console.log("loop each properties in object o via Object.keys()")
console.log(Object.keys(o));
for(p in Object.keys(o)){
    console.log(p);
}
console.log("loop each properties in object o via Object.getOwnPropertyNames()");
console.log(Object.getOwnPropertyNames(o));
for(p in Object.getOwnPropertyNames(o)){
    console.log(p);
}
