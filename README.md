## Owner Workflow
1. Go to `/admin.html`
2. Login PIN: `1234` (change in assets/js/admin.js)
3. Add Product: Name, Price, Age/Size, Category, Image (URL or upload)
4. Click Export -> Download `kaulat_products.json`
5. Upload `kaulat_products.json` to GitHub repo
6. Store updates automatically at `/`

## Tech
- Pure HTML/CSS/JS - Works on GitHub Pages
- No backend - Uses localStorage `kaulat_products` + `kaulat_cart`
- WhatsApp Checkout via wa.me/23480xxxxxxx
- Mobile-first: 2 cols mobile, 3 cols desktop

## Naming Convention
All code uses `kaulat` prefix:
- IDs: `kaulatProductGrid`, `kaulatCartCount`, `kaulatCartTotal`
- Classes: `kaulat-card`, `kaulat-price`, `kaulat-header`
- Storage: `kaulat_products`, `kaulat_cart`
- Functions: `removeKaulatProduct()`, `kaulatCheckout()`, `loadKaulatProducts()`

© 2026 Kaulatkiddies - Powered by Kaulat Gazelle Method
