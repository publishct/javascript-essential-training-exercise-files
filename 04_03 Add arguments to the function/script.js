// function findBiggestFraction() {
//     a>b ? console.log("a: ", a) : console.log("b: ", b);
// }

// var a = 3/4;
// var b = 5/7;

// findBiggestFraction();

// the function above is okay but it doesn't allow for the most useful aspect of a function, which is to call it again and again, potentially under different conditions 


// function findBiggestFraction(a,b) {
//     a>b ? console.log("a: ", a) : console.log("b: ", b);
// }

// var firstFraction = 3/4;
// var secondFraction = 5/7;

// findBiggestFraction(firstFraction,secondFraction);

// we get the same result as before in the console but what's happening here is we: 
// 1) place 3/4 inside firstFraction
// 2) then run findBiggestFraction and send 3/4 to a 
// 3) then a is used inside the function and we get the result we want
// We can REUSE this function as many times as necessary

function findBiggestFraction(a,b) {
    a>b ? console.log("a: ", a) : console.log("b: ", b);
}

var firstFraction = 3/4;
var secondFraction = 5/7;
findBiggestFraction(firstFraction,secondFraction);
findBiggestFraction(7/36,13/36);
findBiggestFraction(1/2,3/4);

