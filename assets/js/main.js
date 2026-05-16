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

// Mobile navigation
const navToggle = document.getElementById('nav-toggle');
const navOverlay = document.getElementById('nav-overlay');
const navOverlayClose = document.getElementById('nav-overlay-close');
if (navToggle) navToggle.addEventListener('click', () => navOverlay.classList.add('open'));
if (navOverlayClose) navOverlayClose.addEventListener('click', () => navOverlay.classList.remove('open'));

// Slideshow
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length < 2) return;
  const heroEl = document.querySelector('.hero') || document.querySelector('.proj-hero');
  if (!heroEl) return;

  const dotsWrap = document.createElement('div');
  dotsWrap.style.cssText = 'position:absolute;bottom:1.5rem;left:50%;transform:translateX(-50%);display:flex;gap:.5rem;z-index:10;';
  slides.forEach((_, i) => {
    const d = document.createElement('div');
    d.style.cssText = `width:6px;height:6px;border-radius:50%;background:rgba(26,26,26,${i===0?'.7':'.25'});transition:background .3s;cursor:pointer;`;
    d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
  });
  heroEl.appendChild(dotsWrap);

  let current = 0;
  function goTo(n) {
    slides[current].classList.remove('active');
    dotsWrap.children[current].style.background = 'rgba(26,26,26,.25)';
    current = n;
    slides[current].classList.add('active');
    dotsWrap.children[current].style.background = 'rgba(26,26,26,.7)';
  }
  setInterval(() => goTo((current + 1) % slides.length), 4000);
});
