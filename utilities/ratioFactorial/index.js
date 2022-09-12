const factorialOfNumbers = require("../factorial/index.js");
const ratioOfTwoNumbers = require("../ratio/index.js");
const ratioAndFactorial = function (num1, num2, number) {
  return {
    ratio: ratioOfTwoNumbers(num1, num2),
    factorial: factorialOfNumbers(number),
  };
};
module.exports = ratioAndFactorial;
