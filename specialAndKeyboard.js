//powerON Touch
let powerTouch = document.getElementById("touchON");
powerTouch.addEventListener("click", powerOn);

function powerOn(){
    if(power == false) {
        powerTouch.innerHTML = "On";
        powerTouch.classList.replace("PowerOFF", "PowerON");
        power = true;
    } else if(power == true) {
        powerTouch.innerHTML = "Off";
        powerTouch.classList.replace("PowerON", "PowerOFF");
        clearAll()
        power = false;
    }
}

//checkPowerON

function checkPowerOn(){
    if(power == false) {
        alert('Please turn it ON')
    } else {
        return power
    }
}


/// KEYBOARD
document.addEventListener("keyup", keyboard)

function keyboard(e){
    if(e.key == 'Escape'){
        clearAll()
    }
}