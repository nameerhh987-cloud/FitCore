/* ============================================================
   THE LAB ATHLETIC CLUB — Master Application Script
   Three.js 3D Kinetic Space, Animated Stats, Magnetic CTAs,
   3D Card Tilt, Parallax & Full UI Logic
   Sunset Blvd • Los Angeles, CA
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
  'trophy':        '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>'
};

function renderIcon(name, extraClass) {
  extraClass = extraClass || '';
  const paths = ICON_PATHS[name] || '<circle cx="12" cy="12" r="10"/>';
  return `<svg class="${extraClass}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}

document.addEventListener('DOMContentLoaded', () => {
  initThreeScene();
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
  init3DTilt();
  initMagneticButtons();
  initStatCounters();
});

/* ============================================================
   THREE.JS — PREMIUM 3D KINETIC BACKGROUND
   Particle Nebula + Geometric Core + Orbiting Bodies
   ============================================================ */
function initThreeScene() {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x050507, 0.0014);

  const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 2400);
  camera.position.set(0, 0, 440);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: window.devicePixelRatio < 2,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  /* ── LIGHTING ── */
  const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.6);
  scene.add(ambientLight);

  const crimsonLight = new THREE.PointLight(0xE50914, 4.5, 1100);
  crimsonLight.position.set(180, 160, 220);
  scene.add(crimsonLight);

  const scarletLight = new THREE.PointLight(0xFF3040, 3.0, 900);
  scarletLight.position.set(-220, -120, 160);
  scene.add(scarletLight);

  const rimLight = new THREE.PointLight(0xFFFFFF, 1.2, 600);
  rimLight.position.set(0, -200, 300);
  scene.add(rimLight);

  /* ── 1. PARTICLE CONSTELLATION ── */
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 800 : 1800;
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(particleCount * 3);
  const pCol = new Float32Array(particleCount * 3);

  const C1 = new THREE.Color(0xE50914);
  const C2 = new THREE.Color(0xFF3040);
  const CW = new THREE.Color(0xFFFFFF);
  const CD = new THREE.Color(0x660008);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    pPos[i3]     = (Math.random() - 0.5) * 2200;
    pPos[i3 + 1] = (Math.random() - 0.5) * 1800;
    pPos[i3 + 2] = (Math.random() - 0.5) * 1600;

    const r = Math.random();
    const col = r < 0.5 ? C1 : r < 0.72 ? C2 : r < 0.88 ? CW : CD;
    pCol[i3]     = col.r;
    pCol[i3 + 1] = col.g;
    pCol[i3 + 2] = col.b;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  pGeo.setAttribute('color',    new THREE.BufferAttribute(pCol, 3));

  const makeDotTex = () => {
    const c = document.createElement('canvas');
    c.width = c.height = 32;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    g.addColorStop(0,    'rgba(255,255,255,1)');
    g.addColorStop(0.22, 'rgba(255,48,64,0.95)');
    g.addColorStop(0.6,  'rgba(229,9,20,0.28)');
    g.addColorStop(1,    'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 32, 32);
    return new THREE.CanvasTexture(c);
  };

  const pMat = new THREE.PointsMaterial({
    size: isMobile ? 4.5 : 5.8,
    map: makeDotTex(),
    vertexColors: true,
    transparent: true,
    opacity: 0.88,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  /* ── 2. CORE 3D GEOMETRIC STRUCTURE ── */
  const coreGroup = new THREE.Group();

  // Deep glowing inner octahedron
  const coreGeo = new THREE.OctahedronGeometry(62, 0);
  const coreMat = new THREE.MeshPhongMaterial({
    color: 0x8C050E,
    emissive: 0x520008,
    specular: 0xFF3040,
    shininess: 160,
    flatShading: true,
    transparent: true,
    opacity: 0.9
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  coreGroup.add(coreMesh);

  // Mid wireframe dodecahedron
  const dodGeo = new THREE.DodecahedronGeometry(100, 0);
  const dodMat = new THREE.MeshBasicMaterial({
    color: 0xE50914,
    wireframe: true,
    transparent: true,
    opacity: 0.22
  });
  const dodMesh = new THREE.Mesh(dodGeo, dodMat);
  coreGroup.add(dodMesh);

  // Outer icosahedron cage
  const icoGeo = new THREE.IcosahedronGeometry(138, 2);
  const icoMat = new THREE.MeshBasicMaterial({
    color: 0xFF3040,
    wireframe: true,
    transparent: true,
    opacity: 0.18
  });
  const icoMesh = new THREE.Mesh(icoGeo, icoMat);
  coreGroup.add(icoMesh);

  // Gimbal ring 1
  const ring1Geo = new THREE.TorusGeometry(182, 1.6, 16, 120);
  const ring1Mat = new THREE.MeshBasicMaterial({ color: 0xFF3040, wireframe: true, transparent: true, opacity: 0.42 });
  const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
  ring1.rotation.x = Math.PI / 2.8;
  coreGroup.add(ring1);

  // Gimbal ring 2
  const ring2Geo = new THREE.TorusGeometry(210, 1.2, 16, 120);
  const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xE50914, wireframe: true, transparent: true, opacity: 0.28 });
  const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
  ring2.rotation.y = Math.PI / 3.2;
  coreGroup.add(ring2);

  // Gimbal ring 3 (tilted)
  const ring3Geo = new THREE.TorusGeometry(245, 0.9, 16, 120);
  const ring3Mat = new THREE.MeshBasicMaterial({ color: 0xFF6070, wireframe: true, transparent: true, opacity: 0.15 });
  const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
  ring3.rotation.z = Math.PI / 4;
  ring3.rotation.x = Math.PI / 5;
  coreGroup.add(ring3);

  /* ── 3. FLOATING SATELLITE BODIES ── */
  const satelliteGroup = new THREE.Group();

  const satelliteData = [
    { geo: new THREE.TetrahedronGeometry(18, 0), r: 290, speed: 0.38, phase: 0,       tilt: 0.4, opacity: 0.75 },
    { geo: new THREE.OctahedronGeometry(14, 0),  r: 320, speed: 0.24, phase: 2.1,    tilt: 0.9, opacity: 0.6  },
    { geo: new THREE.IcosahedronGeometry(10, 0), r: 355, speed: 0.18, phase: 4.2,    tilt: 1.2, opacity: 0.5  },
    { geo: new THREE.TetrahedronGeometry(22, 0), r: 260, speed: 0.55, phase: 1.05,   tilt: 0.3, opacity: 0.85 },
    { geo: new THREE.OctahedronGeometry(16, 0),  r: 300, speed: 0.32, phase: 3.14,   tilt: 0.7, opacity: 0.65 },
  ];

  const satMeshes = satelliteData.map(d => {
    const mat = new THREE.MeshPhongMaterial({
      color: 0xE50914,
      emissive: 0x3A0005,
      specular: 0xFF3040,
      shininess: 200,
      flatShading: true,
      transparent: true,
      opacity: d.opacity
    });
    const mesh = new THREE.Mesh(d.geo, mat);
    satelliteGroup.add(mesh);
    return { mesh, ...d };
  });

  coreGroup.add(satelliteGroup);
  scene.add(coreGroup);

  /* ── POSITION BASED ON SCREEN SIZE ── */
  const update3DPos = () => {
    if (window.innerWidth < 1040) {
      coreGroup.position.set(0, 10, -100);
      coreGroup.scale.setScalar(0.7);
    } else {
      coreGroup.position.set(260, 20, -40);
      coreGroup.scale.setScalar(1);
    }
  };
  update3DPos();

  /* ── MOUSE / TOUCH / SCROLL TRACKING ── */
  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;
  let scrollY  = 0;

  const halfW = window.innerWidth  / 2;
  const halfH = window.innerHeight / 2;

  window.addEventListener('mousemove', e => {
    mouseX = (e.clientX - halfW) * 0.3;
    mouseY = (e.clientY - halfH) * 0.3;
  }, { passive: true });

  window.addEventListener('touchmove', e => {
    if (e.touches.length > 0) {
      mouseX = (e.touches[0].clientX - halfW) * 0.2;
      mouseY = (e.touches[0].clientY - halfH) * 0.2;
    }
  }, { passive: true });

  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    update3DPos();
  }, { passive: true });

  /* ── RENDER LOOP ── */
  const clock = new THREE.Clock();

  (function renderFrame() {
    requestAnimationFrame(renderFrame);
    const t = clock.getElapsedTime();

    // Smooth mouse lerp
    targetX += (mouseX - targetX) * 0.04;
    targetY += (mouseY - targetY) * 0.04;

    // Scroll parallax
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const scrollPct = Math.min(1, Math.max(0, scrollY / maxScroll));

    // Camera float
    camera.position.x = targetX * 0.4;
    camera.position.y = -targetY * 0.4 - scrollPct * 200;
    camera.lookAt(0, -scrollPct * 120, 0);

    // Core group rotation
    coreGroup.rotation.x += 0.0024;
    coreGroup.rotation.y += 0.0038;

    // Inner rings independent rotation
    ring1.rotation.z += 0.006;
    ring2.rotation.x += 0.004;
    ring3.rotation.y += 0.003;
    ring3.rotation.z += 0.002;

    // Dodecahedron spins opposite
    dodMesh.rotation.x -= 0.003;
    dodMesh.rotation.z += 0.002;

    // Inner core breathes
    const breathe = 0.97 + Math.sin(t * 2.2) * 0.05;
    coreMesh.scale.setScalar(breathe);

    // Satellites orbit
    satMeshes.forEach(s => {
      const angle = t * s.speed + s.phase;
      s.mesh.position.x = Math.cos(angle) * s.r;
      s.mesh.position.y = Math.sin(angle * 0.62 + s.tilt) * (s.r * 0.4);
      s.mesh.position.z = Math.sin(angle) * (s.r * 0.55);
      s.mesh.rotation.x += 0.02;
      s.mesh.rotation.y += 0.015;

      // Pulse emissive
      const pulse = (Math.sin(t * 1.8 + s.phase) + 1) * 0.5;
      s.mesh.material.emissiveIntensity = 0.3 + pulse * 0.7;
    });

    // Crimson light orbits
    crimsonLight.position.x = Math.sin(t * 0.4) * 300;
    crimsonLight.position.z = Math.cos(t * 0.4) * 200;
    scarletLight.position.x = Math.cos(t * 0.3 + 1.5) * 280;
    scarletLight.position.y = Math.sin(t * 0.5)  * 180;

    // Particles drift
    particles.rotation.y = t * 0.018;
    particles.rotation.x = t * 0.009;

    renderer.render(scene, camera);
  })();
}

