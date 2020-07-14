import cafe from '../cafe.js';
import refs from '../refs.js';
import { createMenuListMarkup } from '../components/menuList.js';

const createPaginationPage = pageNumber => {
  return `
    <li class="paginationPageItem" data-page=${pageNumber}>${pageNumber}</li>`;
};

const createPaginationMarkup = () => {
  let markup = '';
  for (let i = 1; i <= cafe.pagination.pagesCount; i += 1) {
    markup += createPaginationPage(i);
  }
  return markup;
};

const getActivePage = () => {
  const pages = document.querySelectorAll('.paginationPageItem');
  pages[cafe.pagination.currentPage - 1].classList.add('activePaginationPageItem');
};

const createPagination = () => {
  cafe.pagination.totalmenuList = cafe.dishes.length;
  cafe.pagination.pagesCount = Math.ceil(
    cafe.pagination.totalmenuList / cafe.pagination.menuListPerPage,
  );
  refs.productPagination.innerHTML = createPaginationMarkup();
  getActivePage();
};

const changePage = e => {
  cafe.pagination.currentPage = e.target.dataset.page;
  createMenuListMarkup();
  createPagination();
};

export { createPagination, changePage };
