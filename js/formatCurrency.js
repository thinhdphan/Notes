// toLocaleString() = returns a string with a language
//                    sensitive representation of this number
// number.toLocaleString(locale, {option});
// locale = specify that language (undefined = default)
// options = object with formatting options

let myNum = 12345;

myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"}); // US English
myNum = myNum.toLocaleString("hi-IN", {stlye: "currency", currency: "INR"}); // Hindi
myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"}); // Standard German

myNum = myNum.toLocaleString(undefined, {style: "percent"}); // Percentage
myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"}); // Temperature format

