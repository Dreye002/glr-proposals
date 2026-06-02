/* Green Ladder — local activity / trust widget. Self-contained, no 3rd-party service.
   Mix of real business activity types across real service-area cities. Builds "busy + trusted" feel. */
(function(){
  // event types with matching icon (mix of install/inspection/estimate/warranty/permit/review/social)
  var types = [
    {t:"New roof install completed",      icon:"\u2705"},
    {t:"Roof install in progress",        icon:"\ud83d\udd28"},
    {t:"Roof inspection started",         icon:"\ud83d\udd0d"},
    {t:"Roof inspection in progress",     icon:"\ud83d\udd0d"},
    {t:"Roof inspection completed",       icon:"\u2705"},
    {t:"Estimate started",                icon:"\ud83d\udcdd"},
    {t:"Estimate in progress",            icon:"\ud83d\udcdd"},
    {t:"Estimate completed",              icon:"\u2705"},
    {t:"Warranty registered",             icon:"\ud83d\udee1\ufe0f"},
    {t:"Warranty paperwork in progress",  icon:"\ud83d\udee1\ufe0f"},
    {t:"Permit approved",                 icon:"\ud83d\udcc4"},
    {t:"Permit application in progress",  icon:"\ud83d\udcc4"},
    {t:"Proposal walkthrough booked",     icon:"\ud83d\udcc5"},
    {t:"New 5-star review received",      icon:"\u2b50"},
    {t:"New project posted on Instagram", icon:"\ud83d\udcf8"}
  ];

  // real service-area cities
  var cities = ["La Ca\u00f1ada","La Ca\u00f1ada Flintridge","San Marino","Pasadena","Arcadia",
    "Altadena","South Pasadena","Sun Valley","Sierra Madre","San Gabriel","Glendale","Monrovia",
    "Temple City","Bradbury","Duarte","Burbank","La Crescenta","Eagle Rock"];

  // gallery thumbnails to rotate
  var imgs = ["p04.jpg","p12.jpg","p07.jpg","p05.jpg","p02.jpg","p08.jpg","p09.jpg","p06.jpg","p10.jpg","p11.jpg","p13.jpg"];

  var agos = ["just now","2 minutes ago","8 minutes ago","23 minutes ago","earlier today",
    "this morning","1 hour ago","3 hours ago","yesterday","2 days ago","this week"];

  // build a shuffled queue of combined events
  function pick(a){return a[Math.floor(Math.random()*a.length)];}
  function buildQueue(){
    var q=[];
    for(var n=0;n<40;n++){
      var ty=pick(types);
      q.push({t:ty.t, icon:ty.icon, city:pick(cities), img:pick(imgs), ago:pick(agos)});
    }
    return q;
  }
  var queue = buildQueue();

  var box = document.createElement('div');
  box.id = 'gl-proof';
  box.innerHTML =
    '<button class="gl-proof-x" aria-label="Dismiss">&times;</button>'+
    '<img class="gl-proof-img" alt="">'+
    '<div class="gl-proof-body">'+
      '<div class="gl-proof-t"></div>'+
      '<div class="gl-proof-meta"><span class="gl-proof-city"></span> &middot; <span class="gl-proof-ago"></span></div>'+
      '<div class="gl-proof-trust">Trusted by hundreds of San Gabriel Valley homeowners</div>'+
    '</div>';
  document.body.appendChild(box);

  var imgEl = box.querySelector('.gl-proof-img');
  var tEl   = box.querySelector('.gl-proof-t');
  var cEl   = box.querySelector('.gl-proof-city');
  var aEl   = box.querySelector('.gl-proof-ago');
  var dismissed = false;
  box.querySelector('.gl-proof-x').onclick = function(){ dismissed = true; box.classList.remove('show'); };

  var base = (location.pathname.indexOf('/pages/') > -1) ? '../assets/img/gallery/' : 'assets/img/gallery/';
  var i = 0;

  function next(){
    if(dismissed) return;
    if(i >= queue.length){ queue = buildQueue(); i = 0; }   // refill so it never stops
    var e = queue[i]; i++;
    imgEl.src = base + e.img;
    tEl.textContent = e.icon + "  " + e.t;
    cEl.textContent = e.city;
    aEl.textContent = e.ago;
    box.classList.add('show');
    setTimeout(function(){ if(!dismissed) box.classList.remove('show'); }, 7000);    // show 7s
    if(!dismissed) setTimeout(next, 7000 + 5000 + Math.random()*4000);               // gap 5-9s
  }
  setTimeout(next, 2500);  // first popup after 2.5s
})();
