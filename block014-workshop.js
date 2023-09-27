// Immediately after each title is a forward slash and asterisk. Just
// remove it and you can run that section of code without other code running.

/*******************ONLY ODDS*******************/
/*
// Define numArrays to perform the loop on & the Expected Results
const numArray1 = [2, 4, 6, 8, 11, 20, 15, 22]; // Exp Result: [11,15]
const numArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Exp Result: [1,3,5,7,9]
const numArray3 = [70, 42, 55, 81, 21, 91, 34]; // Exp Result: [55,81,21,91]
const numArray4 = [2,4,6,8,10,11,12]; // Exp Result: [11]

// Defineing let Variable for ease of changing numArray
let numArray = numArray4

// Create FOR Loop to to evaluate the numArray.innerText indexed value with a 
// starting point at index 0. 
for (i = 0; i <= numArray.length; i++) {
    // Create IF Expression that mathematically compares the remaining value
    // after performing a division. If remainer IS NOT EQUAL to zero (0),
    // then it displays, if remainer IS EQUAL to zero (0) then it is ignored. 
    if (numArray[i] % 2 !== 0) {
        console.log(numArray[i]);
    }
}
*/

/**************VOWELS AND CONSONANT*************/
/*
// Define different String Arrays for input purposes with expected Results
const stringArray1 = "hellO"; //Exp Result: 3 Const & 2 Vowels
const stringArray2 = "UkelEle"; //Exp Result: 3 Const & 4 Vowels
const stringArray3 = "awEsomE"; //Exp Result: 3 Const & 4 Vowels
const stringArray4 = "OnomOnopIa"; //Exp Result: 4 Const & 6 Vowels
const stringArray5 = "textbOok"; //Exp Result: 5 Const & 3 Vowels
const stringArray6 = "Hello has 3 Consoneants and 2 Vowels";

// String Component Analyzer:
// Easier to change single input value via variable rather than all occurances of const variable
let stringArray = stringArray6;

//Create function to perform task for any specified input
// function stringCharCount(stringArray) {
  // Define Vowel Count Varibale with so any occurance can be added later in the loop
  let vCount = 0;
  // Define Consonant Count Varibale with so any occurance can be added later in the loop
  let cCount = 0;
  // Define a Vowel variable containing anything that should be counted as a Vowel when cross indexing.
  const vowels = "AaEeIiOoUu";
  // Create For Loop where i = 0 in the index and loops for the full .length of the string array
  for (i = 0; i < stringArray.length; i++) {
    // Create an IF expression initializing the indexOf the vowels variable and the stringArray[i]
    // that when returns a -1 value, (default return if no match is found) will add a value to the
    // cCount (consonant) variable for each loop
    if (vowels.indexOf(stringArray[i], 0) === -1) {
      cCount += 1;
      // Create an Else expression initializing the indexOf the vowels variable and the stringArray[i]
      // that when returns anything other than a -1 value, (the returned index value for anything that
      // matches) which will add a value to the vCount (vowels) variable for each loop
    } else if (stringArray[i] !== " " ) {
      vCount += 1;
    }
  }
  console.log(`${stringArray} has ${cCount} consonants and ${vCount} vowels.`);
// }

// stringCharCount(stringArray);

// Code Efficiency :
// Time: O(n + 6)
// Space: O(1)

/*****************REVERSE ARRAYS****************/
/*
// Define different String Arrays for input purposes with expected Results
const reverseArray1 = [1, 2, 3]; //Exp Results: [3,2,1]
const reverseArray2 = [11,9,7,5,3,1]; //Exp Results: [1,3,5,7,9,11]
const reverseArray3 = [200,60,30,50,20]; //Exp Results: [20,50,30,60,200]
const reverseArray4 = [13,-8,5,-3,2,-1,1]; //Exp Results: [1,-1,2,-3,5,-8,13]

// String Component Analyzer:
// Easier to change single input value via variable rather than all occurances of const variable
let reverseArray = reverseArray4;

for (i = reverseArray.length; i >= 0; i--) {
    console.log(reverseArray[i]);
}
*/

/********************FIZZ BUZZ******************/
/*
// Use FOR Expression to set initial value of [i] to zero(0), range and condition of less than
// OR equal to one-hundred (100) and to increase by one (1) on each loop
for (i = 0; i <= 100; i++) {
  // Create an IF Expression stating that if the remainer of [i] after being devided by 3 is
  // equal to zero (0), display the number value and 'Fizz.' [i.e. - 3 % 3 === 0, 8 % 3 === 2]
  if ([i] % 3 === 0) {
    console.log([i] + " - Fizz");
  // Create an IF Expression stating that if the remainer of [i] after being devided by 5 is
  // equal to zero (0), display the number value and 'Buzz.' [i.e. - 10 % 5 === 0, 12 % 5 === 2]
  } else if ([i] % 5 === 0) {
    console.log([i] + " - Buzz");
  // Create an IF Expression stating that if the remainer of [i] after being devided by 15, which
  // is the lowest common factor of five (5) and three (3), is equal to zero (0) will display the 
  // number value and 'FizzBuzz.' [i.e. - 30 % 15 === 0, 32 % 15 === 2]
  } else if ([i] % 15 === 0) {
    console.log([i] + " - FizzBuzz");
    // Create an ELSE statement that generates the number that is not divisable by three (3), five (5),
    // or fifteen (15) as the number alone. 
  } else {
    console.log([i]);
  }
}
*/


