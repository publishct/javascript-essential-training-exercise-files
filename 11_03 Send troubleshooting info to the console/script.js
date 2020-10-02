// Finding out exactly what triggers the issue is the whole starting point for moving forward 
// As in this typing speed tester, Morten tried a few different ways of triggering the error of the timer not stopping by reloading the page and doing the following:  
// 1) tried fully and correctly typing the text to test without typos: this stopped the clock, no error
// 2) tried partial entry (first half of prompt correct, next half gibberish), deleted only the gibberish and typed the correct rest of test-text which also stopped the clock, no error
// 3) tried partial entry (first half of prompt correct, next half gibberish), deleted the entire text entry (cleared the whole textbox) then retyped and the clock didn't stop - we found our error trigger 
// we figured out our setinterval method was not clearing the interval 
// - read documentation about setinterval method and learned intervals have IDs, the setinterval method stores an ID for the current interval
// - we can output the interval ID for the current interval to make sure we're clearing the right interval 
// - do this in the spellCheck function within the conditional statement (notes below)
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
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    console.log("Text entered: ", textEntered);
    let originTextMatch = originText.substring(0,textEntered.length);

    if (textEntered == originText) {
        // console.info("Interval stopped: ", interval ); // this returns the current interval ID 
                                                    // then make the error noted happen again and see what the console spits out 
                                                    // resulted in an interval stopped: 632 (random ID assigned by browser)
                                                    // so what current interval is running on the back end and continuing the timer? 
                                                    // figure this out in the below Start the timer: section
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3" + originTextMatch + "more string";
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
        // console.info(interval);
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
