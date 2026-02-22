const ADMIN_PASS = "drop666";

const dropDate = localStorage.getItem("dropDate");

function unlock() {
  const pass = document.getElementById("password").value;
  const now = new Date();

  if (pass === ADMIN_PASS || (dropDate && now >= new Date(dropDate))) {
    document.getElementById("lock").style.display = "none";
    document.getElementById("store").style.display = "block";
    loadProducts();
  } else {
    document.getElementById("msg").innerText = "ACCESS DENIED";
  }
}

function loadProducts() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const container = document.getElementById("products");

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}" width="200">
        <h3>${p.name}</h3>
        <p>${p.price} ${p.currency}</p>
        <a href="checkout.html?item=${p.name}">
          <button>BUY</button>
        </a>
      </div>
    `;
  });
}
