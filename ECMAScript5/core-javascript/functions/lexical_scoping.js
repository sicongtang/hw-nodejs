var foo=1;
function static(){
console.log(foo);
}
(function(){
var foo=2;
static();
})();
