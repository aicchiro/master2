let mybutton = document.getElementById("myBtn");
let lastScrollTop = 0; // to store the last scroll position

window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 20) {
    mybutton.style.display = "block";
  } 

  else {
    mybutton.style.display = "none";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const images = [
    "Images/wallpaperflare.com_wallpaper.jpg",
    "images/ball1.jpg",
    "images/ball2.jpg"
];

const slides = document.querySelector(".slides");
const totalImages = document.querySelectorAll(".slides img").length;
let index = 0;

setInterval(() => {
    index = (index + 1) % totalImages;
    slides.style.transform = `translateX(-${index * 100}%)`;
}, 5000);
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));
