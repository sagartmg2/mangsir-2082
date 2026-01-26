let users = [
  {
    name: "ram",
    age: 15,
  },
  {
    name: "hari",
    age: 19,
  },
  {
    name: "shyam",
    age: 20,
  },
  {
    name: "gita",
    age: 21,
  },
  {
    name: "alex",
    age: 22,
  },
];

/* TODO: create an array having user of age > 20 only */

// let newUsers = users.map((el) => {});

let adultUsers = users.find((el) => {
  return el.age > 20;

  if (el.age > 20) {
    return true;
  }

  // return undefined;
});

console.log(adultUsers);
