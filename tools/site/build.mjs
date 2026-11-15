// Erzeugt alle HTML-Seiten aus tools/site/pages/*.html (Inhalt) + Kopf/Fuß unten.
// Aufruf:  node tools/site/build.mjs   (nach neuen Bildern vorher: node tools/site/images.mjs)
// Inhalte immer in tools/site/pages/ ändern, nicht in den erzeugten Dateien im Hauptordner.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '../..');
const SITE = 'https://www.abraham-immobilien.de';
const V = '35';
const TEL = '030 / 45032807';
const TELH = 'tel:+493045032807';
const MAIL = 'angebote@abraham-immobilien.de';

const link = (href, label, cur) => `<a href="${href}"${cur === href ? ' aria-current="page"' : ''}>${label}</a>`;
const offNav = (cur) => `<nav class="nav only-off" aria-label="Hauptnavigation">
        ${link('/diskret-verkaufen.html', 'Verkaufen', cur)}
        ${link('/wertermittlung.html', 'Bewerten', cur)}
        ${link('/referenzen.html', 'Referenzen', cur)}
        ${link('/ueber-uns.html', 'Unternehmen', cur)}
        ${link('/kontakt.html', 'Kontakt', cur)}
        <a class="btn btn--sm" href="/#anfrage">Kontakt aufnehmen</a>
      </nav>`;
const onNav = (cur) => `<nav class="nav only-on" aria-label="Hauptnavigation">
        ${link('/wohnung-haus-verkaufen.html', 'Verkaufen', cur)}
        ${link('/rechner.html', 'Bewerten', cur)}
        ${link('/angebote.html', 'Angebote', cur)}
        ${link('/lexikon.html', 'Ratgeber', cur)}
        ${link('/ueber-uns.html', 'Unternehmen', cur)}
        ${link('/kontakt.html', 'Kontakt', cur)}
        <a class="btn btn--sm" href="/wohnung-haus-verkaufen.html#anfrage">Jetzt kontaktieren</a>
      </nav>`;

const header = (world, cur) => `<a class="skip" href="#inhalt">Zum Inhalt springen</a>
  <div class="strip">
    <div class="wrap strip-in">
      <nav class="switch" aria-label="Bereich wählen: Off-Market oder On-Market">
        <a class="is-off" href="/"><b>Off-Market</b><span>Diskreter Verkauf von Anlageimmobilien</span></a>
        <a class="is-on" href="/immobilie-verkaufen.html"><b>On-Market</b><span>Wohnung, Haus, Grundstück</span></a>
      </nav>
      <div class="strip-info">
        <span class="strip-addr">Kurfürstendamm 15, 10719 Berlin</span>
        <a href="${TELH}">${TEL}</a>
      </div>
    </div>
  </div>
  <header class="hdr">
    <div class="wrap hbar">
      ${world !== 'on' ? `<a class="logo only-off" href="/" aria-label="Abraham Immobilien, Startseite Off-Market"><img src="/assets/logo.png" alt="Abraham Immobilien" width="74" height="74"></a>` : ''}
      ${world !== 'off' ? `<a class="logo only-on" href="/immobilie-verkaufen.html" aria-label="Abraham Immobilien, Startseite On-Market"><img src="/assets/logo.png" alt="Abraham Immobilien" width="74" height="74"></a>` : ''}
      ${world !== 'on' ? offNav(cur) : ''}
      ${world !== 'off' ? onNav(cur) : ''}
      <button class="burger" type="button" data-burger aria-expanded="false" aria-label="Menü"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18"/></svg></button>
    </div>
  </header>`;

const sticky = (world) => `<div class="sticky-cta">
    <div class="wrap sticky-in">
      ${world !== 'on' ? `<b class="only-off">Immobilie diskret verkaufen?</b>` : ''}
      ${world !== 'off' ? `<b class="only-on">Was ist Ihre Immobilie wert?</b>` : ''}
      ${world !== 'on' ? `<a class="btn btn--gold only-off" href="/#anfrage">Kontakt aufnehmen</a>` : ''}
      ${world !== 'off' ? `<a class="btn btn--gold only-on" href="/rechner.html">Jetzt bewerten</a>` : ''}
    </div>
  </div>`;

