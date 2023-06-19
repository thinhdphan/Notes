// cookie = a small text file stored on your computer
//        used to remember information about the user
//        saved in a name = value pairs

console.log(navigator.cookieEnabled);

document.cookie = "firstName=Thinh; expires=Fri, 16 June 2023 12:00:00 UTC; Path=/";

document.cookie = "lastName=Phan; expires=Fri, 16 June 2023 12:00:00 UTC; Path=/";


// making a cookie

setCookie("email", "tphan.business@gmail.com", 1);
console.log(document.cookie);


function setCookie(name, value, daysToLive){
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name){
  setCookie(name, null, null);
}

function getCookie(){
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = null;

  cArray.forEach(element => {
    if(element.indexOf(name) == 0){
      result = element.substring(name.length + 1)
    }
  })
  return result;
}