import refs from './js/refs.js';
import { initTheme, onChangeSwitch } from './js/services/themeSwitch';
import { addToCart } from './js/services/cart.js';
import { instance } from './js/components/cartModal.js';
import { createMenuListMarkup } from './js/components/menuList';
import { createPagination, changePage } from './js/services/pagination.js';
import './css/styles.css';

initTheme();
createMenuListMarkup();
createPagination();

refs.switch.addEventListener('change', onChangeSwitch);
refs.cartBtn.addEventListener('click', instance.show);
refs.menuList.addEventListener('click', addToCart);
refs.productPagination.addEventListener('click', changePage);
