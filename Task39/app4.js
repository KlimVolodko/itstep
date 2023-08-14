//п
let car = {
  brend: "порше",
  model: "gtr",
  fuel: "дизель",
  color: "black",
  print(){
    console.log(this.brend, this.model);
  } 
}

let auto = {
  __proto__: car,
  country: "USA",
  driver(){
    console.log(this.country);
  },
};
let plain = {
  col: "5",
};
let train = {

}