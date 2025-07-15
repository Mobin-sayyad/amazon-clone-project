let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

console.log("Total slides:", slides.length); // ✅ This will show how many slides you have

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  console.log("Showing slide:", index); // ✅ This logs which slide is shown
}

prev.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
  console.log("Previous clicked"); // ✅ Log when prev is clicked
});

next.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
  console.log("Next clicked"); // ✅ Log when next is clicked
});

// Show first slide initially
showSlide(slideIndex);
console.log("Slider initialized"); // ✅ Confirm script is running
