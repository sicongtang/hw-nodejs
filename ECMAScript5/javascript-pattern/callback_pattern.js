var myapp = {};
myapp.color = "green";
myapp.paint = function(node) {
  node.style.color = this.color;
};

var findNodes = function(callback, callback_obj) {
    if (typeof callback === "string") {
      callback = callback_obj[callback];
    }
    //...
    if (typeof callback === "function") {
      callback.call(callback_obj, found);
    }
    // ...
};

findNodes(myapp.paint, myapp);
//you don’t repeat the object twice
findNodes("paint", myapp);
