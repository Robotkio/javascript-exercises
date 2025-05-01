const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length === 0) { return 0; }
	return arr.reduce((total, val) => total + val);
};

const multiply = function(arr) {
  if (arr.length === 0) { return 0; }
  return arr.reduce((total, val) => total * val);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(val) {
	let total = 1;
  while (val > 1){ total *= val--; }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
