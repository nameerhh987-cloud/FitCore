/* ============================================================
   FitCore Gym North Nazimabad — Master Application Script
   Interactive UI, High-Performance Carousel, and Visuals
   ============================================================ */

const ICON_PATHS = {
  'dumbbell':      '<path d="M6 5v14"/><path d="M18 5v14"/><path d="M2 9h4"/><path d="M18 9h4"/><path d="M2 15h4"/><path d="M18 15h4"/><line x1="6" y1="9" x2="18" y2="9"/><line x1="6" y1="15" x2="18" y2="15"/>',
  'heart-pulse':   '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
  'zap':           '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  'shield':        '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  'leaf':          '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  'apple':         '<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06z"/><path d="M10 2c1 .5 2 2 2 5"/>',
  'users':         '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'layers':        '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  'user-check':    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>',
  'check-circle':  '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  'check':         '<polyline points="20 6 9 17 4 12"/>',
  'x':             '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  'phone':         '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.71 3.4 2 2 0 0 1 3.68 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
  'map-pin':       '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  'clock':         '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'mail':          '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/>',
  'star':          '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  'chevron-down':  '<polyline points="6 9 12 15 18 9"/>',
  'chevron-left':  '<polyline points="15 18 9 12 15 6"/>',
  'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
  'trophy':        '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>',
};

