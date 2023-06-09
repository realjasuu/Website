function like(postId) {
    const likeCount = document.getElementById(`likes-count-${postId}`);
    const likeButton = document.getElementById(`like-button-${postId}`);

        fetch(`/like-post/${postId}`, { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
            likeCount.innerHTML = data["likes"];
            if (data["liked"]) {
                likeButton.className = "fas fa-thumbs-up";
            } else {
                likeButton.className = "far fa-thumbs-up";
            } 
        })
        .catch((e) => alert("Could not like the post."));
}
function handleFileUpload() {
    const fileInput = document.getElementById('attachment');
    const previewImage = document.getElementById('previewImage');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            previewImage.src = e.target.result;
        };

        reader.readAsDataURL(fileInput.files[0]);
    } else {
        previewImage.src = '';
    }
}
// Function to handle file upload and display image preview
function handleFileUpload() {
    const fileInput = document.getElementById('attachment');
    const previewImage = document.getElementById('previewImage');
  
    const file = fileInput.files[0];
    const reader = new FileReader();
  
    reader.onload = function (e) {
      previewImage.src = e.target.result;
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  
  // Event listener for file input change
  const fileInput = document.getElementById('attachment');
  fileInput.addEventListener('change', handleFileUpload);