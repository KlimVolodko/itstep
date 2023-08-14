class Person {
    age;
    fullname;

    constructor(age, fullname){
        this.age = age;
        this.fullname = fullname;
    }

    toString(){
        return `Age: ${this.age}, name: ${this.fullname}`;
    }
}

class Driver extends Person {
    experience;

    constructor(age, fullname, experience){
        super(age, fullname);
        this.experience = experience;
    }    
    toString(){
        return `Age: ${this.age}, name: ${this.fullname}, experience: ${this.experience}`;
    }  
}
class Engine {
    power;
    company;

    constructor(power,company){
        this.power = power;
        this.company = company;
    }      
    toString(){
        return `Power: ${this.power}, Marka: ${this.company}`;
    }
}
class Car{
    carClass;
    engine;
    driver;
    marka;

    constructor(carClass,engine, driver, marka){
        this.carClass = carClass;
        this.engine = engine;
        this.driver = driver;
        this.marka = marka;
    } 
    start (){
        this.engine.power = 19;
    }
    stop (){
        this.engine.power = 0;
    }
    turnLeft (){
        console.log("налево")
    }
    turnRight (){
        console.log("направо")
    }
       toString(){
        return `carClass ${this.carClass}, engine ${this.engine.toString()}, driver ${this.driver.fullName}, ${this.driver.experience}, marka ${this.marka}`;
    }
}

let engineCar = new Engine(150,"Rrr");
let driverCar = new Driver("Max","Mi", 20);

class Lorry extends Car{
    carrying;

    constructor(carClass,engine, driver, marka, carrying){
        super(carClass,engine, driver, marka);
        this.carrying = carrying;
    }    
    toString(){
        return `carClass ${this.carClass}, engine ${this.engine}, driver ${this.driver}, marka ${this.marka}, carrying ${this.carrying}`;
    }  
} 

class Sportcar extends Car{
    speed;

    constructor(carClass,engine, driver, marka, speed){
        super(carClass,engine, driver, marka);
        this.speed = speed;
    }    
    toString(){
        return `carClass ${this.carClass}, engine ${this.engine}, driver ${this.driver}, marka ${this.marka}, speed ${this.speed}`;
    }  
} 


let newCar = new Sportcar("Sport car", engineCar, driverCar, "Porshe", 300 );

console.log(newCar.toString());
newCar.start();
console.log(newCar);
newCar.stop();
console.log(newCar);
newCar.engine.power = 600;
newCar.speed = 350;
console.log(newCar);

