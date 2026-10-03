/* =========================================================
   ROHAN GHOLAP PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {

            menuBtn.textContent = "✕";

        } else {

            menuBtn.textContent = "☰";

        }

    });

}


/* =========================================================
   CLOSE MENU AFTER CLICK
========================================================= */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const sections = document.querySelectorAll(".section");

const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.08
    }

);


sections.forEach(function (section) {

    section.style.opacity = "0";

    section.style.transform = "translateY(30px)";

    section.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(section);

});


/* =========================================================
   ADD VISIBLE CLASS STYLE
========================================================= */

const style = document.createElement("style");

style.textContent = `
    .section.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(style);


/* =========================================================
   FOOTER YEAR
========================================================= */

const footerYear = document.getElementById("footerYear");

if (footerYear) {

    const currentYear = new Date().getFullYear();

    footerYear.textContent =
        "© " + currentYear + " Rohan Gholap";

}