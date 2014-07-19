var s = "JavaScript";
//return string
console.log(Array.prototype.join.call(s, " "));
//return array
console.log(Array.prototype.filter.call(s, function(x) {
        return x.match(/[^aeiou]/);
}));
//return string
console.log(Array.prototype.filter.call(s, function(x) {
        return x.match(/[^aeiou]/);
}).join(""));
