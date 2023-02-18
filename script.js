const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleButton.classList.toggle('active');
  if (body.classList.contains('dark')) {
    toggleButton.innerHTML = '<img src="./Sources/light-mode-icon.png" alt="Toggle Light Mode">';
  } else {
    toggleButton.innerHTML = '<img src="./Sources/dark-mode-icon.png" alt="Toggle Dark Mode">';
  }
});
