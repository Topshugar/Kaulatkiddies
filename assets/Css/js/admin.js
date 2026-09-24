const ADMIN_PIN = "1234"; // CHANGE THIS
let products = JSON.parse(localStorage.getItem('kaulat_products') || '[]');

function login(){
  if(document.getElementById('pin').value === ADMIN_PIN){
    document.getElementById('loginBox').style.display='none';
    document.getElementById('adminPanel').style.display='block';
    render();
  } else alert('Wrong PIN');
}
function logout(){ location.reload(); }

function addProduct(){
  const name = document.getElementById('pName').value;
  const price = document.getElementById('pPrice').value;
  const age = document.getElementById('pAge').value;
  const cat = document.getElementById('pCat').value;
  const img = document.getElementById('pImage').value || 'https://via.placeholder.com/400';
  if(!name ||!price) return alert('Name and Price required');
  products.push({id:Date.now(), name, price:parseInt(price), age, cat, image:img});
  localStorage.setItem('kaulat_products', JSON.stringify(products));
  render();
  document.getElementById('pName').value='';
  document.getElementById('pPrice').value='';
}

function render(){
  document.getElementById('count').innerText = products.length;
  document.getElementById('productList').innerHTML = products.map(p=>`
    <div class="item">
      <img src="${p.image}"><div><b>${p.name}</b><br><small>${p.cat} | ${p.age} | ₦${p.price.toLocaleString()}</small></div>
      <button onclick="removeKaulatProduct(${p.id})" style="color:red;border:none;background:none">X</button>
    </div>
  `).join('');
}
function removeKaulatProduct(id){
  products = products.filter(p=>p.id!==id);
  localStorage.setItem('kaulat_products', JSON.stringify(products));
  render();
}
function exportJSON(){
  const data = JSON.stringify(products, null, 2);
  const blob = new Blob([data], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download='kaulat_products.json'; a.click();
  alert('kaulat_products.json downloaded. Rename to products.json and upload to GitHub.');
}
document.getElementById('fileInput')?.addEventListener('change', e=>{
  const reader = new FileReader();
  reader.onload = ev => document.getElementById('pImage').value = ev.target.result;
  reader.readAsDataURL(e.target.files[0]);
});
