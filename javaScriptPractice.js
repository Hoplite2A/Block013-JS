//************** BASIC OPERATORS ***************/
// console.log(1 + 2);
// console.log(1 - 5);
// console.log(8 * -8);
// console.log(8 / 3);

// console.log("Hello" + " world!")

//************** COMPARISON OPERATORS **********/

// console.log(5 !== 5);
// let var1 = 1000
// let var2 = 10
// let var3 = 12
// let var4 = 8

// var4 = 80

// console.log((var1 / var2) >= (var3 * var4));

//******************* OBJECTS *****************/

// let person = {
//   name: "Dave",
//   age: 32,
// };

// An Object's Properties can be changed via the following methods:

// Bracket Notation
// person['name'] = 'Davey';

// Dot Notation (This is easier of the two methods and is more concise)
// person.name = 'David';

// console.log(person.name);

// Bracket Notation is great to use if the Object's Properties can be
// selected at Run-Time via the use of a variable:

// let selection = 'name';
// person[selection] = 'Davey-Jones';

// console.log(person.person);

// You can pull up all the Object's Property Values pairs or individual
// Property Value via the following:

// Singel Property:
// console.log (object.property)
// console.log(person.age);

// All Property Value Pairs:
// console.log('object');
// console.log('name');

//******************* ARRAY *****************/

// Arrays are typeof Object in JS.

// let selectedColors = [];

// The [] is what is called an Array Literal and when there is nothing
// in them it is what is referred to as an Empty Array Literal

// let selectedColors = ['red', 'blue'];

// When utilizing Dev Tools in browser and you run console.log
// you will get the same results as in the VS Code Terminal but
// it will include index values which can be referenced in
// console.log
//         0: "red"
//         1: "blue"

// console.log(selectedColors[0]);
// console.log(selectedColors[1]);

// Arrays can be changed at Run-Time similar to a variable change after
// it has been defined:

// selectedColors[2] = 'green';

// console.log(selectedColors);

//******************* FUNCTIONS *****************/

// functions are made of three primary parts:
// function -
// greet - fucntion name
// () - Parameters - which is like a variable that is only callable
// within the funciton itself *Cannot be referenced outside the function

// Performing a Task Function
// function greet(name, lastName) {
//   console.log("Hello " + name + " " + lastName);
// }

// To trigger the function the function is written as follows:
// function(arguement);

// greet('Dave', 'Mailloux');
// greet('Brittany', 'Mailloux');

// Calculation Function
// function square(number) {
//   return number * number;
// }

// YOu can either call on the function by defininig it as a variable
// or call on it by inputting the functionName and it's parameter, in
// parentheses, within the console.log
// let number = square(2);

// console.log(square(2));

/************* JS-DEMO *************/
/*
const num1 = 5;
const num2 = 5;

console.log(num1 !== num2);
*/

// const person1 = "john";
// const person2 = "John";

// console.log(person1 === person2);

// const value1 = 5;
// const value2 = "5";

// console.log(value1 == value2);

// const num1 = 10;
// const num2 = 50;
// const num3 = 10;

// console.log(num1 > num2);
// console.log(num1 > num3);
// console.log(num1 >= num3);

// let fullPrice = 59.99
// const hasCoupon = false;

// if (!hasCoupon) {
//     console.log ("$" + fullPrice)
// } else {
//         console.log("$" + fullPrice * .5)
//     }

// const searchResult = "The Seventh Seal";
// const searchResult = "";

// if (searchResult) {
//   console.log("There is a result for your movie!");
// } else {
//   console.log("Shit out of luck! No title found.");
// }

// const kidsPrice = 0.00;
// const seniorPrice = 5.00;
// const regularPrice = 10.00;
// let age = 12;

/*
if (age <= 12) {
  console.log("$" + kidsPrice + " " + "Kids Enjoy for Free!");
} else if (12 < age && age < 65) {
  console.log("$" + regularPrice);
} else {
  console.log("$" + seniorPrice + " " + "Enjoy your Senior Discount");
}
*/

//THE ABOVE IF ELSE LOGIC CAN BE CONCATENATED USING 'AND' and 'OR' logic
// const discountPrice = 0.00;
// const regularPrice = 10.00;
// let age = 35;

// if (age <= 12 || age >= 65) {
//   console.log("$" + discountPrice + " " + "Enjoy your film for Free!");
// } else {
//   console.log("$" + regularPrice);
// }

// let isRaining = false;

// if (isRaining) {
//   console.log("Don't forget your umbrella!")
// } else {
//   console.log("Don't need your umbrella.")
// }

//CAN BE CONCATENATED FURTHER
// someCondition ? "value to return if TRUE" : "value to return if FALSE"

// isRaining ? "Don't forget your umbrella" : "Don't need your umbrella"

// This above logic can be added to a variable:

// const message = isRaining ? "Don't forget your umbrella" : "Don't need your umbrella";

/****************GUIDED PRACTICE*****************/

// let inputValue = 8;

// if (inputValue % 2 === 0) {
//   console.log ("Even")
// } else {
//   console.log ("Odd")
// }

// console.log(
//   inputValue % 2 === 0 ? "Even" : "Odd"
// );
