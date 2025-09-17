

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


// === Mobile burger menu script ===
document.addEventListener('DOMContentLoaded', function(){
  var burger = document.getElementById('mobile-burger');
  var nav = document.getElementById('mobile-nav');
  if(!burger || !nav) return;
  function toggleNav(){
    var open = nav.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open? 'true':'false');
    nav.setAttribute('aria-hidden', open? 'false':'true');
  }
  burger.addEventListener('click', function(e){ e.stopPropagation(); toggleNav(); });
  // close when clicking a link inside nav
  nav.addEventListener('click', function(e){
    if(e.target.tagName.toLowerCase() === 'a'){
      nav.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      nav.setAttribute('aria-hidden', 'true');
    }
  });
  // close on outside click
  document.addEventListener('click', function(e){
    if(!nav.contains(e.target) && !burger.contains(e.target)){
      if(nav.classList.contains('open')){
        nav.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        nav.setAttribute('aria-hidden', 'true');
      }
    }
  });
});


// === Burger menu toggle ===
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav ul");
  if (!burger || !nav) return;

  // створюємо мобільне меню
  let mobileMenu = document.createElement("div");
  mobileMenu.classList.add("mobile-menu");
  mobileMenu.innerHTML = nav.innerHTML;
  document.querySelector("header").appendChild(mobileMenu);

  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // закриваємо при кліку на посилання
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mobileMenu.classList.remove("active"));
  });

  // закриття при кліку поза меню
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
      mobileMenu.classList.remove("active");
    }
  });
});
