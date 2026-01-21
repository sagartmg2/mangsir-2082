/* 
    if (<condition>){
        //  do something
    }else{
        // do something else 
    }


    truthy condition / valus
    - true
    - 1
    - 


    falsy values
    1. false
    2. 0
    3. 
    4.
    5.
    6.
    

*/

let willRain = false;
let sunny = true;
let snowy = false;

if (willRain) {
  console.log("take umbrealla");
} else if (sunny) {
  console.log("take umbrealla cause its sunny");
} else if (snowy) {
  console.log("take umbrealla cause its snowy");
} else {
  console.log("no need to take  umbrealla");
}

let isSeller = true;

/* 
    when true,
        output:
        yes, he can a add new products
        
        
        when false,
        output:
        no, he cannot add new products
        */

if (isSeller) {
  console.log("yes, he can a add new products");
} else {
  console.log("no, he cannot add new products");
}


// comparision operator
console.log("guest" == "admin");
