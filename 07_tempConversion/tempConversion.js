const convertToCelsius = function(temp) {
  let num = (temp - 32) / 1.8;
  num = Math.round(num*10) / 10;
  return num;
};

const convertToFahrenheit = function(celsius) {
  return Math.round(((1.8 * celsius) + 32)*10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
