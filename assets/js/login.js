function setRole(role, clickedBtn) {
  const allButtons = document.querySelectorAll(".toggle-btn");
  const employeeField = document.getElementById("employee-id-field");

  // Safety check
  if (!employeeField) {
    console.error("Employee ID field not found");
    return;
  }

  // Reset buttons
  allButtons.forEach((btn) => btn.classList.remove("active"));

  // Activate clicked button
  clickedBtn.classList.add("active");

  // Toggle fields
  if (role === "admin") {
    employeeField.style.display = "none";
  } else {
    employeeField.style.display = "block";
  }
}

// Default state
document.addEventListener("DOMContentLoaded", () => {
  const employeeBtn = document.querySelector('[data-role="employee"]');
  if (employeeBtn) {
    setRole("employee", employeeBtn);
  }
});
