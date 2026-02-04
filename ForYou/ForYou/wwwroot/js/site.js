/* =========================
   SECRET CLICK EASTER EGG
========================= */
let clicks = 0;
const secretMessage = document.getElementById("secret-message");

document.addEventListener("click", () => {
    clicks++;

    if (clicks === 7 && secretMessage) {
        secretMessage.style.opacity = "1";
    }
});

/* =========================
   SCROLL TO BOTTOM EASTER EGG
========================= */
const scrollSecret = document.querySelector(".scroll-secret");

window.addEventListener("scroll", () => {
    if (
        scrollSecret &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 20
    ) {
        scrollSecret.style.opacity = "1";
    }
});

/* =========================
   TIMELINE INTERACTION
========================= */
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('touched');
    });
});

/* =========================
   SCROLL REVEAL ANIMATIONS
========================= */
const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    reveals.forEach(el => observer.observe(el));
} else {
    // Fallback for very old browsers
    reveals.forEach(el => el.classList.add('visible'));
}

/* =========================
   IDLE PRESENCE EASTER EGG
========================= */
let idleTimer;
const idleSecret = document.getElementById("idle-secret");

function resetIdleTimer() {
    clearTimeout(idleTimer);

    idleTimer = setTimeout(() => {
        if (idleSecret) {
            idleSecret.classList.add("visible");
        }
    }, 12000); // 12 seconds of staying
}

['mousemove', 'scroll', 'click', 'keydown', 'touchstart'].forEach(event => {
    document.addEventListener(event, resetIdleTimer);
});

resetIdleTimer();
