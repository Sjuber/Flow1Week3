//Observe: no return type, no type on parameters

function add(n1, n2) {
    return n1 + n2;
}

var sub = function (n1, n2) {
    return n1 - n2;
};

var mul = function (n1, n2) {
    return n1 * n2;
};

var div = function (n1, n2) {
    return n1 / n2;
};

var cb = function (n1, n2, callback) {
    try{
        return "Result from the two numbers: " + n1 + " and " + n2 + "=" + callback(n1, n2);
    } catch(e){
        console.error(e.name + ': ' + e.message)
    }
};

console.log(add(1, 2));    // What will this print? 3
console.log(add);          // What will it print? and what does add represent? says what function is added
console.log(add(1, 2, 3)); // What will it print? 3, igonores the 3
console.log(add(1));	  // What will it print? NaN
console.log(cb(3, 3, add)); // What will it print? the text and 6 is result
console.log(cb(4, 3, sub)); // What will it print? the text and 1 is result
console.log(cb(3, 3, add())); // What will it print (and what was the problem)? add() is a callback, not a function in this case
console.log(cb(3, "hh", add));// What will it print? 3hh
console.log(cb(5,2,mul));
console.log(cb(3,5,div));
console.log(cb(add(),sub(),mul));
