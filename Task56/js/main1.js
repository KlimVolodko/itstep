let input = document.querySelector("input");

input.addEventListener("keyup", function(event){ 

    let str = this.value; 
    
        if (event.key === " ") {
            event.preventDefault;
          }
    
    
    document.querySelector(".result").innerHTML = str;
})