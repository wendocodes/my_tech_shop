"use strict";

const productMap = new Map();

const cartSet = new Set();

/**
* Produce an infinite sequence of unique IDs. 
*/
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const idGen = idGenerator();

let productsDiv = document.querySelector("#products");
const xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status != 200) return;
    const productList = xhr.response;
    populateProductMap(productList);
    showProducts(productList);
};

xhr.open("GET", "./products.json");
xhr.responseType = "json";
xhr.send();

const productName = "E-Reader";

const populateProductMap = function (products) {
    products.forEach(product => {
        product.id = idGen.next().value;
        productMap.set(product.id, product);
    });
}

const showProducts = function (products) {
    const container = document.createElement("ul");
    container.classList.add("product-list");

    products.forEach(product => {
        const itemLi = document.createElement("li");
        itemLi.classList.add("product-item");
        itemLi.append(createProductDetails(product));
        container.append(itemLi);

        if (product.name === productName) {
            product.image = "img/e_reader.jpeg";
        }
    });

    productsDiv.append(container);
};

const createProductDetails = function (product) {
    const container = document.createElement("div");

    if (product.image) {
        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.width = 100;
        container.append(image);
    }

    const name = document.createElement("h3");
    name.textContent = product.name;
    container.append(name);

    const description = document.createElement("p");
    description.textContent = product.description;
    container.append(description);

    const price = document.createElement("p");
    price.textContent = `Price: €${product.price}`;
    container.append(price);

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.onclick = function () {
        addToCart(product);
    };
    container.append(addToCartButton);

    return container;
}

const addToCart = function (product) {
    cartSet.add(product);
    localStorage.setItem("cart", JSON.stringify(Array.from(cartSet)));
    alert(`${product.name} has been added to cart!`);
};

const showCart = function () {
    const cartDiv = document.querySelector("#cartDiv");
    cartDiv.innerHTML = "";

    const storedCart = localStorage.getItem("cart");
    const cartItems = storedCart ? JSON.parse(storedCart) : [];

    if (cartItems.length === 0) {
        cartDiv.textContent = "Your cart is empty!";
        return;
    }

    const cartList = document.createElement("ul");
    cartList.classList.add("cart-list");
    let totalPrice = 0;
    cartItems.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.classList.add("cart-item");

        const product = productMap.get(item.id);

        if (product.image) {
            const image = document.createElement("img");
            image.src = product.image;
            image.alt = product.name;
            image.width = 100;
            cartItem.append(image);
        }
        const name = document.createElement("h3");
        name.textContent = product.name;
        cartItem.append(name);

        const description = document.createElement("p");
        description.textContent = product.description;
        cartItem.append(description);

        const price = document.createElement("p");
        price.textContent = `Price: €${product.price}`;
        cartItem.append(price);
        totalPrice += product.price;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        deleteButton.onclick = function () {
            removeFromCart(item.id);
        };
        cartItem.append(deleteButton);

        cartList.append(cartItem);
    });

    cartDiv.append(cartList);
    const totalPriceElement = document.createElement("p");
    totalPriceElement.classList.add("total-price");
    totalPriceElement.textContent = `Total Price: €${totalPrice.toFixed(2)}`;
    cartDiv.append(totalPriceElement);

    const checkoutButton = document.createElement("button");
    checkoutButton.textContent = "Checkout";
    checkoutButton.onclick = function () {
        checkout();
    };
    cartDiv.append(checkoutButton);
};

const removeFromCart = function (productId) {
    const storedCart = localStorage.getItem("cart");
    const cartItems = storedCart ? JSON.parse(storedCart) : [];
    const updatedCartItems = cartItems.filter(item => item.id !== productId);

    cartSet.clear();
    updatedCartItems.forEach(item => cartSet.add(item));

    localStorage.setItem("cart", JSON.stringify(Array.from(cartSet)));
    showCart();
}

const checkout = function () {
    const storedCart = localStorage.getItem("cart");
    const cartItems = storedCart ? JSON.parse(storedCart) : [];
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Thank you for your purchase!");

    localStorage.removeItem("cart");
    showCart();
};

showCart();
