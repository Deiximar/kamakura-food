
const receiptProducts = document.querySelector(`#receipt-container`);
document.querySelector(`.receipt-product`).remove();


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
