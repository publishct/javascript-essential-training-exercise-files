// const FEATURED = document.querySelector(".featured-image");
// const THEIMAGE = FEATURED.querySelector("img");
//
// var altText = THEIMAGE.getAttribute("alt");
//
// var captionElement = document.createElement("figcaption");
//
// var captionText = document.createTextNode(altText);
// captionElement.appendChild(captionText);
//
// // console.log(captionElement);
// // then append the new figcaption to the featured image feature
//
// FEATURED.appendChild(captionElement);
// THEIMAGE.setAttribute("alt",""); // blanks out the alt attribute in moonwalk.html so that screen readers don't encounter the caption twice
//
// this procedure seems clunky to work but the important part is: 
// it works across all browsers 
// the append method, which is new, allows for this procedure less clunkily 
// Append (see mozilla dev network for more info)
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");

captionElement.append(altText);
FEATURED.append(captionElement);

THEIMAGE.setAttribute("alt","");

// The append method is simpler to use than createTextNode and appendChild 
// but when using append method it might not work for IE and other browsers so read the documentation 