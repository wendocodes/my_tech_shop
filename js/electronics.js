"use strict";
let productList;
let productsDiv = document.querySelector("#products");
const xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status != 200) return;
    productList = xhr.response;
    showProducts(productList);
};

xhr.open("GET", "./products.json");
xhr.responseType = "json";
xhr.send();

const productName = "E-Reader";

const showProducts = function (products) {
    const container = document.createElement("ul");
    container.classList.add("product-list");

    for (let i = 0; i < products.length; i++) {
        const itemLi = document.createElement("li");
        itemLi.classList.add("product-item");
        const product = products[i];
        itemLi.append(createProductDetails(product));
        container.append(itemLi);

        if (productList[i].name === productName) {
            console.log(productList[i].name);
            products[i].image = "img/e_reader.jpeg";
        }
    }

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

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const addToCart = function (product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to cart!`);
};

const showCart = function () {
    const cartDiv = document.querySelector("#cartDiv");
    cartDiv.innerHTML = "";

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    if (cartItems.length === 0) {
        cartDiv.textContent = "Your cart is empty!";
        return;
    }

    const cartList = document.createElement("ul");
    cartList.classList.add("cart-list");

    for (let i = 0; i < cartItems.length; i++) {
        const cartItem = document.createElement("li");
        cartItem.classList.add("cart-item");

        const name = document.createElement("h3");
        name.textContent = cartItems[i].name;
        cartItem.append(name);

        const description = document.createElement("p");
        description.textContent = cartItems[i].description;
        cartItem.append(description);

        const price = document.createElement("p");
        price.textContent = `Price: €${cartItems[i].price}`;
        cartItem.append(price);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        deleteButton.onclick = function () {
            removeFromCart(i);
        };
        cartItem.append(deleteButton);

        cartList.append(cartItem);
    }

    cartDiv.append(cartList);
};


const removeFromCart = function (index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}
