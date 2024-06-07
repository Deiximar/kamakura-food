//DEBE contener las funcionalidades del carrito de compras.

import { products } from "../assets/data/data.js";
const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const cartProducts = document.querySelector("#cart-products");
document.querySelector(".cart-container").remove();

// Agrega un event listener al contenedor de productos
function createProductInCart() {
  document.querySelectorAll(".cart-container").forEach(product => product.remove());
  cart.map((item) => {
    let product = searchProduct(item.id);
    const cartContainer = document.createElement("div");

    const addbutton = document.createElement('button');
    addbutton.textContent = '+';
    addbutton.addEventListener('click', () => addProductAmount(product.id));

    cartContainer.classList = "cart-container";
    cartContainer.innerHTML = `
        <button class="close-button"><img src="./assets/img/close.svg" alt="close"></button>
        <div class="text-container">
            <h3>${product.name}</h3>
            <h5>${product.price}€</h5>
        </div>
        <div class="quantity-container" id="quantity-${product.id}">
            <p class="quantity">${item.item}</p>
            <button>-</button>
        </div>
`;
    cartProducts.appendChild(cartContainer);
    const quantityContainer = document.querySelector(`#quantity-${product.id}`);
    quantityContainer.insertBefore(addbutton, quantityContainer.querySelector('.quantity'))
  })

}

//selectedProducts.forEach((product) => createProductInCart(product));

const addProduct = (id) => {
  const search = cart.find(item => item.id == id);
  if (search === undefined) {
    cart.push({
      id: id,
      item: 1,
    });
    createProductInCart();
  } else {
    search.item += 1;
    updateQuantityText(search);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}


const searchProduct = (id) => {
  return products.find((product) => product.id == id) || [];
}

const addProductAmount = (id) => {
  const findProduct = cart.find(product => product.id == id)
  findProduct.item += 1;
  updateQuantityText(findProduct);
  localStorage.setItem("cart", JSON.stringify(cart))
}

const updateQuantityText = (produtCart) => {
  document.querySelector(`#quantity-${produtCart.id}`).querySelector('.quantity').textContent = produtCart.item;
}

createProductInCart();
export { addProduct, addProductAmount }