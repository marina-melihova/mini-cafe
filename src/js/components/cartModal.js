import refs from '../refs.js';
import cafe from '../cafe.js';
import { changeCartCount, removeFromCart } from '../services/cart.js';
import itemsCart from '../../templates/cart-items.hbs';
import * as basicLightbox from 'basiclightbox';
import { success } from '@pnotify/core';
import 'basiclightbox/dist/basicLightbox.min.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

const showCart = () => {
  const onConfirmOrder = () => {
    success({
      title: 'Ваш заказ принят!',
      text: 'Наш менеджер скоро свяжется с Вами для уточнения деталей заказа',
    });
    instance.close();
    cafe.cart.order = [];
  };

  const createCartMarkup = () => {
    if (cafe.cart.order.length > 0) {
      refs.confirmOrderBtn.classList.remove('hidden');
      const markup = itemsCart(cafe.cart.order);
      refs.cartList.innerHTML = markup;
      refs.amount.textContent = cafe.cart.totalAmount;
      refs.dishesCount.textContent = cafe.cart.totalCount;
    } else {
      refs.cartInfo.innerHTML =
        '<div style="text-align: center; padding: 15px">Не было выбрано ни одного блюда</div>';
      refs.confirmOrderBtn.classList.add('hidden');
    }
  };

  const removeFromOrder = ({ target }) => {
    if (target.dataset.action === 'remove' || target.parentNode.dataset.action === 'remove') {
      const parent = target.closest('[data-id]');
      const id = parent.dataset.id;
      removeFromCart(id);
      createCartMarkup();
    }
  };

  const onChangeCount = ({ target }) => {
    if (target.name !== 'dishesCount') {
      return;
    }
    let newCount = Number(target.value);
    if (newCount <= 0) {
      newCount = 1;
    }
    if (newCount > 100) {
      newCount = 100;
    }
    target.value = newCount;
    const parent = target.closest('[data-id]');
    const id = parent.dataset.id;
    changeCartCount(id, newCount);
    createCartMarkup();
  };

  const instance = basicLightbox.create(refs.modal, {
    onShow(instance) {
      const modalCart = instance.element();
      refs.closeModalBtn = modalCart.querySelector('button[data-close]');
      refs.confirmOrderBtn = modalCart.querySelector('.orderButton');
      refs.cartInfo = modalCart.querySelector('.cart__content');
      refs.cartList = modalCart.querySelector('#cart');
      refs.amount = modalCart.querySelector('#amount');
      refs.dishesCount = modalCart.querySelector('#count');
      createCartMarkup();
      refs.closeModalBtn.addEventListener('click', instance.close);
      refs.cartList.addEventListener('click', removeFromOrder);
      refs.cartList.addEventListener('change', onChangeCount);
      refs.confirmOrderBtn.addEventListener('click', onConfirmOrder);
    },
    onClose(instance) {
      refs.closeModalBtn.removeEventListener('click', instance.close);
      refs.cartList.removeEventListener('click', removeFromOrder);
      refs.cartList.removeEventListener('change', onChangeCount);
      refs.confirmOrderBtn.removeEventListener('click', onConfirmOrder);
    },
  });

  instance.show();
};

export { showCart };
