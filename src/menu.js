//DEBE imprimir en pantalla la información de filtros.
import { filters, products } from '../assets/data/data.js'

//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.

const filtersContainer = document.querySelector('#filters');
document.querySelector('.filter').remove();

const createFilter = (filter) => {
  const filterButton = document.createElement('button');
  filterButton.classList = 'filter';

  filterButton.innerHTML = filter;

  filtersContainer.appendChild(filterButton);
}

filters.forEach(filter => createFilter(filter))