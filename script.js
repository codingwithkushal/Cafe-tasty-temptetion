// You can add interactive features here later
console.log("Tasty Temptation loaded!");

// Toggle menu on mobile
const toggleBtn = document.getElementById("menuToggle");
const navbarLinks = document.getElementById("navbarLinks");
const menuIcon = document.getElementById("menuIcon");

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("show");
  if (navbarLinks.classList.contains("show")) {
    menuIcon.classList.remove("bi-list");
    menuIcon.classList.add("bi-x");
  } else {
    menuIcon.classList.remove("bi-x");
    menuIcon.classList.add("bi-list");
  }
});

