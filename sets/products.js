const products = [
  { productName: "Apples", city: "Lamia" },
  { productName: "Oranges", city: "Athens" },
  { productName: "Honey", city: "Volos" },
  { productName: "Eggs", city: "Athens" },
];

//List is a Table. I want to get a List with unique cities
const cities = ["all", ...newSet(products.map((p) => p.city))];
console.log(cities);
