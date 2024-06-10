//DEBE contener las funcionalidades del carrito de compras.
import { products } from "../assets/data/data.js";
import { hideText, removeProductEvent } from "./events.js";

const cartProducts = document.querySelector("#cart-products");
document.querySelector(".cart-container").remove();

function loadAllProducts() {
  document.querySelectorAll(".cart-container").forEach(product => product.remove());
  const cart = getCart();
  cart.forEach(product => createProductInCart(product));
  updateTotal();
}

// Agrega un event listener al contenedor de productos
function createProductInCart(cartProduct) {
  const product = searchProduct(cartProduct.id)
  const cartContainer = document.createElement("div");
  cartContainer.classList = "cart-container";
  cartContainer.setAttribute('id', `cart-product-${cartProduct.id}`);

  const addbutton = document.createElement('button');
  addbutton.textContent = '+';
  addbutton.addEventListener('click', () => addProductAmount(product.id));

  const substractButton = document.createElement('button');
  substractButton.textContent = '-';
  substractButton.addEventListener('click', () => substractProductAmount(product.id));
  const subtotal = product.price * cartProduct.quantity;

  cartContainer.innerHTML = `
        <button class="close-button"><img src="./assets/img/close.svg" alt="close"></button>
        <div class="text-container">
            <h3>${product.name}</h3>
            <h5 class="subtotal">${subtotal.toFixed(2)}€</h5>
        </div>
        <div class="quantity-container" id="quantity-${product.id}">
            <p class="quantity">${cartProduct.quantity}</p>

        </div>
    `;
  cartProducts.appendChild(cartContainer);
  const closeButton = document.querySelector(`#cart-product-${cartProduct.id} > .close-button`);
  removeProductEvent(closeButton, `${cartProduct.id}`);
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
  } else {
    cartProduct.quantity += 1;
  }
  const product = searchProduct(cartProduct.id);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateQuantityText(cartProduct);
  updateCartProductSubtotal(cartProduct, product.price);
  updateTotal();
  hideText();
}

const searchProduct = (id) => {
  return products.find((product) => product.id == id) || [];
}

const substractProductAmount = (id) => {
  const cart = getCart();
  const cartProduct = cart.find(product => product.id == id);
  const product = searchProduct(cartProduct.id);

  if (cartProduct.quantity > 1) {
    cartProduct.quantity -= 1;
    updateQuantityText(cartProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartProductSubtotal(cartProduct, product.price);
  } else {
    const index = cart.indexOf(cartProduct);
    if (index > -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    loadAllProducts();
  }
  updateTotal();
  hideText();
}

const addProductAmount = (id) => {
  const cart = getCart();
  const cartProduct = cart.find(product => product.id == id);
  const product = searchProduct(cartProduct.id);
  cartProduct.quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart))
  updateQuantityText(cartProduct);
  updateCartProductSubtotal(cartProduct, product.price);
  updateTotal();
}

const updateQuantityText = (cartProduct) => {
  const element = document.querySelector(`#quantity-${cartProduct.id} .quantity`);
  element.textContent = cartProduct.quantity;
}

const updateCartProductSubtotal = (cartProduct, productPrice) => {
  const element = document.querySelector(`#cart-product-${cartProduct.id} .subtotal`);
  const subtotal = cartProduct.quantity * productPrice;
  element.textContent = `${subtotal.toFixed(2)}€`
}

const updateTotal = () => {
  const totalElement = document.querySelector('#cart-total');
  const cartProducts = getCart();
  let total = 0;

  cartProducts.forEach(cartProduct => {
    const product = searchProduct(cartProduct.id);
    total += product.price * cartProduct.quantity;
  })

  totalElement.textContent = `Total: ${total.toFixed(2)}€`
}

function removeProduct(productID) {
  const cart = getCart();
  console.log(productID)
  console.log(cart);
  const newCart = cart.filter((cartProduct) => cartProduct.id != productID);
  console.log(newCart, 'new');
  localStorage.setItem("cart", JSON.stringify(newCart));
  updateTotal();
}

loadAllProducts();
export { addCartProduct, addProductAmount, substractProductAmount, getCart, removeProduct }

