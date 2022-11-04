//Задача 1
var a, b, nach, kon;
a=18;
b=30;
nach = a*3600+b*60;
c=21;
d=20;
kon = c * 3600 + d * 60;
console.log("Всего секунд", kon - nach);
//Задача 2
var a=3, b=1;
ploshad= a*b;
perimetr = 2*a+2*b;
console.log("отношение S к Р", ploshad/perimetr);
//Задача 3
var deneg=1000, procent=0.1, g1,g2,g3;
g1 = deneg*procent;
g2 = (g1 + deneg)*procent;
g3 = (g2 + g1 + deneg)*procent;
console.log("Cevvf", g1 + g2 + g3);
