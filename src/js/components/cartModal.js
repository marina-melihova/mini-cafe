import refs from '../refs.js';
import cafe from '../cafe.js';
import { removeFromCart, getTotal } from '../services/cart.js';
import itemsCart from '../../templates/cart-items.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const showCart = () => {
  const instance = basicLightbox.create(refs.modal, {
    onShow(instance) {
      // const closeModalBtnRef = getCloseModalBtnRef(instance);
      refs.closeModalBtn = getModalRef(instance, 'button[data-close]');
      refs.closeModalBtn.addEventListener('click', instance.close);
      // const markup = itemsCart(cafe.cart.order);
      // const cartBody = instance.element().querySelector('#cart');
      // refs.cartBody = getModalRef(instance, '#cart');
      // refs.cartBody.innerHTML = markup;
      // const amount = instance.element().querySelector('#amount');
      refs.amount = getModalRef(instance, '#amount');
      refs.amount.textContent = cafe.cart.totalSum;
      refs.trashBtn = getModalRef(instance, '.btn-trash');
    },
    onClose(instance) {
      // const closeModalBtnRef = getCloseModalBtnRef(instance);
      refs.closeModalBtn.removeEventListener('click', instance.close);
    },
  });

  const getModalRef = (parent, selector) => parent.element().querySelector(selector);
  instance.show();
  const markup = itemsCart(cafe.cart.order);
  refs.cartBody = document.querySelector('#cart');
  refs.cartBody.innerHTML = markup;
};

export { showCart };
