/*
1.Создайте массив с числами.Выведите его в консоль с помощью console.log и цикла for.
2.Создайте массив со строками.Выведите его в консоль с помощью console.log  и цикла while.
3.Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов не используя цикл.
4.Создайте массив с числами.Выведите на экран сумму элементов этого массива.
5.Дан следующий массив: ['a', 'b', 'c', 'd'].Выведите с помощью этого массива следующую строку: 'a+b+c+d' с использованием цикла и без.
6.Создайте массив с произвольными элементами.Выведите на экран последний и препоследний элемент этого массива.
7.Создайте массив с элементами 'a', 'b', 'c'.Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.
8.Создайте массив с числами.Прибавьте к каждому элементу массива число 3. Выведите на экран измененный массив. 
9. Создайте массив с элементами 1, 2 и 3. С помощью оператора++ увеличьте каждый элемент массива на единицу.
10. Пусть дан такой массив: [1, 2, 3].Добавьте ему в конец элементы 4 и 5.
*/
console.log(`Задача 1`)
let a = [5,6,7,8,8];
for (let i = 0; i < a.length; i++){
    console.log(a[i]);
}

console.log(`Задача 2`)
let b = ['5', '6', '7', '8', '8'];
let i = 0;
while (i < b.length) {
    
    console.log(a[i]);
    i++;
}


console.log(`Задача 3`)
let c = [5, 6, 7, 8, 8];
console.log(c[0], c[1], c[2], c[3], c[4]);

console.log(`Задача 4`)
a = [5, 5, 5, 5, 5];
var sum = 0;
for (let i = 0; i < a.length; i++) {
    sum += a[i];
}
console.log(sum);

console.log(`Задача 5`)

console.log(`Задача 6`)
let m = [1, 2, 3, 5,4,3,2,6];
console.log("первый элемент", m[0],"последний", m[m.length-1]);

console.log(`Задача 7`)
let y = ['a','b','c'];
y[0] = 1;
y[1] = 2;
y[2] = 3;
console.log(y);

console.log(`Задача 8`)
 c = [1, 2, 3, 4, 5];
for (let i = 0; i < a.length; i++){
    c[i] += 3;
 }
console.log(c);

console.log(`Задача 9`)
c = [1, 2, 3, 4, 5];
for (let i = 0; i < a.length; i++) {
    c[i]++;
}
console.log(c);



console.log(`Задача 10`)
let v = [1,2,3];
v[3] = 4;
v[4] = 5;
console.log(v);

console.log(`проверка`)
console.log(null || 2 || undefined); //
console.log(1 && null && 2); // ?
console.log(null || 2 && 3 || 4); // ?
console.log(-1 || 0); // ?
console.log(-1 && 0); // ?
console.log(null || -1 && 1); // ?
console.log(true || 2 && (x = 3) || 4); 
console.log(2 && (x = 3)); 
console.log(true || 2); 
console.log(1 && 0);
console.log(5 || 2);
console.log(5 && 2);


var arr = [];
for (i = 0; i < 10; i++) {
    arr[i] = i + 1;
}

var sum = 0;
for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        sum = sum + arr[i][j];
    }
}

console.log(sum);
