// useful string properties & methods

let userName = "T.Phan";
let phoneNumber = "123-456-789";

// how many character in the variable
// charAt() shows character at certain index
console.log(userName.length);
userName.charAt(0);

// indexOf() shows the first occurance at the first index
// lastIndexOf() shows the last occurance of a certain character
userName.indexOf("h");
userName.lastIndexOf("P");

// trim() gets rid of any extra invisible or spacing characters
userName.trim();

// toUpperCase() make all characters uppercase
userName.toUpperCase();

// toLowerCase() makes all character lowercase
userName.toLowerCase();

// replaceAll() replace certain characters
phoneNumber = phoneNumber.replaceAll("-", " ");

