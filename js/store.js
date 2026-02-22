fetch("data/products.json")
  .then(res => {
    if (!res.ok) throw new Error("products.json not found");
    return res.json();
  })
  .then(data => {
    const container = document.getElementById("products");
    if (!container) throw new Error("Missing #products div");

    data.forEach(p => {
      container.innerHTML += `
        <div class="card">
          <img src="${p.image}">
          <h3>${p.name}</h3>
          <p>${p.price} ${p.currency}</p>
          <a href="checkout.html">BUY</a>
        </div>`;
    });
  })
  .catch(err => {
    console.error(err);
    document.body.innerHTML += "<p style='color:red'>Store failed to load</p>";
  });
