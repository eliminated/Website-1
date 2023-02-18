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


// Toggle dark mode script
const toggleButton = document.getElementById('dark-mode-toggle-blog');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleButton.classList.toggle('active');
  if (body.classList.contains('dark')) {
    toggleButton.innerHTML = '<img src="../../Sources/light-mode-icon.png" alt="Toggle Light Mode">';
  } else {
    toggleButton.innerHTML = '<img src="../../Sources/dark-mode-icon.png" alt="Toggle Dark Mode">';
  }
});
