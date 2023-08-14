//1.Дан прямоугольник, и посчитать S и P
let pryamygol = {
  a: 9,
  b: 7,
  S(){
    return this.a*this.b; //площадь
  },
  P(){
    return this.a*2+this.b*2;
  }
};
console.log(pryamygol.S(), pryamygol.P());  // не забывать скобки () !!!!!!!!
pryamygol.a = 2;
console.log(pryamygol.S(), pryamygol.P()); // не забывать скобки () !!!!!!!!

