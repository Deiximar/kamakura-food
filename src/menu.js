import { products } from "../assets/data/data.js"
//DEBE imprimir en pantalla la información de filtros.

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

const productsContainer = document.querySelector('#products');
document.querySelector('.product-container').remove();

const createProduct = (product) => {
  const productContainer = document.createElement('div');
  productContainer.classList = 'product-container';
  productContainer.innerHTML = `
  
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <div class="price-container">
    <h5>${product.price}€</h5>
    <button class="add-button">Añadir</button>
`

  productsContainer.appendChild(productContainer);
}

products.forEach(product => createProduct(product));