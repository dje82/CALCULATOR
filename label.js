// Button event label-it

let labelOn = false;

buttonLabel = document.getElementById("label-it")
buttonLabel.addEventListener("click", labelit)

buttonUnknow = document.getElementById("unknow")
buttonUnknow.addEventListener("click", cleanLabel)


function labelit(){
if (labelOn === false) {
        let userName = prompt('What\'s your name please ?')  
        label = document.getElementById("label")
        //add label
        var imgHtmlAdd = document.createElement("img")
        imgHtmlAdd.setAttribute("src","/img/label.jpg" )
        imgHtmlAdd.setAttribute("alt", "label")
        imgHtmlAdd.setAttribute("id", "label")
        label.appendChild(imgHtmlAdd)
        

        var nameHtmlAdd = document.createElement("p")
        nameHtmlAdd.setAttribute("id", "label-name")
        nameHtmlAdd.innerHTML = userName
        label.appendChild(nameHtmlAdd)

        return labelOn = true

    } else {
        cleanLabel()
        labelit()
    }

}

function cleanLabel(){
    label = document.getElementById("label");
    label.replaceChildren('')
    return labelOn = false;    
}