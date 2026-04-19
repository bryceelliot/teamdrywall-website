// ============================================================
// TEAM DRYWALL — Shared Nav & Footer (Ferrari-inspired design)
// ============================================================

const FACEBOOK_URL  = 'https://www.facebook.com/Drywall63/';
const GOOGLE_REVIEWS_URL = 'https://share.google/GK4WMdISLPrFr89ub';

const TOP_BAR = `
<div class="bg-black text-white border-b border-white/5" style="font-size:12px">
  <div class="max-w-[1400px] mx-auto px-6 flex flex-wrap items-center justify-between gap-2 h-9">
    <div class="flex items-center gap-6">
      <a href="tel:2508072700" class="flex items-center gap-2 tracking-[0.08em] uppercase hover:text-[#DA291C] transition-colors duration-200">
        <span class="inline-block w-1 h-1 bg-[#DA291C]"></span>
        250 · 807 · 2700
      </a>
      <a href="mailto:teamdrywall@shaw.ca" class="hidden sm:flex items-center gap-2 tracking-[0.08em] uppercase text-white/60 hover:text-white transition-colors duration-200">
        teamdrywall@shaw.ca
      </a>
    </div>
    <div class="flex items-center gap-5 text-white/60">
      <span class="hidden md:inline tracking-[0.12em] uppercase text-[11px]">Kelowna · BC · Alberta</span>
      <a href="${FACEBOOK_URL}" target="_blank" rel="noopener" aria-label="Team Drywall on Facebook" class="hover:text-white transition-colors duration-200"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
      <a href="${GOOGLE_REVIEWS_URL}" target="_blank" rel="noopener" aria-label="Team Drywall on Google" class="hover:text-white transition-colors duration-200"><svg class="w-3.5 h-3.5" viewBox="0 0 48 48"><path fill="currentColor" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/></svg></a>
    </div>
  </div>
</div>`;

const NAV_LINKS = [
  { label: 'HOME',          href: 'index.html',   key: 'index' },
  { label: 'SERVICES',      href: 'services.html', key: 'services' },
  { label: 'SERVICE AREAS', href: 'areas.html',    key: 'areas' },
  { label: 'OUR WORK',      href: 'our-work.html', key: 'our-work' },
  { label: 'TESTIMONIALS',  href: 'testimonials.html', key: 'testimonials' },
  { label: 'NEWSFEED',      href: 'newsfeed.html', key: 'newsfeed' },
  { label: 'CONTACT',       href: 'contact.html',  key: 'contact' },
];

function buildNav() {
  const path = window.location.pathname;
  const file = path.split('/').pop() || 'index.html';

  const isActive = (key) =>
    file === key + '.html' || (key === 'index' && (file === '' || file === 'index.html'));

  const desktopLinks = NAV_LINKS.map(l =>
    `<li><a href="${l.href}" class="f-nav-link relative text-[13px] tracking-[0.13em] uppercase font-semibold px-3.5 py-2 transition-colors duration-200 ${isActive(l.key) ? 'text-white' : 'text-white/70 hover:text-white'}">${l.label}${isActive(l.key) ? '<span class="absolute left-3.5 right-3.5 bottom-0 h-px bg-[#DA291C]"></span>' : ''}</a></li>`
  ).join('');

  const mobileLinks = NAV_LINKS.map(l =>
    `<li><a href="${l.href}" class="block text-sm tracking-[0.13em] uppercase font-semibold py-3 px-4 border-l-2 transition-colors duration-200 ${isActive(l.key) ? 'border-[#DA291C] text-white bg-white/5' : 'border-transparent text-white/70 hover:text-white hover:border-white/30'}">${l.label}</a></li>`
  ).join('');

  return `
<nav id="navbar" class="sticky top-0 z-50 bg-black border-b border-white/5 backdrop-blur-sm">
  <div class="max-w-[1400px] mx-auto px-6">
    <div class="flex items-center justify-between h-20">
      <a href="index.html" class="flex-shrink-0 flex items-center gap-3 group">
        <img src="brand_assets/logo.png" alt="Team Drywall Ltd." class="h-12 w-auto " width="120" height="48" />
      </a>
      <ul class="hidden xl:flex items-center gap-0.5">
        ${desktopLinks}
        <li class="ml-4 pl-4 border-l border-white/10">
          <a href="quote.html" class="inline-flex items-center gap-2 text-[13px] tracking-[0.13em] uppercase font-semibold px-5 py-3 bg-[#DA291C] text-white hover:bg-[#B01E0A] transition-colors duration-200" style="border-radius:2px">
            Request Quote
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </li>
      </ul>
      <button id="menu-btn" class="xl:hidden p-2 text-white hover:text-[#DA291C] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#DA291C]" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu">
        <svg id="icon-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg id="icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
  </div>
  <div id="mobile-menu" class="hidden xl:hidden bg-black border-t border-white/5 px-4 py-4">
    <ul class="flex flex-col">
      ${mobileLinks}
      <li class="mt-4">
        <a href="quote.html" class="flex items-center justify-center gap-2 text-sm tracking-[0.13em] uppercase font-semibold px-5 py-4 bg-[#DA291C] text-white hover:bg-[#B01E0A] transition-colors duration-200" style="border-radius:2px">
          Request Quote
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </li>
    </ul>
  </div>
</nav>`;
}

