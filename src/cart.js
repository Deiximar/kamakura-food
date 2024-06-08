//DEBE contener las funcionalidades del carrito de compras.
import { products } from "../assets/data/data.js";
import { hideText } from "./events.js";

const cartProducts = document.querySelector("#cart-products");
document.querySelector(".cart-container").remove();

function loadAllProducts() {
  document.querySelectorAll(".cart-container").forEach(product => product.remove());
  const cart = getCart();
  cart.forEach(product => createProductInCart(product));
}

// Agrega un event listener al contenedor de productos
function createProductInCart(cartProduct) {
  const product = searchProduct(cartProduct.id)
  const cartContainer = document.createElement("div");
  cartContainer.classList = "cart-container";

  const addbutton = document.createElement('button');
  addbutton.textContent = '+';
  addbutton.addEventListener('click', () => addProductAmount(product.id));

  const substractButton = document.createElement('button');
  substractButton.textContent = '-';
  substractButton.addEventListener('click', () => substractProductAmount(product.id));

  cartContainer.classList = "cart-container";
  cartContainer.innerHTML = `
        <button class="close-button"><img src="./assets/img/close.svg" alt="close"></button>
        <div class="text-container">
            <h3>${product.name}</h3>
            <h5>${product.price}€</h5>
        </div>
        <div class="quantity-container" id="quantity-${product.id}">
            <p class="quantity">${cartProduct.quantity}</p>

        </div>
    `;
  cartProducts.appendChild(cartContainer);

  const quantityContainer = cartContainer.querySelector(`#quantity-${product.id}`);
  quantityContainer.insertBefore(addbutton, quantityContainer.querySelector('.quantity'))
  quantityContainer.appendChild(substractButton);
}

const getCart = () => {
  return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
}

const addCartProduct = (id) => {
  const cart = getCart();
  let cartProduct = cart.find(item => item.id == id);
  if (cartProduct === undefined) {
    cartProduct = {
      id: id,
      quantity: 1,
    };
    cart.push(cartProduct);
    createProductInCart(cartProduct);
    hideText();
  } else {
    cartProduct.quantity += 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateQuantityText(cartProduct);
}

const searchProduct = (id) => {
  return products.find((product) => product.id == id) || [];
}

const substractProductAmount = (id) => {
  const cart = getCart();
  const findProduct = cart.find(product => product.id == id);

  if (findProduct.quantity > 1) {
    findProduct.quantity -= 1;
    updateQuantityText(findProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    const index = cart.indexOf(findProduct);
    if (index > -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    loadAllProducts();
    hideText();
  }
}

const addProductAmount = (id) => {
  const cart = getCart();
  const findProduct = cart.find(product => product.id == id)
  findProduct.quantity += 1;
  updateQuantityText(findProduct);
  localStorage.setItem("cart", JSON.stringify(cart))
}

const updateQuantityText = (cartProduct) => {
  const element = document.querySelector(`#quantity-${cartProduct.id} .quantity`);
  element.textContent = cartProduct.quantity;
}


loadAllProducts();
export { addCartProduct, addProductAmount, substractProductAmount, getCart }

