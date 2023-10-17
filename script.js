// comments can make code readable //


// Welcome to learn Javascript


/* comments can make code readable, easy to reuse and informative*/


// Create a variable.js file and declare variables and assign string, boolean, undefined and null data types 

var string = "kani"
var boolean = 5>3;
var undefined= ;
var nullL = null;


// Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);


// Declare four variables without assigning values

let a, b, c, d; 


// Declare four variables with assigned values
var i, j, k, l;{
    i=1
    j=2
    k=3
    l=4

}



// Declare variables to store your first name, last name, marital status, country and age in multiple lines
  let firstName="kani";
  let lastName="stark";
  let maritalStatus="single";
  let country="srilanka";
  let age="21";

//   Declare variables to store your first name, last name, marital status, country and age in a single line
   let person="kani" age="jn"

    // DAY 2

// Declare a variable named challenge and assign it to an initial value 'learn Javascript'.
 let challenge = 'learn Javascript';
const challenge = "learn Javascript";


// Print the string on the browser console using console.log()
let challenge = 'learn Javascript';
console.log(challenge);

// Print the length of the string on the browser console using console.log()
var challenge = 'learn Javascript';
console.log(challenge.length);

// Change all the string characters to capital letters using toUpperCase() method
var originalString = "This is a sample string.";
var uppercaseString = originalString.toUpperCase();

console.log(uppercaseString);


// Change all the string characters to lowercase letters using toLowerCase() method
var originalString = "This is A Sample STRING.";
var lowercaseString = originalString.toLowerCase();

console.log(lowercaseString);



// Cut (slice) out the first word of the string using substr() or substring() method

const originalString = "This is a sample string";
const spaceIndex = originalString.indexOf(" "); 
if (spaceIndex !== -1) {
  const firstWord = originalString.substring(0, spaceIndex);
  console.log(firstWord);
} else {
  console.log("");
}


// Slice out the phrase Days Of JavaScript from learn Javascript.
const originalString = "learn JavaScript";
const sliceStart = originalString.indexOf("learn");
const sliceEnd = sliceStart + "learn JavaScript".length; 

if (sliceStart !== -1) {
  const slicedPhrase = originalString.slice(sliceStart, sliceEnd); 
  console.log(slicedPhrase);
} else {
  console.log("The phrase was not found in the string.");
}


// 8.Check if the string contains a word Script using includes() method
const inputString = "This is a sample string containing the word Script.";
const wordToCheck = "Script";

if (inputString.includes(wordToCheck)) {
  console.log(`The string contains the word "${wordToCheck}".`);
} else {
  console.log(`The string does not contain the word "${wordToCheck}".`);
}


// 9Split the string into an array using split() method
var str = "This is a sample string";
var arr = str.split(" ");
console.log(arr);

var str = "This is   a   sample  string";
var arr = str.split(/\s+/);
console.log(arr);


// 10Split the string learn Javascript at the space using split() method
const originalString = "learn Javascript at the space";
const parts = originalString.split(" ");
console.log(parts);


// 11'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const companiesArray = companiesString.split(', ');
console.log(companiesArray);


// 12Change learn Javascript to 30 Days Of Python using replace() method.
const originalString = "learn Javascript";
const newString = originalString.replace("learn Javascript", "30 Days Of Python");
console.log(newString);


// 13What is character at index 15 in 'learn Javascript' string? Use charAt() method.
const myString = "learn Javascript";
const characterAtIndex15 = myString.charAt(15);
console.log(characterAtIndex15);


// 14What is the character code of J in 'learn Javascript' string using charCodeAt()
const myString = "learn Javascript";
const charCodeOfJ = myString.charCodeAt(myString.indexOf('J'));
console.log(charCodeOfJ);


// 15Use indexOf to determine the position of the first occurrence of a in learn Javascript
const myString = "learn Javascript";
const positionOfA = myString.indexOf('a');
console.log(positionOfA);


// 16Use lastIndexOf to determine the position of the last occurrence of a in learn Javascript.
const myString = "learn Javascript";
const lastPositionOfA = myString.lastIndexOf('a');
console.log(lastPositionOfA);


// 17Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence = "You cannot end a sentence with because because because is a conjunction";
const positionOfBecause = sentence.indexOf("because");
console.log(positionOfBecause);


// 18Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence = "You cannot end a sentence with because because because is a conjunction";
const lastPositionOfBecause = sentence.lastIndexOf("because");
console.log(lastPositionOfBecause);


// 19Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence = "You cannot end a sentence with because because because is a conjunction";
const positionOfBecause = sentence.search(/\bbecause\b/);
console.log(positionOfBecause);


// 20Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' learn Javascript '.
var str = ' learn Javascript ';
var trimmedStr = str.trim();
console.log(trimmedStr);


// 21 Use startsWith() method with the string learn Javascript and make the result true
const myString = "learn Javascript";
const searchString = "learn";

const result = myString.startsWith(searchString);

console.log(result);



// 22Use endsWith() method with the string learn Javascript and make the result true
var myString = "learn Javascript";
var suffix = "Javascript";

var result = myString.endsWith(suffix);

console.log(result);


// 23Use match() method to find all the a’s in learn Javascript
var myString = "learn Javascript";
var matches = myString.match(/a/g);

console.log(matches);


// 24Use concat() and merge '30 Days of' and 'JavaScript' to a single string, 'learn Javascript'
var firstString = '30 Days of ';
var secondString = 'JavaScript';

var result = firstString.concat(secondString);

console.log(result);


// 25Use repeat() method to print learn Javascript 2 times
var myString = 'learn Javascript';

var result = myString.repeat(2);

console.log(result);







  
















