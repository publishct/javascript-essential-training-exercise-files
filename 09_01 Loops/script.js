// var i = 1;
// var reps = 0; 

// while (i < 567) {
//     ++reps;
//     console.log(reps + " reps gives us " + i);
//     i*=2.1;
// }
// the code above gives us 9 repetitions (reps) in the console 
// what if we start out with 567? 
// var i = 567;
// var reps = 0; 

// while (i < 567) {
//     ++reps;
//     console.log(reps + " reps gives us " + i);
//     i*=2.1;
// }
// the code above will never run 
// to ensure the code runs at least 1 time, we have the do while loop
// var i = 567;
// var reps = 0; 

// do {
//     ++reps;
//     console.log(reps + " reps gives us " + i);
//     i*=2.1;
// } while (i < 567);
// results in: '1 reps gives us 567'
var i = 567;
var reps = 0; 

if (i < 567) {


do {
    ++reps;
    console.log(reps + " reps gives us " + i);
    i*=2.1;
} while (i < 567);
} else {
    console.log("i is bigger than 567")
}