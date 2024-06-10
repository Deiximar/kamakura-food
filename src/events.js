import { filterProducts } from './searcher.js';
import { getCart, removeProduct,searchProduct, updateTotal } from './cart.js';
import { createReceipt, purchaseMessage } from './receipt.js';

//Intenta separar los eventos en este archivo.


document.getElementById("cart").addEventListener("click", displayCart);
document.getElementById("proceedPay-button").addEventListener("click", displayReceipt);

const payButton = document.getElementById("pay-button");
payButton.addEventListener("click", showPopover);



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
  const productsContainer = document.getElementById("products-container");
  receiptContainer.style.display = "flex";
  productsContainer.style.display = "none";
  createReceipt();
  updateTotal();
}

const text = document.querySelector('#cart-products > h3');

function hideText() {
  const cart = getCart();
  if (cart.length === 0) {
    text.style.display = "flex";
  } else {
    text.style.display = "none";
  }
}

function removeProductEvent(buttonElement, id) {
  buttonElement.addEventListener('click', () => {
    removeProduct(id);
    document.querySelector(`#cart-product-${id}`).remove();
  })
}
function showPopover(){
  const modal = document.querySelector(".modal");
  modal.style.display = "block";
}

const closePopover = () => {
  document.getElementById("modal").style.display = "none";
}

hideText();

export { addEventClickFilter, hideText, removeProductEvent, closePopover }