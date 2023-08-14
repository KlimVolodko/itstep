// добавить собачку которая мукает и котик гавкает)
let animal = {
  name: "Барсик",
  color: "black",
  weight: 9,
  eat(food){
      this.weight += food;
  }
}

let cat = {
  sound(){
      console.log("Meow");
  },
  __proto__: animal
}

console.log(cat);

let dog = {
    __proto__: animal,
    sound(){
      console.log("гав");
  },
 }
 
 dog.sound();
 cat.sound();

