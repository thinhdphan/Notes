// window = interface used to talk to the web browser
//          the domb is  a property of the window

/* 
console.dir(window);
console.log(window.innerWidth);
console.log(window.innerHeight);

// change webpage
console.log(window.location.href);
window.location.href = "https//google.com";

// get ip
console.log(window.location.hostname);

// get file name
console.log(window.location.pathname);

*/

// HTML 
// <button id="google">Google</button>

const googleButton = document.getElementById("google");
const printButton = document.getElementById("print");


googleButton.addEventListener("click", () => window.open("https://google.com"));

printButton.addEventListener("click", () => window.print());

// window.alert("Hi");
// window.confirm("press ok!");
// window.prompt("Enter your age");