//objects literal
var empty = {};
var point = {x:0, y:0};
var point2 = {x:point.x, y:point.y+1};
var book = {"main title": "Javascript",
            'sub-title': "Definitive guide",
            "for": "all audience",
            author: {
                firstname: "David",
                surname: "Flanagan"
            }
}

console.log(empty);
console.log(point);
console.log(point2);
console.log(book);

//creating object with new
var o = new Object();
var a = new Array();
var d = new Date();
var r = new RegExp();

//Object.create()
var o1 = Object.create(null);
//This will inherit property x and y, but only show when explictly access
var o2 = Object.create({x:1, y:2});
var o3 = Object.create(Object.prototype);

console.log(o1);
console.log(o2);//output {}
console.log(o2.x);//output 1
console.log(o2);//print again
console.log(o3);
