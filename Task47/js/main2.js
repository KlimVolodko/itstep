let button = document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){

        let input = document.querySelector("#number");
        let x = +input.value; // извлечь текст из поля ввода
        let input1 = document.querySelector("#number1");
        let y = +input1.value;
        
        let p = document.querySelector("p");

if (x+y>= 0) {
    
    p.innerHTML = x+y;
}
    alse {
       
        p.innerHTML = "jib,rf";
    }
    });

}