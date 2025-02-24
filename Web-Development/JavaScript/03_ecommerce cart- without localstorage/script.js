document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "TV", price: 14051.215 },
        { id: 2, name: "Air-conditioner", price: 35210 },
        { id: 3, name: "Perfume", price: 245 },
    ];

    const cart = [];

    const productList = document.getElementById("product-list");
    const cartItem = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("checkout-btn");

    products.forEach(product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML =
            `<span>${product.name} - $${product.price.toFixed(2)}</span>
    <button data-id = "${product.id}">Add To Cart</button>`;
        productList.appendChild(productDiv);
    };

    productList.addEventListener("click", (e) => {
        if (e.target.tagname === "BUTTON") {
            const productId = parseInt(e.target.getattribute("data-id"));
            const product = product.find((p) => p.id === productId);
            addToCart(product);
        }
    });

    function addToCart(product) {

    }

    function renderCart() {

    }

    checkOutBtn.addEventListener("click", () => {
        cart.length = 0;
        alert("Checkout Successfully");
        renderCart();
    });


})