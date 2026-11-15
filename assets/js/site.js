/* Abraham Immobilien – kleines Skript ohne Abhängigkeiten. */
(function () {
  'use strict';

  /* Welt für die gemeinsamen Seiten (Über uns, Kontakt, Rechtliches) merken */
  var root = document.documentElement;
  try {
    if (root.dataset.worldFixed) sessionStorage.setItem('abr_world', root.dataset.world);
  } catch (e) {}

  /* Kopfzeile über dem Foto: beim Scrollen mit Hintergrund */
  var over = document.querySelector('[data-over]');
  if (over) {
    var stick = function () { over.classList.toggle('is-stuck', window.scrollY > 40); };
    window.addEventListener('scroll', stick, { passive: true });
    stick();
  }

  /* Mobiles Menü */
  document.querySelectorAll('[data-burger]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.querySelectorAll('.nav').forEach(function (nav) { nav.classList.toggle('is-open', open); });
    });
  });
  document.querySelectorAll('.nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.querySelectorAll('.nav.is-open').forEach(function (n) { n.classList.remove('is-open'); });
    });
  });

  /* Jahr in der Fußzeile */
  document.querySelectorAll('[data-year]').forEach(function (e) { e.textContent = new Date().getFullYear(); });

  /* Objektart aus dem Link übernehmen (?art=haus) */
  var params = new URLSearchParams(location.search);
  var art = params.get('art');
  if (art) {
    document.querySelectorAll('select[name="objektart"], select[name="art"]').forEach(function (s) {
      Array.prototype.forEach.call(s.options, function (o) { if (o.value === art) s.value = art; });
    });
  }

  /* Kampagnen-Angaben (UTM) in versteckte Felder */
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(function (k) {
    var v = params.get(k);
    if (v) document.querySelectorAll('input[name="' + k + '"]').forEach(function (i) { i.value = v.slice(0, 200); });
  });
  document.querySelectorAll('input[name="referrer"]').forEach(function (i) {
    try { if (document.referrer) i.value = new URL(document.referrer).hostname; } catch (e) {}
  });

  /* Formulare: Versand an Netlify, danach Danke-Seite. Ohne JS greift der normale Versand. */
  document.querySelectorAll('form[data-netlify]').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var err = form.querySelector('.form-err');
      var target = form.getAttribute('action') || '/danke.html';
      if (err) err.hidden = true;
      if (btn) btn.disabled = true;
      fetch(target, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      }).then(function (r) {
        if (!r.ok) throw new Error('send');
        location.href = target;
      }).catch(function () {
        if (btn) btn.disabled = false;
        if (err) err.hidden = false;
      });
    });
  });


  /* Google-Karte erst nach Klick laden (Datenschutz) */
  document.querySelectorAll('[data-map]').forEach(function (box) {
    var btn = box.querySelector('[data-map-load]');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = box.getAttribute('data-map');
      f.title = 'Karte: Abraham Immobilien, Kurfürstendamm 15, Berlin';
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.allowFullscreen = true;
      box.innerHTML = '';
      box.appendChild(f);
    });
  });

  /* Rechner für Anlageimmobilien (Off-Market): Jahresnettokaltmiete x Faktor, Grundstück: Bodenrichtwert x Fläche.
     TODO Kunde: Faktoren regelmäßig mit dem Markt abgleichen. */
  var anlage = document.querySelector('[data-anlage]');
  if (anlage) {
    var A = {
      lage: { mitte: [24, 29], cw: [24, 29], fk: [24, 29], pankow: [23, 28], sz: [22, 27], ts: [21, 26], neukoelln: [20, 25],
        tk: [20, 25], licht: [18, 23], rd: [18, 23], spandau: [17, 22], mh: [16, 21], umland: [15, 20] },
      typ: { mfh: 1, wgh: 0.95, gewerbe: 0.78 },
      zustand: { as: 1, at: 0.95, au: 0.9, nk: 0.88, nb: 1.04 },
      niveau: { unter: 1.1, markt: 1, ueber: 0.9 }
    };
    var fe = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 });
    var f1 = new Intl.NumberFormat('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    var g = function (id) { return document.getElementById(id); };
    var qa = function (s) { return anlage.querySelector(s); };
    var typ = 'mfh';
    var rnd = function (n) { return n >= 2000000 ? Math.round(n / 50000) * 50000 : Math.round(n / 10000) * 10000; };
    var calcA = function () {
      var range = qa('[data-a-range]'), warn = qa('[data-a-warn]'), hidden = qa('[data-a-hidden]');
      var kpi = qa('[data-a-kpi]');
      warn.hidden = true;
      if (typ === 'grund') {
        var brw = parseFloat(g('a-brw').value) || 0, gfl = parseFloat(g('a-gfl').value) || 0;
        var bw = brw * gfl;
        kpi.hidden = true;
        if (!bw) { range.textContent = 'Bitte Werte eintragen'; hidden.value = ''; return; }
        range.textContent = fe.format(rnd(bw * 0.9)) + ' bis ' + fe.format(rnd(bw * 1.1)) + ' €';
        hidden.value = ['Grundstück', 'BRW ' + fe.format(brw) + ' €/m²', fe.format(gfl) + ' m²', range.textContent].join(' · ');
        return;
      }
      kpi.hidden = false;
      var miete = parseFloat(g('a-miete').value) || 0, fl = parseFloat(g('a-flaeche').value) || 0;
      var k = (A.typ[typ] || 1) * (A.zustand[g('a-zustand').value] || 1) * (A.niveau[g('a-mietniveau').value] || 1);
      var l = A.lage[g('a-lage').value] || [20, 25];
      var fLow = l[0] * k, fHigh = l[1] * k, jahr = miete * 12;
      if (!jahr) { range.textContent = 'Bitte Miete eintragen'; qa('[data-a-faktor]').textContent = qa('[data-a-rendite]').textContent = qa('[data-a-qm]').textContent = '–'; hidden.value = ''; return; }
      var low = rnd(jahr * fLow), high = rnd(jahr * fHigh);
      range.textContent = fe.format(low) + ' bis ' + fe.format(high) + ' €';
      qa('[data-a-faktor]').textContent = f1.format(fLow) + ' bis ' + f1.format(fHigh);
      qa('[data-a-rendite]').textContent = f1.format(100 / fHigh) + ' bis ' + f1.format(100 / fLow) + ' %';
      qa('[data-a-qm]').textContent = fl ? fe.format(Math.round(low / fl / 10) * 10) + ' bis ' + fe.format(Math.round(high / fl / 10) * 10) + ' €' : '–';
      if (fl) {
        var mqm = miete / fl;
        if (mqm < 4 || mqm > 35) { warn.hidden = false; warn.textContent = 'Die Miete von rund ' + f1.format(mqm) + ' € pro m² und Monat ist ungewöhnlich. Bitte prüfen Sie Miete und Fläche.'; }
      }
      hidden.value = [qa('[data-a-typ="' + typ + '"]').textContent, g('a-lage').selectedOptions[0].text, fe.format(miete) + ' € Miete/Monat', fe.format(fl) + ' m²',
        g('a-zustand').selectedOptions[0].text, 'Mieten ' + g('a-mietniveau').selectedOptions[0].text.toLowerCase(), range.textContent].join(' · ');
    };
    anlage.querySelectorAll('[data-a-typ]').forEach(function (c) {
      c.addEventListener('click', function () {
        typ = c.getAttribute('data-a-typ');
        anlage.querySelectorAll('[data-a-typ]').forEach(function (x) { var on = x === c; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
        qa('[data-a-ertrag]').hidden = typ === 'grund';
        qa('[data-a-grund]').hidden = typ !== 'grund';
        calcA();
      });
    });
    anlage.addEventListener('input', calcA);
    anlage.addEventListener('change', calcA);
    calcA();
  }

  /* Angebote: Filter, Sortierung, Trefferzahl */
  document.querySelectorAll('[data-filter]').forEach(function (box) {
    var list = box.querySelector('[data-f-list]');
    if (!list) return;
    var cards = Array.prototype.slice.call(list.children);
    var chips = box.querySelectorAll('[data-f-art]');
    var q = function (s) { return box.querySelector(s); };
    var sort = q('[data-f-sort]');
    var count = q('[data-f-count]'), label = q('[data-f-label]'), empty = q('[data-f-empty]');
    var resets = box.querySelectorAll('[data-f-reset]');
    var art = 'alle';
    var num = function (el, k) { return parseFloat(el.getAttribute('data-' + k)) || 0; };
    var setArt = function (a) {
      art = a;
      chips.forEach(function (c) { var on = c.getAttribute('data-f-art') === a; c.classList.toggle('is-on', on); c.setAttribute('aria-pressed', on ? 'true' : 'false'); });
    };
    var apply = function () {
      var n = 0;
      cards.forEach(function (c) {
        var ok = art === 'alle' || c.getAttribute('data-art') === art;
        c.classList.toggle('is-hidden', !ok);
        if (ok) n++;
      });
      if (sort) {
        var key = { neu: ['neu', -1], 'preis-auf': ['preis', 1], 'preis-ab': ['preis', -1], 'fl-ab': ['fl', -1] }[sort.value] || ['neu', -1];
        cards.slice().sort(function (a, b) { return (num(a, key[0]) - num(b, key[0])) * key[1]; }).forEach(function (c) { list.appendChild(c); });
      }
      if (count) count.textContent = n;
      if (label) label.textContent = n === 1 ? (label.getAttribute('data-one') || 'Angebot') : (label.getAttribute('data-many') || 'Angebote');
      if (empty) empty.hidden = n > 0;
      list.hidden = n === 0;
      var active = art !== 'alle';
      resets.forEach(function (r) { if (!r.closest('[data-f-empty]')) r.hidden = !active; });
    };
    chips.forEach(function (c) { c.addEventListener('click', function () { setArt(c.getAttribute('data-f-art')); apply(); }); });
    if (sort) sort.addEventListener('change', apply);
    resets.forEach(function (r) { r.addEventListener('click', function () { setArt('alle'); apply(); }); });
    var start = new URLSearchParams(location.search).get('art');
    if (start && box.querySelector('[data-f-art="' + start + '"]')) setArt(start);
    apply();
  });

  /* Angebots-Karussell: Pfeile und Fortschrittsbalken */
  document.querySelectorAll('[data-car]').forEach(function (car) {
    var track = car.querySelector('[data-car-track]');
    var prev = car.querySelector('[data-car-prev]');
    var next = car.querySelector('[data-car-next]');
    var bar = car.querySelector('[data-car-bar]');
    if (!track) return;
    var step = function () {
      var card = track.querySelector('.listing');
      return card ? card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0) : track.clientWidth;
    };
    var update = function () {
      var max = track.scrollWidth - track.clientWidth;
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max - 2;
      if (bar) {
        var share = track.scrollWidth ? track.clientWidth / track.scrollWidth : 1;
        bar.style.width = (share * 100) + '%';
        bar.style.transform = 'translateX(' + (max > 0 ? (track.scrollLeft / max) * ((1 / share) - 1) * 100 : 0) + '%)';
      }
    };
    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });

  /* Preisrechner: Spanne statt Festpreis. Richtwerte €/m² je Bezirk. */
  var calc = document.querySelector('[data-rechner]');
  if (calc) {
    var base = { mitte: 6000, cw: 5600, fk: 5500, pankow: 5700, sz: 5300, ts: 4800, neukoelln: 4500,
      tk: 4100, licht: 3800, rd: 3800, spandau: 3500, mh: 3200 };
    var kind = { wohnung: 1, haus: 1.05 };
    var cond = { neu: 1.15, saniert: 1.05, gepflegt: 1, reno: 0.82 };
    var rooms = { '1': 1.04, '2': 1.02, '3': 1, '4': 0.99, '5': 0.98 };
    var fmt = new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 });
    var round = function (n) { return Math.round(n / 5000) * 5000; };
    var get = function (id) { return document.getElementById(id); };
    var update = function () {
      var area = Math.max(0, parseFloat(get('rc-flaeche').value) || 0);
      var perM2 = (base[get('rc-lage').value] || 0) * (kind[get('rc-art').value] || 1) *
        (cond[get('rc-zustand').value] || 1) * (rooms[get('rc-zimmer').value] || 1);
      var ok = area >= 15 && perM2 > 0;
      var low = round(perM2 * area * 0.9), high = round(perM2 * area * 1.1);
      get('rc-range').textContent = ok ? fmt.format(low) + ' bis ' + fmt.format(high) + ' €' : 'Bitte Wohnfläche eintragen';
      get('rc-per').textContent = ok ? 'Das entspricht rund ' + fmt.format(Math.round(perM2 * 0.9 / 10) * 10) + ' bis ' + fmt.format(Math.round(perM2 * 1.1 / 10) * 10) + ' € pro m².' : '';
      var hidden = get('rc-hidden');
      if (hidden) hidden.value = ok ? [get('rc-art').value, get('rc-lage').selectedOptions[0].text, area + ' m²', get('rc-zimmer').value + ' Zi.', get('rc-zustand').selectedOptions[0].text, fmt.format(low) + '–' + fmt.format(high) + ' €'].join(' · ') : '';
    };
    calc.addEventListener('input', update);
    calc.addEventListener('change', update);
    update();
  }
})();