const FOOTER_HTML = `
<footer class="bg-[#181818] border-t border-white/5">
  <div class="max-w-[1400px] mx-auto px-6 pt-20 pb-8">
    <!-- Top row: brand + columns -->
    <div class="grid lg:grid-cols-12 gap-12 mb-16">
      <!-- Brand block -->
      <div class="lg:col-span-4">
        <a href="index.html" class="inline-block mb-6">
          <img src="brand_assets/logo.png" alt="Team Drywall Ltd." class="h-14 w-auto " width="140" height="56" loading="lazy" />
        </a>
        <p class="text-white/70 text-sm leading-[1.75] mb-8 max-w-xs">Kelowna-based drywall craftsmanship since 1990. Residential and commercial work across British Columbia and Alberta.</p>
        <div class="inline-flex items-center gap-2 pb-2 border-b border-white/10">
          <span class="text-[11px] tracking-[0.18em] uppercase text-white/70">Follow</span>
          <a href="${FACEBOOK_URL}" target="_blank" rel="noopener" aria-label="Team Drywall on Facebook" class="ml-2 w-7 h-7 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          <a href="${GOOGLE_REVIEWS_URL}" target="_blank" rel="noopener" aria-label="Team Drywall on Google" class="w-7 h-7 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200"><svg class="w-3.5 h-3.5" viewBox="0 0 48 48"><path fill="currentColor" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/></svg></a>
        </div>
      </div>
      <!-- Columns -->
      <div class="lg:col-span-2">
        <h3 class="text-[11px] tracking-[0.2em] uppercase text-white/70 mb-5">Navigate</h3>
        <ul class="space-y-3">
          <li><a href="index.html"        class="text-white/80 text-sm hover:text-[#DA291C] transition-colors duration-200">Home</a></li>
          <li><a href="services.html"     class="text-white/80 text-sm hover:text-[#DA291C] transition-colors duration-200">Services</a></li>
          <li><a href="areas.html"        class="text-white/80 text-sm hover:text-[#DA291C] transition-colors duration-200">Service Areas</a></li>
          <li><a href="our-work.html"     class="text-white/80 text-sm hover:text-[#DA291C] transition-colors duration-200">Our Work</a></li>
          <li><a href="testimonials.html" class="text-white/80 text-sm hover:text-[#DA291C] transition-colors duration-200">Testimonials</a></li>
          <li><a href="newsfeed.html"     class="text-white/80 text-sm hover:text-[#DA291C] transition-colors duration-200">Newsfeed</a></li>
        </ul>
      </div>
      <div class="lg:col-span-3">
        <h3 class="text-[11px] tracking-[0.2em] uppercase text-white/70 mb-5">Territory</h3>
        <ul class="space-y-3">
          <li><a href="areas.html#kelowna"      class="text-white/80 text-sm hover:text-[#DA291C] transition-colors duration-200">Kelowna</a></li>
          <li><a href="areas.html#west-kelowna" class="text-white/80 text-sm hover:text-[#DA291C] transition-colors duration-200">West Kelowna</a></li>
          <li><a href="areas.html#lake-country" class="text-white/80 text-sm hover:text-[#DA291C] transition-colors duration-200">Lake Country</a></li>
          <li><a href="areas.html#vernon"       class="text-white/80 text-sm hover:text-[#DA291C] transition-colors duration-200">Vernon</a></li>
          <li><a href="areas.html#penticton"    class="text-white/80 text-sm hover:text-[#DA291C] transition-colors duration-200">Penticton &amp; South Okanagan</a></li>
          <li><a href="areas.html#alberta"      class="text-white/80 text-sm hover:text-[#DA291C] transition-colors duration-200">Alberta</a></li>
        </ul>
      </div>
      <div class="lg:col-span-3">
        <h3 class="text-[11px] tracking-[0.2em] uppercase text-white/70 mb-5">Contact</h3>
        <ul class="space-y-4 text-sm">
          <li>
            <div class="text-[10px] tracking-[0.18em] uppercase text-white/70 mb-1">Phone</div>
            <a href="tel:2508072700" class="text-white hover:text-[#DA291C] transition-colors duration-200 text-base font-medium">250 · 807 · 2700</a>
          </li>
          <li>
            <div class="text-[10px] tracking-[0.18em] uppercase text-white/70 mb-1">Email</div>
            <a href="mailto:teamdrywall@shaw.ca" class="text-white/80 hover:text-[#DA291C] transition-colors duration-200">teamdrywall@shaw.ca</a>
          </li>
          <li>
            <div class="text-[10px] tracking-[0.18em] uppercase text-white/70 mb-1">Workshop</div>
            <address class="not-italic text-white/80 leading-relaxed">170 Eugene Rd<br>Kelowna · BC · V1X 2L9</address>
          </li>
        </ul>
      </div>
    </div>
    <!-- Bottom bar -->
    <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <span class="text-[10px] tracking-[0.2em] uppercase text-white/65">&copy; 2026 Team Drywall Ltd.</span>
        <span class="hidden sm:inline text-white/20">·</span>
        <span class="hidden sm:inline text-[10px] tracking-[0.2em] uppercase text-white/65">All Rights Reserved</span>
      </div>
      <div class="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/65">
        <span class="inline-block w-1 h-1 bg-[#DA291C]"></span>
        Drywall Craftsmanship Since 1990
      </div>
    </div>
  </div>
</footer>`;

