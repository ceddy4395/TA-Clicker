// content.js
//alert("Hello from TA clicker, be carefull when using this!")
var number = 0;

chrome.runtime.sendMessage({message: "id?"}, function(response) {
    console.log(response);
    // number = id;
    clickButton();
  });

function clickButton() {
    var planets = document.getElementById("lab-" + number);
    console.log("checking if I can click!");
    if (planets != null && planets.style.display != 'none') {
        console.log("Clicking!");
        planets.click();
    }
var millisecondsToWait = 500;
setTimeout(clickButton, millisecondsToWait);
}