/* ============================================================
   FIXED LUXURY NAVBAR & MOBILE DRAWER CONTROLLER
   ============================================================ */
function initNavbar() {
  const navbar  = document.getElementById('navbar');
  const toggle  = document.querySelector('.nav-toggle');
  const drawer  = document.getElementById('navDrawer');
  const navLinks    = document.querySelectorAll('.nav-link');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 15);
    highlightActiveNav();
  }, { passive: true });

  const closeDrawer = () => {
    if (drawer && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('nav-open');
    }
  };

  const openDrawer = () => {
    if (drawer) {
      drawer.classList.add('open');
      toggle.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.classList.add('nav-open');
    }
  };

  if (toggle && drawer) {
    toggle.addEventListener('click', e => {
      e.stopPropagation();
      drawer.classList.contains('open') ? closeDrawer() : openDrawer();
    });

    drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

    document.addEventListener('click', e => {
      if (drawer.classList.contains('open') && !navbar.contains(e.target)) closeDrawer();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
    });
  }

  // Smooth scroll offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const id = this.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const navH = navbar.offsetHeight || 78;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - navH - 6,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active link scrollspy
  const sections = document.querySelectorAll('section[id]');
  function highlightActiveNav() {
    const pos = window.scrollY + 160;
    sections.forEach(sec => {
      const top = sec.offsetTop, h = sec.offsetHeight, id = sec.id;
      if (pos >= top && pos < top + h) {
        navLinks.forEach(l => {
          l.classList.remove('active');
          if (l.getAttribute('href') === '#' + id) l.classList.add('active');
        });
        drawerLinks.forEach(l => {
          l.classList.remove('active');
          if (l.getAttribute('href') === '#' + id) l.classList.add('active');
        });
      }
    });
  }
}

