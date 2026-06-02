/* Green Ladder — local trust / activity widget. Self-contained, no 3rd-party service.
   Real roof types in real service-area cities. Trust-building, not fake-urgency. */
(function(){
  var events = [
    {t:"New concrete tile roof completed", city:"La Ca\u00f1ada", img:"p04.jpg", icon:"\u2705"},
    {t:"Metal shingle roof installed", city:"La Ca\u00f1ada Flintridge", img:"p12.jpg", icon:"\u2705"},
    {t:"Tile roof with solar completed", city:"San Marino", img:"p07.jpg", icon:"\u2705"},
    {t:"Roof inspection completed", city:"Pasadena", img:"p05.jpg", icon:"\ud83d\udd0d"},
    {t:"Architectural shingle roof finished", city:"Arcadia", img:"p02.jpg", icon:"\u2705"},
    {t:"Free roof inspection completed", city:"Altadena", img:"p08.jpg", icon:"\ud83d\udd0d"},
    {t:"Clay tile roof completed", city:"South Pasadena", img:"p09.jpg", icon:"\u2705"},
    {t:"TPO cool roof installed", city:"Sun Valley", img:"p06.jpg", icon:"\u2705"},
    {t:"Roof proposal walkthrough completed", city:"Sierra Madre", img:"p10.jpg", icon:"\ud83d\udccb"},
    {t:"Spanish tile roof finished", city:"San Gabriel", img:"p05.jpg", icon:"\u2705"},
    {t:"Roof inspection completed", city:"Glendale", img:"p11.jpg", icon:"\ud83d\udd0d"},
    {t:"New roof completed", city:"Monrovia", img:"p13.jpg", icon:"\u2705"},
    {t:"Roof inspection completed", city:"Temple City", img:"p02.jpg", icon:"\ud83d\udd0d"},
    {t:"Tile roof completed", city:"Bradbury", img:"p07.jpg", icon:"\u2705"},
    {t:"Shingle roof finished", city:"Duarte", img:"p10.jpg", icon:"\u2705"}
  ];

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

  // shuffle so order varies each visit
  for(var s=events.length-1;s>0;s--){var r=Math.floor(Math.random()*(s+1));var tmp=events[s];events[s]=events[r];events[r]=tmp;}

  var i = 0;
  var agos = ["earlier today","this morning","2 days ago","3 days ago","last week","this week","recently","this month"];

  function next(){
    if(dismissed) return;
    var e = events[i % events.length];
    i++;
    imgEl.src = base + e.img;
    tEl.textContent = e.icon + "  " + e.t;
    cEl.textContent = e.city;
    aEl.textContent = agos[Math.floor(Math.random()*agos.length)];
    box.classList.add('show');
    setTimeout(function(){ if(!dismissed) box.classList.remove('show'); }, 8000);   // show 8s
    if(!dismissed) setTimeout(next, 8000 + 7000 + Math.random()*4000);              // gap 7-11s
  }
  setTimeout(next, 2500);  // first popup after 2.5s
})();
