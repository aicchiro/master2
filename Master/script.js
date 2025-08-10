let mybutton = document.getElementById("myBtn");
let lastScrollTop = 0; // to store the last scroll position

window.onscroll = function () { scrollFunction(); };

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

const form = document.querySelector("form");
const pendingItems = document.getElementById("pendingItems");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("fullName").value;
  const className = document.getElementById("class").value;
  const email = document.getElementById("email").value;
  const reason = document.getElementById("reason").value;
  const experience = document.getElementById("experience").value;

  const li = document.createElement("li");
  li.innerHTML = `
  <strong>Name:</strong> ${name}<br>
  <strong>Class:</strong> ${className}<br>
  <strong>Email:</strong> ${email}<br>
  <strong>Reason:</strong> ${reason}<br>
  <strong>Experience:</strong> ${experience}<br>
  <strong>Status:</strong> <span style="color: orange; font-weight: bold;">Pending</span>
`;
  pendingItems.prepend(li);

  form.reset();
});
