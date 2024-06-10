import { getCart, searchProduct } from "./cart.js"

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

export { createReceipt }