import menu from '../menu.json';

export default {
  dishes: [...menu],
  dish: {
    id: '',
    name: '',
    price: 0,
    count: 0,
  },
  pagination: {
    currentPage: 1,
    totalmenuList: 0,
    menuListPerPage: 2,
    pagesCount: 0,
  },
  cart: {
    order: [],
    totalSum: 0,
    totalCount: 0,
  },
};
