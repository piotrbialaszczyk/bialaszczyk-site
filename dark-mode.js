document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-switch');
  const currentTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set theme on load
  if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggle.checked = true;
  }

  // Toggle theme on click
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  });
});
