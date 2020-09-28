// ECMAScript 6,2015 (ES2015) released two new ways of defining variables
//
// CONST - a constant: useful for performing math equations or if i have a value I need to stay the same throughout the script
// LET - a block scope variable: a variable with an even smaller scope than var 
//
// Trying to change the value of a constant: 
// const MYCONSTANT = 5;
// console.log(MYCONSTANT); 
// MYCONSTANT = 6; // results in this from the browser: 
// Uncaught TypeError: Assignment to constant variable.
//
//
// function logScope() {
//     var localVar = 2;
//     console.log(localVar);
// }
// logScope();
// function logScope() {
//     var localVar = 2;
//     console.log("logScope localVar: ",localVar); // this way we know that this is the localVar that is in the scope of logScope
// }
// logScope();
// then create conditional statement inside of logScope
// function logScope() {
//     var localVar = 2;
//
//     if (localVar) {
//         var localVar = "I'm different!";
//         console.log("nested localVar: ", localVar);
//     }
//
//     console.log("logScope localVar: ",localVar); 
// }
// logScope();
// So what's happening here? 
// 1) localVar is assigned a value in the main logScope function
// 2) then localVar is re-assigned a value in the nested conditional block
// 3) this results in the value of localVar changing for the ENTIRE function scope 
// meaning if we want to change the value of localVar in the nested block without changing it for the entire function we need to make a whole NEW variable 
// ^^^annoying! because then we would be constantly declaring new variables 
// LET solves this 
// declare localVar with let instead of var both in the root and in the function 
// function logScope() {
//     let localVar = 2;
//
//     if (localVar) {
//         let localVar = "I'm different!";
//         console.log("nested localVar: ", localVar);
//     }
//
//     console.log("logScope localVar: ",localVar); 
// }
// logScope();
// browser response 
// nested localVar:  I'm different!
// logScope localVar:  2
// this would also work this way: 
function logScope() {
    var localVar = 2;

    if (localVar) {
        let localVar = "I'm different!"; // the block scope of this new let assignment is only the conditional statement 
                                        // this makes the code block also a deciding factor for what scope the variable has, not just the function it sits inside
        console.log("nested localVar: ", localVar);
    }
    console.log("logScope localVar: ",localVar); 
}
logScope();
