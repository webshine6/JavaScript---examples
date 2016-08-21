/**
 * Adding a personalized welcome message
 */
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUsername() {
    var myName = prompt("Enter username: ");
    localStorage.setItem('name',myName);
    myHeading.textContent = myName;
}

if(!localStorage.getItem('name')) {
    setUsername();
}else {
   var storedName = localStorage.getItem('name');
   myHeading.textContent = storedName;
}


myButton.onclick = function () {
  setUsername();
};