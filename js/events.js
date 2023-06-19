/*
<button id="myButton">Hello World!</button>
  <input id="myText">
  <div id="myDiv"></div>
*/

// onclick
const element = document.getElementById("myButton");
element.onclick = doSomething;

// onload
const body = document.body;
body.onload = wait;

// onchange
const text = document.getElementById("myText");
text.onchange = alertType;

// onmouse events
const div = document.getElementById("myDiv");
div.style.backgroundColor = "lightgreen";
div.style.width = "100px";
div.style.height = "100px";
div.onmouseover = color;
div.onmouseout = color2;
div.onmousedown = color3;



// functions
function doSomething() {
  alert("You did something!");
}

function wait(){
  alert("waiting...");
}

function alertType(){
  alert("you typed!");
}

function color(){
  div.style.backgroundColor = "red";
}

function color2(){
  div.style.backgroundColor = "lightgreen";
}

function color3(){
  div.style.backgroundColor = "purple";
}