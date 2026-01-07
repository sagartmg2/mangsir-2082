let fullName = "Hari Bdr";
fullName = "Hari Bahadur";

let course = "mern";

/* 
    Objects

    let <obj_name> = {
        <key1>:<value>,
        <key2>:<value>,
        <key3>:<value>,
    }

*/

let person = {
  name: "ram",
  age: 23,
  address: {
    permanent: {
      district: "kathmandu",
      ward: 16,
      municipality: {
        name: "kathmandu",
        cheif: "hari kumar", // change this to hari bahadur
      },
    },
    temporary: {
      district: "bhaktapur",
      ward: 1,
      municipality: {
        name: "bhaktapur",
        cheif: "hari badharur",
      },
    },
  },
};

// code here
// cheif = "hari bahadur"

console.log(person.address.permanent.municipality.cheif);

person.address.permanent.municipality.cheif = "hari bahadur";

console.log(person);



course = {
  isActive: true,
  durationInMonths: 3,
  title: "mern",
  time: {
    start: 8, // convert this to 7
    end: 8,
    format: "AM",
  },
};

// code here
console.log(course);
console.log("prev-title", course.title);
course.title = "MERN STACK";
console.log(course.time.start);
course.time.start = 7;

console.log("price", course.price);
course.price = 10000;

console.log("after", course);
