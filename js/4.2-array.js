let persons = ["ram", "hari", "shyam"];
console.log(persons);

/* 
    ram
    hari
    shyam
*/

console.log(persons[0]);
console.log(persons[1]);
console.log(persons[2]);

/* 
    person 1 is ram
    person 2 is hari
    person 3 is shyam
*/

console.log("person 1 is" + persons[0]);
console.log("person 2 is" + persons[1]);
console.log("person 3 is" + persons[2]);

/* Template Literals */

console.log(`person 1 is ${persons[0]}`);

let myCourse = {
  title: "data-science",
  durationInMonths: 2.5,
  price: 10000,
};


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
];

console.log(courses[0].title);
console.log(courses[0].durationInMonths);
console.log(courses[0].price);

/* 
    data-science
    2.5
    10000

*/

/* 
    Output: 
    duration of data-science is 2.5 months and it's price is 10000
    duration of cyber-security is 3.5 months and it's price is 15000
    duration of python is 1.5 months and it's price is 10000
*/


console.log(`duration of ${courses[0].title} is ${courses[0].durationInMonths} months and it's price is ${courses[0].price}`)
console.log(`duration of ${courses[1].title} is ${courses[1].durationInMonths} months and it's price is ${courses[1].price}`)
console.log(`duration of ${courses[2].title} is ${courses[2].durationInMonths} months and it's price is ${courses[2].price}`)