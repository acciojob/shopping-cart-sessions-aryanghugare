// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearButton = document.getElementById("clear-cart-btn")
let cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" onclick="addToCart(${product.id})" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

const console = document.querySelector(".console");
clearButton.addEventListener("click",clearCart)

// Render cart list
function renderCart() {
	cartList.innerHTML = ""

	 cartItems.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" onclick="removeFromCart(${product.id})" data-id="${product.id}">Remove from cart</button>`;
    cartList.appendChild(li);
  });
}

// Add item to cart
function addToCart(productId) {
	// console.innerHTML = productId
	let a = []
	a = products.filter(pro => pro.id === productId);
	// console.innerHTML = a[1].name 
	cartItems.push(a[0]);
	sessionStorage.setItem("cart", JSON.stringify(cartItems));
renderCart()
	
}

// Remove item from cart
function removeFromCart(productId) {
cartItems = cartItems.filter(pro => pro.id !== productId);	
sessionStorage.setItem("cart", JSON.stringify(cartItems));
clearCart()
renderCart();
}

// Clear cart
function clearCart() {
	cartList.innerHTML = ""
	
}

// Initial render
renderProducts();
renderCart();
