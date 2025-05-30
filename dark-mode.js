document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById('theme-switch');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (switcher) switcher.checked = true;
  }

  if (switcher) {
    switcher.addEventListener('change', function () {
      if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    });
  }
});