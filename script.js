// script.js – simple IntersectionObserver for fade‑in animations

document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
