var temp = "This is a string";
var count = (temp.match(/s/g) || []).length;

console.log(count);