function renderIcon(name, extraClass) {
  extraClass = extraClass || '';
  const paths = ICON_PATHS[name] || '<circle cx="12" cy="12" r="10"/>';
  return `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderStats();
  renderPrograms();
  renderTrainers();
  renderPricing();
  renderTestimonials();
  renderGallery();
  renderFAQs();
  renderHours();
  initContactForm();
  initBackToTop();
  initScrollAnimations();
});

/* ------------------------------------------------------------
   Sticky Header, Drawer & Smooth Anchor Scroll
   ------------------------------------------------------------ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.querySelector('.nav-drawer');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll listener for sticky navbar shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    highlightActiveNav();
  }, { passive: true });

  // Mobile toggle button
  if (toggle && drawer) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = drawer.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile drawer when clicking any link inside
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside drawer
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll offset compensation for sticky navbar
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight || 72;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - (navHeight + 10);
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active link scrollspy
  const sections = document.querySelectorAll('section[id]');
  function highlightActiveNav() {
    const scrollPos = window.scrollY + 140;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

/* ------------------------------------------------------------
   Stats Counter
   ------------------------------------------------------------ */
function renderStats() {
  const grid = document.querySelector('.stats-grid');
  if (!grid || typeof STATS === 'undefined') return;

  grid.innerHTML = STATS.map(s => `
    <div class="stat-item reveal">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

/* ------------------------------------------------------------
   Programs with High-Res Visuals
   ------------------------------------------------------------ */
function renderPrograms() {
  const grid = document.querySelector('.programs-grid');
  if (!grid || typeof PROGRAMS === 'undefined') return;

  grid.innerHTML = PROGRAMS.map(p => `
    <div class="program-card reveal">
      <div class="program-img-wrap">
        <img src="${p.image}" alt="${p.title}" loading="lazy" width="400" height="180">
        <div class="program-icon-badge">
          ${renderIcon(p.icon)}
        </div>
      </div>
      <div class="program-body">
        <h3 class="program-title">${p.title}</h3>
        <p class="program-desc">${p.description}</p>
        <div class="program-tags">
          ${p.tags.map(t => `<span class="program-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ------------------------------------------------------------
   Trainers with Professional Portraits
   ------------------------------------------------------------ */
function renderTrainers() {
  const grid = document.querySelector('.trainers-grid');
  if (!grid || typeof TRAINERS === 'undefined') return;

  grid.innerHTML = TRAINERS.map(tr => `
    <div class="trainer-card reveal">
      <div class="trainer-photo-wrap">
        <img src="${tr.image}" alt="${tr.name} - ${tr.role}" loading="lazy" width="300" height="240">
        <span class="trainer-exp-badge">${tr.experience} Exp</span>
      </div>
      <div class="trainer-body">
        <h3 class="trainer-name">${tr.name}</h3>
        <div class="trainer-role">${tr.role}</div>
        <p class="trainer-bio">${tr.bio}</p>
        <div class="trainer-specialties">
          ${tr.specialties.map(sp => `<span class="trainer-spec">${sp}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ------------------------------------------------------------
   Pricing Plans
   ------------------------------------------------------------ */
function renderPricing() {
  const grid = document.querySelector('.pricing-grid');
  if (!grid || typeof PLANS === 'undefined') return;

  grid.innerHTML = PLANS.map(plan => {
    const isFeatured = plan.badge ? 'featured' : '';
    const badgeHtml = plan.badge ? `<span class="pricing-badge badge badge-accent">${plan.badge}</span>` : '';
    const btnClass = plan.badge ? 'btn btn-primary' : 'btn btn-outline';

    const incl = plan.features.map(f => `
      <div class="pricing-feature included">
        ${renderIcon('check')}
        <span>${f}</span>
      </div>
    `).join('');

    const excl = (plan.excluded || []).map(f => `
      <div class="pricing-feature excluded">
        ${renderIcon('x')}
        <span>${f}</span>
      </div>
    `).join('');

    return `
      <div class="pricing-card ${isFeatured} reveal">
        ${badgeHtml}
        <h3 class="pricing-name">${plan.name}</h3>
        <p class="pricing-desc">${plan.description}</p>
        <div class="pricing-price">
          <span class="pricing-currency">PKR</span>
          <span class="pricing-amount">${plan.price}</span>
          <span class="pricing-period">${plan.period}</span>
        </div>
        <div class="pricing-features">
          ${incl}
          ${excl}
        </div>
        <a href="#contact" class="${btnClass}">${plan.cta}</a>
      </div>
    `;
  }).join('');
}

/* ------------------------------------------------------------
   Testimonials Slider with Touch & Responsive Sizing
   ------------------------------------------------------------ */
let currentSlide = 0;
let autoSlideInterval = null;

function renderTestimonials() {
  const track = document.querySelector('.testimonials-track');
  const dotsContainer = document.querySelector('.testimonials-dots');
  const prevBtn = document.querySelector('.testimonials-prev');
  const nextBtn = document.querySelector('.testimonials-next');
  if (!track || typeof TESTIMONIALS === 'undefined') return;

  track.innerHTML = TESTIMONIALS.map(t => {
    const stars = Array(t.rating).fill(renderIcon('star')).join('');

    return `
      <div class="testimonial-slide">
        <div class="testimonial-card">
          <div class="testimonial-quote-icon">“</div>
          <div class="testimonial-stars">${stars}</div>
          <p class="testimonial-text">"${t.text}"</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar-wrap">
              <img src="${t.avatar}" alt="${t.name}" loading="lazy" width="44" height="44">
            </div>
            <div>
              <div class="testimonial-name">${t.name}</div>
              <div class="testimonial-role">${t.role}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const getVisibleCount = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1080) return 2;
    return 3;
  };

  const totalSlides = TESTIMONIALS.length;

  const updateDots = () => {
    if (!dotsContainer) return;
    const maxIndex = Math.max(0, totalSlides - getVisibleCount());
    dotsContainer.innerHTML = Array.from({ length: maxIndex + 1 }).map((_, i) => `
      <span class="testimonials-dot ${i === currentSlide ? 'active' : ''}" data-index="${i}"></span>
    `).join('');

    dotsContainer.querySelectorAll('.testimonials-dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        currentSlide = parseInt(e.target.dataset.index, 10);
        updateSlider();
        restartAutoSlide();
      });
    });
  };

  const updateSlider = () => {
    const visible = getVisibleCount();
    const maxIndex = Math.max(0, totalSlides - visible);
    if (currentSlide > maxIndex) currentSlide = maxIndex;
    if (currentSlide < 0) currentSlide = 0;

    const slideWidthPct = 100 / visible;
    const offset = -(currentSlide * slideWidthPct);
    track.style.transform = `translateX(${offset}%)`;

    updateDots();
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const maxIndex = Math.max(0, totalSlides - getVisibleCount());
      currentSlide = currentSlide > 0 ? currentSlide - 1 : maxIndex;
      updateSlider();
      restartAutoSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const maxIndex = Math.max(0, totalSlides - getVisibleCount());
      currentSlide = currentSlide < maxIndex ? currentSlide + 1 : 0;
      updateSlider();
      restartAutoSlide();
    });
  }

  const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
      const maxIndex = Math.max(0, totalSlides - getVisibleCount());
      currentSlide = currentSlide < maxIndex ? currentSlide + 1 : 0;
      updateSlider();
    }, 5000);
  };

  const restartAutoSlide = () => {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  };

  window.addEventListener('resize', () => {
    updateSlider();
  }, { passive: true });

  updateSlider();
  startAutoSlide();
}

/* ------------------------------------------------------------
   Gallery with Real Images & Filtering
   ------------------------------------------------------------ */
function renderGallery() {
  const grid = document.querySelector('.gallery-grid');
  const filters = document.querySelectorAll('.gallery-filter');
  if (!grid || typeof GALLERY_ITEMS === 'undefined') return;

  function displayItems(cat) {
    const items = cat === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.category === cat);
    grid.innerHTML = items.map(item => `
      <div class="gallery-item reveal" data-category="${item.category}">
        <img src="${item.image}" alt="${item.label}" loading="lazy" width="400" height="300">
        <div class="gallery-item-overlay">
          <div class="gallery-item-label">${item.label}</div>
          <span class="gallery-item-cat">${item.category}</span>
        </div>
      </div>
    `).join('');

    // re-observe new items for smooth animations
    initScrollAnimations();
  }

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      displayItems(btn.dataset.filter);
    });
  });

  displayItems('all');
}

/* ------------------------------------------------------------
   FAQ Accordion
   ------------------------------------------------------------ */
function renderFAQs() {
  const grid = document.querySelector('.faq-grid');
  if (!grid || typeof FAQS === 'undefined') return;

  grid.innerHTML = FAQS.map((faq) => `
    <div class="faq-item reveal">
      <div class="faq-question" role="button" tabindex="0" aria-expanded="false">
        <span class="faq-q-text">${faq.q}</span>
        <span class="faq-chevron">${renderIcon('chevron-down')}</span>
      </div>
      <div class="faq-answer">
        <div class="faq-a-text">${faq.a}</div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.faq-question').forEach(q => {
    const item = q.closest('.faq-item');
    const toggle = () => {
      const isOpen = item.classList.toggle('open');
      q.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };

    q.addEventListener('click', toggle);
    q.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
}

/* ------------------------------------------------------------
   Operating Hours
   ------------------------------------------------------------ */
function renderHours() {
  const container = document.querySelector('.hours-table');
  if (!container || typeof GYM === 'undefined') return;

  container.innerHTML = GYM.hours.map(h => {
    const isLadies = h.days.includes('Ladies');
    return `
      <div class="hours-row ${isLadies ? 'ladies-row' : ''}">
        <span class="hours-day">${h.days}</span>
        <span class="hours-time">${h.time}</span>
      </div>
    `;
  }).join('');
}

/* ------------------------------------------------------------
   Contact Form Validation & Feedback
   ------------------------------------------------------------ */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  const successBox = document.querySelector('.form-success');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#name')?.value.trim();
    const phone = form.querySelector('#phone')?.value.trim();
    const plan = form.querySelector('#plan')?.value || 'Elite Performance';

    if (!name || !phone) {
      alert('Please provide your name and phone number so we can book your pass.');
      return;
    }

    const submitBtn = form.querySelector('.form-submit');
    const origText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = origText;
      if (successBox) {
        successBox.textContent = `Thank you, ${name}! Your free 1-day pass for FitCore Gym North Nazimabad is confirmed. We will reach you at ${phone} to schedule your workout.`;
        successBox.classList.add('visible');
      }
      form.reset();

      setTimeout(() => {
        if (successBox) successBox.classList.remove('visible');
      }, 8000);
    }, 800);
  });
}

/* ------------------------------------------------------------
   Back To Top Button
   ------------------------------------------------------------ */
function initBackToTop() {
  const btn = document.querySelector('.back-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ------------------------------------------------------------
   Scroll Reveal Observer
   ------------------------------------------------------------ */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}
