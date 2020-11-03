// Button event label-it

buttonlabel = document.getElementById("label-it")
buttonlabel.addEventListener("click", labelit)

function labelit(){
    let userName = prompt('What\'s your name please ?')  
    label = document.getElementById("label")
    //clean label (could change of owner :-) )   
        //todo

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
}
