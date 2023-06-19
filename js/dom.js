// DOM = Document Object Model (API)
//      An interface for changing the content of a page

/*
HTML PART
-------------------------------------------
<h1 id="myTitle">This is a menu</h1>
  <h1 id="myTitle2">Thinh Phan</h1>


  <input type="radio" name="fruits" value="apple">
  <label for="apple">apple</label><br>
  <input type="radio" name="fruits" value="pear">
  <label for="pear">pear</label><br>
  <input type="radio" name="fruits" value="orange">
  <label for="orange">oranges</label><br>

  <li>carrots</li>
  <li>kale</li>
  <li>lettuce</li>

  <div class="desserts">ice cream</div>
  <div class="desserts">cake</div>
  <div class="desserts">candy</div>
  <div class="desserts2">boba</div>
*/

// get element by id
let element = document.getElementById("myTitle");
element.style.backgroundColor = "skyblue";

// get element by name
let fruits = document.getElementsByName("fruits");

fruits.forEach(fruits => {
  if(fruits.checked){
    console.log(fruit.value)
  };
});

// get element by tag name
// returns html collection
let vegetables = document.getElementsByTagName("li");
vegetables[2].style.backgroundColor = "lightgreen";
vegetables[1].style.backgroundColor = "lightblue";
vegetables[0].style.backgroundColor = "orange";

// get element by class
let desserts = document.getElementsByClassName("desserts");
desserts[2].style.backgroundColor = "purple";
desserts[1].style.backgroundColor = "pink";
desserts[0].style.backgroundColor = "yellow";

// queryselector
//  id = #
// class = .
let element2 = document.querySelector("#myTitle2");
element2.style.backgroundColor = "red";

let element3 = document.querySelector(".desserts2");
element3.style.backgroundColor = "gray";
