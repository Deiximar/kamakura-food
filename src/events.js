import { filterProducts } from './searcher.js';
import { getCart} from './cart.js';
//Intenta separar los eventos en este archivo.


document.getElementById("cart").addEventListener("click", displayCart);
document.getElementById("proceedPay-button").addEventListener("click", displayReceipt);

function displayCart() {
  let cartContainer = document.getElementById("cart-container");
  if (cartContainer.style.display === "none") {
    cartContainer.style.display = "flex";
  } else {
    cartContainer.style.display = "none";
  }
}

const addEventClickFilter = (button, filter) => {
  button.addEventListener('click', () => filterProducts(filter))
}

function displayReceipt() {
  const receiptContainer = document.getElementById("receipt-container");
  if (receiptContainer.style.display === "none") {
    receiptContainer.style.display = "flex";
  } else {
    receiptContainer.style.display = "none"
  }
}

const text = document.querySelector('#cart-products > h3');

function hideText() {
  const cart = getCart();
  if (cart.length === 0 || cart === undefined) {
    text.style.display = "flex";
  }else{
    text.style.display = "none";
  }
} 

hideText();

export { addEventClickFilter, hideText }