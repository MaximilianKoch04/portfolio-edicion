'use strict';
const email = 'maxikoch40@gmail.com';
document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try { await navigator.clipboard.writeText(email); status.textContent = 'Email copiado.'; }
  catch { status.textContent = `Copiá este email: ${email}`; }
});
const players = [...document.querySelectorAll('.work-card video')];
players.forEach(player => {
  player.addEventListener('play', () => {
    players.forEach(other => { if (other !== player) other.pause(); });
  });
  player.addEventListener('error', () => {
    player.closest('.work-card').querySelector('.video-error').hidden = false;
  });
});
const links = [...document.querySelectorAll('nav a')];
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting);
  if (!visible.length) return;
  links.forEach(link => {
    if (link.hash === `#${visible[0].target.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}, { rootMargin: '-15% 0px -55% 0px' });
document.querySelectorAll('main section').forEach(section => observer.observe(section));
