// var color; if a variable is declared using var, js create it on top 
/* 
    hoisting
*/

console.log(color); // causes error
let color = "red";

console.log(brand); // prints undefined
var brand = "acer";

doSomething(); // due to hoisting can be called before the function declaration

function doSomething() {
  console.log("do something");
}

calculateDobule();

const calculateDobule = () => {
  console.log("find the double");
};
