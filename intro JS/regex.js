const text = "05/12/2023 10/01/2024 30/07/1991";
const datePattern = /([0-9]{2})\/(\d{2})\/(\d{4})/g;
//escape with \ before the character /
//d is metadata digit

let match;

while ((match = datePattern.exec(text)) != null) {
  let [full, day, month, year] = match; //despatch the table
  console.log(`full: ${full}, day: ${day}, month: ${month}, year: ${year}`);
}
