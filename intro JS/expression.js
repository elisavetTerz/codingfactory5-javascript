let a = 5;
let b = 8;
let result; //undefined

result = (a / b).toFixed(2); //JS @runtime converts the a/b to wrapper class and calls the method
console.log(`Result: ${result}1`);
