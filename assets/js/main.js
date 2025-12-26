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
