let currentImageIndex = 0;
let images = [];

function openLightbox(imgElement) {
  const galleryImages = document.querySelectorAll('.gallery img');
  images = Array.from(galleryImages);
  currentImageIndex = images.indexOf(imgElement);

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  lightbox.style.display = 'block';
  lightboxImg.src = imgElement.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(step) {
  currentImageIndex = (currentImageIndex + step + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentImageIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll('.gallery .image');
  allImages.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}
