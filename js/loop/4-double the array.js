let numbers = [1, 2, 3, 4, 6];

/* 
    code here

 */

// numbers[0] = numbers[0] * 2;

// for (let index = 0; index < numbers.length; index++) {
//   numbers[index] = numbers[index] * 2;
// }

// numbers.forEach((el, index) => {
//   numbers[index] = el * 2;
// });

numbers = numbers.map((el) => {
  return el * 2;
});

// console.log({newNumbers});

console.log(numbers); // should print me [2,4,6,8,12]

/* 

    array functions
    
*/
