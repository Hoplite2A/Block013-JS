// Driver: Joel T.
// Writer: Dave Mailloux

// [is Truthy]

// JS CODING
// PSUEDOCODE
// Defining variables based on listed input values in assigment.
let stringValue = "I am a String";
let booleanValue = false;
let nullValue = null;
let undefinedValue = undefined;
let zeroValue = 0;
let noValue = "";

// Create console.log for display/testing purposes
// Place corresponging data type variable into argument
// NOTE: String value (not an empty string) is Truthy by nature
// Enter in True return value
// Enter in False return value

// String Value
console.log(stringValue ? "true" : "false");
// Boolean Value
console.log(
  booleanValue
    ? "The boolean value true is Truthy"
    : "The boolean value false is Falsy"
);
// Null Value
console.log(
  nullValue ? "Any not null value is Truthy" : "The null value is Falsy"
);
// Undefined Value
console.log(
  undefinedValue ? "Any Defined data is Truthy" : "Undefined data is Falsy"
);
// Zero Value
console.log(
  zeroValue
    ? "Any number other than zero is Truthy"
    : "The number 0 is Falsy (the only Falsy number)"
);
// Empty String Value
console.log(
  noValue
    ? "Any String with Data is Truthy"
    : "The empty string is Falsy (the only Falsy string)"
);

// [Number Line]

let value1 = 50;
let value2 = 51;
let sum = value1 + value2;

// sum + " is less than -1000";
if (sum > -1000) {
  console.log(sum + " is greater than, or equal to, -1000");
} else {
  console.log(sum + " is greater than or equal to -1000");
}
//  OR
console.log(
  sum < -1000
    ? sum + " is less than -1000"
    : sum + " is greater than, or equal to, -1000"
);

// sum + " is a negative number";
if (sum < 0) {
  console.log(sum + " is a negative number");
} else {
  console.log(sum + " is a positive number");
}
// OR
console.log(
  sum < 0 ? sum + " is a negative number" : sum + " is a positive number"
);

// sum + " is equal to 0";
if (sum === 0) {
  console.log(sum + " is equal to zero");
} else {
  console.log(sum + " is not equal to zero");
}
// OR
console.log(
  sum === 0 ? sum + " is equal to zero" : sum + " is not equal to zero"
);

// sum + " is larger than 0";
if (sum > 0) {
  console.log(sum + " is larger than zero");
} else {
  console.log(sum + " is less than zero");
}
// OR
console.log(
  sum > 0 ? sum + " is larger than zero" : sum + " is less than zero"
);

// sum + " is greater than 100";
if (sum > 100) {
  console.log(sum + " is greater than 100");
} else {
  console.log(sum + " is less than 100");
}
//  OR
console.log(
  sum > 100 ? sum + " is greater than 100" : sum + " is less than 100"
);

// [Greater than 5]

let input1 = 5;
let input2 = 5;

if (input1 >= 5 && input2 >= 5) {
  console.log(true);
} else {
  console.log(false);
}
// OR
console.log(input1 >= 5 && input2 >= 5 ? true : false);

// [Pair and Compare]

let param1A = "cat";
let param1B = "cat";
let param2A = 6;
let param2B = "6";

console.log(param1A === param1B || param2A === param2B ? "true" : "false");
