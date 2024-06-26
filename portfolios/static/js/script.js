document.addEventListener("DOMContentLoaded", () => {
    // Existing animations
    gsap.from(".header", {
        duration: 1.5,
        y: -80,
        ease: "bounce.out"
    });

    gsap.from(".nav-item", {
        duration: 1,
        opacity: 0,
        y: -20,
        stagger: 0.2,
        delay: 0.5
    });

    gsap.from(".middle-section img", {
        duration: 1.5,
        opacity: 0,
        scale: 0,
        ease: "elastic.out(1, 0.3)",
        delay: 1.8
    });

    gsap.from(".profile-name", {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power3.out",
        delay: 2.0
    });

    gsap.from(".contact-btn", {
        duration: 1,
        opacity: 0,
        x: 100,
        ease: "power3.out",
        delay: 1.5
    });

    gsap.from(".background-container", {
        duration: 1,
        opacity: 0,
        ease: "power3.out",
        delay: 1.5
    });

    gsap.from(".information-lines p", {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power3.out",
        delay: 3.2
    });

    gsap.from(".scroll-links a", {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power3.out",
        delay: 3.0,
        stagger: 0.2
    });

    // Animate About section
    gsap.from(".about-container", {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-container",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".about-box img", {
        duration: 1,
        opacity: 0,
        scale: 0,
        ease: "elastic.out(1, 0.3)",
        delay: 0.5,
        scrollTrigger: {
            trigger: ".about-box img",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".about-info h2", {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power3.out",
        delay: 0.8,
        scrollTrigger: {
            trigger: ".about-info h2",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".about-info p", {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power3.out",
        delay: 1,
        scrollTrigger: {
            trigger: ".about-info p",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }
    });

    // Animate Skills section
    

    

    // Animate Projects section
    gsap.from("#projects h2", {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#projects h2",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".project", {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".project",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        }
    });

    const aboutSection = document.getElementById('about');

    if (window.location.hash === '#about') {
        gsap.from(aboutSection, {
            duration: 1,
            opacity: 0,
            y: 100,
            ease: "power3.out",
            delay: 1
        });
    }

    // Smooth scroll to About section if accessed through URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('about')) {
        gsap.to(window, {duration: 1, scrollTo: aboutSection});
    }
});


window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 70) {
        header.classList.add('hidden-header');
    } else {
        header.classList.remove('hidden-header');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const lines = document.querySelectorAll('.information-lines p');
    let currentLine = 0;

    function displayNextLine() {
        lines.forEach(line => line.style.display = 'none');
        lines[currentLine].style.display = 'block';
        currentLine = (currentLine + 1) % lines.length;
    }

    displayNextLine();
    setInterval(displayNextLine, 3500);
});

document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
    const modeIcon = modeToggle.querySelector('img');

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        if (body.classList.contains('dark-mode')) {
            modeIcon.src = modeToggle.getAttribute('data-sun');
            modeIcon.alt = 'Switch to light mode';
        } else {
            modeIcon.src = modeToggle.getAttribute('data-moon');
            modeIcon.alt = 'Switch to dark mode';
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const projectContainer = document.getElementById('project-container');

    const projects = document.querySelectorAll('.project');
    let currentProjectIndex = 0;

    function showProject(index) {
        projects.forEach((project, i) => {
            if (i === index) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

    showProject(currentProjectIndex);

    prevButton.addEventListener('click', function() {
        currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
        showProject(currentProjectIndex);
    });

    nextButton.addEventListener('click', function() {
        currentProjectIndex = (currentProjectIndex + 1) % projects.length;
        showProject(currentProjectIndex);
    });
});


gsap.registerPlugin(ScrollTrigger);

gsap.to(".element", {
    scrollTrigger: {
      trigger: ".element",
      start: "top center",
      end: "bottom center",
      scrub: true
    },
    x: 500,
    duration: 3
  });