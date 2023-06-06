/*
// html codes
<body>
  <label for="myCheckBox">Check in here:</label>
  <input type="checkbox" id="myCheckBox">

  <label for="visBtn">Visa</label>
  <input type="radio" name="card" id="visaBtn">
  <label for="mastercardBtn">MasterCard</label>
  <input type="radio" name="card" id="mastercardBtn">
  <label for="paypalBtn">PayPal</label>
  <input type="radio" name="card" id="paypalBtn"><br>

  <button id="myButton">Click here</button>
  <script src="/js/checkPropety.js"></script>
</body>

*/

document.getElementById("myButton").onclick = () => {
  
  const myCheckBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const mastercardBtn = document.getElementById("mastercardBtn");
  const paypalBtn = document.getElementById("paypalBtn");

  if (myCheckBox.checked){
    console.log("You checked in!");
  }
  else {
    console.log("You are not checked in!");
  };

  if (visaBtn.checked){
    console.log("You are paying with a Visa.");
  }
  else if(mastercardBtn.checked){
    console.log("You are paying with a Mastercard.");
  }
  else if(paypalBtn.checked) {
    console.log("You are paying with PayPal.");
  }
  else {
    console.log("Nothing was selected!");
  };

};
