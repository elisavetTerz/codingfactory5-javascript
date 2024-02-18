const colors1 = ["red", "black", "white"];
const colors2 = new Array("Black", "White", "Red");

colors1.splice(0, 0, "Green"); //Insert
colors2.splice(1, 1, "Green"); //Update

let colors = colors2.splice(1); // deletes starting from index 1 till end
console.log(colors2);
console.log(colors);

let color = colors1.splice(0, 1); // deletes starting from index 1 till end
console.log(colors1);
console.log(color);

let item1;

const str = colors1.join(", ");
let i = colors1.indexOf("red"); //-1 if not exists

if (colors1.includes("White")) {
  console.log("White Exists");
}

let newLength = colors2.push("Yellow"); //inserts in last position
console.log(colors2);
console.log(newLength);

const popped = colors2.pop(); //prints last element
console.log(popped);

const shifted = colors1.shift(); //gets out the first element
console.log(mySlice);

const mySlice = colors1.slice(0, 2); //
console.log(mySlice);
