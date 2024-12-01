// Anonymous Function
const createHelloWorld = function() {
    return function(){
        return "Hello World";
    }
}

// Array function
const add = (a, b) => {
    return a + b
}

// Closure
let c = 5;
function add(a, b){
    return a + b + c;
}
console.log(add(1, 2));