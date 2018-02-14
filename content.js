// content.js
//alert("Hello from TA clicker, be carefull when using this!")
var number = prompt("Welcome to TA-Clicker, use this at your own risk! \n Please fill in your queue number: ");

function clickButton() {
    var button = document.getElementById("lab-" + number);
    if (button != null && button.style.display != 'none') {
        console.log("Clicking!");
        planets.click();
    }
var millisecondsToWait = 500;
setTimeout(clickButton, millisecondsToWait);
}


