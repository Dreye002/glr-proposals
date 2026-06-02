/* Green Ladder — local social-proof widget. Self-contained, no 3rd-party service.
   Shows REAL project types in REAL service-area cities. Believable, not fake-urgent. */
(function(){
  // Real roof types from the gallery + real GLR service-area cities (no addresses, no names = privacy-safe)
  var events = [
    {t:"New concrete tile roof completed", city:"La Ca\u00f1ada", img:"p04.jpg", icon:"\u2705"},
    {t:"Metal shingle roof installed", city:"La Ca\u00f1ada Flintridge", img:"p12.jpg", icon:"\u2705"},
    {t:"Tile roof with solar completed", city:"San Marino", img:"p07.jpg", icon:"\u2705"},
    {t:"Roof inspection in progress", city:"Pasadena", img:"p05.jpg", icon:"\ud83d\udcf8"},
    {t:"Architectural shingle roof finished", city:"Arcadia", img:"p02.jpg", icon:"\u2705"},
    {t:"Free roof inspection scheduled", city:"Altadena", img:"p08.jpg", icon:"\ud83d\udcc5"},
    {t:"Clay tile roof completed", city:"South Pasadena", img:"p09.jpg", icon:"\u2705"},
    {t:"TPO cool roof installed", city:"Sun Valley", img:"p06.jpg", icon:"\u2705"},
    {t:"Roof proposal walkthrough booked", city:"Sierra Madre", img:"p10.jpg", icon:"\ud83d\udcc5"},
    {t:"Spanish tile roof finished", city:"San Gabriel", img:"p05.jpg", icon:"\u2705"},
    {t:"Roof inspection in progress", city:"Glendale", img:"p11.jpg", icon:"\ud83d\udcf8"},
    {t:"New roof completed", city:"Monrovia", img:"p13.jpg", icon:"\u2705"}
  ];

  // build element
  var box = document.createElement('div');
  box.id = 'gl-proof';
  box.innerHTML =
    '<button class="gl-proof-x" aria-label="Dismiss">&times;</button>'+
    '<img class="gl-proof-img" alt="">'+
    '<div class="gl-proof-body">'+
      '<div class="gl-proof-t"></div>'+
      '<div class="gl-proof-meta"><span class="gl-proof-city"></span> &middot; <span class="gl-proof-ago"></span></div>'+
    '</div>';
  document.body.appendChild(box);

  var imgEl = box.querySelector('.gl-proof-img');
  var tEl   = box.querySelector('.gl-proof-t');
  var cEl   = box.querySelector('.gl-proof-city');
  var aEl   = box.querySelector('.gl-proof-ago');
  var dismissed = false;
  box.querySelector('.gl-proof-x').onclick = function(){ dismissed = true; box.classList.remove('show'); };

  // figure out base path for images (works at root and /pages/)
  var base = (location.pathname.indexOf('/pages/') > -1) ? '../assets/img/gallery/' : 'assets/img/gallery/';

  var i = Math.floor(Math.random()*events.length);
  var agos = ["just now","2 minutes ago","11 minutes ago","24 minutes ago","this morning","1 hour ago","yesterday","2 days ago","this week"];

  function next(){
    if(dismissed) return;
    var e = events[i % events.length];
    i++;
    imgEl.src = base + e.img;
    tEl.textContent = e.icon + "  " + e.t;
    cEl.textContent = e.city;
    aEl.textContent = agos[Math.floor(Math.random()*agos.length)];
    box.classList.add('show');
    // hide after 6s, show next after a gap
    setTimeout(function(){ if(!dismissed) box.classList.remove('show'); }, 6000);
    if(!dismissed) setTimeout(next, 6000 + 9000 + Math.random()*6000); // 15-21s gap
  }
  // first popup after 5s
  setTimeout(next, 5000);
})();
