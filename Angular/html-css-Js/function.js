//function 
function myFunction(p1, p2) {
  return p1 * p2;
}
console.log(myFunction(4, 3));


//events

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}


//strings

let text = "We are the so-called \"Vikings\" from the north.";
document.getElementById("de").innerHTML = text;

//slice
let str = "Apple, Banana, Kiwi";
document.getElementById("demo").innerHTML = str.slice(7, 13);

//substr- similar to slice but the diff is in substr(start,length) and in slice(start,end)

let s = "Apple, Banana, Kiwi";
document.getElementById("d").innerHTML = s.substr(7, 6);


//replace

function myFunction() {
  let tex = document.getElementById("rep").innerHTML;
  document.getElementById("rep").innerHTML = tex.replace("Angular", ".Net");
}

//charat
let vla = "HELLO WORLD";
document.getElementById("char").innerHTML = vla.charAt(0);

//Array function

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * "));


const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruit.slice(2);
document.getElementById("slice").innerHTML = fruit + "<br><br>" + citrus;

//compare method

const points = [40, 100, 1, 5, 25, 10];
document.getElementById("comp").innerHTML = points;
// compare method compare the values and when the return no is negative  first number have lower value than the second one 
points.sort(function (a, b) { return a - b });
document.getElementById("comp").innerHTML = points;

//map function


const numbers2 = points.map(myFunction);

document.getElementById("map").innerHTML = numbers2;

function myFunction(value) {
  return value * 2;
}

//filter function

const number3 = numbers2.filter(myFunc)

document.getElementById("filter").innerHTML = number3

function myFunc(value) {
  return value > 18;
}


// class
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("class").innerHTML =
  myCar.name + " " + myCar.year;