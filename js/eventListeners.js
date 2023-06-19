// .addEventListener (event, function, useCapture)
// You can add many event handlers to one element
// Even the same event that invokes different functions

/*
HTML

 <div id="outterDiv">
<div id="innerDiv"></div>


CSS

#innerDiv {
  background-color: lightgreen;
  width: 100px;
  height: 100px;
  border: 1px solid;
}

#outterDiv {
  background-color: lightgreen;
  width: 200px;
  height: 200px;
}
*/

const innerDiv = document.getElementById("innerDiv");
const outterDiv = document.getElementById("outterDiv");
innerDiv.addEventListener("mouseover", changeRed);
innerDiv.addEventListener("mouseout", changeGreen);
innerDiv.addEventListener("click", changeBlue, true);



function changeRed(){
  innerDiv.style.backgroundColor = "red";
}
function changeGreen(){
  innerDiv.style.backgroundColor = "lightgreen";
}

function changeBlue(){
  innerDiv.style.backgroundColor = "lightblue";
}

function changePurple(){
  outterDiv.style.backgroundColor = "purple";
}



