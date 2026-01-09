let courses = ["data-science", "cyber-security", "mern", "marketing"];
//  TODO: change mern to mern-stack
//  TODO: change marketing to digital-marketing

//  TODO: add python in courses array
// TODO: each course should have duration and price

console.log(courses);
console.log(courses[2]);
courses[2] = "mern-stack";

console.log(courses[4]);
courses[4] = "python";
console.log(courses);

courses = [
  {
    title: "data-science",
    durationInMonths: 2.5,
    price: 10000,
  },
  {
    title: "cyber-security",
    durationInMonths: 3.5,
    price: 15000,
  },
];

let colors = ["white", "blue", "green"];
// TODO: we need hex values and rgb values for each color

console.log(colors);

let color = "white";
color = {
  name: "white",
  hex: "#FFFFF",
  rgb: "rgb(255,255,255)",
};

colors = [
  {
    name: "white",
    hex: "#wrong", // change this to #FFFFFF
    rgb: "rgb(255,255,255)",
  },

  // add new color black here
];

// TODO:1  change hex value of white
//  TODO:2 add new color black and its corresponding hex and rgb values

console.log(colors);
console.log(colors[0]);
console.log(colors[0].hex);

console.log(colors[1]);
colors[1] = {
    name: "black",
    hex: "#AFASDF",
    rgb: "rgba(0, 0, 0, 1)",
};
console.log(colors);

let persons = ["abc", "hari", "shyam"]; // chnage abc to ram

let projector = {
  color: "black", // change black to white
  price: 100000,
};
