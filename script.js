// =========================================================
// Mobile nav toggle
// =========================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu after clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// =========================================================
// Active nav link on scroll
// =========================================================
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

const observerOptions = {
  root: null,
  rootMargin: '-45% 0px -50% 0px',
  threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinkEls.forEach(link => {
        link.classList.toggle('active-link', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));

// =========================================================
// Skill dials — RPM-gauge style circular progress
// Edit this array to change your skills / proficiency levels
// =========================================================
const skills = [
  { name: 'HTML5',       level: 90 },
  { name: 'CSS3',        level: 85 },
  { name: 'JavaScript',  level: 75 },
  { name: 'React',       level: 60 },
  { name: 'Bootstrap',   level: 80 },
  { name: 'Git/GitHub',  level: 78 },
];

const gaugeGrid = document.getElementById('gaugeGrid');
const RADIUS = 40;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

skills.forEach(skill => {
  const offset = CIRCUMFERENCE - (skill.level / 100) * CIRCUMFERENCE;

  const card = document.createElement('div');
  card.className = 'skill-dial';
  card.innerHTML = `
    <svg class="dial-svg" viewBox="0 0 100 100">
      <circle class="dial-track" cx="50" cy="50" r="${RADIUS}"></circle>
      <circle class="dial-fill" cx="50" cy="50" r="${RADIUS}"
        stroke-dasharray="${CIRCUMFERENCE}"
        stroke-dashoffset="${CIRCUMFERENCE}"
        data-offset="${offset}">
      </circle>
    </svg>
    <span class="dial-name">${skill.name}</span>
    <span class="dial-pct">${skill.level}%</span>
  `;
  gaugeGrid.appendChild(card);
});

// Animate dials in once they're visible
const dialObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.dial-fill').forEach(fill => {
        fill.style.strokeDashoffset = fill.getAttribute('data-offset');
      });
      dialObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

dialObserver.observe(document.getElementById('gaugeGrid'));

// =========================================================
// Footer year
// =========================================================
document.getElementById('year').textContent = new Date().getFullYear();
