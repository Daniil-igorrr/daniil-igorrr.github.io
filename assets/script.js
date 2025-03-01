document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const revealSection = () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                section.style.animationDelay = "0.2s";
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection();
});
