//arguments object has different behaviour in the strcit mode of ECMAScript5
'use strict';
function f(x){
    console.log(x);
    arguments[0] = null;//in strcit mode, this cannot be assigned.
    console.log(x);//in strict mode, value will be remained same.
}

f(1);
