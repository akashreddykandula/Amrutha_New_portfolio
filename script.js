
 
// hero section
const roles = ["Network Engineer","Graduate Student","CCNA Candidate","Network Security Engineer"];
let typewriter = document.getElementById("typewriter");
let i = 0, j = 0, isDeleting = false;

function type() {
  let current = roles[i];
  if (!isDeleting) {
    typewriter.textContent = current.substring(0, j + 1);
    j++;
    if (j === current.length) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }
  } else {
    typewriter.textContent = current.substring(0, j - 1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// about section

  AOS.init({
    duration: 800,
    once: true
  });


  const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("text-[var(--primary-light)]", "font-semibold");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("text-[var(--primary-light)]", "font-semibold");
    }
  });
});


const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Simulate success (you can replace this with real integration)
  setTimeout(() => {
    successMsg.classList.remove("hidden");
    contactForm.reset();
  }, 500);
});


const sections1 = document.querySelectorAll("section");
const navLinks1 = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections1.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks1.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});



const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileOverlay = document.getElementById("mobile-overlay");
const mobileLinks = document.querySelectorAll("#mobile-menu a");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("hidden");
  mobileOverlay.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}

toggleBtn.addEventListener("click", toggleMobileMenu);
mobileOverlay.addEventListener("click", toggleMobileMenu);

// Close on nav link click
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileOverlay.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });
});

const video = document.getElementById('myVideo');

  // Set volume to 50% but start muted to allow autoplay without browser blocking
  video.volume = 1;

  // Intersection Observer to detect when video section enters viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        // Play video when section visible
        video.muted = true;   // Unmute on play (optional, browsers may block unmuted autoplay)
        video.play().catch(() => {
          // If autoplay blocked, keep muted and try play again
          video.muted = true;
          video.play();
        });
      } else {
        // Pause video when section out of view
        video.pause();
      }
    });
  }, { threshold: 0.5 }); // Play when 50% of video is visible

  observer.observe(video);

  
