// Navigation Functionality //

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle hamburger menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Changing the role text dynamically //
const role = ['Front-End Web Developer', 'Graphic Designer', 'UI/UX Designer'];

const roleElement = document.getElementById('role');
const roleContainer = document.querySelector('.role-container');
let index = 0;

setInterval(() => {
  // Add animation class
  roleContainer.classList.add('animate');

  // Update the text after animation completes
  setTimeout(() => {
    roleElement.textContent = role[index];
    roleContainer.classList.remove('animate');
  }, 600);

  // Move to the next role
  index++;

  // Loop back to the first role if at the end
  if (index >= role.length) {
    index = 0;
  }
}, 3000);

// Contact Form Alert for Development Status //
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting
    alert("Contact form is still on development. Please reach me via email.");
});

console.log
// Highlight active Link on Scroll
function setActiveLink() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);

// Back to Top Button Functionality //

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Testimonial Carousel Functionality //

const testimonialCards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const testimonialModal = document.getElementById("testimonialModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const testimonialCarousel = document.getElementById("testimonialCarousel");

let currentIndex = 0;
let isDragging = false;
let startX = 0;
let scrollLeft = 0;
let autoScrollInterval;
const AUTO_SCROLL_INTERVAL = 5000; // 5 seconds

// Testimonial data
const testimonialData = [
  {
    name: "Sarah Johnson",
    quote:
      '"John delivered an exceptional website that exceeded our expectations. His attention to detail and professional approach made the entire process smooth."',
    image: "https://via.placeholder.com/60x60?text=Client+1",
  },
  {
    name: "Mike Chen",
    quote:
      '"Working with John was a pleasure. He\'s responsive, skilled, and truly understands what makes a great user experience."',
    image: "https://via.placeholder.com/60x60?text=Client+2",
  },
  {
    name: "Emma Wilson",
    quote:
      '"Incredibly talented developer. John took our vision and created a stunning website that our customers love."',
    image: "https://via.placeholder.com/60x60?text=Client+3",
  },
  {
    name: "David Lee",
    quote:
      '"John\'s technical expertise combined with creative thinking resulted in a website that performs beautifully and looks amazing."',
    image: "https://via.placeholder.com/60x60?text=Client+4",
  },
  {
    name: "Lisa Martinez",
    quote:
      '"Professional, reliable, and truly dedicated to delivering quality work. Highly recommend John for any web development project."',
    image: "https://via.placeholder.com/60x60?text=Client+5",
  },
  {
    name: "James Brown",
    quote:
      '"John brought our outdated website into the modern era. His responsive design and clean code are exactly what we needed."',
    image: "https://via.placeholder.com/60x60?text=Client+6",
  },
  {
    name: "Rachel Green",
    quote:
      '"Outstanding work! John goes above and beyond to ensure client satisfaction. The website conversion rate increased significantly."',
    image: "https://via.placeholder.com/60x60?text=Client+7",
  },
  {
    name: "Thomas Anderson",
    quote:
      '"John\'s problem-solving skills and communication are top-notch. He delivered exactly what we envisioned, on time and on budget."',
    image: "https://via.placeholder.com/60x60?text=Client+8",
  },
  {
    name: "Angela White",
    quote:
      '"Working with John was transformative for our business. His expertise in UX design made our site more intuitive and user-friendly."',
    image: "https://via.placeholder.com/60x60?text=Client+9",
  },
  {
    name: "Christopher King",
    quote:
      '"Exceptional attention to detail and a genuine passion for web development. John is a true professional who delivers results."',
    image: "https://via.placeholder.com/60x60?text=Client+10",
  },
];

// Function to slide carousel
function slideCarousel(direction) {
  const cardWidth = 320; // card width
  const gap = 32; // gap between cards
  const scrollAmount = cardWidth + gap;

  if (direction === "next") {
    testimonialCarousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
      duration: 10,
    });
    currentIndex++;
  } else {
    testimonialCarousel.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
      duration: 500,
    });
    currentIndex--;
  }

  // Reset auto-scroll timer
  resetAutoScroll();
}

// Auto-scroll function
function autoScroll() {
  slideCarousel("next");
}

// Start auto-scroll
function startAutoScroll() {
  autoScrollInterval = setInterval(autoScroll, AUTO_SCROLL_INTERVAL);
}

