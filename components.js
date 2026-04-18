// ============================================================
// TEAM DRYWALL — Shared Nav & Footer Component
// ============================================================

const FACEBOOK_URL  = 'https://www.facebook.com/Drywall63/';
const INSTAGRAM_URL = '#'; // add when available
const LINKEDIN_URL  = '#';
const YOUTUBE_URL   = '#';

const TOP_BAR = `
<div class="bg-brand-black text-white text-sm py-2">
  <div class="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
    <div class="flex items-center gap-6">
      <a href="tel:2508072700" class="flex items-center gap-2 hover:text-brand-red transition-colors duration-200">
        <svg class="w-4 h-4 text-brand-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
        250-807-2700
      </a>
      <a href="mailto:teamdrywall@shaw.ca" class="hidden sm:flex items-center gap-2 hover:text-brand-red transition-colors duration-200">
        <svg class="w-4 h-4 text-brand-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
        teamdrywall@shaw.ca
      </a>
    </div>
    <div class="flex items-center gap-3">
      <span class="hidden md:inline text-gray-400 text-xs">Serving BC &amp; Alberta</span>
      <a href="${FACEBOOK_URL}" target="_blank" rel="noopener" aria-label="Team Drywall on Facebook" class="hover:text-brand-red transition-colors duration-200"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
      <a href="${INSTAGRAM_URL}" aria-label="Team Drywall on Instagram" class="hover:text-brand-red transition-colors duration-200"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
      <a href="${LINKEDIN_URL}" aria-label="Team Drywall on LinkedIn" class="hover:text-brand-red transition-colors duration-200"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
      <a href="${YOUTUBE_URL}" aria-label="Team Drywall on YouTube" class="hover:text-brand-red transition-colors duration-200"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
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
  const current = file.replace('.html', '') || 'index';

  const isActive = (key) =>
    file === key + '.html' || (key === 'index' && (file === '' || file === 'index.html'));

  const desktopLinks = NAV_LINKS.map(l =>
    `<li><a href="${l.href}" class="nav-link font-display text-sm tracking-wide px-3 py-2 transition-colors duration-200 ${isActive(l.key) ? 'text-brand-red' : 'text-brand-black hover:text-brand-red'}">${l.label}</a></li>`
  ).join('');

  const mobileLinks = NAV_LINKS.map(l =>
    `<li><a href="${l.href}" class="block font-display text-sm tracking-wide py-2 px-3 rounded transition-colors duration-200 ${isActive(l.key) ? 'bg-brand-red/10 text-brand-red' : 'hover:bg-gray-100 hover:text-brand-red'}">${l.label}</a></li>`
  ).join('');

  return `
<nav id="navbar" class="sticky top-0 z-50 bg-white border-b border-gray-100" style="box-shadow:0 2px 12px rgba(0,0,0,0.08)">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex items-center justify-between h-24">
      <a href="index.html" class="flex-shrink-0">
        <img src="brand_assets/logo.png" alt="Team Drywall Ltd. Kelowna BC" class="h-20 w-auto" width="150" height="80" />
      </a>
      <ul class="hidden xl:flex items-center gap-0.5">
        ${desktopLinks}
        <li class="ml-3">
          <a href="quote.html" class="font-display font-600 text-sm tracking-wide px-5 py-2.5 bg-brand-red text-white rounded hover:bg-brand-red-dark active:scale-95 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red" style="box-shadow:0 4px 14px rgba(204,0,0,0.3)">REQUEST A QUOTE</a>
        </li>
      </ul>
      <button id="menu-btn" class="xl:hidden p-2 rounded text-brand-black hover:text-brand-red transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu">
        <svg id="icon-open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        <svg id="icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
  </div>
  <div id="mobile-menu" class="hidden xl:hidden bg-white border-t border-gray-100 px-4 pb-4">
    <ul class="flex flex-col gap-1 pt-2">
      ${mobileLinks}
      <li class="mt-2">
        <a href="quote.html" class="block text-center font-display font-600 text-sm tracking-wide px-5 py-3 bg-brand-red text-white rounded hover:bg-brand-red-dark transition-colors duration-200">REQUEST A QUOTE</a>
      </li>
    </ul>
  </div>
