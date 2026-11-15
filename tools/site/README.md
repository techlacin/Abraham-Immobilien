# Seiten erzeugen

Inhalte stehen in `pages/` (eine Datei pro Seite, oben die Metadaten).
Wiederkehrende Bausteine (`form-off.html`, `form-on.html`, `refs.html`, `reviews.html`, `faq.html`, `map.svg`, `stars.html`) werden mit `{{name}}` eingefügt.
Kopf, Navigation und Fußzeile stehen in `build.mjs`.

    node tools/site/build.mjs

Danach sind alle HTML-Dateien im Hauptordner und die `sitemap.xml` aktuell.
Die erzeugten HTML-Dateien nicht direkt bearbeiten, sonst werden die Änderungen beim nächsten Lauf überschrieben.
