import cafe from '../cafe.js';

const addToCart = dish => {
  const result = cafe.cart.order.find(item => item.id === dish.id);
  if (!result) {
    cafe.cart.order = [
      ...cafe.cart.order,
      { id: dish.id, name: dish.name, price: dish.price, count: 1 },
    ];
  } else {
    cafe.cart.order = cafe.cart.order.map(item =>
      item.id === dish.id ? { ...item, count: item.count + 1 } : item,
    );
  }
  getTotal();
};

const removeFromCart = id => {
  cafe.cart.order = cafe.cart.order.filter(dish => dish.id !== id);
};

const getTotal = () => {
  cafe.cart.totalSum = cafe.cart.order.reduce((acc, { price, count }) => {
    acc += price * count;
    return acc;
  }, 0);
  cafe.cart.totalQuantity = cafe.cart.order.reduce((acc, { count }) => {
    acc += count;
    return acc;
  }, 0);
};

export { addToCart, removeFromCart, getTotal };
