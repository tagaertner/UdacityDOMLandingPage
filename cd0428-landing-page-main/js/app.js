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
    console.log(liEL);
    // Add class 'active' to section when near top of viewport
    aEL.addEventListener("click", () => {
      ulEl.querySelectorAll("a").forEach((a) => {
        a.classList.remove("active");
      });
      aEL.classList.add("active");
    });
  }
  return ulEl;
}

function activeButton() {
  for (let section of sections) {
    let box = section.getBoundingClientRect();
    //Find a value that works best, but 150 seems to be a good start.
    if (box.top <= 150 && box.bottom >= 150) {
      //apply active state on current section and corresponding Nav link
      let navLink = document.querySelector(`[href="#${section.id}"]`);

      navLink.classList.add("active");
    } else {
      //Remove active state from other section and corresponding Nav link
      let navLink = document.querySelector(`[href="#${section.id}"]`);

      navLink.classList.remove("active");
    }
  }
}

// Scroll to anchor ID using scrollTO event
function scroll() {
  const navbar = document.querySelectorAll(".menu__link");
  console.log(navbar);
  for (let i = 0; i < navbar.length; i++) {
    // console.warn(navbar[i]);
    navbar[i].addEventListener("click", function (e) {
      e.preventDefault();

      const target = e.target;
      const box = document.querySelector(target.getAttribute("href")).getBoundingClientRect();
      scrollBy({
        top: box.top - 180,
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

// Build menu
document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  console.log("Dom loaded");
  navmenu();
});
// Scroll to section on link click
// document.addEventListener("click", (e)=
// Set sections as active
document.addEventListener("click", (e) => {
  scroll();
});
document.addEventListener("scroll", (e) => {
  activeButton();
});
