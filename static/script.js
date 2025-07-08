// 🔄 Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// 🛒 Add item to cart
function addToCart(title, price, image) {
  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  cart.push({ title, price, image });
  sessionStorage.setItem('cart', JSON.stringify(cart));
  showToast(`${title} added to cart`);
}

// 🔔 Toast Notification
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast show";
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 2500);
}

// ✅ Checkout modal (optional if you're not placing it inline)
function showSuccess() {
  document.getElementById("successModal").style.display = "block";
  sessionStorage.removeItem("cart");
}

function closeModal() {
  document.getElementById("successModal").style.display = "none";
  window.location.href = "/";
}
