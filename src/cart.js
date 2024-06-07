//DEBE contener las funcionalidades del carrito de compras.

import { products } from "../assets/data/data.js";
const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const cartProducts = document.querySelector("#cart-products");
document.querySelector(".cart-container").remove();

// Agrega un event listener al contenedor de productos
function createProductInCart() {
  if (cart !== undefined) {
    if (document.contains(document.querySelector(".cart-container"))) {
      document.querySelectorAll(".cart-container").forEach(cart => cart.remove());
    }
    cart.map((item) => {
      let product = searchProduct(item.id);
      const cartContainer = document.createElement("div");
      cartContainer.classList = "cart-container";
      cartContainer.innerHTML = `
        <button class="close-button"><img src="./assets/img/close.svg" alt="close"></button>
        <div class="text-container">
            <h3>${product.name}</h3>
            <h5>${product.price}€</h5>
        </div>
        <div class="quantity-container" id="quantity">
            <button onclick="addProductAmount(${product.id})">+</button>
            <p class="quantity">1</p>
            <button>-</button>
        </div>
`;
      cartProducts.appendChild(cartContainer);
    })
  }
}

//selectedProducts.forEach((product) => createProductInCart(product));

const addProduct = (id) => {
  const search = cart.find(item => item.id == id);
  if (search === undefined) {
    cart.push({
      id: id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  createProductInCart();
}

const searchProduct = (id) => {
  return products.find((product) => product.id == id) || [];
}

const addProductAmount = (id) => {
  console.log('Hola!!');
}

createProductInCart();

export { addProduct, addProductAmount }