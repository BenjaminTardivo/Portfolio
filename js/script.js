// === STARFIELD WITH 22-MINUTE SUPERNOVA CYCLE ===
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];
const STAR_COUNT = 300;
const CYCLE_LENGTH = 22 * 60; // 22 minutes in seconds (like the game's time loop)
const SUPERNOVA_DURATION = 7; // seconds for the full supernova event
let cycleStart = performance.now() / 1000;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    // Spread supernova times evenly across the cycle with slight randomness
    // so one star goes supernova at a time
    const slot = (i / STAR_COUNT) * CYCLE_LENGTH;
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.0005 + 0.0002,
      phase: Math.random() * Math.PI * 2,
      supernovaAt: slot + (Math.random() * 2 - 1) // slight offset so it feels organic
    });
  }
}

function drawStars(timestamp) {
  const now = timestamp / 1000;
  const elapsed = (now - cycleStart) % CYCLE_LENGTH;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    const twinkle = Math.sin(timestamp * star.speed + star.phase) * 0.3 + 0.7;

    // Check if this star is currently going supernova
    let supernovaProgress = -1;
    const timeSinceNova = elapsed - star.supernovaAt;
    if (timeSinceNova >= 0 && timeSinceNova < SUPERNOVA_DURATION) {
      supernovaProgress = timeSinceNova / SUPERNOVA_DURATION;
    }
    if (supernovaProgress >= 0) {
      // Supernova phases: expand -> peak -> fade back
      let brightness, sizeMul, r, g, b;

      if (supernovaProgress < 0.3) {
        // Expanding & brightening
        const t = supernovaProgress / 0.3;
        brightness = t;
        sizeMul = 1 + t * 4;
        // White to deep blue
        r = Math.round(200 - t * 160);
        g = Math.round(210 - t * 130);
        b = 255;
      } else if (supernovaProgress < 0.5) {
        // Peak — bright blue supernova
        brightness = 1;
        sizeMul = 5 + Math.sin((supernovaProgress - 0.3) / 0.2 * Math.PI) * 1.5;
        r = 40;
        g = 80;
        b = 255;
      } else {
        // Fading back to normal
        const t = (supernovaProgress - 0.5) / 0.5;
        brightness = 1 - t;
        sizeMul = 5 - t * 4;
        r = Math.round(40 + t * 160);
        g = Math.round(80 + t * 130);
        b = 255;
      }

      // Glow halo
      const glowRadius = star.radius * sizeMul * 3;
      const gradient = ctx.createRadialGradient(
        star.x, star.y, 0,
        star.x, star.y, glowRadius
      );
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.5 * brightness})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.beginPath();
      ctx.arc(star.x, star.y, glowRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius * sizeMul, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${Math.min(255, r + 80)}, ${Math.min(255, g + 80)}, 255, ${brightness})`;
      ctx.fill();
    } else if (timeSinceNova < 0) {
      // Normal star — only draw if supernova hasn't happened yet this cycle
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(240, 230, 210, ${star.alpha * twinkle})`;
      ctx.fill();
    }
    // If timeSinceNova >= SUPERNOVA_DURATION, star is gone — don't draw
  }
  requestAnimationFrame(drawStars);
}

resizeCanvas();
createStars();
requestAnimationFrame(drawStars);
window.addEventListener('resize', () => { resizeCanvas(); createStars(); });

// === SCROLL REVEAL ===
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));

// === SMOOTH SCROLL HELPER ===
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// === PLANET ORBITS ===
const orbitRing = document.querySelector('.orbit-ring');
const orbitLines = Array.from(document.querySelectorAll('.orbit-line'));

const orbiters = Array.from(document.querySelectorAll('.planet-orbit')).map(el => {
  const start = parseFloat(el.dataset.start) * Math.PI / 180;
  return {
    el,
    angle: start,
    homeAngle: start,
    radius: parseFloat(el.dataset.radius),
    speed: parseFloat(el.dataset.speed) * Math.PI / 180,
    dir: parseFloat(el.dataset.dir) || 1,
    settling: false
  };
});

// Size each orbit ring to match its planet's radius
function sizeOrbitRings() {
  const size = orbitRing.clientWidth;
  for (const line of orbitLines) {
    const d = parseFloat(line.dataset.radius) * 2 * size;
    line.style.width = `${d}px`;
    line.style.height = `${d}px`;
  }
}
sizeOrbitRings();

// Respect reduced-motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let orbitsOn = !prefersReducedMotion;

const orbitToggle = document.getElementById('orbit-toggle');
orbitToggle.classList.toggle('is-on', orbitsOn);
orbitToggle.setAttribute('aria-pressed', String(orbitsOn));
orbitRing.classList.toggle('orbits-on', orbitsOn);

