function add(a = 0, b = 0) {
  return a + b;
}

console.log(add()); //returns 0
console.log(add(1)); //returns 1
console.log(add("a")); //returns a0
console.log(add(undefined, undefined)); //returns 0
console.log(add(undefined, NaN)); //returns NaN
console.log(add(undefined, null)); //returns 0
