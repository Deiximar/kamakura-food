//DEBE buscar los productos por los filtros
import { products } from "../assets/data/data.js";
import { createProduct } from "../src/menu.js"

const filterProducts = (filter) => {
  document.querySelectorAll('.product-container').forEach(product => product.remove());
  if (filter === 'todos') {
    products.forEach(product => createProduct(product));

  } else {
    products.filter(product => product.category === filter).forEach(product => createProduct(product));
  }
}

export { filterProducts }