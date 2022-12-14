/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navEl = document.querySelector("nav");
const ulEl = document.createElement("ul");
const sections = document.querySelectorAll("[data-nav]");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
//pop up window for the submit button verifiying that we recieved their information
const form = document.querySelector("#form");
const complete = document.querySelector(".done");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  complete.style.display = "block";
  setTimeout(() => {
    complete.style.display = "none";
  }, 6000);
});

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function navmenu() {
  const navagation = document.getElementById("navbar__list");
  for (let i = 0; i < sections.length; i++) {
    const liEL = document.createElement("li");
    const aEL = document.createElement("a");
    const link = sections[i].dataset.nav;
    aEL.setAttribute("class", "menu__link");
    aEL.setAttribute("href", `#${sections[i].id}`);
    aEL.innerHTML = link;
    liEL.append(aEL);
    navagation.appendChild(liEL);
  }
}

function activeButton() {
  for (let section of sections) {
    let box = section.getBoundingClientRect();
    if (box.top <= 150 && box.bottom >= 150) {
      let navLink = document.querySelector(`[href="#${section.id}"]`);
      navLink.classList.add("active");
      section.classList.add("your-active-class");
    } else {
      let navLink = document.querySelector(`[href="#${section.id}"]`);
      navLink.classList.remove("active");
      section.classList.remove("your-active-class");
    }
  }
}
// Scroll to anchor ID using scrollTO event
function scroll() {
  const navbar = document.querySelectorAll(".menu__link");
  for (let i = 0; i < navbar.length; i++) {
    navbar[i].addEventListener("click", function (e) {
      e.preventDefault();
      const target = e.target;
      const box = document.querySelector(target.getAttribute("href")).getBoundingClientRect();
      scrollBy({
        top: box.top,
        behavior: "smooth",
      });
    });
  }
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu example to work on

// line break for the form menu
document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  console.log("Dom loaded");
  navmenu();
});
// Scroll to section on link click
document.addEventListener("click", (e) => {
  scroll();
});
// Set sections as active

document.addEventListener("scroll", (e) => {
  activeButton();
});
