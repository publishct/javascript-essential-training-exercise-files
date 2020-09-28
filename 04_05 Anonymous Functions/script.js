// var a = 3/4; // use different values at various stages that you know work when testing in the console
// var b = 5=7;

// var theBiggest = function() {
//     var result; 
//     a>b ? result = ["a", a] : result = ["b", b];
//     console.log(result); // anonymous function is stored inside a variable as a function expression 
//     // OR use:
//     // return result; && make sure to wrap theBiggest variable in console.log();
//     // this means my anonymous function is: 
//     // - stored as if it were a normal value
//     // - only executes if we called the variable as if it were a function 
// }
// theBiggest(); // tells JavaScript that inside the variable there is an anonymous function and prompts it to be run 


// ?? But how do I pass arguments into a function that is anonymous/ not named? 
var theBiggest = function(a,b) {
    var result; 
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
    // OR use:
    // console.log(result); 
}

console.log(theBiggest(7/9,13/25)); // now remove variables a and b declared at the top and it still works
// anonymous functions work pretty much like named functions as long as they're stored in a variable 