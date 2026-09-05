// ============================
// CONTACT FORM + WHATSAPP
// ============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const business = document.getElementById("business").value.trim();
        const project = document.getElementById("project").value.trim();

        const phoneNumber = "919345825536";

        const message =
`Hello! I'm interested in your services.

👤 Name: ${name}
📧 Email: ${email}
🏢 Business: ${business}

💬 Project Details:
${project}`;

        const whatsappURL =
            "https://wa.me/" +
            phoneNumber +
            "?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

        contactForm.reset();

    });

}


// ============================
// SCROLL REVEAL
// ============================

const sections = document.querySelectorAll(".section");

if (sections.length > 0) {

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.12
        }

    );

    sections.forEach((section) => {

        observer.observe(section);

    });

}



// ============================
// MOUSE PARALLAX HERO
// ============================

const heroCard =
    document.querySelector(".hero-card");

if (heroCard) {

    document.addEventListener("mousemove", (event) => {

        const x =
            (window.innerWidth / 2 - event.clientX) / 40;

        const y =
            (window.innerHeight / 2 - event.clientY) / 40;

        heroCard.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}



// ============================
// ANIMATED SKILL BARS
// ============================

document.addEventListener("DOMContentLoaded", function () {

    const skillsSection = document.querySelector("#skills");

    if (!skillsSection) return;

    const skillBars =
        skillsSection.querySelectorAll(".skill-progress");

    if (!skillBars.length) return;

    const skillObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    skillBars.forEach(function (bar, index) {

                        const width =
                            bar.getAttribute("data-width");

                        if (width) {

                            setTimeout(function () {

                                bar.style.width = width;

                            }, index * 200);

                        }

                    });

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.25
        }
    );

    skillObserver.observe(skillsSection);

});

// ============================
// PROJECT IMAGE POPUP
// ============================

const projectModal = document.getElementById("projectModal");
const modalProjectImage = document.getElementById("modalProjectImage");


// Open image
function openProject(image) {

    if (!projectModal || !modalProjectImage) return;

    modalProjectImage.src = image;

    projectModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


// Close image
function closeProject() {

    if (!projectModal) return;

    projectModal.classList.remove("active");

    modalProjectImage.src = "";

    document.body.style.overflow = "";
}


// Click outside image = close
if (projectModal) {

    projectModal.addEventListener("click", function(event) {

        if (event.target === projectModal) {
            closeProject();
        }

    });

}


// ESC = close
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeProject();
    }

});

// ============================
// NAVBAR ACTIVE LINK
// ============================

const navLinks = document.querySelectorAll(".nav-links a");
const pageSections = document.querySelectorAll("section[id]");

function updateActiveNav() {

    let currentSection = "home";

    pageSections.forEach((section) => {

        const sectionTop =
            section.getBoundingClientRect().top;

        if (sectionTop <= 180) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        const linkTarget =
            link.getAttribute("href");

        if (linkTarget === "#" + currentSection) {
            link.classList.add("active");
        }

    });
}


// Run on scroll

window.addEventListener("scroll", updateActiveNav);


// Run when page loads

window.addEventListener("load", updateActiveNav);