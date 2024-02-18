const str1 = "a";
const str2 = "b";
const str3 = "aueba";
let str4;

// Concatenation
str4 = str1 + str3; // concat
str4 = str1.concat(str3);

console.log(str3.indexOf("a"));
console.log(str3.charAt(1)); // returns u

console.log(str3.lastIndexOf("a"));
console.log(str3.length());
// returns a part of the original string
console.log(str3.substring(1, 4)); //returns ueb: firstIndex to lastIndex-1
console.log(str3.slice(1, 4)); //returns ueb: firstIndex to lastIndex-1

console.log(str3.trim());

const arr = str3.split(" ");

if (str1 > str2) {
  console.log(`${str1} GT ${str2}`);
} else if (str1 < str2) {
  console.log(`${str1} LT ${str2}`);
} else {
  console.log(`${str2} GEQ ${str1}`);
}

function equalIgnoreCase(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase(); // comparison "a" & "A" return true
}

console.log(equalIgnoreCase(str1, str2));
