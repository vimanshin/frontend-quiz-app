const themeToggle = document.querySelector<HTMLButtonElement>(
  '[data-js="theme-toggle"]'
);
const root = document.documentElement;

// Функция: переключает только оформление документа и состояние кнопки
// Принимает: ничего
// Возвращает: ничего
function toggleTheme(): void {
  if (!themeToggle) {
    return;
  }

  const dark = root.dataset.theme !== 'dark';
  root.dataset.theme = dark ? 'dark' : 'light';
  themeToggle.setAttribute('aria-checked', String(dark));
}

themeToggle?.addEventListener('click', toggleTheme);
