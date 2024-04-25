const gallery = document.getElementById('gallery');
const letters = document.getElementById('letters');

// Array of image URLs
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // Add more image URLs as needed
];

// Function to display images
function displayImages() {
  images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    gallery.appendChild(img);
  });
}

// Array of love letters
const loveLetters = [
  "Dear love, Happy 3 months anniversary! I cherish every moment we've spent together.",
  "My dearest, these past 3 months have been the happiest of my life. I love you more with each passing day.",
  // Add more love letters as needed
];

// Function to display love letters
function displayLetters() {
  loveLetters.forEach(letter => {
    const p = document.createElement('p');
    p.textContent = letter;
    letters.appendChild(p);
  });
}

// Call functions to display images and letters
displayImages();
displayLetters();
  
