const mobileMenuButton = document.getElementById("open-menu");
const closeMenuButton = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const backdrop = document.getElementById("backdrop");

// Ensure the mobile menu and backdrop are hidden on load
if (mobileMenu) mobileMenu.classList.add("hidden");
if (backdrop) backdrop.classList.add("hidden");

// Function to open the mobile menu
function openMenu() {
  if (mobileMenu) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.setAttribute("aria-hidden", "false");
  }
  if (backdrop) {
    backdrop.classList.remove("hidden");
    backdrop.setAttribute("aria-hidden", "false");
  }
  closeMenuButton.focus(); // Focus the close button for better accessibility
}

// Function to close the mobile menu
function closeMenu() {
  if (mobileMenu) {
    mobileMenu.classList.add("hidden");
    mobileMenu.setAttribute("aria-hidden", "true");
  }
  if (backdrop) {
    backdrop.classList.add("hidden");
    backdrop.setAttribute("aria-hidden", "true");
  }
  mobileMenuButton.focus(); // Return focus to the open button
}

// Event listeners for opening and closing the menu
if (mobileMenuButton) {
  mobileMenuButton.addEventListener("click", openMenu);
}
if (closeMenuButton) {
  closeMenuButton.addEventListener("click", closeMenu);
}
if (backdrop) {
  backdrop.addEventListener("click", closeMenu); // Close the menu when clicking on the backdrop
}

// Handle keyboard accessibility (ESC to close menu)
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMenu();
  }
});
