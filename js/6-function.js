/* 
    TODO:1 calculate double of a number

    double of 2 is 4
    double of 3 is 6
    double of 4 is 8
    double of 10 is 20



    2 x 2 = 4
    2 x 3 = 6
    2 x 4 = 8
    2 x 10 = 20

*/

// +-/

// let number = 2;
// console.log(`double of  ${number} is ${number * 2}`);

// number = 3;
// console.log(`double of  ${number} is ${number * 2}`);

// number = 10;
// console.log(`double of  ${number} is ${number * 2}`);

function findDouble(number) {
  console.log(`double of  ${number} is ${number * 2}`);
  console.log(`2 X ${number} = ${number * 2}`);
}

// findDouble(2);
// findDouble(10);
// findDouble(50);
// findDouble(100);

/* 
    TODO: calculate sum of 3 digits


    sum of 2 and 3 and 4 is 9
    sum of 6 and 3 and 4 is 13
     

*/

// function findSum(firstNumber, secondNumber) {
//   console.log(`sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`);
// }

// findSum(2, 3);
// findSum(200, 300);

function findSum(firstNumber, secondNumber, thirdNumber) {
  console.log(`sum of ${firstNumber} and ${secondNumber} and ${thirdNumber} is ${firstNumber + secondNumber + thirdNumber}`);
}

// findSum(200, 300, 400);

/* 
TODO:
    using the colors array  print the following

    OUTPUT: 
     - hex value of color white is #FFFFFF
     - hex value of color red is #FF0000
     - hex value of color black is #000000

*/

const colors = [
  { name: "white", hex: "#FFFFFF", rgb: "rgb(255, 255, 255)", arrayIndex: 0 },
  { name: "red", hex: "#FF0000", rgb: "rgb(255, 0, 0)", arrayIndex: 1 },
  { name: "black", hex: "#000000", rgb: "rgb(0, 0, 0)", arrayIndex: 4 },
  { name: "blue", hex: "#0000FF", rgb: "rgb(0, 0, 255)", arrayIndex: 2 },
  { name: "green", hex: "#00FF00", rgb: "rgb(0, 255, 0)", arrayIndex: 3 },
];

function printColorDetails(color) {
  console.log(`Hex value of color ${color.name} is ${color.hex}`);
}

printColorDetails(colors[0]);
printColorDetails({ name: "white", hex: "#FFFFFF", rgb: "rgb(255, 255, 255)", arrayIndex: 0 });


printColorDetails(colors[1]);


printColorDetails({name:"pink","hex":"#q34523"});


/* research: RETURN in function  */