orbitToggle.addEventListener('click', () => {
  orbitsOn = !orbitsOn;
  orbitToggle.classList.toggle('is-on', orbitsOn);
  orbitToggle.setAttribute('aria-pressed', String(orbitsOn));
  orbitRing.classList.toggle('orbits-on', orbitsOn);
  if (!orbitsOn) {
    // Ease each planet back to its home position
    orbiters.forEach(o => { o.settling = true; });
  }
});

function updateOrbits(now) {
  const dt = Math.min((now - (updateOrbits.last || now)) / 1000, 0.1);
  updateOrbits.last = now;

  const size = orbitRing.clientWidth;

  for (const o of orbiters) {
    if (o.settling) {
      // Ease angle back toward its home angle (shortest path)
      let diff = o.homeAngle - o.angle;
      diff = Math.atan2(Math.sin(diff), Math.cos(diff));
      if (Math.abs(diff) < 0.002) {
        o.angle = o.homeAngle;
        o.settling = false;
      } else {
        o.angle += diff * Math.min(1, dt * 5);
      }
    } else if (orbitsOn) {
      o.angle += o.speed * o.dir * dt;
    }

    const r = o.radius * size;
    o.el.style.transform = `translate(${Math.cos(o.angle) * r}px, ${Math.sin(o.angle) * r}px)`;
  }

  requestAnimationFrame(updateOrbits);
}

requestAnimationFrame(updateOrbits);
window.addEventListener('resize', sizeOrbitRings);

// === PROJECT SLIDER ===
const projectList = document.querySelector('.project-list');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');

function updateSliderButtons() {
  const scrollLeft = projectList.scrollLeft;
  const maxScroll = projectList.scrollWidth - projectList.clientWidth;
  sliderPrev.disabled = scrollLeft < 10;
  sliderNext.disabled = scrollLeft > maxScroll - 10;
}

sliderPrev.addEventListener('click', () => {
  projectList.scrollBy({ left: -projectList.clientWidth, behavior: 'smooth' });
});
sliderNext.addEventListener('click', () => {
  projectList.scrollBy({ left: projectList.clientWidth, behavior: 'smooth' });
});
projectList.addEventListener('scroll', updateSliderButtons, { passive: true });
updateSliderButtons();

// === IMAGE CAROUSELS ===
document.querySelectorAll('.project-carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const images = track.querySelectorAll('img');
  const dots = carousel.querySelectorAll('.carousel-dot');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');
  let current = 0;

  function goTo(index) {
    current = ((index % images.length) + images.length) % images.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
  }

  prevBtn.addEventListener('click', (e) => { e.stopPropagation(); goTo(current - 1); });
  nextBtn.addEventListener('click', (e) => { e.stopPropagation(); goTo(current + 1); });
  dots.forEach((dot, i) => {
    dot.addEventListener('click', (e) => { e.stopPropagation(); goTo(i); });
  });
});

// === LIGHTBOX ===
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-img');
const lightboxClose = lightbox.querySelector('.lightbox-close');
const lightboxPrev = lightbox.querySelector('.lightbox-prev');
const lightboxNext = lightbox.querySelector('.lightbox-next');

let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(images, index) {
  lightboxImages = images;
  lightboxIndex = index;
  lightboxImg.src = lightboxImages[lightboxIndex].src;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  lightboxImages = [];
}

function lightboxGoTo(index) {
  if (lightboxImages.length === 0) return;
  lightboxIndex = ((index % lightboxImages.length) + lightboxImages.length) % lightboxImages.length;
  lightboxImg.src = lightboxImages[lightboxIndex].src;
}

// Click on carousel images to open lightbox
document.querySelectorAll('.project-carousel').forEach(carousel => {
  const images = Array.from(carousel.querySelectorAll('.carousel-track img'));
  images.forEach((img, i) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(images, i);
    });
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); lightboxGoTo(lightboxIndex - 1); });
lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); lightboxGoTo(lightboxIndex + 1); });

// Close on backdrop click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Close on Escape, navigate with arrows
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxGoTo(lightboxIndex - 1);
  if (e.key === 'ArrowRight') lightboxGoTo(lightboxIndex + 1);
});

// === Responsive link according to device ===

document.addEventListener('DOMContentLoaded', function() {
    var project1Link = document.getElementById('bot-box-link');

    if (window.innerWidth <= 768) {
      // Mobile device (768px or less)
      project1Link.href = 'https://youtu.be/hCX26zT2REQ';
    } else {
      // Desktop device
      project1Link.href = 'https://tardiarg.itch.io/bot-box';
    }
  });
