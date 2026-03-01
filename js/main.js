
(function(){
  /* ── Navbar scroll ── */
  var nav = document.getElementById('navbar');
  window.addEventListener('scroll', function(){
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, {passive: true});

  /* ── Smooth scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });

  /* ── Scroll-reveal ── */
  if('IntersectionObserver' in window){
    var items = document.querySelectorAll('.reveal');
    items.forEach(function(el){ el.classList.add('hidden'); });
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          e.target.classList.remove('hidden');
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.08 });
    items.forEach(function(el){ obs.observe(el); });
  }

  /* ── Year ── */
  document.getElementById('yr').textContent = new Date().getFullYear();

  /* ── Contact form ── */
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var btn = document.getElementById('submitBtn');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(function(){
        btn.textContent = 'Message Sent ✓';
        btn.style.background = '#1a6b3a';
        btn.disabled = false;
      }, 1400);
    });
  }

  /* ── Mobile menu ── */
  var menuBtn = document.getElementById('menuBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  if(menuBtn && mobileMenu){
    menuBtn.addEventListener('click', function(){
      var open = mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    mobileMenu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        mobileMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Escape closes mobile menu ── */
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')){
      mobileMenu.classList.remove('open');
      if(menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

})();
