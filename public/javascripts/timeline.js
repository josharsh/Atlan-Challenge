(function() {

    'use strict';
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  
  })();
  /* Learn how to create this and much more with this email course:

https://cssanimation.rocks/courses/animation-101/

MANY THANKS TO @tadywankenobi for the following JS to handle the text in the byline:

The following JS takes in the byline and splits it into letters, each one wrapped in a span. We need to create the spans as nodes, we can't just add them to the HTML using innerHTML, as to do so would mean the CSS won't affect the span because it doesn't recognise the tag as existing. It's an old problem we run into time and again.

*/

var byline = document.getElementById('byline');  	// Find the H2
bylineText = byline.innerHTML;										// Get the content of the H2
bylineArr = bylineText.split('');									// Split content into array
byline.innerHTML = '';														// Empty current content

var span;					// Create variables to create elements
var letter;

for(i=0;i<bylineArr.length;i++){									// Loop for every letter
  span = document.createElement("span");					// Create a <span> element
  letter = document.createTextNode(bylineArr[i]);	// Create the letter
  if(bylineArr[i] == ' ') {												// If the letter is a space...
    byline.appendChild(letter);					// ...Add the space without a span
  } else {
		span.appendChild(letter);						// Add the letter to the span
  	byline.appendChild(span); 					// Add the span to the h2
  }
}
