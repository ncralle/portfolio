/* ============================================================
   Nina Cralle Portfolio — script.js
   ============================================================
   Handles:
   1. Mobile nav toggle
   2. Scroll-triggered nav border
   3. Scroll-triggered element animations
   4. Active nav link highlighting
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* —— 1. Mobile nav toggle —— */
  const toggle   = document.querySelector('.nav__toggle');
  const mobileMenu = document.querySelector('.nav__mobile');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        toggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }


  /* —— 2. Nav border on scroll —— */
  const nav = document.querySelector('.nav');

  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }


  /* —— 3. Scroll-triggered animations —— */
  const animatedEls = document.querySelectorAll('[data-animate]');

  if (animatedEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    animatedEls.forEach(el => observer.observe(el));
  }


  /* —— 4. Active nav link —— */
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav__links a, .nav__mobile a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Resolve the href relative to current page for comparison
    const linkPath = new URL(href, window.location.href).pathname;

    // Mark active if path matches (handle both / and /index.html as home)
    const isHome = currentPath.endsWith('/') || currentPath.endsWith('/index.html');
    const linkIsHome = linkPath.endsWith('/') || linkPath.endsWith('/index.html');

    if (
      (isHome && linkIsHome) ||
      (!isHome && linkPath !== '/' && currentPath.includes(linkPath.replace(/\.html$/, '')))
    ) {
      link.classList.add('active');
    }
  });

});