</nav>`;
}

const FOOTER_HTML = `
<footer class="bg-brand-black pt-16 pb-8">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
      <div class="md:col-span-1">
        <a href="index.html"><img src="brand_assets/logo.png" alt="Team Drywall Ltd." class="h-20 w-auto mb-4" width="120" height="80" loading="lazy" /></a>
        <p class="text-gray-400 text-sm leading-relaxed mb-5">Your trusted drywall contractor in Kelowna, BC. Residential and commercial services across BC and Alberta for over 35 years.</p>
        <div class="flex items-center gap-2">
          <a href="${FACEBOOK_URL}" target="_blank" rel="noopener" aria-label="Team Drywall on Facebook" class="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-colors duration-200"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          <a href="${INSTAGRAM_URL}" aria-label="Team Drywall on Instagram" class="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-colors duration-200"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
          <a href="${LINKEDIN_URL}" aria-label="Team Drywall on LinkedIn" class="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-colors duration-200"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
          <a href="${YOUTUBE_URL}" aria-label="Team Drywall on YouTube" class="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-colors duration-200"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
        </div>
      </div>
      <div>
        <h3 class="font-display font-600 text-white mb-5 text-base uppercase tracking-wide">Pages</h3>
        <ul class="space-y-2.5">
          <li><a href="index.html"        class="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">Home</a></li>
          <li><a href="services.html"     class="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">Services</a></li>
          <li><a href="areas.html"        class="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">Service Areas</a></li>
          <li><a href="our-work.html"     class="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">Our Work</a></li>
          <li><a href="testimonials.html" class="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">Testimonials</a></li>
          <li><a href="newsfeed.html"     class="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">Newsfeed</a></li>
          <li><a href="quote.html"        class="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">Request a Quote</a></li>
          <li><a href="contact.html"      class="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-display font-600 text-white mb-5 text-base uppercase tracking-wide">Service Areas</h3>
        <ul class="space-y-2.5">
          <li><a href="areas.html#kelowna"      class="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">Kelowna</a></li>
          <li><a href="areas.html#west-kelowna" class="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">West Kelowna</a></li>
          <li><a href="areas.html#lake-country" class="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">Lake Country</a></li>
          <li><a href="areas.html#vernon"       class="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">Vernon</a></li>
          <li><a href="areas.html#penticton"    class="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">Penticton</a></li>
          <li><a href="areas.html#alberta"      class="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">Alberta</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-display font-600 text-white mb-5 text-base uppercase tracking-wide">Contact</h3>
        <ul class="space-y-4">
          <li class="flex items-start gap-3">
            <svg class="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
            <address class="not-italic text-gray-400 text-sm">170 Eugene Rd<br>Kelowna, BC V1X 2L9</address>
          </li>
          <li class="flex items-center gap-3"><svg class="w-4 h-4 text-brand-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg><a href="tel:2508072700" class="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">250-807-2700</a></li>
          <li class="flex items-center gap-3"><svg class="w-4 h-4 text-brand-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg><a href="mailto:teamdrywall@shaw.ca" class="text-gray-400 text-sm hover:text-brand-red transition-colors duration-200">teamdrywall@shaw.ca</a></li>
          <li class="flex items-center gap-3"><svg class="w-4 h-4 text-brand-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/></svg><span class="text-gray-400 text-sm">Cheque &amp; e-Transfer</span></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p class="text-gray-500 text-xs">&copy; 2026 Team Drywall Ltd. All rights reserved. Kelowna, BC.</p>
      <p class="text-gray-500 text-xs">Serving BC &amp; Alberta for over 35 years</p>
    </div>
  </div>
</footer>`;

// ── Floating widgets ──────────────────────────────────────────────────────────
const FLOATING_WIDGETS = `
<!-- Floating Call Button (mobile) -->
<a href="tel:2508072700" id="float-call"
   class="fixed bottom-5 right-5 z-50 xl:hidden flex items-center gap-2 bg-brand-red text-white font-display font-600 text-sm px-4 py-3 rounded-full shadow-lg hover:bg-brand-red-dark active:scale-95 transition-all duration-200"
   aria-label="Call Team Drywall"
   style="box-shadow:0 4px 20px rgba(204,0,0,0.5)">
  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
  CALL NOW
</a>

<!-- Emergency Repair Badge (desktop) -->
<a href="tel:2508072700" id="emergency-badge"
   class="fixed bottom-5 right-5 z-50 hidden xl:flex flex-col items-center bg-brand-red text-white rounded-2xl px-4 py-3 cursor-pointer hover:bg-brand-red-dark active:scale-95 transition-all duration-200 text-center"
   aria-label="Emergency drywall repair"
   style="box-shadow:0 4px 20px rgba(204,0,0,0.45);max-width:120px">
  <svg class="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
  <span class="font-display text-xs font-600 leading-tight">EMERGENCY<br>REPAIR</span>
  <span class="font-body text-xs mt-1 opacity-90">250-807-2700</span>
</a>

<!-- Back to Top -->
<button id="back-to-top"
  class="fixed bottom-20 right-5 xl:bottom-5 xl:right-36 z-50 w-10 h-10 bg-brand-black/80 hover:bg-brand-black text-white rounded-full flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
  aria-label="Back to top"
  style="box-shadow:0 2px 12px rgba(0,0,0,0.3)">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
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

function initNavScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 10 ? '0 4px 24px rgba(0,0,0,0.12)' : '0 2px 12px rgba(0,0,0,0.08)';
  }, { passive: true });
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
  initNavScroll();
  initBackToTop();
});
