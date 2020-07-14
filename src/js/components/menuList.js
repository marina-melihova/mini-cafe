import refs from '../refs.js';
import cafe from '../cafe.js';
import itemsMenu from '../../templates/menu-items.hbs';
import { addToCart } from '../services/cart.js';

const getMenuList = () => {
  const finish = cafe.pagination.menuListPerPage * cafe.pagination.currentPage;
  const start = finish - cafe.pagination.menuListPerPage;
  const menuList = cafe.dishes.slice(start, finish);
  return menuList;
};

const createMenuListMarkup = () => {
  const markup = itemsMenu(getMenuList());
  refs.menuList.innerHTML = markup;
};

const addToOrder = ({ target }) => {
  if (target.nodeName !== 'BUTTON' || target.dataset.btn !== 'addCart') {
    return;
  }
  const parent = target.closest('[data-id]'); //ищем родителя, у которого есть такой атрибут
  const id = parent.dataset.id;
  addToCart(id);
};

refs.menuList.addEventListener('click', addToOrder);

export { createMenuListMarkup };
