//Set current year.
// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// console.log(currentYear);
// yearEl.textContent = currentYear;

// Make mobile Navigation work.
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".main-header");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  console.log("clickckckckc");
});

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault;
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll To oTher Links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close Mobile Nav Link
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
