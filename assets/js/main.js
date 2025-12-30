document.addEventListener("DOMContentLoaded", function () {
  const headerDiv = document.getElementById("header");
  if (!headerDiv) return;

  fetch("/components/header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Header file not found");
      }
      return response.text();
    })
    .then((data) => {
      headerDiv.innerHTML = data;
      initNavbar(); // ✅ init everything after load
    })
    .catch((error) => {
      console.error("NAVBAR LOAD ERROR:", error);
    });
});

/* ===============================
   NAVBAR + MOBILE + DROPDOWN
================================ */
function initNavbar() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (!navLinks) return;

  /* ===== MOBILE MENU ===== */
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      navLinks.classList.toggle("active");
      mobileMenuToggle.classList.toggle("active");
    });
  }

  /* ===== SERVICES DROPDOWN ===== */
  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener("click", function (e) {
      e.preventDefault(); // 🚫 stop auto redirect
      e.stopPropagation();
      dropdownMenu.classList.toggle("active");
    });
  }

  /* ===== CLOSE MENU ON LINK CLICK ===== */
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      if (dropdownMenu) dropdownMenu.classList.remove("active");
      if (mobileMenuToggle) mobileMenuToggle.classList.remove("active");
    });
  });

  /* ===== CLICK OUTSIDE TO CLOSE ===== */
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".navbar")) {
      navLinks.classList.remove("active");
      if (dropdownMenu) dropdownMenu.classList.remove("active");
      if (mobileMenuToggle) mobileMenuToggle.classList.remove("active");
    }
  });
}

/* ===============================
   MODAL HANDLING
================================ */
function openModal() {
  const modal = document.getElementById("serviceModal");
  if (modal) modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("serviceModal");
  if (modal) modal.style.display = "none";
}

window.addEventListener("click", function (e) {
  const modal = document.getElementById("serviceModal");
  if (modal && e.target === modal) {
    closeModal();
  }
});

/* ===============================
   FAQ ACCORDION
================================ */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      question.parentElement.classList.toggle("active");
    });
  });
});
