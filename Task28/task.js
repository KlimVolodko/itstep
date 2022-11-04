console.log(`Задача 1`)
var S=9, P=0;
console.log(`периметр P= ${Math.sqrt(S) * 4}`);

console.log(`Задача 2`)
var a = 6, b = 6; c = 6
if (a == b && b == c && c == a) {
    console.log(`треугольник равностороний`);
}
else if (a == b || b == c || a == c) {
    console.log(`треугольник равнобедренный`);
}
else {
    console.log("треугольник разностороний");
}

console.log(`Задача 3`)
a = 6; b = 6; c = 6;
if (a + b > c || c + b > a || a + c > b) {
    console.log(`Треугольник с такими сторонами существует`);
}
else {
    console.log("треугольник с такими сторонами НЕ существует");
}

console.log(`Задача 4`)

console.log(`Задача 5`)
var numb1 = 9, numb2 = 2;
if ((numb1 + numb2) % 2 == 0 ) {
    console.log(`произведение ${numb1 * numb2}`);
}
else {
    console.log(`частное ${numb1 / numb2}`);
}

console.log(`Задача 6`)
var age = 7
if (age < 17) {
    console.log(`малой`);
}
else if (age >= 18 && age <= 69 ) {
    console.log(`взрослый`);
}
else {
    console.log("пожилой");
}

console.log(`Задача 7`)
var R = 8, square =14;

if (Math.sqrt(2 * (square/2)**2) <= R) {
    console.log(`квадрат в круге`);
}
else if ((square / 2) >= R ) {
    console.log(`круг в квадрате`);
}
else {
    console.log("ничего ни во что не поместится");
}

console.log(`Задача 8`)

console.log(`Задача 9`)
var x = 8, у = 9;
if (x > 0 && y > 0) {
    console.log(`в 1 четверти `);
}
else if (x > 0 && y > 0) {
    console.log(`круг 2 в круге 1`);
}
else if (center2 - center1 + R1 < R2) {
    console.log(`круг 1 в круге 2`);
}
else {
    console.log("далеко друг от друга");
}


console.log(`Задача 10`)
var R1 = 8, center1 = 14, R2 = 8, center2 = 14;

if (center2 - center1 < R1 + R2) {
    console.log(`пересекаются`);
}
else if (center2 - center1 + R2 < R1) {
    console.log(`круг 2 в круге 1`);
}
else if (center2 - center1 + R1 < R2) {
    console.log(`круг 1 в круге 2`);
}
else {
    console.log("далеко друг от друга");
}

