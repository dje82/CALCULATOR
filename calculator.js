/// Populate calculator screen with touchnum

let touchValue = document.getElementsByClassName("touchnum");
for(let i = 0; i < touchValue.length; i++) {
    touchId = touchValue[i].getAttribute("id")
    touchValue[i].addEventListener("click", populateResult) 
};

function populateResult(idTouch){
    let screenValue = document.getElementById("screen-result");
    screen.innerHTML+=idTouch.target.value;
};

function populateCalculResult(result){
    console.log('helle')
    let screenValue = document.getElementById("screen-result");
    screen.innerHTML=result;
};


//ADD Touch
let clearAdd = document.getElementById("touch+")
clearAdd.addEventListener("click", add)

function add(e){
    let lastScreenValue = e.path[2].children[1].innerText
    clear()
    let currentScreenValue = e.path[2].children[1].innerText
    calcul(lastScreenValue, currentScreenValue, 'addition')
}

function calcul(a, b, op) {
    var calcul = 0;
    if(op == 'addition'){
        calcul = a +b;
    }
    populateCalculResult(calcul)
}



function subtract(){
    
}

function multiply(){

}

function divide(){

}


//CLEAR TOUCH
let clearTouch = document.getElementById("touchC");
clearTouch.addEventListener("click", clear);

function clear(){
    screen = document.getElementById("screen-result");
    screen.innerHTML='';
};