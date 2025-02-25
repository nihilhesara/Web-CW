document.addEventListener("DOMContentLoaded", function() {
    const missionSection = document.querySelector('.mission.exp');
    const missionOffsetTop = missionSection.offsetTop;
    const windowHeight = window.innerHeight;
    let animationTriggered = false; // Flag to track if animation has been triggered

    function checkMissionAnimation() {
        if (!animationTriggered && window.scrollY + windowHeight > missionOffsetTop + 100) {
            missionSection.classList.add('active');
            animationTriggered = true; // Set the flag to true once animation is triggered
        }
    }

    checkMissionAnimation();

    window.addEventListener('scroll', function() {
        checkMissionAnimation();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    const offset = -150; // Change this value to adjust the offset

    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});

