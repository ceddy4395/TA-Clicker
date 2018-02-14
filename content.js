// content.js
//alert("Hello from TA clicker, be carefull when using this!")
var number = prompt("Welcome to TA-Clicker, use this at your own risk! \n Please fill in your queue number: ");

function clickButton() {
    var button = document.getElementById("lab-" + number);
    if (button.style.display != 'none') {
        button.click();
    }
var millisecondsToWait = 200;
setTimeout(clickButton, millisecondsToWait);
}

clickButton();

