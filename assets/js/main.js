document.addEventListener("DOMContentLoaded", function () {
  const headerDiv = document.getElementById("header");

  if (!headerDiv) return;

  // Absolute path from project root
  fetch("/components/header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Header file not found");
      }
      return response.text();
    })
    .then((data) => {
      headerDiv.innerHTML = data;
      // Initialize mobile menu after header is loaded
      initMobileMenu();
    })
    .catch((error) => {
      console.error("NAVBAR LOAD ERROR:", error);
    });
});

// ===== MOBILE MENU TOGGLE ===== //
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (!mobileMenuToggle || !navLinks) return;

  // Toggle menu on hamburger click
  mobileMenuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    mobileMenuToggle.classList.toggle("active");
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".navbar")) {
      navLinks.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
    }
  });
}

// ===== MODAL HANDLING ===== //
function openModal() {
  document.getElementById("serviceModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("serviceModal").style.display = "none";
}

// Close modal when clicking outside
window.addEventListener("click", function (e) {
  const modal = document.getElementById("serviceModal");
  if (e.target === modal) {
    closeModal();
  }
});

// ===== FAQ ===== //
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    item.classList.toggle("active");
  });
});