/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.
Submit the file to Hive
*/
// From function declarations to explicit and implicit
// return functions (one of each).
// function welcome() {
//   let welcome = "Welcome to Appleseeds Bootcamp!";
//   return welcome;
// }

// const welcome = () => "Welcome to Appleseeds Bootcamp!";
// console.log(welcome());

// const welcome = () => {
//   return "Welcome to Appleseeds Bootcamp!";
// };
// console.log(welcome());

// function power(a) {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;
// }

// const power = (a) => Math.pow(a, 2);
// console.log(power(2));

// const power = (a) => {
//   return Math.pow(a, 2);
// };
// console.log(power(1));

// // From function expressions to IIFE functions.
// const squareRoot = (a) => Math.sqrt(a);
// const squareRoot = (function (a) {
//   result = Math.sqrt(a);

//   return result;
// })(4);

// console.log(squareRoot);

// const randomNumbers = (a, b) => (Math.random() * (a - b) + b);
// console.log(randomNumbers(1, 5));

const randomNumber = (function (a, b) {
  return Math.random() * (a - b) + b;
})(1, 5);

console.log(randomNumber);
