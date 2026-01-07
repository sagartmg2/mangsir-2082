//  variable :  // box , container
//  <key> =  <value>

age = 20;
isInactive = false; // camelCase

// var vs let vs const

//  variable declaration and initialization

let counter = 0;
// let counter = 100 // error
counter = 10; // re-initialization
counter = 20;
console.log(counter);

const role = "admin"; // fetch from api-database
// role = "guest"  // error

const PI = 3.145;
// const PI = 3.1453;

console.log("end of file");

let data; // declaration
console.log(data);

//  logics
data = "some api data"; // initiazation
console.log(data);

/* 
   primitive data-types
        String : texts
        Number
            Int :  whole number
            Float : decimal
        Boolean
            true 
            false

        undefined // variable created but no value assigned
        null

    non-primitive data-types  ( collections )
    - objects
    - array
   
*/

// let data = null;
// // fetchData()  // data = "api-data"

let color = "red"; // rgba(255, 0, 0, 1)   #ff0000ff

color = "red,rgb(255,0,0),#ff0000ff";
console.log(color);

let person = "ram";

person = "ram ntc 984023435 ncell 98082345 address kathmandu";
console.log(person);

person = "ram";
let personNcellNumber = 980824234;
let personNtcNumber = 980824234;
let personAddress = "kathmandu";

let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);

person = ["ram", "984025234", "980824343", "kathamndu"];
console.log(person);

//  Object : real-life objects
// let projector = new Projector("white","2022")
/* 

*/

let projector = "white";

projector = {
  // <key> : <value>,
  color: "white",
  makeYear: 2022,
  brand: "acer",
  price: 10000,
};

console.log(projector);

person = {
    name: "ram",
    age: 20,
    tempAddress: "kathmandu",
    ncellNumber: 98083,
};

// 

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.ncellNumber);
console.log(person.tempAddress);