// ── Floating widgets ──────────────────────────────────────────────────────────
const FLOATING_WIDGETS = `
<a href="tel:2508072700" id="float-call"
   class="fixed bottom-5 right-5 z-50 xl:hidden inline-flex items-center gap-2 bg-[#DA291C] text-white text-sm tracking-[0.1em] uppercase font-semibold px-5 py-3.5 hover:bg-[#B01E0A] active:scale-95 transition-all duration-200"
   aria-label="Call Team Drywall"
   style="border-radius:2px;box-shadow:0 8px 32px rgba(218,41,28,0.45)">
  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
  Call Now
</a>

<a href="tel:2508072700" id="emergency-badge"
   class="fixed bottom-6 right-6 z-50 hidden xl:flex items-center gap-3 bg-black text-white border border-white/10 px-5 py-4 cursor-pointer hover:border-[#DA291C]/50 transition-all duration-200"
   aria-label="Emergency drywall repair"
   style="border-radius:2px;box-shadow:0 12px 40px rgba(0,0,0,0.5)">
  <span class="inline-block w-2 h-2 bg-[#DA291C]" style="animation:pulse 2s infinite"></span>
  <div class="pr-1">
    <div class="text-[10px] tracking-[0.2em] uppercase text-white/70 mb-0.5">Emergency Repair</div>
    <div class="text-sm font-semibold tracking-[0.08em]">250 · 807 · 2700</div>
  </div>
</a>

<button id="back-to-top"
  class="fixed bottom-5 right-5 xl:bottom-6 xl:right-[280px] z-50 w-10 h-10 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300 backdrop-blur focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#DA291C]"
  aria-label="Back to top"
  style="border-radius:2px">
  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
</button>`;

// ── Init ──────────────────────────────────────────────────────────────────────
function initMobileMenu() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden', isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
    iconOpen.classList.toggle('hidden', !isOpen);
    iconClose.classList.toggle('hidden', isOpen);
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
  }));
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    const show = window.scrollY > 400;
    btn.style.opacity = show ? '1' : '0';
    btn.style.pointerEvents = show ? 'auto' : 'none';
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function injectFavicon() {
  if (document.querySelector('link[rel="icon"]')) return;
  const link = document.createElement('link');
  link.rel = 'icon'; link.type = 'image/png'; link.href = 'brand_assets/logo.png';
  document.head.appendChild(link);
}

document.addEventListener('DOMContentLoaded', () => {
  injectFavicon();
  const topEl    = document.getElementById('site-topbar');
  const navEl    = document.getElementById('site-nav');
  const footerEl = document.getElementById('site-footer');
  const widgetEl = document.getElementById('site-widgets');
  if (topEl)    topEl.innerHTML    = TOP_BAR;
  if (navEl)    navEl.innerHTML    = buildNav();
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;
  if (widgetEl) widgetEl.innerHTML = FLOATING_WIDGETS;
  initMobileMenu();
  initBackToTop();
});
