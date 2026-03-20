const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileSidebar = document.getElementById("mobileSidebar");
const mobileOverlay = document.getElementById("mobileOverlay");

const mobileDropdownBtn = document.getElementById("mobileDropdownBtn");
const mobileDropdownContent = document.getElementById("mobileDropdownContent");
const mobileDropdownArrow = document.getElementById("mobileDropdownArrow");

function openSidebar() {
  mobileSidebar.classList.add("jl-nav-sidebar-active");
  mobileOverlay.classList.add("jl-nav-overlay-active");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  mobileSidebar.classList.remove("jl-nav-sidebar-active");
  mobileOverlay.classList.remove("jl-nav-overlay-active");
  document.body.style.overflow = "";
}

openMenu.addEventListener("click", openSidebar);
closeMenu.addEventListener("click", closeSidebar);
mobileOverlay.addEventListener("click", closeSidebar);

mobileDropdownBtn.addEventListener("click", function () {
  mobileDropdownContent.classList.toggle("jl-nav-sidebar-dropdown-menu-open");
  mobileDropdownBtn.classList.toggle("jl-nav-sidebar-dropdown-toggle-active");
  mobileDropdownArrow.classList.toggle("fa-angle-down");
  mobileDropdownArrow.classList.toggle("fa-angle-up");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 900) {
    closeSidebar();
  }
});
const words = ["Drive.", "Earn.", "Repeat."];
const textElement = document.getElementById("changing-text");

let index = 0;

setInterval(() => {
  textElement.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % words.length;
    textElement.textContent = words[index];
    textElement.style.opacity = 1;
  }, 400);
}, 1500);
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
      item.addEventListener("toggle", function () {
        if (item.open) {
          faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.removeAttribute("open");
            }
          });
        }
      });
    });
  });
