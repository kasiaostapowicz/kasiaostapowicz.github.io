// Sticky navigation
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('on', window.scrollY > 55);
});

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = (i * 0.09) + 's';
      entry.target.classList.add('on');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.rv').forEach(el => observer.observe(el));
