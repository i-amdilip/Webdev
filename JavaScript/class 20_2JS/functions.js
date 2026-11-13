//EX1
function fn(){
    console.log("Function is called");
}

console.log("Before function call");
fn();

console.log("After function call");



//EX2 function with arguments but no return value
function fn2(a,b){
    console.log("Function is called with arguments:", a, b);
}
fn2(10,20);

//EX3 Function with a return value
function fn3(a){
    let isEven = (a%2==0);
    return isEven;
}
let result = fn3(10);
console.log("Result:", result);
