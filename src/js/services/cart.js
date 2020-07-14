import cafe from '../cafe.js';

const addToCart = e => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const parent = e.target.closest('[data-id]'); //ищем родителя, у которого есть такой атрибут
  const id = parent.dataset.id;
  for (const item of cafe.cart.order) {
    if (item.id === id) {
      item.count += 1;
      return;
    }
  }
  const dish = cafe.dishes.find(item => item.id === id);
  cafe.cart.order = [...cafe.cart.order, { ...dish, count: 1 }];
};

export { addToCart };
