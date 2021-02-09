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
let stateDiv = document.querySelector('#container')

let aNumber =''
let aNumberInt;
let bNumber =''
let bNumberInt;
let operator = ''
let dotCounter = 0

function cleareverything(){
    aNumber = ''
    bNumber = ''
    aNumberInt = 0;
    bNumberInt = 0;
    operator = ''
    dotCounter = 0
}
btns = document.querySelectorAll('.boxy');
btns.forEach(boxy => {
    boxy.addEventListener('click',(e) => {
        //clear button 
        if(boxy.classList[0]=='clear'){
            stateDiv.classList.remove('state1','state2','state3','state4')
            stateDiv.classList.add('state1')
        }

        // State 1 made
        if(stateDiv.classList == 'state1'){
            if(boxy.classList[2] == 'number'){
                aNumber += boxy.id
                display.textContent = aNumber
            }
            else if(boxy.classList[2] == 'undo'){
                if(aNumber.charAt(aNumber.length-1)==".")dotCounter --;
                aNumber = aNumber.substring(0,aNumber.length-1)
                display.textContent = aNumber
            }
            else if(boxy.classList[0] == 'dot'){
                if(dotCounter == 0){
                    aNumber += '.';
                    display.textContent = aNumber;
                    dotCounter ++;
                }
            }
            else if(boxy.classList[0] == 'clear'){
                cleareverything();
                display.textContent = aNumber;
            }
            else if(boxy.classList[2] == 'operator'){
                if(aNumber == '')return;
                operator = boxy.id;
                stateDiv.classList.remove('state1');
                stateDiv.classList.add('state2');
                console.log(operator);
            }         
        }

        //state 2
        if(stateDiv.classList == 'state2'){
            if(boxy.classList[2] == 'operator' ){
                operator = boxy.id;
                console.log(operator);
            }
            if(boxy.classList[2] == 'number'){
                stateDiv.classList.remove('state2')
                stateDiv.classList.add('state3')
                bNumber += boxy.id
                display.textContent = bNumber
            }
        }
        //state 3
        if(stateDiv.classList == 'state3'){

        }

    });
});