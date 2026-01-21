let count = 0;
count++; // count = count + 1  //  count = 0 + 1
// console.log({ count }); // 1

/* 
    pre increment vs post incremnt
*/

let price = 0;
++price; // price = price + 1 // price = 0 + 1
// console.log({ price }); // 1

const double = (number) => {
  console.log(`double of ${number} is ${number * 2}`);
};

let inputNumber = 5;
// double(inputNumber); // double(5)
// double(inputNumber++);  // double(5) // but in background it changes number to 6.. during console log after this we get value 6.
// double(++inputNumber); //  double(6) <---------------

let courses = [
  {
    title: "data-science",
    durationInMonths: 2.5,
    price: 12000,
  },
  {
    title: "cyber-security",
    durationInMonths: 3.5,
    price: 15000,
  },
  {
    title: "python",
    durationInMonths: 1.5,
    price: 10000,
  },
  {
    title: "mern",
    durationInMonths: 1.5,
    price: 10000,
  },
  {
    title: "AI",
    durationInMonths: 2.5,
    price: 15000,
  },
];

// optional chaining

const printCourseDetails = (index) => {
  console.log(`duration of ${courses[index]?.title} is ${courses[index]?.durationInMonths} months and it's price is ${courses[index]?.price}`);
};

// console.log(`duration of ${courses[0].title} is ${courses[0].durationInMonths} months and it's price is ${courses[0].price}`);
// console.log(`duration of ${courses[1].title} is ${courses[1].durationInMonths} months and it's price is ${courses[1].price}`);
// console.log(`duration of ${courses[2].title} is ${courses[2].durationInMonths} months and it's price is ${courses[2].price}`);
// console.log(`duration of ${courses[3].title} is ${courses[3].durationInMonths} months and it's price is ${courses[3].price}`);

// printCourseDetails(0);
// printCourseDetails(1);
// printCourseDetails(2);
// printCourseDetails(3);
// printCourseDetails(4);
// printCourseDetails(5);

/* 
    loop 
    - for loop
    - while loop

    for (<starting_point>; <condition> ; <modifier>){
    //  do something
    }
*/

// for (let startPoint = 0; startPoint < 5; startPoint++) {
//   console.log("inside loop", startPoint);
// }



// for (let index = 0; index < 5; index++) {
// for (let index = 0; index < courses.length; index++) {

for (let index = 0; index <= 4; index++) {
  //   console.log({ index });
  //   printCourseDetails(index);
  console.log(`duration of ${courses[index]?.title} is ${courses[index]?.durationInMonths} months and it's price is ${courses[index]?.price}`);
}


