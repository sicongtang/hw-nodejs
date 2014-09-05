var myFunc = function(param) {
  if (!myFunc.cache[param]) {
    var result = {};
    // ... expensive operation ...
    myFunc.cache[param] = result;
  }
  return myFunc.cache[param];
};
// cache storage
myFunc.cache = {};


var myFunc2 = function() {
  var cachekey = JSON.stringify(Array.prototype.slice.call(arguments)),
    result;
  if (!myFunc2.cache[cachekey]) {
    result = {};
    // ... expensive operation ...
    myFunc2.cache[cachekey] = result;
  }
  return myFunc2.cache[cachekey];
};
// cache storage
myFunc2.cache = {};
