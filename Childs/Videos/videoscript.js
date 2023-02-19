// Get elements
const uploadBtn = document.getElementById("upload-btn");
const videoInput = document.getElementById("video-input");
const videoTitleInput = document.getElementById("video-title-input");
const uploaderInput = document.getElementById("uploader-input");
const videoContainer = document.getElementById("video-container");
const deleteBtns = document.querySelectorAll(".delete-btn");

// Add event listeners
uploadBtn.addEventListener("click", function () {
    videoInput.click();
});

videoInput.addEventListener("change", function () {
    // Check file type
    const fileType = videoInput.files[0].type;
    if (fileType !== "video/mp4") {
        alert("Please select a video file with .mp4 extension.");
        return;
    }

    // Create video element and add to container
    const video = document.createElement("video");
    video.src = URL.createObjectURL(videoInput.files[0]);
    video.controls = true;
    video.preload = "metadata";

    // Create title and uploader elements and add to container
    const title = document.createElement("h2");
    title.innerText = videoTitleInput.value;

    const uploader = document.createElement("p");
    uploader.innerText = "Uploaded by: " + uploaderInput.value;

    const infoContainer = document.createElement("div");
    infoContainer.appendChild(title);
    infoContainer.appendChild(uploader);
    infoContainer.classList.add("info-container");

    // Create delete button and add to container
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");

    const thumbnailContainer = document.createElement("div");
    thumbnailContainer.appendChild(video);
    thumbnailContainer.appendChild(infoContainer);
    thumbnailContainer.appendChild(deleteBtn);
    thumbnailContainer.classList.add("thumbnail-container");

    videoContainer.appendChild(thumbnailContainer);

    // Clear input fields
    videoInput.value = "";
    videoTitleInput.value = "";
    uploaderInput.value = "";

    // Add event listener to delete button
    deleteBtn.addEventListener("click", function () {
        const confirmDelete = confirm("Are you sure you want to delete this video?");
        if (confirmDelete) {
            thumbnailContainer.remove();
        }
    });

    // Add hover effect to delete button
    deleteBtn.addEventListener("mouseover", function () {
        deleteBtn.style.transform = "scale(1.1)";
    });

    deleteBtn.addEventListener("mouseout", function () {
        deleteBtn.style.transform = "scale(1)";
    });
});