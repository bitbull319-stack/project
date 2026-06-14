// Product catalog registry
const PRODUCTS = [
  {
    id: "SP001",
    name: "Áo Thun Boxy Cotton 250gsm - Co giãn 2 chiều Nam Nữ Trơn",
    price: 248000,
    category: "tees",
    image: "https://i.ibb.co/39cqsXbq/image.png",
    edition: "THE LIMITED EDITION",
    desc: "Sử dụng vải 100% Cotton 250gsm định lượng dày dặn đứng dáng, thoáng mát và co giãn nhẹ cực kỳ thoải mái cho các hoạt động thường nhật.",
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "SP002",
    name: "Áo Phông Boxy ONYSSTU 250gsm - Họa tiết Signature Street Style",
    price: 248000,
    category: "tees",
    image: "https://i.ibb.co/mrnYqgzb/image.png",
    edition: "IT'S ALL YOU NEED EDITION",
    desc: "Mẫu áo in họa tiết signature độc quyền của ONYSSTU ở lưng áo, chất liệu cotton dày dặn bền bỉ không xù lông và cực mịn da.",
    colors: ["Off-White", "Black"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "SP003",
    name: "Áo Hoodie Oversized Beige Premium ONYSSTU - Phom Dáng Rộng",
    price: 428000,
    category: "hoodies",
    image: "./assets/street_style_hoodie.png",
    edition: "EDITORIAL LOOK BOOK",
    desc: "Chiếc áo khoác Hoodie cao cấp phom dáng oversized rộng rãi, màu beige tinh tế xuất hiện trong bộ sưu tập mới nhất. Vải nỉ dày dặn ấm áp.",
    colors: ["Beige"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "SP004",
    name: "Áo Thun Boxy Basic Cotton 250gsm - Phân khúc Essential Cổ Tròn",
    price: 168000,
    category: "tees",
    image: "https://i.ibb.co/GQv68Msq/image.png",
    edition: "IT'S FOR YOU EDITION",
    desc: "Được dệt từ sợi bông cotton tự nhiên, thoáng mát, giữ form cực tốt và thân thiện với làn da nhạy cảm. Đây là item basic không thể thiếu.",
    colors: ["Heather Grey", "Black"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "SP005",
    name: "Quần Wide-Leg Trousers Streetwear - Ống Rộng Phom Rũ Tự Nhiên",
    price: 348000,
    category: "pants",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDHEbg9obJNWJ8OiD_3vNBHAuyOYAtSKhGx4_aea0W2XOkbS3_iLvDAC8FYrP1sr2MUl7PH9ndoCiU8qIPYFk7dmmpVFwYcbA6sLmvjjzAJEZ7RdM_4dS_x3kjSD9nVkZwLW1QDh0CtQdYRHBsC568s3r7vSV50J-65pOYDtZGZ2QxR1cOl5XdtNEnQhHdWRyinRw9rgyKxLSsy8t-YbSQ49oL8AdcGQX5mKgLuO_d4LbxoXw1bQoszHuS8w2x9ks1VDuBRWWbrwMb",
    edition: "URBAN ESSENTIALS",
    desc: "Quần ống rộng vải dệt sợi pha cao cấp, mềm rũ tự nhiên thích hợp để mix match phong cách minimalist street style với các mẫu áo Boxy thun.",
    colors: ["Beige", "Charcoal"],
    sizes: ["S", "M", "L", "XL"]
  }
];

// Cart and Favorites state
let cart = JSON.parse(localStorage.getItem('onysstu_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('onysstu_favorites')) || [];

// Save functions
function saveCart() {
  localStorage.setItem('onysstu_cart', JSON.stringify(cart));
  updateCartUI();
}

function saveFavorites() {
  localStorage.setItem('onysstu_favorites', JSON.stringify(favorites));
  updateFavoritesUI();
}

// Utility: format price
function formatVND(amount) {
  return amount.toLocaleString('vi-VN') + 'đ';
}

// Show feedback toasts
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = 'bg-primary text-on-primary px-md py-sm text-sm tracking-wider uppercase flex items-center gap-xs shadow-lg fade-in transition-all duration-300 pointer-events-auto';
  toast.innerHTML = `
    <span class="material-symbols-outlined text-base">check_circle</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('opacity-0', '-translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Add item to cart
function addToCart(productId, size = 'M', color = '', quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  const chosenColor = color || product.colors[0];
  const existingIndex = cart.findIndex(item => item.id === productId && item.size === size && item.color === chosenColor);
  
  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      color: chosenColor,
      quantity: quantity
    });
  }
  
  saveCart();
  showToast("Đã thêm vào giỏ hàng");
  openCartDrawer();
}

// Remove item from cart
function removeFromCart(productId, size, color) {
  cart = cart.filter(item => !(item.id === productId && item.size === size && item.color === color));
  saveCart();
}

// Change quantity in cart
function updateQuantity(productId, size, color, delta) {
  const item = cart.find(item => item.id === productId && item.size === size && item.color === color);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId, size, color);
    } else {
      saveCart();
    }
  }
}

// Toggle Favorites
function toggleFavorite(productId) {
  const index = favorites.indexOf(productId);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast("Đã xóa khỏi danh sách yêu thích");
  } else {
    favorites.push(productId);
    showToast("Đã lưu vào danh sách yêu thích");
  }
  saveFavorites();
}

// Cart UI Update
function updateCartUI() {
  // Update badges
  const badges = document.querySelectorAll('.cart-count');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  badges.forEach(b => {
    b.innerText = totalItems;
    if (totalItems > 0) {
      b.classList.remove('hidden');
    } else {
      b.classList.add('hidden');
    }
  });

  // Render items inside drawer list
  const drawerList = document.getElementById('cart-drawer-list');
  if (drawerList) {
    if (cart.length === 0) {
      drawerList.innerHTML = `
        <div class="flex flex-col items-center justify-center h-64 text-on-surface-variant gap-sm">
          <span class="material-symbols-outlined text-4xl font-light">shopping_bag</span>
          <p class="font-label-sm text-label-sm uppercase tracking-widest">Giỏ hàng trống</p>
        </div>
      `;
    } else {
      drawerList.innerHTML = cart.map(item => `
        <div class="flex gap-md py-md border-b border-outline-variant">
          <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover bg-surface-container">
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <h4 class="font-body-md text-sm text-on-surface line-clamp-1">${item.name}</h4>
              <p class="text-xs text-on-surface-variant uppercase mt-1">Size: ${item.size} | Color: ${item.color}</p>
            </div>
            <div class="flex justify-between items-center mt-2">
              <div class="flex border border-outline items-center text-xs">
                <button onclick="updateQuantity('${item.id}', '${item.size}', '${item.color}', -1)" class="px-2 py-1 hover:bg-surface-container-low">-</button>
                <span class="px-3 py-1 font-semibold">${item.quantity}</span>
                <button onclick="updateQuantity('${item.id}', '${item.size}', '${item.color}', 1)" class="px-2 py-1 hover:bg-surface-container-low">+</button>
              </div>
              <span class="font-price-tag text-sm">${formatVND(item.price * item.quantity)}</span>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // Update summary prices
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const subtotalElems = document.querySelectorAll('.cart-subtotal');
  subtotalElems.forEach(el => el.innerText = formatVND(subtotal));
}

// Favorites UI Update
function updateFavoritesUI() {
  const favoriteButtons = document.querySelectorAll('.fav-btn');
  favoriteButtons.forEach(btn => {
    const pid = btn.getAttribute('data-product-id');
    const icon = btn.querySelector('.material-symbols-outlined');
    if (favorites.includes(pid)) {
      icon.innerText = 'favorite';
      icon.style.fontVariationSettings = "'FILL' 1";
      btn.classList.add('text-primary');
    } else {
      icon.innerText = 'favorite';
      icon.style.fontVariationSettings = "'FILL' 0";
      btn.classList.remove('text-primary');
    }
  });
}

// Open / Close Cart Drawer
function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer) {
    drawer.classList.remove('translate-x-full');
    document.getElementById('cart-drawer-overlay')?.classList.remove('opacity-0', 'pointer-events-none');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer) {
    drawer.classList.add('translate-x-full');
    document.getElementById('cart-drawer-overlay')?.classList.add('opacity-0', 'pointer-events-none');
  }
}

// DOM Setup
document.addEventListener('DOMContentLoaded', () => {
  // Inject Toast container if missing
  if (!document.getElementById('toast-container')) {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed top-20 right-4 z-[100] flex flex-col gap-2 pointer-events-none max-w-sm w-full px-sm';
    document.body.appendChild(container);
  }

  // Bind cart events
  const closeCartBtn = document.getElementById('close-cart-btn');
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.addEventListener('click', closeCartDrawer);

  const cartTriggers = document.querySelectorAll('.cart-trigger');
  cartTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  // Top Bar Shrink/Scroll Effect
  let lastScroll = 0;
  const nav = document.querySelector('nav.fixed.top-0, header.fixed.top-0');
  if (nav) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll && currentScroll > 100) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
      nav.style.transition = 'transform 0.3s ease-in-out';
      lastScroll = currentScroll;
    });
  }

  // Load UI components
  updateCartUI();
  updateFavoritesUI();
});
