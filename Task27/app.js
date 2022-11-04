//Задача 1
var i = 2;
var proiz = 1;

while (i <= 10){
    proiz *=i;
    i +=2;
    console.log(`интеграция ${i/2 - 1}, proiz=${proiz}, ${i}`);
}

console.log(proiz);
console.log(i);