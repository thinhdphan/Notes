// slice() extrat a section of a string
// and returnn it as a new string
// without modifying the original string

let fullName = "Thinh Phan";
let firstName;
let lastName;

lastName = fullName.slice(6);
// Phan

firstName = fullName.slice(0,5);
// Thinh

// splitting the name by space character
firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);