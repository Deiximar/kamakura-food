//DEBE contener las funcionalidades del carrito de compras.

import { products } from "../assets/data/data.js";
let selectProducts = []
const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const cartProducts = document.querySelector("#cart-products");
document.querySelector(".cart-container").remove();
// Agrega un event listener al contenedor de productos
function createProductInCart(product) {
  const cartContainer = document.createElement("div");
  cartContainer.classList = "cart-container";
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
`;
  cartProducts.appendChild(cartContainer);
}
selectedProducts.forEach((product) => createProductInCart(product));


const addProduct = (id) => {
  const search = cart.find(item => item.id == id);

  if (search === undefined) {
    cart.push({
      id: id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
 selectProducts = createSelecterProducts ();
 console.log(selectProducts)
}

function createSelecterProducts(){
  console.log(cart)
  if(cart !== 0){
    cart.map((x)=> { 
      let search = products.find((y)=> y.id == x.id) || []; 
      console.log(search)
      return search
    })  
  }
  else{
    return[]
  }
}

export { addProduct }

