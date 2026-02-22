fetch("data/products.json")
.then(res => res.json())
.then(data => {
  const container = document.getElementById("products");
  data.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>${p.price} ${p.currency}</p>
        <a href="checkout.html?item=${p.id}">BUY</a>
      </div>`;
  });
});
