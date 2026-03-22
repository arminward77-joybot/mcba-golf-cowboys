// Minimal JS: mobile menu + smooth scroll helpers
(function(){
  const btn = document.querySelector('[data-menu]');
  const panel = document.querySelector('[data-panel]');
  if(btn && panel){
    btn.addEventListener('click', () => {
      const open = panel.getAttribute('data-open') === 'true';
      panel.setAttribute('data-open', String(!open));
      panel.style.display = open ? 'none' : 'block';
    });
  }
})();
