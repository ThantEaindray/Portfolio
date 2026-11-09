const root = document.documentElement;
let savedTheme;
try { savedTheme = localStorage.getItem('portfolio-theme'); } catch {}
root.dataset.theme = savedTheme === 'dark' || savedTheme === 'light'
  ? savedTheme
  : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.theme-toggle');
  const updateToggle = () => toggle.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
  updateToggle();
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch {}
    updateToggle();
  });
});
