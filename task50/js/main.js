let form = document.getElementById("reg_form");

form.addEventListener("submit", function(event){
    event.preventDefault(); 

    let div = document.querySelector(".result");

    let name = document.querySelector("#name").value;
    div.innerHTML += `Имя: ${name}<br>` ;
   
    let email = document.querySelector("#email").value;
    div.innerHTML += `email: ${email}<br>` ;

    let phone = document.querySelector("#phone").value;
    div.innerHTML += `Телефон: ${phone}<br>` ;

    let education = document.querySelector("#education").value;
    div.innerHTML += `Образование: ${education}<br>` ;

    
    let sexM = document.querySelector("#sex-m");
    if(sexM.checked){ 
        div.innerHTML += `Пол: ${sexM.value}<br>`;
    }
    let sexF = document.querySelector("#sex-f");
    if(sexF.checked){ 
        div.innerHTML += `Пол: ${sexF.value}<br>`;
    }

    a = [];
    let inputHobby1 = document.querySelector("#hobby-1");
    if(inputHobby1.checked){ 
        a.push(inputHobby1.value);
    }
    let inputHobby2 = document.querySelector("#hobby-2");
    if(inputHobby2.checked){ 
        a.push(inputHobby2.value);
    }
    let inputHobby3 = document.querySelector("#hobby-3");
    if(inputHobby3.checked){ 
        a.push(inputHobby3.value);
    }
    div.innerHTML += `Хобби: ${a.join()}<br>` ;
    

    let about = document.querySelector("#about").value;
    div.innerHTML += `О себе: ${about}<br>` ;
})