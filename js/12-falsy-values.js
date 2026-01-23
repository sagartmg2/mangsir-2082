/* 
    falsy values
        - false
        - 0
        - undefined
        - null
        - NaN
        - ''
*/

let willRain = false;

if (willRain) {
  console.log("take umbrealla");
} else {
  console.log("no need");
}

let count = {};
count = [];
count = " ";
if (count) {
  console.log("count has some value", count);
} else {
  console.log("count doesnot have any value.", count);
}


let product = {
  title: "abc",
  images: [
    {
      url: "https:////",
      description: "loream ipsum",
    },
    {
      url: undefined,
      description: "loream ipsum",
    },
  ],
};

if (product.images[1].url) {
}
