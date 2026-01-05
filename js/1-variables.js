/* 
    ctrl + shift + a
*/

//   ctrl + /

/* 
    variables  ( box )
        - reuse

*/

a = "red"; // BAD PRACTICSE: variable should be meaningful
color = "red";
address = "kathmandu";
age = 20;
permanent_address = "chitwan"; // snake_case
permanentAddress = "chitwan"; // camelCase
isActive = false;

// 1number = 1  // Invalid
// %number = 100;
// is-active = true

number1 = 100;
number2 = 2000;

console.log("lets start js");

console.log(color);
console.log(address);
console.log(isActive);
console.log("permanent address: ", permanentAddress);

// asdfadsf

/* 
  var 
  vs
  let vs const (ES6)
  
*/

var company = "dell";
var company = "acer";
var brand = company;
console.log("my brand is ", brand);


let price = 1000;
// let price  = 2000; //ERROR
price = 2200;
console.log(price);


const PI = 3.14;
// PI = 3.145 // ERROR
