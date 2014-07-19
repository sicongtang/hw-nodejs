o = {x:1, y:{z:[false,null,""]}};
s = JSON.stringify(o);
p = JSON.parse(s);
console.log(o);
console.log(s);
console.log(p);
