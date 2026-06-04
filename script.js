// Scroll fade-in
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0, rootMargin: "0px 0px -80px 0px" }
);

fadeEls.forEach(el => observer.observe(el));

// Also trigger any elements already in viewport on load or after nav jump
const revealVisible = () => fadeEls.forEach(el => {
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add('visible');
});

window.addEventListener('load', revealVisible);
window.addEventListener('hashchange', () => setTimeout(revealVisible, 50));

// Bento card glow follows mouse
document.querySelectorAll('.bento-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mx', `${x}%`);
    card.style.setProperty('--my', `${y}%`);
  });
});
