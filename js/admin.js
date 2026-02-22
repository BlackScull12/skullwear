function addProduct() {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  products.push({
    name: name.value,
    img: img.value,
    price: price.value,
    currency: currency.value
  });

  localStorage.setItem("products", JSON.stringify(products));
  alert("Product added");
}

function setDrop() {
  localStorage.setItem("dropDate", drop.value);
  alert("Drop date set");
}
