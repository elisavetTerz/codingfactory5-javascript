let i = 1;
let str = "";

while (i <= 10) {
  str += i + "";
  i++;
}

//the difference is the the dowhile is executed at least one time
do {
  str += i + "";
  i++;
} while (i <= 10);

str = str + "\n" //break for the console

for (let i = 1; i <= 10; i++) {
  str = str + i + " ";
}

while(1) {
    console.log(5);
}

console.log(str);
