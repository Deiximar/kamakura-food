import { filterProducts } from './menu.js'
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
function displayReceipt(){
  const receiptContainer = document.getElementById("receipt-container");
  if (receiptContainer.style.display === "none"){
    receiptContainer.style.display = "flex";
  }else{
    receiptContainer.style.display = "none"
  }
}
export { addEventClickFilter }