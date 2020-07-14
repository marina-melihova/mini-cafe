import refs from '../refs.js';
import cafe from '../cafe.js';
import itemsMenu from '../../templates/menu-items.hbs';

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

export { createMenuListMarkup };
