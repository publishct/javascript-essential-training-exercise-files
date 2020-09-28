function findBiggestFraction(a,b) {
    console.log("Fraction a: ", firstFraction);
    console.log("Fraction b: ", secondFraction);

    var result; // Locally scoped variables: the result variable is defined inside the function and is locally scoped, 
                // this means that it is only available inside the function 
                // calling result outside the function results in an uncaught reference error that result is not defined 
                // a large portion of javascript errors happen because of losing track of the scope of variables 
                // for example a programmer might try to call a variable outside it's scope and things break 
                // with the return keyword we can package local values and send/call them outside the local scope 
                // DON'T make all your variables global to avoid locals 
                // locals are 'scribble paths' that exist only as long as the function runs 
                // the names aren't reserved and can be used again and again as in loops 
                // local variables are used then discarded when leaving the scope 
	a>b ? result = ["a",a] : result = ["b",b];
    return result;
}

var firstFraction = 7/16; // Global scope: these two variables are 
var secondFraction = 13/25; // defined in the root of the script so they can be accessed from anywhere (root and inside function)

var fractionResult = findBiggestFraction(firstFraction,secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest.");

// Global and local variables
// global: variable declared in the root of script independently and outside any function
// global variables can be used/ accessed from anywhere in the script (use, update the value, do whatever you want) in BOTH the root of the script and inside any functions
// changes made to global variables become global changes; all references to it will receive same updated value d
// local: variable declared inside of a function 
// local variables are only available inside the scope of the function (otherwise broken) and they don't take up valuable resources
// changes made to local variables 

// TROUBLESHOOTING 
// Think back to the beginning of working with functions
// we didn't ~have to~ define our variables with the var prefix because the browser will create one for you
// but the browser creates this variable globally even if declared inside the function
// this causes a ton of issues
// so to reiterate ALWAYS define your variables with var: for scope-control-alone purposes 