/* ============================================================
   3D CARD TILT WITH DYNAMIC GLARE (DESKTOP ONLY)
   ============================================================ */
function init3DTilt() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cards = document.querySelectorAll(
    '.program-card, .trainer-card, .pricing-card, .testimonial-card, .hero-card-float, .stat-item'
  );

  cards.forEach(card => {
    if (!card.querySelector('.card-shine')) {
      const shine = document.createElement('div');
      shine.className = 'card-shine';
      card.appendChild(shine);
    }

    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width  / 2;
      const cy = rect.height / 2;

      const rotX = ((y - cy) / cy) * -9;
      const rotY = ((x - cx) / cx) *  9;

      card.style.setProperty('--mouse-x', `${(x / rect.width)  * 100}%`);
      card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale3d(1,1,1)';
    });
  });
}

/* ============================================================
   MAGNETIC BUTTON EFFECT (DESKTOP CTA BUTTONS)
   ============================================================ */
function initMagneticButtons() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width  / 2);
      const dy = e.clientY - (rect.top  + rect.height / 2);
      btn.style.transform = `translate(${dx * 0.22}px, ${dy * 0.22}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ============================================================
   ANIMATED STAT COUNTERS (SCROLL-TRIGGERED)
   ============================================================ */
function initStatCounters() {
  const statValues = document.querySelectorAll('.stat-value');
  if (!statValues.length) return;

  const animateCounter = el => {
    const target = el.textContent.trim();

    // Check if it's purely numeric (possibly with suffix like +, %)
    const numeric = target.match(/^(\d+[\d.,]*)([^\d]*)$/);
    if (!numeric) return; // Non-numeric like "4.9★", "ELITE", "LA", "FREE" — leave as-is

    const numPart = parseFloat(numeric[1].replace(/,/g, ''));
    const suffix  = numeric[2] || '';
    const duration = 1800;
    const start = performance.now();

    const tick = now => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current  = Math.round(numPart * eased);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statValues.forEach(el => observer.observe(el));
}

/* ============================================================
   STATS CARDS (4 EXACT SPECIFIED CARDS)
   ============================================================ */
function renderStats() {
  const grid = document.querySelector('.stats-grid');
  if (!grid || typeof STATS === 'undefined') return;

  grid.innerHTML = STATS.map((s, i) => `
    <div class="stat-item reveal" style="transition-delay:${i * 0.08}s">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');

  // Re-run scroll observer so new elements get picked up
  initScrollAnimations();
}

