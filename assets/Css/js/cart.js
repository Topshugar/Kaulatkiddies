let cart = [];
let total = 0;
let kaulatStore = [];

// Load products from localStorage if admin added any
function loadKaulatProducts(){
  const saved = localStorage.getItem('kaulat_products');
  if(saved){
    kaulatStore = JSON.parse(saved);
    if(kaulatStore.length > 0){
      const grid = document.getElementById('productGrid');
      if(grid){
        grid.innerHTML = kaulatStore.map(p=>`
          <div class="card">
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <span>${p.age} | Brand New</span>
            <div class="price">₦${p.price.toLocaleString()}</div>
            <button onclick="addToCart('${p.name}',${p.price})">Add to Cart</button>
          </div>
        `).join('');
      }
    }
  }
}
loadKaulatProducts();

function addToCart(name, price) {
  cart.push({name, price});
  total += price;
  document.getElementById('cartCount').innerText = cart.length;
  document.getElementById('cartTotal').innerText = '₦' + total.toLocaleString();
}
function checkout(number) {
  if(cart.length === 0){ alert('Cart is empty. Add product first.'); return; }
  let items = cart.map(c => `- ${c.name} - ₦${c.price.toLocaleString()}`).join('%0A');
  let message = `Hello Kaulatkiddies!%0A%0AI want to order BRAND NEW:%0A${items}%0A%0ATotal: ₦${total.toLocaleString()}%0A%0AMy Name:%0AMy Address:%0AKids Age/Size:%0ADelivery: Abuja/Nationwide`;
  window.open(`https://wa.me/234${number}?text=${message}`, '_blank');
    }
