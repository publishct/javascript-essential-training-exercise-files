const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

// var timer = 0;
var timer = [0,0,0,0];
// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = timer[0] + ": " + timer[1] + ": " + timer[2];
    // theTimer.innerHTML = timer;
    theTimer.innerHTML = currentTime;
    // timer++; // we break this timer that just starts counting up into hundredths of a second, second, and minutes (and store each independently)
    //         // so change var timer = 0 into an array 
    timer[3]++; //just updates the last indexed value of var timer array

    timer[0] = Math.floor((timer[3]/100)/60); // minutes
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60)); // hit 60 seconds and value returns to zero
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000)); 
}
// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    console.log(textEntered);
}

// Start the timer:
function start() {
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0) {
        setInterval(runTimer, 10);
    }
    console.log(textEnterdLength);
}

// Reset everything:
function reset() {
    console.log("reset button has been pressed!");
}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
