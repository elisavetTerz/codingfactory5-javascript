const products1 = [
  { id: 1, proName: "Milk" },
  { id: 2, proName: "Eggs" },
];
const products2 = [
  { id: 1, proName: "Milk" },
  { id: 2, proName: "Eggs" },
];

const shallowCopy1 = [...products1]; //copy the reference, both tables show at the same table, 2 references at the same table
shallowCopy1[0].id = 10;
console.log(products1);

const deepCopy = JSON.parse(JSON.stringify(products2)); //converts the JS Object to JSON string
deepCopy[0]["id"] = 10;
console.log(products2);
