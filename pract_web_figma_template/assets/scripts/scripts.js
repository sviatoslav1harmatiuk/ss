

// Smooth scroll + active nav highlight
document.addEventListener("DOMContentLoaded", function () {
  // smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // active nav highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a');
  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight/3;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      const id = '#' + sec.id;
      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
      }
    });
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
});
