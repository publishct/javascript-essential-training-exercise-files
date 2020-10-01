const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

// after setting up constants, make alert resilient 
// this is necessary if JavaScript is not enabled in the client side 
// the person browsing the site still needs to know that booking is temporarily unavailable 
// but if JavaScript is enabled on the client side when the user browses the site they will encounter the book now button (the call to action)
// if they try to click on it they will receive the alert and the CTA is minimized

CTA.classList.remove("hide");
ALERT.classList.add("hide");

// then build the function for toggling the hide class on and off, we'll call it reveal

// function reveal() {
//     CTA.classList.toggle("hide");
//     ALERT.classList.toggle("hide");
// }

// // as for getting the button to trigger the script
// // with an onclick event handler it's simplest 

// CTA.onclick = reveal; // we leave off the paranthesis from the reveal function here to ensure it does not load when the entire script is loaded
//                     // rather, reveal function will load at onclick 
//                     // save and test in the browser, it works but we have to scroll down again
//                     // this is happening because the deadlink # in the CTA is causing the browser to navigate to the next page, but it just happens to be that the next page is the same page, but at the top 
                       // we'll use preventdefault in the function to avoid this behavior, the default behavior of the event object (the CTA link click)

function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

CTA.onclick = reveal;

// Event handlers work fine for functions only triggered based on DOM level events that then only trigger (1) single function when that event occurs
// we only had one event tied to the CTA button in this case so it works, but what if we add a second? next lesson...