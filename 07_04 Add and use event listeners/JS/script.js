const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

// experiment by adding another event triggered by the handler
// CTA.onclick = reveal;
// CTA.onclick = console.log("the button was clicked"); // testing this in the browser results in: 
                                                    // I can click the CTA but no alert pops up, I'm taken back to the top of the page, and the deadlink is muddying up things in the broswer again
                                                    // I do see "the button was clicked" in the console log though 
                                                    // this console log message only happens once though, no matter how many times I click the button 
                                                    // the script is essentially being terminated 
                                                    // the 2nd event handler has taken precedence over the 1st event handler 

// Event LISTENERS are a more modern approach
// allows us to tie more than one function to an event 
// allows us to tie to functions Browser Object Model for browser level events 
// event listeners 'listen' for an event to happen 

CTA.addEventListener("click", reveal, false); // the last parameter will either be set to true (the least specific node, the document) or false (most specific node, the anchor)
// the last parameter is only relevant for adding events on top of each other
// this info is re: bubbling events 
// for almost all events in basic javascript i'll be using false 
// now try my second event listener
CTA.addEventListener("click", function(){ console.log("the button is clicked");}, false);
// testing in the browser works and i am able to click multiple times on CTA, unlimited times without terminating my script 
// so both events are running at the same time and i can now stack multiple events on the same interaction
