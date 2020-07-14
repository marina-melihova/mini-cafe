import refs from './js/refs.js';
import { initTheme, onChangeSwitch } from './js/services/themeSwitch';
import { showCart } from './js/components/cartModal.js';
import { createMenuListMarkup } from './js/components/menuList';
import { createPagination, changePage } from './js/services/pagination.js';
import './css/styles.css';

initTheme();
createMenuListMarkup();
createPagination();

refs.switch.addEventListener('change', onChangeSwitch);
refs.cartBtn.addEventListener('click', showCart);
refs.productPagination.addEventListener('click', changePage);
