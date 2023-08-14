document.querySelector(".parent").onmouseover = function(event){
    if(event.target.classList.contains("parent")){
        event.target.classList.add("bg-blue") // добавляем класс с цветом
    }

}
document.querySelector(".parent").onmouseout = function(event){
    if(event.target.classList.contains("parent")){
        event.target.classList.remove("bg-blue","x05","x2")
                
    }

}
// при правом клике увеличиваем
document.querySelector(".parent").oncontextmenu = function(event){
    if(event.target.classList.contains("parent")){
        event.target.classList.add("x2")
        event.preventDefault();
    }

}
// при левом клике уменьшаем
document.querySelector(".parent").onclick = function(event){
    if(event.target.classList.contains("parent")){
        event.target.classList.remove("x2")
        event.target.classList.add("x05")
    }

}

