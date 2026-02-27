
(function(){
  var nav = document.getElementById('navbar');
  window.addEventListener('scroll', function(){ nav.classList.toggle('scrolled', window.scrollY > 60); }, {passive:true});

  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var t = document.querySelector(this.getAttribute('href'));
      if(t){ e.preventDefault(); window.scrollTo({top: t.offsetTop - 80, behavior:'smooth'}); }
    });
  });

  if('IntersectionObserver' in window){
    var items = document.querySelectorAll('.reveal');
    items.forEach(function(el){ el.classList.add('hidden'); });
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.remove('hidden'); e.target.classList.add('visible'); } });
    }, {threshold:0.08});
    items.forEach(function(el){ obs.observe(el); });
  }

  document.getElementById('yr').textContent = new Date().getFullYear();

  document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    var btn = document.getElementById('submitBtn');
    btn.textContent = 'Sending...'; btn.disabled = true;
    setTimeout(function(){ btn.textContent = 'Message Sent ✓'; btn.style.background = '#1a6b3a'; btn.disabled = false; }, 1400);
  });

  var activeModal = null, prevFocus = null;
  window.openModal = function(id){
    prevFocus = document.activeElement;
    activeModal = document.getElementById('modal-' + id);
    if(!activeModal) return;
    activeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(function(){ var b = activeModal.querySelector('.modal-close'); if(b) b.focus(); }, 100);
  };
  window.closeModal = function(id){
    var m = document.getElementById('modal-' + id);
    if(!m) return;
    m.classList.remove('acti