const grades = [5, 9, 1, 3, 8];

function getMin(arr) {
  return Math.min(...arr);
}

function getMax(arr) {
  return Math.max(...arr);
}

function getRandom(min, max) {
  //random returns a random number between 0 and 1
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min); //floor returns an integer , cuts the decimal
}

console.log(getMin(grades));
console.log(getMax(grades));
console.log(getRandom(getMin(grades), getMax(grades)));
