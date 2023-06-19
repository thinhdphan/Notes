// nested functions = Functions inside other functions.
//        Outer functions have access to inner function
//        Inner funtions are hidden from the outside
//        used in closures

let user = "thinh";
let userInbox = 0;

const login = () => {

  function displayUser(){
    console.log(`Welcome ${user}`);
  }

  function displayInbox() {
    console.log(`You have ${userInbox} new messages`);
  }
displayUser();
displayInbox();
}


login();

