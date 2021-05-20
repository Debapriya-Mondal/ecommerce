const Products = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    productName: "Shoe",
    Price: 399.99,
    inStock: 10,
    shortDescription:
      "Assign arrow function to a variable before exporting as module default",
    Description:
      "Assign arrow function to a variable before exporting as module default",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    productName: "Bags",
    Price: 299.99,
    inStock: 15,
    shortDescription:
      "Assign arrow function to a variable before exporting as module default",
    Description:
      "Assign arrow function to a variable before exporting as module default",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    productName: "Shirts",
    Price: 149.99,
    inStock: 15,
    shortDescription:
      "Assign arrow function to a variable before exporting as module default",
    Description:
      "Assign arrow function to a variable before exporting as module default",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    productName: "Shorts",
    Price: 100.99,
    inStock: 20,
    shortDescription:
      "Assign arrow function to a variable before exporting as module default",
    Description:
      "Assign arrow function to a variable before exporting as module default",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    productName: "Slipper",
    Price: 399.99,
    inStock: 10,
    shortDescription:
      "Assign arrow function to a variable before exporting as module default",
    Description:
      "Assign arrow function to a variable before exporting as module default",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    productName: "Capes",
    Price: 399.99,
    inStock: 10,
    shortDescription:
      "Assign arrow function to a variable before exporting as module default",
    Description:
      "Assign arrow function to a variable before exporting as module default",
  },
];

export function getProducts() {
  return new Promise((res, rej) => {
    res(Products);
  });
}

export function getProductById(id) {
  const Product = Products.find((p) => p._id === id);
  return new Promise((res, rej) => {
    res(Product);
  });
}

export function addProduct(product) {
  let productInDb = {};
  productInDb._id = Date.now().toString();
  productInDb.productName = product.productName;
  productInDb.Price = product.Price;
  productInDb.inStock = product.inStock;
  productInDb.shortDescription = product.shortDescription;
  productInDb.Description = product.Description;
  Products.push(productInDb);
  return productInDb;
}
