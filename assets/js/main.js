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
    })
    .catch((error) => {
      console.error("NAVBAR LOAD ERROR:", error);
    });
});

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
