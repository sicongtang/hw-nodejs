//in ECMA5, this function is similar with Object.create(parent);
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

// parent constructor
function Person() {
  // an "own" property
  this.name = "Adam";
}
// a property added to the prototype
Person.prototype.getName = function() {
  return this.name;
};
// create a new person
var papa = new Person();
// inherit
var kid = object(papa);

// test that both the own property
// and the prototype property were inherited
console.log(kid.getName()); // "Adam"
console.log(kid.name);

console.log('------------------------');

// inherit
var kid2 = object(Person.prototype);

console.log(typeof kid2.getName); // "function", because it was in the prototype
console.log(typeof kid2.name); // "undefined", because only the prototype was inherited
console.log(kid2.getName()); // "undefined"
console.log(kid2.name); // "undefined"
