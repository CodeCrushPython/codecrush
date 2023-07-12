// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // Get the parent container and all the banner images
  var rotatingImagesContainer = document.getElementById("rotating-images");
  var bannerImages = rotatingImagesContainer.getElementsByClassName("banner-image");
  var currentIndex = 0;

  // Function to show the next image
  function showNextImage() {
    // Hide the current image
    bannerImages[currentIndex].style.display = "none";

    // Increment the index
    currentIndex++;

    // If the index exceeds the number of images, reset it to 0
    if (currentIndex >= bannerImages.length) {
      currentIndex = 0;
    }

    // Show the next image
    bannerImages[currentIndex].style.display = "block";
  }

  // Start rotating the images every 3 seconds (adjust the interval as per your preference)
  setInterval(showNextImage, 3000);
});
