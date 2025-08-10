// Hamburger menu for mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Contact form (demo only - does not actually send)
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  formMessage.textContent = "Thank you! Your message has been received.";
  form.reset();
  setTimeout(() => formMessage.textContent = "", 4000);
});

// Animate skill bars on scroll into view
const skillLevels = document.querySelectorAll('.skill-level');
let skillsAnimated = false;

function animateSkills() {
  const skillsSection = document.getElementById('skills');
  const rect = skillsSection.getBoundingClientRect();
  if (!skillsAnimated && rect.top < window.innerHeight - 100) {
    skillLevels.forEach(bar => {
      bar.style.width = bar.style.width; // triggers transition
    });
    skillsAnimated = true;
  }
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('DOMContentLoaded', animateSkills);

// --- Dark Mode Toggle ---

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// SVGs for sun and moon icons
const moonIcon = `
<svg viewBox="0 0 24 24">
  <path d="M21 12.79A9 9 0 0 1 12.21 3a1 1 0 0 0-1.13 1.41A7 7 0 1 0 19.59 14.92a1 1 0 0 0 1.41-1.13Z"/>
</svg>
`;
const sunIcon = `
<svg class="sun-svg" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="5" fill="currentColor"/>
  <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <line x1="12" y1="2" x2="12" y2="4"/>
    <line x1="12" y1="20" x2="12" y2="22"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="2" y1="12" x2="4" y2="12"/>
    <line x1="20" y1="12" x2="22" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </g>
</svg>
`;

// Helper to set the icon
function setThemeIcon(isDark) {
  themeToggle.innerHTML = isDark ? sunIcon : moonIcon;
}

// Helper to set dark mode
function setDarkMode(isDark) {
  if (isDark) {
    body.classList.add('dark');
    setThemeIcon(true);
  } else {
    body.classList.remove('dark');
    setThemeIcon(false);
  }
}

// On load, check localStorage or prefers-color-scheme
function loadTheme() {
  let dark = localStorage.getItem('theme');
  if (dark === null) {
    // Use system preference
    dark = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  setDarkMode(dark === 'dark');
}

themeToggle.addEventListener('click', () => {
  const isDark = body.classList.contains('dark');
  setDarkMode(!isDark);
  localStorage.setItem('theme', !isDark ? 'dark' : 'light');
});

loadTheme();