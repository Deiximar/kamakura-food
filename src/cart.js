//DEBE contener las funcionalidades del carrito de compras.

import { products } from "../assets/data/data.js";

const cartProducts = document.querySelector("#cart-products");
document.querySelector(".cart-container").remove();
// Agrega un event listener al contenedor de productos
function createProductInCart(product) {
  const cartContainer = document.createElement("div");
  cartContainer.classList = "cart-container";
  cartContainer.innerHTML = `
<button class="close-button"><img src="./assets/img/close.svg" alt="close"></button>
<div class="text-container">
    <h3>${product.name}</h3>
    <h5>${product.price}€</h5>
</div>
<div class="quantity-container" id="quantity">
    <button>+</button>
    <p class="quantity">1</p>
    <button>-</button>
</div>
`;
  cartProducts.appendChild(cartContainer);
}
selectedProducts.forEach((product) => createProductInCart(product));
