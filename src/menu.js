import { filters, products } from '../assets/data/data.js';
import { addEventClickFilter } from './events.js';

//DEBE imprimir en pantalla la información de filtros.
const filtersContainer = document.querySelector('#filters');
document.querySelector('.filter').remove();

const createFilter = (filter) => {
  const filterButton = document.createElement('button');
  filterButton.classList = 'filter';
  filterButton.innerHTML = filter;
  addEventClickFilter(filterButton, filter);
  filtersContainer.appendChild(filterButton);
}

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

const filterProducts = (filter) => {
  document.querySelectorAll('.product-container').forEach(product => product.remove());
  if (filter === 'todos') {
    products.forEach(product => createProduct(product));

  } else {
    products.filter(product => product.category === filter).forEach(product => createProduct(product));
  }
}

filters.forEach(filter => createFilter(filter));
products.forEach(product => createProduct(product));

export { filterProducts };