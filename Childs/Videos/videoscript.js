const form = document.getElementById('upload-form');
const postBtn = document.getElementById('post-btn');
const recentPostsList = document.getElementById('recent-posts-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  // Create a new video post
  const videoPost = document.createElement('li');

  // Create a link to the new video post
  const link = document.createElement('a');
  link.href = '#'; // Update href to your video page URL

  // Create the video post title
  const videoTitle = document.createElement('h3');
  videoTitle.textContent = formData.get('video-title');

  // Create the video post uploader
  const uploader = document.createElement('p');
  uploader.textContent = `Uploader: ${formData.get('uploader-name')}`;

  // Create the video post date
  const date = new Date();
  const datePosted = document.createElement('p');
  datePosted.textContent = `Posted on: ${date.toLocaleString()}`;

  // Append the video post elements to the link element
  link.appendChild(videoTitle);
  link.appendChild(uploader);
  link.appendChild(datePosted);

  // Append the link element to the recent posts list
  videoPost.appendChild(link);
  recentPostsList.appendChild(videoPost);

  // Clear the form after submission
  form.reset();
});
