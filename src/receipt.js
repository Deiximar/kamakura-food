
const receiptProducts = document.querySelector(`#receipt-container`);
document.querySelector(`.receipt-product`).remove();
document.getElementById("close-receipt").addEventListener("click", () => closeReceipt());

const createReceipt = (product) => {
    const receiptProduct = document.createElement(`div`);
    receiptProduct.classList = `receipt-product`;
    receiptProduct.innerHTML = `  

            <h3>${product.name}</h3>
            <div class="receipt-price">
                <p>Cantidad: ${product.amount}</p>
                <h5>Subtotal ${product.subtotal}€</h5>
            </div>     

    `
    receiptProducts.insertBefore(receiptProduct, document.getElementById(`receipt-total`))
}

const closeReceipt = () => {
    const productsContainer = document.getElementById("products-container");
    document.getElementById("receipt-container").style.display = "none";
    productsContainer.style.display = "flex";
}

const purchaseMessage = () => {
    const modal = document.createElement("div");
    const container = document.querySelector(".main-container");
    modal.classList = "modal";
    modal.setAttribute("id", "modal")
    modal.innerHTML = `
    
    <div class="closeContainer"><span class="close" id="close">&times;</span></div>
    <h2 class="thanks">Gracias por tu Compra</h2>
    <p>¡Pedido realizado con éxito, gracias por comprar en Kamakura Food!</p>
    <img class="image-logo" src="./assets/img/logo.svg" alt="restaurant logo">
    

    `
    container.appendChild(modal);
    console.log("hola");
}
purchaseMessage();
