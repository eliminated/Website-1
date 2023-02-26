// Comment thing
const nameInput = document.getElementById("name-input");
const feelingsInput = document.getElementById("feelings-input");
const postButton = document.getElementById("post-button");
const displayContainer = document.querySelector(".display-container");
const postCount = document.getElementById("post-count");

let count = 0;

postButton.addEventListener("click", function() {
  const name = nameInput.value;
  const feelings = feelingsInput.value;
  
  if (name === "" || feelings === "") {
    alert("Please fill in all fields.");
    return;
  }
  
  const postDate = new Date();
  const dateString = postDate.toLocaleString();
  
  const post = document.createElement("div");
  post.classList.add("post");
  
  const nameElement = document.createElement("p");
  nameElement.classList.add("name");
  nameElement.textContent = name;
  
  const dateElement = document.createElement("p");
  dateElement.classList.add("date");
  dateElement.textContent = dateString;
  
  const feelingsElement = document.createElement("p");
  feelingsElement.textContent = feelings;
  
  post.appendChild(nameElement);
  post.appendChild(dateElement);
  post.appendChild(feelingsElement);
  
  displayContainer.appendChild(post);
  
  nameInput.value = "";
  feelingsInput.value = "";
});

displayContainer.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete-button")) {
    e.target.parentElement.remove();
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
