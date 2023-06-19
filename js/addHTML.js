// add/change HTML element
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)


/*
<ul id="fruit">
  <li>apple</li>
  <li>orange</li>
  <li>banana</li>
</ul>
*/

const nameTag = document.createElement("h1");
nameTag.textContent = "Hello";
document.body.append(nameTag);

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
myList.append(listItem);

// insert between
/*
myList.insertBefore(listItem, myList.getElementByTagName("li")[2])
*/