function Parent(name) {
  this.name = name || 'Adam';
}

Parent.prototype.say = function() {
  console.log("hello " + this.name);
  return this.name;
}

function Child() {
  Parent.apply(this, arguments);
}

Child.prototype = new Parent();

var kid = new Child('Patrick');
console.log('print :' + kid); // "Patrick"
kid.say(); // "hello Patrick"
delete kid.name;
kid.say(); // "Adam"
