//Задача 1
var x  
x = -1;
if (x > 0) {
    console.log("x - положительное");
} else if(x==0){
    console.log("x = 0");
} else {
    console.log("x - отрицательное");
} 
//Задача 2
var a1 = 56, a2 = -4;
if (a1 < 0) {
    console.log("a1 - отрицательное");
} else if (a2 < 0) {
    console.log("a2 - отрицательное");
} else {
    console.log("нету");
} 
//Задача 3

var a3 = 56, a4 = -4;
if (a3 > a4) {
    console.log("больше=", a3);
} else if (a4 > a3) {
    console.log("больше=", a4);
} else {
    console.log("a4=a3");
} 
//Задача 4

var a5 = -2, a6 = -3, a7 = 0;
console.log("Задача 4", a5, a6, a7);
if ((a5 >= a5) && (a5 >= a7)) {
    console.log("больше=", a5);
} else if ((a6 >= a5) && (a6 >= a7)) {
    console.log("больше=", a6);
} else {
    console.log("больше=", a7);
} 

//Задача 5  не правильно
var a8 = 1, a9 = 2, a10 = 3;
console.log("Задача 5", a8, a9, a10);
if ((a8 > a9) && (a8 < a10)) {
    console.log("среднее=", a8);
} else if ((a9 > a10) && (a9 < a8)) {
    console.log("среднее=", a9);
} else {
    console.log("среднее=", a10);
} 

//Задача 6
var b1 = 5, b2 = 8, b3 = 20;
    console.log("Задача 6", b1, b2, b3);
if ((b1 > b2 + b3) || (b2 > b1 + b3) || (b3 > b2 + b1)) {
    console.log("треугольник несуществует");
} else {
    console.log("треугольник существует");
} 

//Задача 12

var  z = 0, c = 0;
if (z != 0) {
    console.log(c/z);
} else if(z==0 && c==0){
    console.log("x=любой");
} else{
    console.log("нет корней");
}





 