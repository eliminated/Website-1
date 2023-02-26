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


// Context menu
// Define the function to display the context menu
function showContextMenu(e) {
  e.preventDefault();
  const contextMenu = document.getElementById("myContextMenu");
  contextMenu.style.display = "block";
  contextMenu.style.left = e.pageX + "px";
  contextMenu.style.top = e.pageY + "px";
}

// Define the function to hide the context menu
function hideContextMenu() {
  const contextMenu = document.getElementById("myContextMenu");
  contextMenu.style.display = "none";
}

// Define the function to copy all text on the page
function copyAllText() {
  const allText = document.body.innerText;
  navigator.clipboard.writeText(allText);
}

// Attach the event listeners to the document
document.addEventListener("contextmenu", showContextMenu);
document.addEventListener("click", hideContextMenu);
document.getElementById("copyAll").addEventListener("click", copyAllText);

// Define the function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark");
}

// Attach the event listeners to the document
document.addEventListener("contextmenu", showContextMenu);
document.addEventListener("click", hideContextMenu);
document.getElementById("toggleDarkMode").addEventListener("click", toggleDarkMode);

const suggestions = document.getElementById('suggestions');

// Show the context menu on right-click
document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  contextMenu.style.top = `${event.clientY}px`;
  contextMenu.style.left = `${event.clientX}px`;
  contextMenu.style.display = 'block';
});

// Hide the context menu when clicked outside of it
document.addEventListener('click', () => {
  contextMenu.style.display = 'none';
});

// Redirect to the link when "Give suggestions/Report Bugs" is clicked
suggestions.addEventListener('click', () => {
  window.location.href = 'https://github.com/eliminated/Website-1';
});