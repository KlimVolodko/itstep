//Задание #1
//а) Создайте класс Phone, который содержит поля number, model и weight.
class Phone {
    number;
    model;
    weight;

//б) Добавить конструктор в класс Phone, который принимает на вход три параметра для инициализации переменных класса - number, model и weight. 
    constructor(number, model, weight){
    this.number = number; 
    this.model = model; 
    this.weight = weight; 
    }
//д) Добавить в класс Phone методы: receiveCall, имеет один параметр – имя звонящего. Выводит на консоль сообщение “Звонит {name}”. getNumber – возвращает номер телефона. Вызвать эти методы для каждого из объектов.
    receiveCall(name){
    console.log(`Звонит ${name}`);
    }   
    getNumber(){
    return this.number;
    }
}
//в) Создайте три экземпляра этого класса. 
let Nokia = new Phone (+1123213, "Нокиа", 101);
let Alkatel = new Phone (+11963, "Алка", 102);
let Xiaomi = new Phone (+1185213, "Китай", 103);
//г) Выведите на консоль значения их переменных. 
console.log(Nokia, Alkatel, Xiaomi);

Nokia.receiveCall("ФЕДЯ");
let number = Nokia.getNumber();
console.log(number);

Alkatel.receiveCall("АЛЕКС");
number = Alkatel.getNumber();
console.log(number);


Xiaomi.receiveCall("Макс");
number = Xiaomi.getNumber();
console.log(number);



//Задание #2
//Создайте пример наследования, реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
//а) Класс Student содержит переменные: String firstName, lastName, group. А также, averageMark, содержащую среднюю оценку.
//б) Добавить конструктор в оба класса.
class Student {
    firstName;
    lastName;
    group;
    averageMark;

    constructor(firstName, lastName, group){
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.group = group; 
    this.averageMark = averageMark;

    getScholarship(){
        if (this.averageMark = 5){

        } else {

        }
    }
}
 
class Aspirant {
   
}
    
//в) Создать метод getScholarship() для класса Student, который возвращает сумму стипендии. Если средняя оценка студента равна 5, то сумма 100$, иначе 80$. Переопределить этот метод в классе Aspirant.  Если средняя оценка аспиранта равна 5, то сумма 200$, иначе 180$.
//г) Создать массив типа Student, содержащий объекты класса Student и Aspirant. Вызвать метод getScholarship() для каждого элемента массива.

//Задание #3
//Рядом с мышью — и гусь велик, но вот рядом с драконом... В этой задаче у нас будут гуси (класс Goose) и драконы (класс Dragon). А также их предки, классы BigAnimal или SmallAnimal, кто чей предок — догадайтесь сами. Затем переопределите для Goose и Dragon метод getSize(), так, чтобы они выводили строки о размере животного.

//Задание #4
//а) Создать класс Товар, имеющий переменные имя, цена, рейтинг. 
//б) Создать класс Категория, имеющий переменные имя и массив товаров. Создать несколько объектов класса Категория. 
//в) Создать класс Basket, содержащий массив купленных товаров. 
//г) Создать класс User, содержащий логин, пароль и объект класса Basket. Создать объект класса User.