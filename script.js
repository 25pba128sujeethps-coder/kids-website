// =====================================================
//   SujAsh Hobby Classes – Main JavaScript
// =====================================================

/* ===== NAVBAR SCROLL EFFECT ===== */
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Sticky navbar shadow
  if (scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Back to top button
  if (scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }

  // Active nav link on scroll
  updateActiveNavLink();
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===== MOBILE HAMBURGER MENU ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link, .nav-btn-login').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

/* ===== SCROLL REVEAL (Intersection Observer) ===== */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the animation for grid children
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);

revealElements.forEach(el => revealObserver.observe(el));

/* ===== TESTIMONIALS AUTO-SLIDER ===== */
let currentTestimonial = 0;
let testimonialTimer;

function goToTestimonial(index) {
  const cards = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');

  cards[currentTestimonial].classList.remove('active');
  dots[currentTestimonial].classList.remove('active');

  currentTestimonial = index;

  cards[currentTestimonial].classList.add('active');
  dots[currentTestimonial].classList.add('active');

  // Reset auto timer
  clearInterval(testimonialTimer);
  startTestimonialTimer();
}

function startTestimonialTimer() {
  testimonialTimer = setInterval(() => {
    const cards = document.querySelectorAll('.testimonial-card');
    const next = (currentTestimonial + 1) % cards.length;
    goToTestimonial(next);
  }, 4500);
}

// Start auto-slide
startTestimonialTimer();

/* ===== FAQ ACCORDION ===== */
function toggleFAQ(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');

  // Close all open FAQs
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));

  // Toggle the clicked one
  if (!isOpen) {
    item.classList.add('open');
  }
}

/* ===== CONTACT FORM ===== */
function handleFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');
  const btn = form.querySelector('button[type="submit"]');

  // Show loading state
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;

  // Simulate form submission
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    btn.disabled = false;
    successMsg.classList.add('show');
    form.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMsg.classList.remove('show');
    }, 5000);
  }, 1800);
}

/* ===== NUMBER COUNTER ANIMATION ===== */
function animateCounter(el, target) {
  let count = 0;
  const increment = target / 60;
  const timer = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(count) + (el.dataset.suffix || '');
  }, 20);
}

// Observe hero stats
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-num').forEach(el => {
          const text = el.textContent;
          const num = parseInt(text);
          const suffix = text.replace(num, '');
          el.dataset.suffix = suffix;
          el.textContent = '0' + suffix;
          animateCounter(el, num);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

/* ===== SMOOTH SCROLL FOR ANCHOR LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ===== ENROLL NOW BUTTON SCROLL ===== */
const enrollBtn = document.getElementById('enrollNowBtn');
if (enrollBtn) {
  enrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const services = document.getElementById('services');
    if (services) {
      const top = services.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
}

/* ===== SERVICE CARD HOVER EFFECT (Color BG) ===== */
document.querySelectorAll('.service-card').forEach(card => {
  const bg = card.dataset.color;
  card.addEventListener('mouseenter', () => {
    card.style.background = bg || 'white';
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = 'white';
  });
});

/* ===== GALLERY ITEM CLICK EFFECT ===== */
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    item.style.transform = 'scale(0.97)';
    setTimeout(() => { item.style.transform = ''; }, 200);
  });
});

/* ===== INIT: Trigger on page load ===== */
window.addEventListener('load', () => {
  updateActiveNavLink();
  // Trigger reveal for elements in viewport on load
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
});
