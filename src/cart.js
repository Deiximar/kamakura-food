//DEBE contener las funcionalidades del carrito de compras.

import{ products } from '../assets/data/data.js'


const platosSeleccionados = [
    {
        id: 0,
        name: 'Miso Ramen',
        description: 'A elegir pasta entre tallarines caseras, fideo de arroz, o udon. A elegir principal entre pollo rebozado o pollo teriyaki.',
        price: 9.50,
        category: "ramen"
    },
    {
        id: 1,
        name: 'Mochi',
        description: 'Dos piezas de pastel japonés hecho de mochigome, un pequeño grano de arroz glutinoso, de chocolate, matcha, mango o limón.',
        price: 2.50,
        category: "postres"
    },
    {
        id: 2,
        name: 'Shogun roll',
        description: 'Rollo de 8 piezas con espárrago frito, cangrejo y aguacate, albacora picante con salsa de soya y mostaza.',
        price: 8.25,
        category: "sushi"
    }
];
const cartProducts = document.querySelector('#cart-products'); 
document.querySelector('.cart-container').remove();
// Agrega un event listener al contenedor de productos
function createProductInCart(product) {
const cartContainer = document.createElement('div');
cartContainer.classList = 'cart-container';
cartContainer.innerHTML = `
<button class="close-button"><img src="./assets/img/close.svg" alt="close"></button>
<div class="text-container">
    <h3>${product.name}</h3>
    <h5>${product.price}€</h5>
</div>
<div class="quantity-container" id="quantity">
    <button>+</button>
    <p class="quantity">1</p>
    <button>-</button>
</div>
`
cartProducts.appendChild(cartContainer);
}
platosSeleccionados.forEach(producto => createProductInCart(producto));

