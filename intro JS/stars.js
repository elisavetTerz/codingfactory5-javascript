function printStars(n) {
  let out = "";

  while (n) {
    out += "*";
    n--;
  }

  console.log(out);
}

printStars(10);
