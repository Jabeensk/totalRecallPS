
console.log('running script...')

//## 1. Variables & Data types

// ### A. Variables

//Declare a new constant variable called `myName` and assign it your name?
const myName = "YourName";
console.log("My name is :", myName);

//Declare a variable called `favoriteLanguage` and assign it the value of `Python`?
let favoriteLanguage = "Phython";
console.log("Favorite language:", favoriteLanguage);

//Declare a new variable called `newFavoriteLanguage` and assign it `JavaScript`;
let newFavoriteLanguage = "JavaScript";
console.log("New Favorite Language:", newFavoriteLanguage);

//Assign the value of `newFavoriteLanguage` to `favoriteLanguage` referencing each other.
favoriteLanguage = newFavoriteLanguage;
console.log("Updated favorite language", favoriteLanguage);

// Finally log or print a message using a Literal String, make use of the variables `myName` and `favoriteLanguage`.
console.log('My name is ${myName} and my favorite programming language is ${favoritLanguage}.');

//### B. Strings

// Create a variable called firstVariable

let firstVariable;

//Assign it the value of the string `"Hello World"`
firstVariable = "Hello Word";
console.log("firstVariable", firstVariable);

//Change the value of this variable to some number
firstVariable = 40;
console.log("firstVarible after changing to a number", firstVariable);

//Store the value of `firstVariable` in a new variable called `secondVariable`
let secondVariable = firstVariable;
console.log("secondVariable: secondVariable");

//Change the value of `secondVariable` to any string.
secondVariable = "This is a string";
console.log("secondVariable after changing the string", secondVariable);

//What is the value of firstVariable? Log it!
console.log("Value of firstVariable:", firstVariable);

//Create a variable called `yourName` and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable `yourName` so that it returns a new string with them concatenated.
ex: `Hello, my name is Jean Valjean`

let yourName = "Your Name";

let greeting = "Hello, my name is " + yourName;
console.log(greeting);

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c !== d);
console.log('Name' === 'Name');
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a !== b !== c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a === a !== d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(Number('48') === 48);

  //### D. The farm
  //Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow";
// Write code that will print out "mooooo" if the it is equal to cow
if (animal === "cow") {
    console.log("mooooooo");
} else {
    //Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
    console.log("Hey! You're not a cow.");
}


//### E. Driver's Ed

let personAge = 15; 
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

if (personAge >= 16) {
    console.log("Here are the keys!");
} else {
    console.log("Sorry, you're too young.");
}
