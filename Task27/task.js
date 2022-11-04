//задача 1
console.log(`Задача 1`)
var a=0, i=1;
while (i <= 10) {
    a = i;
    i++;
    console.log(`a= ${a}`);
}
//задача 2 
console.log(`Задача 2`)
a = 0, i = 10;
while (i <= 20) {
    a = i;
    i++;
    console.log(`a= ${a}`);
}

//задача 2/2 От 20 до 10
console.log(`Задача 2/2`)
a = 0, i = 20;
while (i >= 10) {
    i-=1;
    console.log(`a= ${i+1}`);
}
//задача 3 таблица умножения на 4
console.log(`Задача 3`)
a = 4, i = 1;
while (i <= 10) {
    a =4*i;
    i++;
    console.log(`a= ${a}`);
}
//задача 4
console.log(`Задача 4`)
var s = 0; // сумма 
var n = 1; // переменная для просмотра всех чисел начиная с 1
i = 1; // количество сложенных чисел

while (i <= 10) {

    if (i % 2 == 0) {
        s+= i;
        
        } 

    i++;
    
} console.log(`a= ${s}`);