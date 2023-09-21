// 1. The world population is 7900 million people. Create
// a function declaration called 'percentageOfWorld1'
// which receives a 'population' value, and returns the
// percentage of the world population that the given
// population represents. For example, China has
// 1441 million people, so it's about 18.2% of the world
// population.
function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(2);
}

// 2. To calculate the percentage, divide the given
// 'population' value by 7900 and then multiply by 100.
// 3. Call 'percentageOfWorld1' for 3 populations of
// countries of your choice, store the results into
// variables and log them to the console.
chinaPop = percentageOfWorld1(1441);
indiaPop = percentageOfWorld1(1408);
usaPop = percentageOfWorld1(331.9);

console.log(chinaPop);
console.log(indiaPop);
console.log(usaPop);
// 4. Create a function expression that does the exact
// same thing, called 'percentageOfWorld2', and also
// call it with 3 country populations (can be the same
// populations
const percentageOfWorld2 = function (population) {
  return ((population / 7900) * 100).toFixed(2);
};

chinaPop2 = percentageOfWorld2(1441);
indiaPop2 = percentageOfWorld2(1408);
usaPop2 = percentageOfWorld2(331.9);

console.log(chinaPop2);
console.log(indiaPop2);
console.log(usaPop2);
