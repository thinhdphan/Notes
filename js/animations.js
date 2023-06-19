// EX 1

const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin(){
  let timerId = null;
  let x = 0;
  let y = 0;
  let degrees = 0;
  
  timerId = setInterval(frame, 5);

  function frame(){
    if(x >= 200 || y >= 200){
      clearInterval(timerId);
    }
    else {
      x+=1;
      y+=1;
      degrees+=1;
      myAnimation.style.left = x + "px";
      myAnimation.style.top = y + "px";
      myAnimation.style.transform = "rotateZ("+degrees+"deg)"

    }
  }
} 

// EX 2
const myButtonTwo = document.getElementById("myButtonTwo");
const myAnimationTwo = document.getElementById("myAnimationTwo");

myButtonTwo.addEventListener("click", beginTwo);

function beginTwo(){
  let timerIdTwo = null;
  let scaleX = 1;
  let scaleY = 1;

  timerIdTwo = setInterval(frameTwo, 5);

  function frameTwo(){
    if(scaleX >= 2){
      clearInterval(timerIdTwo);
    }
    else {
      scaleX+=0.01;
      myAnimationTwo.style.transform = "scale("+scaleX+", "+scaleY+")";
    }
  }
}