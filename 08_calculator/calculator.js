const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  return array.reduce((total, element) => {
    return total + element;}, 0)
};

const multiply = function(array) {
  return array.reduce((total, element) => {
    return total*element;});
};

const power = function(number, exponent) {
	return Math.pow(number, exponent);
};

const factorial = function(number) {
	if (number === 0 || number === 1) {
    return 1;
  }
  
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer *= i;
  }
  return answer;
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
