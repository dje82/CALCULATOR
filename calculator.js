var currentValue, firstValue, result, currentOperator
var power = false;

/// Populate calculator screen with touchnum
var touchValue = document.getElementsByClassName("touchnum");
for(let i = 0; i < touchValue.length; i++) {
    touchId = touchValue[i].getAttribute("id")
    touchValue[i].addEventListener("click", populateResult) 
};

function populateResult(idTouch){
    if(checkPowerOn()){
        if(idTouch.target.value === "." && currentValue.toString().includes(".")){
            return
        }
        if(typeof result == "undefined") {
            let screenValue = document.getElementById("screen-result");
            currentValue = screenValue.innerHTML+=idTouch.target.value;
            currentValue = currentValue;
            return currentValue;
        } else {
            clearAll()
            let screenValue = document.getElementById("screen-result");
            currentValue = screenValue.innerHTML+=idTouch.target.value;
            currentValue=currentValue;
            return currentValue;
        }
    }
};


//// Operators touch eventListener
let operatorValue = document.getElementsByClassName("touchop");
for(let i = 0; i < operatorValue.length; i++) {
    operatorValue[i].addEventListener("click", storeFirstValue)
}


function storeFirstValue(e){
    if(checkPowerOn()) {
        if(typeof result !== 'undefined' && typeof currentOperator === 'undefined'){
            firstValue = result;
            currentOperator = e.target.value;
            clearScreenResult()
            currentValue = undefined
            result = undefined
            populateOperationLine();
        } else if (typeof firstValue !== 'undefined' && currentValue !== 'undefined') {
            displayResult();
            firstValue = result;
            currentOperator = e.target.value;
            clearScreenResult()
            result = undefined
            currentValue = undefined
            populateOperationLine();
        } else if(typeof currentValue !== 'undefined') {
            firstValue = currentValue;
            currentValue = undefined
            currentOperator = e.target.value;
            clearScreenResult();
            populateOperationLine();
            return firstValue, currentOperator;        
        }
    }
};

//display result of operate

let resultTouch = document.getElementById("touch=");
resultTouch.addEventListener("click", displayResult);


function displayResult(){
    if(checkPowerOn()){
        if(typeof result === 'undefined' && typeof firstValue ==='undefined' ){
            return
        } else if (typeof result === 'undefined') {
            operate(currentOperator, parseFloat(firstValue), parseFloat(currentValue));
            screenResult = document.getElementById("screen-result");
            screenResult.innerHTML = result;
            operationLine.innerHTML += currentValue + ' = ';
            currentOperator = undefined;    
        } else{
            clearAll();
        }
    }
}

// touch± 

document.getElementById("touch±").addEventListener("click", negative)

function negative(){
    if(checkPowerOn()){
        let screenValue = document.getElementById("screen-result");
        if(typeof currentValue === 'undefined' ){
            return;
        } else{
            num = screenValue.innerHTML * -1
            screenValue.innerHTML = num
            return currentValue = num;
        }
    }
}


///// Math functions
function operate(op, a, b){
    switch (op) {
        case '+' : add(a, b);
            break;
        case '-' : subtract(a, b);
            break;
        case '*' : multiply(a, b);
            break;
        case '/' : divide(a, b);
            break;
    }
}


function add(a,b){
    result = a + b
    return result;
}

function subtract(a,b){
    result = a - b;
    return result;
}

function multiply(a,b){
    result = a * b;
    return result;
}

function divide(a,b){
    if(b===0) {
        result = 'Error divide by 0';
        return result
    }
    result = a / b;  
    return result;
}

//display operation in last-operate

function populateOperationLine(){
    operationLine = document.getElementById("last-operate");
    if(currentValue === undefined) {
        operationLine.innerHTML = firstValue + ' ' + currentOperator + ' '
    } else{
        operationLine.innerHTML = firstValue + ' ' + currentOperator + ' ' + currentValue
    }
    
}

//CLEAR screen-result only

function clearScreenResult(){
    screenResult = document.getElementById("screen-result");
    screenResult.innerHTML=''
}

//Back Touch
let backTouch = document.getElementById("touchBack");
backTouch.addEventListener("click", deleteLast);

function deleteLast(){
    screenResult = document.getElementById("screen-result");
    str = screenResult.innerHTML
    newStr = str.slice(0, -1)
        if (newStr === ''){
            currentValue = undefined   
        } else {
            currentValue=newStr
        }
    screenResult.innerHTML = newStr
}

//CLEAR TOUCH
let clearTouch = document.getElementById("touchC");
clearTouch.addEventListener("click", clearAll);

function clearAll(){
    clearScreenResult()
    operationLine = document.getElementById("last-operate");
    operationLine.innerHTML = ' ';
    currentValue = undefined;
    firstValue = undefined;
    result = undefined
    currentOperator = undefined;
}