const footer = `<footer class="foot">
    <div class="wrap">
      <div class="foot-top">
        <div class="foot-brand">
          <a class="foot-logo" href="/" aria-label="Abraham Immobilien"><img src="/assets/logo.png" alt="Abraham Immobilien" width="92" height="92" loading="lazy"></a>
          <p class="foot-addr">Abraham Immobilien GmbH &amp; Co. KG<br>Kurfürstendamm 15, 10719 Berlin<br><a href="${TELH}">${TEL}</a><br><a href="mailto:${MAIL}">${MAIL}</a></p>
        </div>
        <div>
          <h2>Immobilie verkaufen</h2>
          <ul>
            <li><a href="/wohnung-haus-verkaufen.html?art=wohnung#anfrage">Wohnung verkaufen</a></li>
            <li><a href="/wohnung-haus-verkaufen.html?art=haus#anfrage">Haus verkaufen</a></li>
            <li><a href="/wohnung-haus-verkaufen.html?art=grundstueck#anfrage">Grundstück verkaufen</a></li>
            <li><a href="/diskret-verkaufen.html">Mehrfamilienhaus verkaufen</a></li>
            <li><a href="/diskret-verkaufen.html">Gewerbeimmobilie verkaufen</a></li>
          </ul>
        </div>
        <div>
          <h2>Off-Market</h2>
          <ul>
            <li><a href="/diskret-verkaufen.html">Diskreter Verkauf</a></li>
            <li><a href="/referenzen.html">Referenzen</a></li>
            <li><a href="/wertermittlung.html">Anlageimmobilie bewerten</a></li>
          </ul>
        </div>
        <div>
          <h2>Service</h2>
          <ul>
            <li><a href="/rechner.html">Immobilie bewerten</a></li>
            <li><a href="/angebote.html">Aktuelle Angebote</a></li>
            <li><a href="/lexikon.html">Ratgeber</a></li>
          </ul>
        </div>
        <div>
          <h2>Unternehmen</h2>
          <ul>
            <li><a href="/ueber-uns.html">Über uns</a></li>
            <li><a href="/kontakt.html">Kontakt</a></li>
            <li><a href="/impressum.html">Impressum</a></li>
            <li><a href="/datenschutz.html">Datenschutz</a></li>
          </ul>
        </div>
      </div>
      <div class="foot-b">
        <span>© <span data-year>2026</span> Abraham Immobilien GmbH &amp; Co. KG</span>
        <nav aria-label="Rechtliches"><a href="/impressum.html">Impressum</a><a href="/datenschutz.html">Datenschutz</a><a href="https://techlacin.de" target="_blank" rel="noopener">Webdesign: TECHLACIN</a></nav>
      </div>
    </div>
  </footer>`;

// Bausteine, die in den Seiten mit {{name}} eingefügt werden
const parts = {};
for (const f of fs.readdirSync(HERE)) {
  if (/\.(html|svg)$/.test(f)) parts[f.replace(/\.\w+$/, '')] = fs.readFileSync(path.join(HERE, f), 'utf8').trim();
}
const fill = (s) => s.replace(/\{\{(\w[\w-]*)\}\}/g, (m, k) => (k in parts ? fill(parts[k]) : m));

function render(meta, body) {
  const url = meta.file === 'index.html' ? `${SITE}/` : `${SITE}/${meta.file}`;
  const start = meta.world === 'on' ? 'on' : 'off';
  const fixed = meta.world === 'shared' ? '' : ' data-world-fixed="1"';
  const ws = meta.world === 'shared'
    ? `<script>try{var w=sessionStorage.getItem('abr_world');if(w==='on'||w==='off')document.documentElement.dataset.world=w}catch(e){}</script>\n  ` : '';
  const strip = (h) => h.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
  const faqs = meta.faqld ? [...fill(body).matchAll(/<summary>([\s\S]*?)<\/summary><div class="a">([\s\S]*?)<\/div><\/details>/g)]
    .map((m) => ({ '@type': 'Question', name: strip(m[1]), acceptedAnswer: { '@type': 'Answer', text: strip(m[2]) } })) : [];
  const ldList = [...(meta.jsonld || []), ...(faqs.length ? [{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs }] : [])];
  const ld = ldList.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n  ');
  const og = meta.og || '/assets/schritte-bg.jpg';
  return `<!DOCTYPE html>
<html lang="de" data-world="${start}"${fixed}>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${meta.title}</title>
  <meta name="description" content="${meta.desc}">
  ${meta.noindex ? '<meta name="robots" content="noindex,follow">' : `<link rel="canonical" href="${url}">`}
  <meta property="og:type" content="website">
  <meta property="og:locale" content="de_DE">
  <meta property="og:site_name" content="Abraham Immobilien">
  <meta property="og:title" content="${meta.title}">
  <meta property="og:description" content="${meta.desc}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${SITE}${og}">
  <meta name="theme-color" content="#1F1D1B">
  ${ws}<link rel="icon" type="image/png" href="/assets/favicon.png">
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
  <link rel="preload" href="/assets/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/assets/fonts/fonts.css?v=${V}">
  <link rel="stylesheet" href="/assets/css/site.css?v=${V}">
  ${ld}
</head>
<body>
  ${header(meta.world, meta.cur)}
  <main id="inhalt">
${fill(body).trimEnd()}
  </main>
  ${meta.noindex || meta.file === 'rechner.html' || meta.file === 'kontakt.html' ? '' : sticky(meta.world)}
  ${footer}
  <script src="/assets/js/site.js?v=${V}" defer></script>
</body>
</html>
`;
}

const pagesDir = path.join(HERE, 'pages');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const built = [];
for (const src of walk(pagesDir).filter((f) => f.endsWith('.html'))) {
  const raw = fs.readFileSync(src, 'utf8');
  const m = raw.match(/^<!--META\n([\s\S]*?)\nMETA-->\n([\s\S]*)$/);
  if (!m) throw new Error('META fehlt: ' + src);
  const meta = JSON.parse(m[1]);
  // Bilder: WebP verwenden, wenn vorhanden (erzeugt mit node tools/site/images.mjs). og:image bleibt JPG.
  const html = render(meta, m[2]).replace(/(<img\b[^>]*?\ssrc=")(\/assets\/[^"]+?)\.(jpe?g|png)"/g,
    (all, pre, p) => (fs.existsSync(path.join(ROOT, p + '.webp')) ? `${pre}${p}.webp"` : all));
  fs.writeFileSync(path.join(ROOT, meta.file), html);
  built.push(meta);
}
const urls = built.filter((b) => !b.noindex).sort((a, b) => a.file.localeCompare(b.file))
  .map((b) => `  <url><loc>${SITE}/${b.file === 'index.html' ? '' : b.file}</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod></url>`);
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
console.log(built.length + ' Seiten erzeugt');
