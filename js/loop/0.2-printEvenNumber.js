// print even number between 22 to 55

/* output:
    24
    26
    28
    .
    .
    .
    .
    50
    52
    54
*/

/* 
    10 / 5 = 2
    

    10 % 5 = 0
    

*/

// for (let startNumber = 23; startNumber < 56; startNumber += 2) {
//   console.log(startNumber);
// }


for (let startNumber = 22; startNumber < 56; startNumber++) {
  if (startNumber % 2 == 0) {
    console.log(startNumber);
  }
}
