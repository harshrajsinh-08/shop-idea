// Cart array to hold products
let cart = [];

// Function to handle adding a product to the cart
function addToCart(productName, productPrice) {
    // Check if product already exists in the cart
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    // Update cart count
    updateCartCount();
    alert(productName + " added to cart!");
}

// Function to update the cart count in the UI
function updateCartCount() {
    const cartCount = document.querySelector("#cart-count");
    cartCount.textContent = cart.reduce((count, item) => count + item.quantity, 0);
}

// Function to display cart details
function displayCart() {
    const cartDetails = document.querySelector("#cart-details");
    cartDetails.innerHTML = ""; // Clear previous content

    if (cart.length === 0) {
        cartDetails.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            cartDetails.innerHTML += `<p>${item.name} - $${item.price} (x${item.quantity})</p>`;
        });

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        cartDetails.innerHTML += `<h3>Total: $${total.toFixed(2)}</h3>`;
    }
}

// Call displayCart on page load or when cart link is clicked
document.addEventListener("DOMContentLoaded", updateCartCount);