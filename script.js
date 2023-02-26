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

// Attach the event listeners to the document
document.addEventListener("contextmenu", showContextMenu);
document.addEventListener("click", hideContextMenu);
