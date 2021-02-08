function addFunc(a,b){
    return a+b;
}
function subtractFunc(a,b){
    return a-b;
}
function multiplyFunc(a,b){
    return a*b;
}
function divideFunc(a,b){
    return a/b;
}
function operate(operator,a,b){
    if(operator == '+')return add(a,b);
    if(operator == '*')return multiply(a,b);
    if(operator == '-')return subtract(a,b);
    if(operator == '/')return divide(a,b);
}
let display = document.querySelector('.display');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');
let add = document.querySelector('.add');
let subtract = document.querySelector('.subtract');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let percentage = document.querySelector('.percentage');
let dot = document.querySelector('.dot');
let clear = document.querySelector('.clear');
let erase = document.querySelector('.erase');
let equal = document.querySelector('.equal');

let aNumber = {
    numer =  
}
let bNumber = 0;

one.addEventListener('click',(e) => {
    alert('1');
})