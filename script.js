const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section");
const header = document.querySelector("header");

function updateActiveTab() {
    let currentSection = sections[0].id;
    const headerHeight = header.getBoundingClientRect().height;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= headerHeight + 60) {
            currentSection = section.id;
        }
    });

    const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 5;

    if (atBottom) {
        currentSection = sections[sections.length - 1].id;
    }

    links.forEach(link => {
        const isActive =
            link.getAttribute("href") === "#" + currentSection;

        link.classList.toggle("active", isActive);

        if (isActive) {
            link.setAttribute("aria-current", "location");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

window.addEventListener("scroll", updateActiveTab, { passive: true });
window.addEventListener("resize", updateActiveTab);
window.addEventListener("load", updateActiveTab);

updateActiveTab();