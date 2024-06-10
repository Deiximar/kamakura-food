import { getCart, searchProduct } from "./cart.js"
import { closePopover } from "./events.js"

const receiptProducts = document.querySelector(`#receipt-container`);
document.querySelector(`.receipt-product`).remove();
document.getElementById("close-receipt").addEventListener("click", () => closeReceipt());

const createReceipt = () => {
    document.querySelectorAll('.receipt-product').forEach(receipt => receipt.remove());
    const cartProducts = getCart();
    cartProducts.forEach((cartProduct) => {

        const product = searchProduct(cartProduct.id);
        const subtotal = cartProduct.quantity * product.price;
        const receiptProduct = document.createElement(`div`);
        receiptProduct.classList = `receipt-product`;
        receiptProduct.innerHTML = `  

            <h3>${product.name}</h3>
            <div class="receipt-price">
                <p>Cantidad: ${cartProduct.quantity}</p>
                <h5>Subtotal ${subtotal.toFixed(2)}€</h5>
            </div>     

    `
    receiptProducts.insertBefore(receiptProduct, document.getElementById(`receipt-total`))
    })
}


const closeReceipt = () => {
    const productsContainer = document.getElementById("products-container");
    document.getElementById("receipt-container").style.display = "none";
    productsContainer.style.display = "flex";
}

const purchaseMessage = () => {
    const modal = document.createElement("div");
    const container = document.querySelector(".main-container");
    const closeButton = document.createElement("button");
    closeButton.classList = "close-button";
    closeButton.setAttribute("id","close-modal");
    const img = document.createElement("img");
    img.src = "./assets/img/close.svg";
    img.alt = "close";
    
    closeButton.addEventListener("click", () => closePopover());
    modal.classList = "modal";
    modal.setAttribute("id", "modal")
    modal.innerHTML = `
    
    <div class="closeContainer"></div>
    <h2 class="thanks">Gracias por tu Compra</h2>
    <p>¡Pedido realizado con éxito, gracias por comprar en Kamakura Food!</p>
    <img class="image-logo" src="./assets/img/logo.svg" alt="restaurant logo">


    `
    container.appendChild(modal);
    document.querySelector(".closeContainer").appendChild(closeButton);
    closeButton.appendChild(img);
}
purchaseMessage();

export { createReceipt, purchaseMessage }