// Reset auto-scroll timer
function resetAutoScroll() {
  clearInterval(autoScrollInterval);
  startAutoScroll();
}

// Stop auto-scroll when interacting
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Button click listeners
prevBtn.addEventListener("click", () => slideCarousel("prev"));
nextBtn.addEventListener("click", () => slideCarousel("next"));

// Click testimonial card to expand
testimonialCards.forEach((card, index) => {
  card.addEventListener("click", (e) => {
    // Don't open modal if dragging
    if (isDragging) return;

    const data = testimonialData[index];
    document.getElementById("modalImage").src = data.image;
    document.getElementById("modalName").textContent = data.name;
    document.getElementById("modalQuote").textContent = data.quote;
    testimonialModal.classList.add("active");
  });
});

// Close modal
modalClose.addEventListener("click", () => {
  testimonialModal.classList.remove("active");
});

modalOverlay.addEventListener("click", () => {
  testimonialModal.classList.remove("active");
});

// Mouse Drag for carousel //

testimonialCarousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - testimonialCarousel.offsetLeft;
  scrollLeft = testimonialCarousel.scrollLeft;
  testimonialCarousel.classList.add("dragging");
  stopAutoScroll();
});

testimonialCarousel.addEventListener("mouseleave", () => {
  isDragging = false;
  testimonialCarousel.classList.remove("dragging");
  startAutoScroll();
});

testimonialCarousel.addEventListener("mouseup", () => {
  isDragging = false;
  testimonialCarousel.classList.remove("dragging");
  startAutoScroll();
});

testimonialCarousel.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - testimonialCarousel.offsetLeft;
  const walk = (x - startX) * 2;
  testimonialCarousel.scrollLeft = scrollLeft - walk;
});

// Touch events for swipe on mobile
testimonialCarousel.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - testimonialCarousel.offsetLeft;
  scrollLeft = testimonialCarousel.scrollLeft;
  stopAutoScroll();
});

testimonialCarousel.addEventListener("touchend", () => {
  isDragging = false;
  startAutoScroll();
});

testimonialCarousel.addEventListener("tou chmove", (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - testimonialCarousel.offsetLeft;
  const walk = (x - startX) * 1.5;
  testimonialCarousel.scrollLeft = scrollLeft - walk;
});

// Start auto-scroll on page load
window.addEventListener("load", () => {
  startAutoScroll();
});

// Contact Form Functionality //

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (name && email && message) {
    // Show success message (you can replace this with actual form submission)
    alert("Thank you for your message! I will get back to you soon.");
    contactForm.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

// Animation on Scroll //

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe service cards and portfolio items
const animatedElements = document.querySelectorAll(
  ".service-card, .portfolio-item, .resume-item"
);
animatedElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// Email Validation //

const emailInput = document.getElementById("email");

emailInput.addEventListener("blur", function () {
  const email = this.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email && !emailRegex.test(email)) {
    this.style.borderColor = "#e63946";
  } else {
    this.style.borderColor = "";
  }
});

// Smooth Page Load Transition

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.5s ease";

// Keyboard Accessibility for Modal 

// Allow Escape key to close modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && testimonialModal.classList.contains("active")) {
    testimonialModal.classList.remove("active");
  }
});

// Theme and Utility Functions 

// Log init message
console.log("🎨 Welcome to John's Portfolio Website");
console.log("✨ All interactive features are ready!");

// Contact form utility function //
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .send(
      "YOUR_SERVICE_ID", // Replace with your Service ID
      "YOUR_TEMPLATE_ID", // Replace with your Template ID
      {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      }
    )
    .then(
      function () {
        formMessage.style.display = "block";
        formMessage.style.color = "#1b5e20";
        formMessage.style.background = "#d4f8d4";
        formMessage.style.padding = "10px";
        formMessage.style.borderRadius = "6px";
        formMessage.style.textAlign = "center";
        formMessage.innerText = "Message sent successfully ✔";
        form.reset();
      },
      function (error) {
        formMessage.style.display = "block";
        formMessage.style.color = "#b71c1c";
        formMessage.style.background = "#ffd6d6";
        formMessage.style.padding = "10px";
        formMessage.style.borderRadius = "6px";
        formMessage.style.textAlign = "center";
        formMessage.innerText = "Failed to send message ❌. Try again.";
        console.error(error);
      }
    );
});
