var all = ["lars", "peter", "jan", "ian"];



console.log(all);
all.forEach(element => console.log(element));
all.filter(name => name.length <= 3);
console.log(" ");
all.filter(name => name.length <= 3).forEach(element => console.log(element));
var all2 = all.map(name => name.toUpperCase());
console.log(all2);
console.log(" ");
var all3 = all.map(e => "<li>" + e + "</li>").join("\n");
var all4 = "<ul> \n" + all3 + "\n</ul>";
//var all4 = all3.join("\n");
console.log(all4);