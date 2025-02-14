// Product Data
const products = [
    { name: "Laptop", price: 999.99, image: src="laptop.jpg" },
    { name: "Smartphone", price: 499.99, image: src="smartphone.jpg" },
    { name: "Headphones", price: 149.99, image: src="headphones.jpg" },
    { name: "Tablet", price: 299.99, image: src="tablet.png" },
  ];
  
  // Shopping Cart Array
let cart = [];

// DOM Elements
const productsContainer = document.getElementById("products");
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const checkoutButton = document.getElementById("checkout-button");
const checkoutMessage = document.getElementById("checkout-message");

// Function to render products
function renderProducts() {
  products.forEach((product, index) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;

    productsContainer.appendChild(productElement);
  });
}

// Function to add a product to the cart
function addToCart(productIndex) {
  const product = products[productIndex];
  cart.push(product);
  renderCart();
  updateTotalPrice();
}

// Function to render the shopping cart
function renderCart() {
  cartItemsContainer.innerHTML = "";
  cart.forEach((item, index) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");

    cartItemElement.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price.toFixed(2)}</span>
    `;

    cartItemsContainer.appendChild(cartItemElement);
  });
}

// Function to update the total price
function updateTotalPrice() {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Function to handle checkout
function handleCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add items before checking out.");
    return;
  }

  // Display thank you message
  checkoutMessage.style.display = "block";

  // Clear the cart
  cart = [];
  renderCart();
  updateTotalPrice();

  // Hide the message after 3 seconds
  setTimeout(() => {
    checkoutMessage.style.display = "none";
  }, 3000);
}

// Event listener for the checkout button
checkoutButton.addEventListener("click", handleCheckout);

// Initialize the page
renderProducts();