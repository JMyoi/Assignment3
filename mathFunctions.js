function add(a,b){
    return a+b;

}
function subtract(a,b){
    return a-b;

}
function divide(a,b){
    if(b === 0) return NaN;//if the denominator is 0 it will return Not a Number
    return a/b;
    
}
function multiply(a,b){
    return a*b;

}

module.exports = { add, subtract, divide, multiply};


