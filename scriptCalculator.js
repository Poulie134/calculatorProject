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
function percentageFunc(a){
    return a/100;
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
let add = document.querySelector('#add');
let subtract = document.querySelector('#subtract');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
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
let dotCountera = 0
let dotCounterb = 0
let result;

function cleareverything(){
    aNumber = ''
    bNumber = ''
    aNumberInt = 0;
    bNumberInt = 0;
    operator = ''
    dotCountera = 0;
    dotCounterb = 0;
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
                if(aNumber.charAt(aNumber.length-1)==".")dotCountera --;
                aNumber = aNumber.substring(0,aNumber.length-1)
                display.textContent = aNumber
            }
            else if(boxy.classList[0] == 'dot'){
                if(dotCountera == 0){
                    aNumber += '.';
                    display.textContent = aNumber;
                    dotCountera ++;
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
            }
        }
        //state 3
        if(stateDiv.classList == 'state3'){
            
            if(boxy.classList[2] == 'number'){
                bNumber += boxy.id
                display.textContent = bNumber
            }
            else if(boxy.classList[2] == 'undo'){
                if(bNumber.charAt(bNumber.length-1)==".")dotCounterb --;
                bNumber = bNumber.substring(0,bNumber.length-1)
                display.textContent = bNumber
            }
            else if(boxy.classList[0] == 'dot'){
                if(dotCounterb == 0){
                    bNumber += '.';
                    display.textContent = bNumber;
                    dotCounterb ++;
                }
            }
            else if(boxy.classList[0] == 'equal'){
                stateDiv.classList.remove('state3')
                stateDiv.classList.add('state4')
                aNumberInt = parseFloat(aNumber);
                bNumberInt = parseFloat(bNumber);
                if(operator == 'add')result = addFunc(aNumberInt,bNumberInt);
                if(operator == 'divide')result = divideFunc(aNumberInt,bNumberInt);
                if(operator == 'subtract')result = subtractFunc(aNumberInt,bNumberInt);
                if(operator == 'multiply')result = multiplyFunc(aNumberInt,bNumberInt);
                display.textContent = result;
                aNumber = String(result);
                bNumber = '';
                dotCounterb = 0;
                operator = '';
            }
        }
        
        //state 4
        if(stateDiv.classList == 'state4'){
            if(result == Infinity){
                cleareverything();
                stateDiv.classList.remove('state4');
                stateDiv.classList.add('state1');
            }
            if(boxy.classList[2] == 'number'){
                if(aNumber.indexOf('.')>-1)dotCounter=0;
                aNumber += boxy.id;
                display.textContent = aNumber;
                stateDiv.classList.remove('state4');
                stateDiv.classList.add('state1');
                }
            if(boxy.classList[2] == 'operator'){
                if(aNumber.indexOf('.')>-1)dotCounter=0;
                operator = boxy.id;
                stateDiv.classList.remove('state4')
                stateDiv.classList.add('state2')
            }
            if(boxy.classList[2] == 'undo'){
                if(aNumber.charAt(aNumber.length-1)==".")dotCounter --;
                aNumber = aNumber.substring(0,aNumber.length-1)
                display.textContent = aNumber
                if(aNumber.indexOf('.')>-1)dotCounter=0;
            }
        }
        console.log(stateDiv.classList[0]);
    });
});