//Intenta separar los eventos en este archivo.


document.getElementById("cart").addEventListener("click", displayCart);

function displayCart() {
    let cartContainer = document.getElementById("cart-container");
    if(cartContainer.style.display === "none"){
        cartContainer.style.display = "flex";
    } else
    {
        cartContainer.style.display = "none";  
    }
}
