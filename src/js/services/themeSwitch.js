import refs from '../refs.js';
import { defaults } from '@pnotify/core';

const Theme = { LIGHT: 'light-theme', DARK: 'dark-theme' };

const initTheme = () => {
  defaults.styling = 'material';
  defaults.icons = 'material';
  defaults.mode = 'light';

  const theme = localStorage.getItem('theme');
  if (theme) {
    refs.body.classList.add(theme);
    if (theme === Theme.DARK) {
      refs.switch.checked = true;
      defaults.mode = 'dark';
    }
  } else {
    refs.body.classList.add(Theme.LIGHT);
  }
};

const onChangeSwitch = ({ target }) => {
  localStorage.setItem('theme', target.checked ? Theme.DARK : Theme.LIGHT);
  defaults.mode = target.checked ? 'dark' : 'light';
  refs.body.classList.toggle(Theme.LIGHT);
  refs.body.classList.toggle(Theme.DARK);
};

export { initTheme, onChangeSwitch };
