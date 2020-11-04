var result;

/// Populate calculator screen with touchnum
let touchValue = document.getElementsByClassName("touchnum");
for(let i = 0; i < touchValue.length; i++) {
    touchId = touchValue[i].getAttribute("id")
    touchValue[i].addEventListener("click", populateResult) 
};

function populateResult(idTouch){
        let screenValue = document.getElementById("screen-result");
        return currentValue = screenValue.innerHTML+=idTouch.target.value;
};


//// Operators touch eventListener
let operatorValue = document.getElementsByClassName("touchop");
for(let i = 0; i < operatorValue.length; i++) {
    operatorValue[i].addEventListener("click", storeFirstValue)
};


function storeFirstValue(e){
    firstValue = currentValue;
    currentOperator = e.target.value;
    clearScreenResult()
    populateOperationLine()        
    return firstValue, currentOperator;
}


///// Math functions
function operate(op, a, b){
    switch (op) {
        case '+' : add(parseInt(a), parseInt(b));
            break;
        case '-' : subtract(parseInt(a), parseInt(b));
            break;
        case '*' : multiply(parseInt(a), parseInt(b));
            break;
        case '/' : divide(parseInt(a), parseInt(b));
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
        result = 'ERROR DIVIDE BY 0';
        return result
    }
    result = a / b;  
    return result;
}

//display result of operate

let resultTouch = document.getElementById("touch=");
resultTouch.addEventListener("click", displayResult);


function displayResult(){
    operate(currentOperator, firstValue, currentValue);
    screenResult = document.getElementById("screen-result");
    screenResult.innerHTML = result;
    operationLine.innerHTML += currentValue + ' ='
    currentOperator ='';
}

//display operation in last-operate

function populateOperationLine(){
    operationLine = document.getElementById("last-operate");
    operationLine.innerHTML = firstValue + ' ' + currentOperator + ' '
}


//Back Touch
let backTouch = document.getElementById("touchBack");
backTouch.addEventListener("click", deleteLast);

function deleteLast(){
    screenResult = document.getElementById("screen-result");
    str = screenResult.innerHTML
    newStr = str.slice(0, -1)
    screenResult.innerHTML = newStr
    currentValue=newStr
}

//CLEAR TOUCH
let clearTouch = document.getElementById("touchC");
clearTouch.addEventListener("click", clearAll);

function clearAll(){
    screenResult = document.getElementById("screen-result");
    screenResult.innerHTML='';
    currentValue= '';

    operationLine = document.getElementById("last-operate");
    operationLine.innerHTML = ' ';
}

//CLEAR screen-result only

function clearScreenResult(){
    screenResult = document.getElementById("screen-result");
    screenResult.innerHTML=''
    currentValue= '';
}

/// KEYBOARD

    //ESC Touche = C
    toucheEsc = document.addEventListener("keyup", keyboard)

    function keyboard(e){
        if(e.key == 'Escape'){
            clearAll()
        }
    }