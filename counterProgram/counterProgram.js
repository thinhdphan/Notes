let count = 0;

// decrease
document.getElementById("decreaseBtn").onclick = function () {
  count -=1;
  document.getElementById("countLabel").innerHTML = count;
};

// reset
document.getElementById("resetBtn").onclick = function () {
  count =0;
  document.getElementById("countLabel").innerHTML = count;
};

// increase
document.getElementById("increaseBtn").onclick = function () {
  count +=1;
  document.getElementById("countLabel").innerHTML = count;
};