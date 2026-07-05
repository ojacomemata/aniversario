const sections = document.querySelectorAll(
    ".timeline-section"
);

const navLinks = document.querySelectorAll(
    "#timeline-nav a"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            navLinks.forEach(
                link => link.classList.remove("active")
            );

            const activeLink =
                document.querySelector(
                    `a[href="#${entry.target.id}"]`
                );

            activeLink?.classList.add(
                "active"
            );

        });

    },

    {
        threshold: 0.5
    }

);

sections.forEach(
    section => observer.observe(section)
);

const timelineContainer =
    document.querySelector("#timeline");

const outroSection =
    document.querySelector("#outro");

const timelineNav =
    document.querySelector("#timeline-nav");

window.addEventListener("scroll", () => {

    const timelineTop =
        timelineContainer.offsetTop;

    const outroTop =
        outroSection.offsetTop;

    const current =
        window.scrollY + window.innerHeight / 2;

    const visible =
        current >= timelineTop &&
        current < outroTop;

    timelineNav.classList.toggle(
        "visible",
        visible
    );

});