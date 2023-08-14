
//1. Создайте пустой объект user.
let user = {};
console.log(user);
//2. Добавьте свойство name со значением John.
user.name = 'John';
console.log(user);
//3. Добавьте свойство surname со значением Smith.
user.surname = 'Smith';
console.log(user);
//4. Измените значение свойства name на Pete.
user.name = 'Pete';
console.log(user);
//5. Удалите свойство name из объекта.
delete user.name;
console.log(user);

//6. Пусть дан объект с зарплатами сотрудников
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
//Найти сумму зарплат с использованием for..in.
for (var prop in salaries) {
    let sum = salaries;
    prop++;
    
  }
  console.log(prop, salaries);
  console.log(user);



//7. Дан объект 
user = {
  name: "Иван",
  age: 30
};
//Написать код, который создает его точный клон (новый объект с такой же структурой).

//8. Дан объект 
user = {
  name: "Иван",
  sizes: {
    height: 182,
    width: 50
  }
};
//Написать код, который создает его точный клон (новый объект с такой же структурой).

let copy = Object.assign({}, user);
console.log(copy, "------", user);


//Дан прямоугольник, и посчитать S и P
let 
