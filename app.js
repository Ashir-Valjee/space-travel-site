console.log("hello!");

const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");

let menuOpen = false;

function handleToggle() {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }

  console.log(navToggle.getAttribute("aria-expanded"));
}

navToggle.addEventListener("click", handleToggle);
