function trace(o,m){
    var original = o[m];
    o[m] = function(){
        console.log(new Date(), "Entering:", m);
        var result = original.apply(this, arguments);
        console.log(new Date(), "Exiting:", m);
        return result;
    };
}

var obj = {
    m1: function(x){
        x = x + 1;
        console.log("obj call m1 function, print:" + x);
    }
}

trace(obj,"m1");
obj.m1(2);
