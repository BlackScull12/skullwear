let products = [];

function add() {
  products.push({
    id: Date.now(),
    name: name.value,
    price: price.value,
    currency: currency.value,
    image: image.value
  });
  output.textContent = JSON.stringify(products, null, 2);
}