/* ============================================================
   PROGRAMS SECTION
   ============================================================ */
function renderPrograms() {
  const grid = document.querySelector('.programs-grid');
  if (!grid || typeof PROGRAMS === 'undefined') return;

  grid.innerHTML = PROGRAMS.map((p, i) => `
    <div class="program-card reveal" style="transition-delay:${(i % 3) * 0.1}s">
      <div class="program-img-wrap">
        <img src="${p.image}" alt="${p.title}" loading="lazy" width="400" height="190">
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

  init3DTilt();
}

/* ============================================================
   COACHES SECTION
   ============================================================ */
function renderTrainers() {
  const grid = document.querySelector('.trainers-grid');
  if (!grid || typeof TRAINERS === 'undefined') return;

  grid.innerHTML = TRAINERS.map((tr, i) => `
    <div class="trainer-card reveal" style="transition-delay:${i * 0.09}s">
      <div class="trainer-photo-wrap">
        <img src="${tr.image}" alt="${tr.name} - ${tr.role}" loading="lazy" width="300" height="250">
        <span class="trainer-exp-badge">${tr.experience}</span>
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

  init3DTilt();
}

/* ============================================================
   PRICING SECTION (USD MEMBERSHIP TIERS)
   ============================================================ */
function renderPricing() {
  const grid = document.querySelector('.pricing-grid');
  if (!grid || typeof PLANS === 'undefined') return;

  grid.innerHTML = PLANS.map((plan, i) => {
    const isFeatured = plan.badge ? 'featured' : '';
    const badgeHtml  = plan.badge ? `<span class="pricing-badge badge badge-accent">${plan.badge}</span>` : '';
    const btnClass   = plan.badge ? 'btn btn-primary' : 'btn btn-outline';

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
      <div class="pricing-card ${isFeatured} reveal" style="transition-delay:${i * 0.12}s">
        ${badgeHtml}
        <h3 class="pricing-name">${plan.name}</h3>
        <p class="pricing-desc">${plan.description}</p>
        <div class="pricing-price">
          <span class="pricing-currency">$</span>
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

  init3DTilt();
}

/* ============================================================
   TESTIMONIALS SLIDER
   ============================================================ */
let currentSlide = 0;
let autoSlideInterval = null;

function renderTestimonials() {
  const track  = document.querySelector('.testimonials-track');
  const dots   = document.querySelector('.testimonials-dots');
  const prev   = document.querySelector('.testimonials-prev');
  const next   = document.querySelector('.testimonials-next');
  if (!track || typeof TESTIMONIALS === 'undefined') return;

  track.innerHTML = TESTIMONIALS.map(t => {
    const stars = Array(t.rating).fill(renderIcon('star')).join('');
    return `
      <div class="testimonial-slide">
        <div class="testimonial-card">
          <div class="testimonial-quote-icon">"</div>
          <div class="testimonial-stars">${stars}</div>
          <p class="testimonial-text">"${t.text}"</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar-wrap">
              <img src="${t.avatar}" alt="${t.name}" loading="lazy" width="46" height="46">
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

  const total = TESTIMONIALS.length;
  const getVisible = () => window.innerWidth <= 768 ? 1 : window.innerWidth <= 1080 ? 2 : 3;

  const updateDots = () => {
    if (!dots) return;
    const max = Math.max(0, total - getVisible());
    dots.innerHTML = Array.from({ length: max + 1 }).map((_, i) =>
      `<span class="testimonials-dot ${i === currentSlide ? 'active' : ''}" data-index="${i}"></span>`
    ).join('');
    dots.querySelectorAll('.testimonials-dot').forEach(d =>
      d.addEventListener('click', e => {
        currentSlide = parseInt(e.target.dataset.index, 10);
        updateSlider();
        restartAuto();
      })
    );
  };

  const updateSlider = () => {
    const v = getVisible();
    const max = Math.max(0, total - v);
    currentSlide = Math.max(0, Math.min(currentSlide, max));
    track.style.transform = `translateX(${-(currentSlide * 100 / v)}%)`;
    updateDots();
  };

  if (prev) prev.addEventListener('click', () => {
    const max = Math.max(0, total - getVisible());
    currentSlide = currentSlide > 0 ? currentSlide - 1 : max;
    updateSlider(); restartAuto();
  });

  if (next) next.addEventListener('click', () => {
    const max = Math.max(0, total - getVisible());
    currentSlide = currentSlide < max ? currentSlide + 1 : 0;
    updateSlider(); restartAuto();
  });

  const startAuto = () => {
    autoSlideInterval = setInterval(() => {
      const max = Math.max(0, total - getVisible());
      currentSlide = currentSlide < max ? currentSlide + 1 : 0;
      updateSlider();
    }, 5500);
  };

  const restartAuto = () => { clearInterval(autoSlideInterval); startAuto(); };

  window.addEventListener('resize', updateSlider, { passive: true });
  updateSlider();
  startAuto();
  init3DTilt();
}

/* ============================================================
   GALLERY FILTERING
   ============================================================ */
function renderGallery() {
  const grid    = document.querySelector('.gallery-grid');
  const filters = document.querySelectorAll('.gallery-filter');
  if (!grid || typeof GALLERY_ITEMS === 'undefined') return;

  const display = cat => {
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
    initScrollAnimations();
  };

  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('active'));
    btn.classList.add('active');
    display(btn.dataset.filter);
  }));

  display('all');
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function renderFAQs() {
  const grid = document.querySelector('.faq-grid');
  if (!grid || typeof FAQS === 'undefined') return;

  grid.innerHTML = FAQS.map(faq => `
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
      q.setAttribute('aria-expanded', isOpen);
    };
    q.addEventListener('click', toggle);
    q.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  });
}

/* ============================================================
   OPERATING HOURS
   ============================================================ */
function renderHours() {
  const container = document.querySelector('.hours-table');
  if (!container || typeof GYM === 'undefined') return;

  container.innerHTML = GYM.hours.map(h => {
    const special = h.days.includes('Recovery') || h.days.includes('VIP');
    return `
      <div class="hours-row ${special ? 'special-row' : ''}">
        <span class="hours-day">${h.days}</span>
        <span class="hours-time">${h.time}</span>
      </div>
    `;
  }).join('');
}

/* ============================================================
   CONTACT & VIP PASS FORM
   ============================================================ */
function initContactForm() {
  const form       = document.querySelector('.contact-form');
  const successBox = document.querySelector('.form-success');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name  = form.querySelector('#name')?.value.trim();
    const phone = form.querySelector('#phone')?.value.trim();
    const plan  = form.querySelector('#plan')?.value || 'Elite Performance Tier';

    if (!name || !phone) {
      alert('Please provide your name and phone number to claim your VIP Day Pass.');
      return;
    }

    const btn = form.querySelector('.form-submit');
    btn.disabled = true;
    btn.textContent = 'Processing VIP Pass...';

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = 'CLAIM VIP PASS';
      if (successBox) {
        successBox.textContent = `Welcome, ${name}! Your complimentary VIP Day Pass for The Lab Athletic Club on Sunset Blvd has been confirmed. Our member concierge will reach you at ${phone} to schedule your private tour and workout.`;
        successBox.classList.add('visible');
      }
      form.reset();
      setTimeout(() => { if (successBox) successBox.classList.remove('visible'); }, 8500);
    }, 900);
  });
}

/* ============================================================
   BACK TO TOP BUTTON
   ============================================================ */
function initBackToTop() {
  const btn = document.querySelector('.back-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 350);
  }, { passive: true });

  btn.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   SCROLL REVEAL OBSERVER (STAGGERED)
   ============================================================ */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Apply stagger from custom transition-delay if already set
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}
