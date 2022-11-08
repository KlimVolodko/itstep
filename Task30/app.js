/*
1. Дан массив из n элементов и число k < n.Вывести последние k элементов массива.
2. Дан массив из n элементов и число k.Вывести все элементы кратные числу k.
3. Дан массив из n элементов.Вывести сумму максимального и минимального элемента.
4. Дан массив из n элементов.Поменять максимальный и минимальный элементы местами.
5. Дан массив из n элементов.Создать 2 новых массива.В 1 первый записать все элементы с четными индексами, во 2 - с нечетными.
6. Дан массив из n элементов.Увелить все нечетные элементы на 1 и уменьшить все четные в 2 раза.
7. Дан массив из n элементов и некоторое число x.Проверить наличие числа x в массиве.
8. Дан массив из n элементов и число k < n.Удалить элемент с номером k и сдвинуть на  одну позицию влево все элементы, следующие за ним.
9. Дан массив из n элементов.Проверить, упорядочен ли массив по возрастанию или убыванию.
10. Дан массив из n элементов.Удалить все повторяющие элементы(удалить и сдвинуть следующие за ним).

СОЗДАНИЕ МАССИВА РАНДОМ
const min = 50, max = 100, n = 5;
let a = [];
for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);    
*/
console.log(`Задача 1`)
const min = -50, max = 100, n = 5;
let a = [];
for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

let k = 5;
for (let i = a.length - k; i < a.length; i++){
    console.log(a[i]);
}

console.log(`Задача 2`)
k = 5;
for (let i = 0; i < a.length; i++) {
    if (a[i] % k == 0) {
        console.log(a[i]);
    }  
} 

console.log(`Задача 3`) // сумма макс и мин
let nmax;
let maxElement = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] > maxElement) {
        maxElement = a[i];
        nmax = i; //для задания 4, добавлен для того чтобы потом найти номер элемента 
    }
}
console.log("Максимальный элемент равен " + maxElement);
let nmin;
let minElement = a[0];
for (let i = 1; i < a.length; i++) {
    if (a[i] < minElement) {
        minElement = a[i];
        nmin = i; //для задания 4, добавлен для того чтобы потом найти номер элемента 
    }
}
console.log("Минимальный элемент равен " + minElement);
console.log("сумма", maxElement + minElement);
console.log(nmin, nmax);

console.log(`Задача 4`) // поменять местами мин макс
console.log(a);
a[nmin] = maxElement;
a[nmax] = minElement;
console.log(a);

console.log(`Задача 5`) // поделить массивы с четными нечетными
b = [];
c = [];
let j1 = 0, j2 = 0;
console.log(a);
for (let i = 0; i < a.length; i++) {
    if (a[i] %2 == 0) {
        b[j1] = a[i];
        j1++;
    } else {
        c[j2] = a[i];
        j2++;
    }
} console.log(b); 
console.log(c);

console.log(`Задача 6`) // 
console.log(a);
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        a[i] /= 2;
    } else {
        a[i] += 1;
    }
} 
console.log(a);

console.log(`Задача 7`) //  работает но оказалось неправильно
console.log(a);
let x = 5;
for (let i = 0; i < a.length; i++) {
    if (a[i] == x) {
        console.log("есть");
    } else {
        console.log("нету");
    }
}
