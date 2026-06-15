document.documentElement.classList.add('js');

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

/* ----- projects ----- */
const PROJECTS = [
  {
    id: 'hms',
    title: 'HMS — Hotel & Villa Management',
    kind: 'Ultra Solutions',
    year: '2025',
    desc: 'Multi-tenant Laravel SaaS for hotel and villa operators. Built as a Hotel Management System, then forked and reworked into a configurable Villa Management platform with a different prepayment, tax and checkout model.',
    role: 'Senior developer / acting tech lead — architecture, domain modelling, team of three.',
    features: [
      'Isolated database per tenant for secure data separation and per-tenant scaling',
      'Prepayment-at-check-in invariant — invoices never carry a balance during an open stay',
      'Tax snapshot rewritten on every billable event (check-in, extension, service)',
      'Auto-checkout cron closing stays at the operational boundary, idempotent and race-safe',
      'Reservation confirmation gate driven by advance-payment percentage, with partial check-in and tail reservation logic',
      'Strict action / service / repository separation across the codebase',
    ],
    tech: ['Laravel', 'PHP 8', 'MySQL', 'Sanctum', 'Spatie Permissions', 'Queues', 'Scheduled commands', 'Redis', 'Imagick (PDF)', 'QR codes', 'PHPUnit', 'Docker'],
    images: [
      'images/HMS 1.jpg',
      'images/HMS 2.jpg',
      'images/HMS 3.jpg',
      'images/HMS 4.jpg',
      'images/HMS 5.jpg',
      'images/HMS 6.jpg',
    ],
  },
  {
    id: 'electricity',
    title: 'Electricity utility suite',
    kind: 'Corporate',
    year: '2023',
    desc: 'Internal platform for meter management, billing cycles, employee cash-flow and reporting.',
    role: 'Database, back-end, admin frontend.',
    features: [
      'Meter lifecycle: installation, readings, billing, disputes',
      'Employee cash-flow ledger with reconciliation',
      'Queued bill generation, tariff snapshots',
    ],
    tech: ['Laravel', 'MySQL', 'Queues'],
    images: ['images/anwar11.png', 'images/anwar22.png', 'images/anwar33.png'],
  },
  {
    id: 'lms',
    title: 'Najeeb — e-learning platform',
    kind: 'Freelance',
    year: '2023',
    desc: 'Web + mobile learning app with RBAC, subscriptions, attendance and payment tracking.',
    role: 'Database, control panel, mobile APIs.',
    features: [
      'Role-based access control across roles and tenants',
      'Subscription billing with prorated upgrades and grace periods',
      'Live + recorded lectures with attendance signatures',
      'Push notifications for class events',
    ],
    tech: ['Laravel', 'MySQL', 'REST', 'Push notifications', 'Firebase FCM'],
    images: ['images/najeeb11.png', 'images/najeeb22.png', 'images/najeeb33.png', 'images/najeeb.gif'],
  },
  {
    id: 'car-rental',
    title: 'Uranus — car rental',
    kind: 'TrendDXB',
    year: '2023',
    desc: 'Car rental platform enabling sub-5-minute bookings. Led 3 developers and 2 designers.',
    role: 'Team lead, analysis, schema, back-end.',
    features: [
      'Booking flow optimised for sub-5-minute completion',
      'Availability engine handling overlaps and cleaning windows',
      'Dynamic pricing (seasonal, weekday, loyalty)',
      'Idempotent payment endpoints',
    ],
    tech: ['Laravel', 'MySQL', 'REST', 'Redis'],
    images: ['images/uranus.png', 'images/uranus11.png', 'images/uranus22.png', 'images/uranus3.png', 'images/uranus4.png', 'images/uranus55.png'],
    link: 'https://uranuscar.com/',
  },
  {
    id: 'vida-food',
    title: 'Vida-Food — UAE food e-commerce',
    kind: 'TrendDXB',
    year: '2023',
    desc: 'E-commerce platform for a UAE food supplier — browsing, cart, checkout and a built-in repackaging workflow.',
    role: 'End-to-end application.',
    features: [
      'Variant-aware catalogue with per-warehouse inventory',
      'Cart-to-order pipeline with abandoned-cart jobs',
      'Stackable coupons and promotions',
    ],
    tech: ['Laravel', 'MySQL', 'Queues'],
    images: ['images/vidaFood.png', 'images/vidaFood1.gif', 'images/vidaFood2.gif'],
    link: 'https://vida-food.com/',
  },
  {
    id: 'fitness',
    title: 'Fitness platform',
    kind: 'Freelance',
    year: '2022',
    desc: 'Fitness shop with trainer booking, paired with a mobile app for clients.',
    role: 'Back-end and mobile APIs.',
    features: [
      'Coach availability and session booking',
      'Mixed product + service line items in cart',
      'Push notifications for session reminders',
    ],
    tech: ['Laravel', 'MySQL', 'Firebase'],
    images: ['images/gymToGo.png', 'images/gym11.png', 'images/gym22.png', 'images/gym33.png', 'images/gym44.png', 'images/gym55.png'],
  },
  {
    id: 'time-tracker',
    title: 'Time tracker',
    kind: 'InSoft Online',
    year: '2022',
    desc: 'Productivity app tracking hours and computing salaries with overtime and holiday rules.',
    role: 'Application and schema.',
    features: [
      'Per-employee shift rules and overtime tiers',
      'Snapshotted payslips against frozen rulesets',
      'Manager approvals and exceptions',
    ],
    tech: ['Laravel', 'MySQL'],
    images: ['images/timeTracker.gif'],
  },
  {
    id: 'real-estate',
    title: 'Real estate broker',
    kind: 'Corporate',
    year: '2021',
    desc: 'Mobile property platform with search, listings and two-sided scheduling.',
    role: 'Schema and booking APIs.',
    features: [
      'Faceted search with geo-aware ranking',
      'Two-sided scheduling with availability windows',
      'Inquiry routing and response-time tracking',
    ],
    tech: ['Laravel', 'MySQL', 'REST'],
    images: ['images/realEstate.gif', 'images/realEstate1.gif', 'images/realEstate2.gif', 'images/realEstate3.gif'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare records system',
    kind: 'Graduation project',
    year: '2020',
    desc: 'Hospital records and prescription management, with a patient mobile app for reminders.',
    role: 'Full-stack — web and mobile.',
    features: [
      'Electronic prescriptions with pharmacy hand-off',
      'Role-scoped clinician access',
      'Medication reminders and adherence tracking',
      'Immutable access audit log',
    ],
    tech: ['Laravel', 'MySQL', 'Firebase'],
    images: ['images/hhealthCare.png', 'images/healthCare1.png', 'images/healthCare2.gif', 'images/healthCare3.gif', 'images/healthCare4.gif', 'images/healthCare5.gif'],
  },
];

/* ----- render projects ----- */
const INITIAL_VISIBLE = 5;

function renderProjects() {
  const list = $('#workList');
  list.innerHTML = PROJECTS.map((p, i) => `
    <article class="case ${i >= INITIAL_VISIBLE ? 'is-hidden' : ''}" data-project="${p.id}">
      <div class="case__preview">
        <img class="case__img" src="${p.images[0]}" alt="${p.title}" loading="lazy" />
        ${p.link ? `<span class="case__live">Live ↗</span>` : ''}
      </div>
      <div class="case__body">
        <div class="case__row">
          <span>${String(i + 1).padStart(2, '0')}</span>
          ${p.kind} · ${p.year}
        </div>
        <h3 class="case__title">${p.title}</h3>
        <p class="case__desc">${p.desc}</p>
        <div class="case__tech">
          ${p.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');

  $$('.case').forEach(card => {
    card.addEventListener('click', () => openProject(card.dataset.project));
  });

  const btn = $('#showMore');
  const hiddenCount = PROJECTS.length - INITIAL_VISIBLE;
  if (hiddenCount <= 0) { btn.style.display = 'none'; return; }
  btn.querySelector('span').textContent = `(${hiddenCount})`;

  btn.addEventListener('click', () => {
    const expanded = btn.classList.toggle('is-expanded');
    $$('.case.is-hidden, .case.is-revealed').forEach(c => {
      c.classList.toggle('is-revealed', expanded);
    });
    if (expanded) {
      btn.firstChild.textContent = 'Show less ';
      btn.querySelector('span').textContent = '';
    } else {
      btn.firstChild.textContent = 'Show more ';
      btn.querySelector('span').textContent = `(${hiddenCount})`;
      btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

/* ----- modal + carousel ----- */
let carouselState = { index: 0, count: 0, dragX: 0, startX: 0, dragging: false };

function openProject(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  const modal = $('#projectModal');
  const content = $('#modalContent');

  content.innerHTML = `
    <div class="proj-head">
      <p class="proj-head__meta">${p.kind} · ${p.year}</p>
      <h2 class="proj-head__title">${p.title}</h2>
      <p class="proj-head__sub">${p.tech.join(' · ')}</p>
    </div>

    <div class="carousel">
      <div class="carousel__track" id="carouselTrack">
        ${p.images.map((src, i) => `
          <div class="carousel__slide">
            <img src="${src}" alt="${p.title} ${i + 1}" draggable="false" />
          </div>
        `).join('')}
      </div>
      ${p.images.length > 1 ? `
        <button class="carousel__nav carousel__nav--prev" id="cPrev" aria-label="Previous">‹</button>
        <button class="carousel__nav carousel__nav--next" id="cNext" aria-label="Next">›</button>
      ` : ''}
    </div>

    ${p.images.length > 1 ? `
      <div class="carousel__thumbs">
        ${p.images.map((src, i) => `
          <div class="carousel__thumb ${i === 0 ? 'is-active' : ''}" data-idx="${i}">
            <img src="${src}" alt="" />
          </div>
        `).join('')}
      </div>
    ` : ''}

    <div class="proj-block">
      <h4>Overview</h4>
      <p>${p.desc}</p>
    </div>

    <div class="proj-block">
      <h4>Role</h4>
      <p>${p.role}</p>
    </div>

    <div class="proj-block">
      <h4>Features</h4>
      <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
    </div>

    <div class="proj-block">
      <h4>Stack</h4>
      <div class="proj-tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
    </div>

    ${p.link ? `
    <div class="proj-block">
      <h4>Live</h4>
      <a class="proj-link" href="${p.link}" target="_blank" rel="noopener">${p.link.replace(/^https?:\/\//, '').replace(/\/$/, '')} <span>↗</span></a>
    </div>` : ''}
  `;

  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  if (p.images.length > 1) initCarousel(p.images.length);
}

function closeProject() {
  $('#projectModal').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function initCarousel(count) {
  carouselState = { index: 0, count, dragX: 0, startX: 0, dragging: false };
  const track = $('#carouselTrack');
  const prev = $('#cPrev'), next = $('#cNext');
  const thumbs = $$('.carousel__thumb');

  const goTo = (i) => {
    carouselState.index = (i + count) % count;
    track.style.transform = `translateX(-${carouselState.index * 100}%)`;
    thumbs.forEach((t, k) => t.classList.toggle('is-active', k === carouselState.index));
  };

  prev && prev.addEventListener('click', () => goTo(carouselState.index - 1));
  next && next.addEventListener('click', () => goTo(carouselState.index + 1));
  thumbs.forEach(t => t.addEventListener('click', () => goTo(+t.dataset.idx)));

  const onDown = (e) => {
    carouselState.dragging = true;
    carouselState.startX = (e.touches?.[0]?.clientX ?? e.clientX);
    track.classList.add('is-dragging');
  };
  const onMove = (e) => {
    if (!carouselState.dragging) return;
    const x = (e.touches?.[0]?.clientX ?? e.clientX);
    carouselState.dragX = x - carouselState.startX;
    track.style.transform = `translateX(calc(-${carouselState.index * 100}% + ${carouselState.dragX}px))`;
  };
  const onUp = () => {
    if (!carouselState.dragging) return;
    track.classList.remove('is-dragging');
    const threshold = track.offsetWidth * 0.15;
    if (carouselState.dragX < -threshold) goTo(carouselState.index + 1);
    else if (carouselState.dragX > threshold) goTo(carouselState.index - 1);
    else goTo(carouselState.index);
    carouselState.dragging = false;
    carouselState.dragX = 0;
  };

  track.addEventListener('mousedown', onDown);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onUp);
  track.addEventListener('touchstart', onDown, { passive: true });
  track.addEventListener('touchmove', onMove, { passive: true });
  track.addEventListener('touchend', onUp);
}

/* ----- nav (mobile toggle) ----- */
function initNav() {
  const nav = $('#nav');
  const burger = $('#navBurger');
  burger.addEventListener('click', () => nav.classList.toggle('is-open'));
  $$('.nav__links a').forEach(l => l.addEventListener('click', () => nav.classList.remove('is-open')));
}

/* ----- modal close ----- */
function initModal() {
  $$('[data-close]').forEach(el => el.addEventListener('click', closeProject));
  window.addEventListener('keydown', e => { if (e.key === 'Escape') closeProject(); });
}

/* ----- minimal reveal ----- */
function initReveal() {
  if (!('IntersectionObserver' in window)) {
    $$('[data-reveal]').forEach(el => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
  $$('[data-reveal]').forEach(el => io.observe(el));
}

/* ----- boot ----- */
function boot() {
  $('#year').textContent = new Date().getFullYear();
  renderProjects();
  initNav();
  initModal();
  initReveal();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
