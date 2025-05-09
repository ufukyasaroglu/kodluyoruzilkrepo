const toggle = document.getElementById('dark-mode-toggle');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});
