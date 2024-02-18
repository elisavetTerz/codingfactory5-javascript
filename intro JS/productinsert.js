const products = [];

class ProductAlreadyExistsError extends Error {
  constructor(message) {
    super(message);
    this.name = "ProductExists";
  }
}

function insert(arr, product) {
  // !arr -> undefined or null
  if (!arr || !product) return;
  try {
    if (!arr.includes(product)) {
      throw new Error("Product exists");
    } else {
      arr.push(product);
      return true;
    }
  } catch (error) {
    console.log("Product already exists");
    throw error;
  }
}
