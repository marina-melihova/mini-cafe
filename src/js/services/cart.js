import cafe from '../cafe.js';

const addToCart = id => {
  const result = cafe.cart.order.find(item => item.id === id);
  if (!result) {
    const dish = cafe.dishes.find(item => item.id === id);
    cafe.cart.order = [
      ...cafe.cart.order,
      { id: dish.id, name: dish.name, price: dish.price, count: 1 },
    ];
  } else {
    cafe.cart.order = cafe.cart.order.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item,
    );
  }
  getTotal();
};

const changeCartCount = (id, newCount) => {
  cafe.cart.order = cafe.cart.order.map(item =>
    item.id === id ? { ...item, count: newCount } : item,
  );
  getTotal();
};

const removeFromCart = id => {
  cafe.cart.order = cafe.cart.order.filter(dish => dish.id !== id);
  getTotal();
};

const getTotal = () => {
  cafe.cart.totalAmount = cafe.cart.order.reduce((acc, { price, count }) => {
    acc += price * count;
    return acc;
  }, 0);
  cafe.cart.totalCount = cafe.cart.order.reduce((acc, { count }) => {
    acc += count;
    return acc;
  }, 0);
};

export { addToCart, changeCartCount, removeFromCart };
