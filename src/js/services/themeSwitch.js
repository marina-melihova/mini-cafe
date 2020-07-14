import refs from '../refs.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const initTheme = () => {
  const theme = localStorage.getItem('theme');
  if (theme) {
    refs.body.classList.add(theme);
    if (theme === Theme.DARK) {
      refs.switch.checked = true;
    }
  } else {
    refs.body.classList.add(Theme.LIGHT);
  }
};

const onChangeSwitch = ({ target }) => {
  localStorage.setItem('theme', target.checked ? Theme.DARK : Theme.LIGHT);
  refs.body.classList.toggle(Theme.LIGHT);
  refs.body.classList.toggle(Theme.DARK);
};

export { initTheme, onChangeSwitch };
