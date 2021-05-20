const Products = [];

export function cartProducts() {
  return new Promise((res, rej) => {
    res(Products);
  });
}

export function getCartProductById(id) {
  const Product = Products.find((p) => p._id === id);
  return new Promise((res, rej) => {
    res(Product);
  });
}
