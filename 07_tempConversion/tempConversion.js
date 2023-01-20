const convertToCelsius = function(temp) {
  let num = (temp - 32) / 1.8;
  num = Math.round(num*10) / 10;
  return num;
};

const convertToFahrenheit = function(temp) {
  let num = (1.8 * temp) + 32;
  num = Math.round(num*10) / 10;
  return num;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
