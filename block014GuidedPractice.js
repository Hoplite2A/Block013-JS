// Practice #1:
const carMan = ['Honda', 'Toyota', 'Ford', 'Subaru'];

// carMan.unshift('Hyundai');
// OR
// carMan[0] = "Hyundai";

// cars.splice(2, 0, 'Mercedes');

// carMan[4] ='Audi';
// OR
// carMan.push('Audi');
// carMan.pop('Subaru');
// OR
// cars[cars.length -1] = 'Audi';

// ACTUAL SOLUTION:
const cars = ["Honda", "Toyota", "Ford", "Subaru"];
cars.pop();
cars.pop();
cars.push("Mercedes", "Ford", "Audi");
cars.shift();
cars.unshift("Hyundai");
console.log(cars)

console.log(carMan);

// Practice #2:

const string = "There once was a donkey name Eeyor.";
let count = 0;

for (let i = 0; i <= string.length; i++){
    if (string[i] === 'e') {
        count++
    }
}

console.log(`There are ${count} e's in the string`);

/*looping through a string
const someName = "Kevin";
console.log(someName.length);
for (let i = 0; i < someName.length; i++) {
  console.log(someName[i]);
}
*/