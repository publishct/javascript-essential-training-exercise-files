const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer = [0,0,0,0];
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    // timer[3]+; this resulted in an uncaught syntax error and the browser HAPPENED to show the correct location, line 23 of the error 
    // we can't always assume the browser is giving us the right error line number 
    // the terms of the error are also very technical and not always helpful to debugging unless the name of the error is researched/read about
    // but to create a general list of error types and possible solutions, here is a non-exhaustive one below: 
    // uncaught syntax errors with characters: the browser encountered code that it didn't expect - like in this example timer[3]++; needed the additional plus sign and the browser encountered a semicolon (;) instead
    // errors at the end of the javascript file: the browser isn't necessarily specifying the error is on the last line - the error could be anywhere above the last line of JavaScript 
    // errors at the end of the javascript file or end of function: these have a tendency to be thrown due to an error in paranthesis, brackets, or curly braces 
    
    // navigating errors in VS CODE 
    // - check corresponding parenthesis, curly braces, and brackets/ make sure they are closing in the correct positions by simply pointing the cursor at the beginning or ending brace or bracket - the code editor responds by auto underlining the corresponding one
    // if there is no corresponding curly brace, bracket, or parenthesis then the code editor will not underline the brace or bracket that the cursor IS on 
    // once non-underlined brace or bracket is found then look within the function or document with a process of elimination to make sure they're ending according to my desired logic 
    // - color coding and angry script, as well as long strings being mono-color need to be double-checked because there may be an error 
    // always use the console for JS troubleshooting 
    // console.log method! we peek at our code's inner workings to see what is going on 
    // logged content on common sites is either 1) a mistake or 2) current debugging going on 
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);

    if (textEntered == originText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        } else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }

}

// Start the timer:
function start() {
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
}

// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
