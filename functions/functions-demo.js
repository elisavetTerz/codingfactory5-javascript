function add(x, y) {
  return x + y;
}

const sub = function (a, b) {
  return a - b;
};

const mull = (a, b) => a * b;

const hash = (n) => n;

//we cannot have anonymous function with factorial
// const factorial = function (n) {
//   return n <= 1 ? 1 : factorial(n - 1);
// };

//this is correct:
const facto = function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1);
};

console.log(facto(5));
console.log(factorial(5));
