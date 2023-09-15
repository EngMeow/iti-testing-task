MathUtils = function () {};

MathUtils.prototype.sum = function (number1, number2) {
  if (arguments.length !== 2) throw TypeError("Please enter two Args");

  if (typeof (number1 || number2) != "number")
    throw TypeError("Please enter two numbers");

  return number1 + number2;
};

MathUtils.prototype.substract = function (number1, number2) {
  if (arguments.length !== 2) throw TypeError("Please enter two Args");

  if (typeof (number1 || number2) != "number")
    throw TypeError("Please enter two numbers");

  return number1 - number2;
};

MathUtils.prototype.multiply = function (number1, number2) {
  if (arguments.length !== 2) throw TypeError("Please enter two Args");

  if (typeof (number1 || number2) != "number")
    throw TypeError("Please enter two numbers");

  return number1 * number2;
};

MathUtils.prototype.divide = function (number1, number2) {
  if (arguments.length !== 2) throw TypeError("Please enter two Args");

  if (typeof (number1 || number2) != "number")
    throw TypeError("Please enter two numbers");
  if (!number2) throw TypeError("can't divide by zero");
  return number1 / number2;
};

MathUtils.prototype.average = function (number1, number2) {
  if (arguments.length !== 2) throw TypeError("Please enter two Args");

  if (typeof (number1 || number2) != "number")
    throw TypeError("Please enter two numbers");
  return (number1 + number2) / 2;
};

MathUtils.prototype.factorial = function (number) {
  if (arguments.length !== 1) throw TypeError("Please enter one Args");
  if (number < 0) {
    throw new Error("There is no factorial for negative numbers");
  } else if (number == 1 || number == 0) {
    return 1;
  } else {
    return number * this.factorial(number - 1);
  }
};

MathUtils.prototype.checkPositivity = function (number) {
  if (typeof number != "number") throw TypeError("Please enter number");

  if (number < 0) return false;
  else return true;
};

var obj = {
  hello: function () {
    return "hello";
  },

  world: function () {
    return "world";
  },
};
function sayHelloWorld(x) {
  return x.hello(3) + " " + x.world();
}

module.exports = { MathUtils, obj, sayHelloWorld };
