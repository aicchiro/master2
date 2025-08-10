document.addEventListener("DOMContentLoaded", function() {
  let mybutton = document.getElementById("myBtn");
  let lastScrollTop = 0;

  window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
    lastScrollTop = Math.max(currentScroll, 0);
  });

  // Smooth scroll to top
  window.topFunction = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // Auto slider
  const slides = document.querySelector(".slides");
  const totalImages = slides ? slides.querySelectorAll("img").length : 0;
  let index = 0;
  if (slides && totalImages > 0) {
    setInterval(() => {
      index = (index + 1) % totalImages;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }, 5000);
  }

  // Intersection animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.animate').forEach(el => observer.observe(el));

  // Form submission
  const form = document.querySelector("form");
  const pendingItems = document.getElementById("pendingItems");
  if (form && pendingItems) {
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
  }

  // Manual carousel
  const images2 = document.querySelectorAll(".carousel img");
  const description = document.getElementById("description");
  const descriptions = [
   "This is LeBron Tan, captain of the NYP Titans from 2022–2024. Known for his leadership under pressure, he led the team to three consecutive POL-ITE Championships. His drive, work ethic, and ability to rally the team made him the heartbeat of our dynasty run.",
    "This is Anthony Davis Lim, our defensive anchor and shot-blocking specialist. His versatility allowed him to guard any position, and his clutch defensive stops during the 2023 finals were pivotal to securing back-to-back titles for NYP.",
    "This is Luka Ong, our offensive maestro and playmaking genius. With unmatched vision and deadly 3-point shooting, he controlled the pace of the game and delivered decisive assists that turned close matches into comfortable victories."
  ];
  let currentIndex = 0;

  function showSlide(index) {
    if (images2.length > 0 && description) {
      images2.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
      description.classList.add("fade-out");
      setTimeout(() => {
        description.textContent = descriptions[index];
        description.classList.remove("fade-out");
      }, 500);
    }
  }

  window.changeSlide = function(direction) {
    currentIndex = (currentIndex + direction + images2.length) % images2.length;
    showSlide(currentIndex);
  };

  // Initialize first slide
  showSlide(currentIndex);
});
