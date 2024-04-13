const cart = [];
const totalPriceElement = document.getElementById('totalPrice');
const cartItemsElement = document.getElementById('cartItems');

function addToCart(productName, price) {
    const imageSrc = event.target.parentNode.querySelector('.product-image').src;
    // I needed help on this line

    // isNaN(price) - Checks if a price is a number
    // price > 0.00 - Checks if a number is less than a cent in this example
    if (productName && !isNaN(price) && price > 0.00) {
        cart.push({ name: productName, price: price, image: imageSrc });
        updateCart();
    } else {
        alert('Invalid product details.');
    }
}

function updateCart() {
    let totalPrice = 0;
    cartItemsElement.innerHTML = '';
    // Makes the cart blank, otherwise, it will duplicate the products

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('card');
        itemElement.innerHTML = `
            <img src="${item.image}" style="width: 100px; height: auto;">
            <h2>${item.name}</h2>
            <span>$${item.price}</span>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItemsElement.appendChild(itemElement); // add item
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `${totalPrice.toFixed(2)}`;
    // toFixed(2) = Makes the price from 1.0 to 1.00
}

function clearCart() {
    cart.length = 0;
    updateCart();
}

function removeFromCart(itemName) {
    const index = cart.findIndex(item => item.name === itemName);
    // item represents the element/product in the cart
    // item.name === itemName - checks if item's name matches with local function's property

    cart.splice(index, 1); // Remove item from cart array
    updateCart(); // Update cart display
}