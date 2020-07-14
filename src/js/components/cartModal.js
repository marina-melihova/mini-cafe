import refs from '../refs.js';
import cafe from '../cafe.js';
import itemsCart from '../../templates/cart-items.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const instance = basicLightbox.create(refs.modal, {
  onShow(instance) {
    const closeModalBtnRef = getCloseModalBtnRef(instance);
    closeModalBtnRef.addEventListener('click', instance.close);
    const markup = itemsCart(cafe.cart.order);
    const cartBody = instance.element().querySelector('#cart');
    cartBody.innerHTML = markup;
    const amount = instance.element().querySelector('#amount');
    amount.textContent = cafe.cart.order.reduce((acc, { price, count }) => {
      acc += price * count;
      return acc;
    }, 0);
  },
  onClose(instance) {
    const closeModalBtnRef = getCloseModalBtnRef(instance);
    closeModalBtnRef.removeEventListener('click', instance.close);
  },
});

function getCloseModalBtnRef(parent) {
  return parent.element().querySelector('button[data-close-modal]');
}

export { instance };
