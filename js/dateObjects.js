// The date object is used to work with dates and times

let date = new Date();
date = date.toLocaleString();

let year = date.getFullYear(); // get year
let dayOfMonth = date.getDate(); // get day of month
let dayOfWeek = date.getDay(); // get the day
let month = date.getMonth(); // get month
let hour = date.getHours(); // get hours
let seconds = date.getSeconds(); // get seconds
let ms = date.getMilliseconds(); // get milliseconds



console.log(date);

document.getElementById("myLabel").innerHTML = date;

function formatDate(date){
  let year = date.getFullYear();
  let month = date.getMonth +1;
  let day = date.getDate();
  
  return `${month}/${day}/${year}`;
}

function formatTime(date){
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amOrPm = hours >= 12 ? "PM" : "am"

  //military to standard
  hours = (hours % 12) || 12;
  
  return `${hours}:${minutes}:${seconds} ${amOrPm}`
}