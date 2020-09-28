// The anonymous function
// var theBiggest = function(a,b) {
//     var result;
//     a>b ? result = ["a", a] : result = ["b", b];
//     return result;
// }
//
// So what is happening here? Treating the variable containing the anonymous function as if it were a function itself
// console.log(theBiggest(7/9,13/25));
// 1) calling the variable name theBiggest and adding paranthesis after it 
// 2) pretending theBiggest is a function and passing arguments into the parenthesis 
// 3) arguments are passed to the anonymous function inside the variable 
// 4) the function runs, a result is returned
// 5) console logging the result as if everything was a function 
//
// Prep for hooking anonymous functions up to events: what happens if we just console.log the variable itself? 
// Try it
// console.log(theBiggest);
// we get the function in the console! the function itself 
//
//
// Populating a variable with the result of an anonymous function
// Requires: use an immediately invoked function expression that runs as soon as the browser encounters it
// 1) wrap entire anonymous function in parenthesis 
// 2) envoke the function with a set of parenthesis at the end of the previous step's parenthesis 
// 3) place argument parameters from console.log(theBiggest(7/9,13/25)) inside the new set of parenthesis 
// var theBiggest = (function(a,b) {
//         var result;
//         a>b ? result = ["a", a] : result = ["b", b];
//         return result;
//     })(7/9,13/25)
//     console.log(theBiggest);
// this is much different from previously shown examples of named and anonymous functions
// eg. 
// var firstFraction = 7/9;
// var secondFraction = 13/25; 
//
// TROUBLESHOOTING
// I cannot still use these two variables -
// var firstFraction = 7/9;
// var secondFraction = 13/25; 
// - as the arguments sent to the function and save because this is broken code
// var theBiggest = (function(a,b) {
//     var result;
//     a>b ? result = ["a", a] : result = ["b", b];
//     return result;
// })(firstFraction,secondFraction)
// var firstFraction = 7/9;
// var secondFraction = 13/25; 
// console.log(theBiggest);
// The browser renders this in the console: 
// (2) ["b", undefined]
// 0: "b"
// 1: undefined
// length: 2
// WHY? Because this is an immediately invoked function expression 
// The browser runs the function when it is encountered 
// For example in the named functions section the functions were placed at the top and then called later
// after we had defined the variables! 
// Solve this by defining the variables at the top before the function as below 

var firstFraction = 7/9;
var secondFraction = 13/25; 
var theBiggest = (function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
})(firstFraction,secondFraction)
console.log(theBiggest);

// Benefits of immediately envoked function expressions:
// - runs immediately where located in the code and produces a direct output
// - on first run it's not effected by code further down in the script, USEFUL 
// - these functions are greate for quickly populating a variable or argument in a larger function or property in an object
// - often hooked to event listeners for immediate output 
// always be careful because these are invoked when the browser immediately encounters them 
