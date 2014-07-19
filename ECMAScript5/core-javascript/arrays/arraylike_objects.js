var a = {"0":"a", "1":"b", "2":"c", length:3}; // An array-like object
//console.log(Array.join(a,"+"));
//console.log(Array.slice(a, 0));
//console.log(Array.map(a, function(x){return x.toUpperCase();}));


console.log(Array.prototype.join.call(a, "+"));
console.log(Array.prototype.slice.call(a, 0));
console.log(Array.prototype.map.call(a, function(x){return x.toUpperCase();}));

