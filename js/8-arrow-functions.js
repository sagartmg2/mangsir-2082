/* 
  arrow functions
    - hoisting
    - first class variables
    - anonynomous functions
    - callback functions
*/


// function findDouble(number) {
//   let result = number * 2;
//   return result;
// }

let findDouble = (number) => {
  let result = number * 2;
  return result;
};


findDouble = (number) =>{ return number * 2 }

findDouble = (number) => number * 2

findDouble = number => number * 2

console.log("double ",findDouble(100));



/* function findSum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
} */

let  findSum = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};

findSum = (firstNumber,secondNumber) => firstNumber+secondNumber

console.log(findSum(1, 2));
