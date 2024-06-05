//Intenta separar los eventos en este archivo.
import { filterProducts } from './menu.js'
const addEventClickFilter = (button, filter) => {
  button.addEventListener('click', () => filterProducts(filter))
}

export { addEventClickFilter }