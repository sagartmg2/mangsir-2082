const colors = [
  { name: "white", hex: "#FFFFFF", rgb: "rgb(255, 255, 255)", arrayIndex: 0 },
  { name: "red", hex: "#FF0000", rgb: "rgb(255, 0, 0)", arrayIndex: 1 },
  { name: "black", hex: "#000000", rgb: "rgb(0, 0, 0)", arrayIndex: 4 },
  { name: "blue", hex: "#0000FF", rgb: "rgb(0, 0, 255)", arrayIndex: 2 },
  { name: "green", hex: "#00FF00", rgb: "rgb(0, 255, 0)", arrayIndex: 3 },
];

/* 
TODO:
    using the colors array above print the following

    OUTPUT: 
     - hex value of color white is #FFFFFF
     - hex value of color red is #FF0000
     - hex value of color black is #000000

*/
/* 
    console.log(`hex value of color ${colors[0].name} is ${colors[0].hex} and it's rgb value is ${colors[0].rgb}`);
    console.log(`hex value of color ${colors[1].name} is ${colors[1].hex} and it's rgb value is ${colors[1].rgb}`);
    console.log(`hex value of color ${colors[2].name} is ${colors[2].hex} and it's rgb value is ${colors[2].rgb}`);
    console.log(`hex value of color ${colors[3].name} is ${colors[3].hex} and it's rgb value is ${colors[3].rgb}`);
    console.log(`hex value of color ${colors[4].name} is ${colors[4].hex} and it's rgb value is ${colors[4].rgb}`);
 */

/* 
    DRY : donot repeat yourself.

    // creating a function 
    function <functionName>(<parameter>){
        //  do something
    }

    // executing/calling a function
    functionName(<arguement>);
    functionName(<arguement>);
*/


function printColorDetails(index){ // let index = 0 in first function call, let index =1 in second function call
    console.log(`Hex value of color ${colors[index].name} is ${colors[index].hex}`);
}


printColorDetails(0)
printColorDetails(1)
printColorDetails(2)
printColorDetails(3)
printColorDetails(4)



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


/* 
    TODO: 2: calculate sum of 2 digits


    sum of 2 and 3 is 5
    sum of 6 and 3 is 9
    sum of 10 and 3 is 13
    sum of 15 and 5 is 20
     
    2 + 3 = 5
    6 + 3 = 9
    10 + 3 = 13
    15 + 5 = 20
*/