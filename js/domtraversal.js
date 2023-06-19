// HTML
/*
  <ul id="fruit">
    <li>apple</li>
    <li>orange</li>
    <li>banana</li>
  </ul>
  
  <ul id="vegetables">
    <li>carrots</li>
    <li>potatoes</li>
    <li>onions</li>
  </ul>

  <ul id="dessert">
    <li>ice cream</li>
    <li>cake</li>
    <li>pie</li>
*/
let element = document.querySelector("#fruit");
let childX = element.children[0];
let childY = element.children[1];
let childZ = element.children[2];

childX.style.backgroundColor = "lightgreen";
childY.style.backgroundColor = "orange";
childZ.style.backgroundColor = "yellow";

let element2 = document.querySelector("#vegetables");
let children = Array.from(element2.children);

children.forEach(child => child.style.backgroundColor = "lightblue");

