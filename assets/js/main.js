/* =========================================================================
   ABRAHAM IMMOBILIEN — Interactions
   German is the source of truth in the HTML. English lives in the EN
   dictionary below and is swapped in on demand (DE restores the original).
   ========================================================================= */
(function () {
  "use strict";

  /* ---------------------------------------------------------------
     1. i18n  —  EN dictionary keyed by data-i18n / data-i18n-ph
  --------------------------------------------------------------- */
  const EN = {
    // --- Global nav / footer ---
    "nav.home": "Home",
    "nav.access": "Off-Market Access",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.market": "Market",
    "nav.contact": "Contact",
    "nav.calc": "Price Calculator",
    "brand.sub": "Berlin · Off-Market",
    "cta.request": "Request access",
    "cta.access": "Off-market access",
    "cta.contact": "Get in touch",
    "cta.discreet": "Discreet enquiry",

    "footer.tagline": "The access point to real estate that never reaches the open market. Berlin and beyond — discreet, connected, substantial.",
    "footer.explore": "Navigation",
    "footer.legal": "Legal",
    "footer.contact": "Contact",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy",
    "footer.rights": "All rights reserved.",
    "footer.dev": "Developed by",
    "footer.built": "Off-Market world",
    "footer.social": "Follow",

    // --- Home: hero ---
    "home.hero.eyebrow": "Berlin · Off-Market Real Estate",
    "home.hero.title": "Access to real estate the market never sees.",
    "home.hero.sub": "Abraham Immobilien is the point of access to off-market properties and portfolios — for owners, investors and family offices who value discretion over noise.",
    "home.hero.m1k": "Focus",
    "home.hero.m1v": "Off-Market · Berlin",
    "home.hero.m2k": "Network",
    "home.hero.m2v": "Owners · Capital · Advisors",
    "home.hero.m3k": "Approach",
    "home.hero.m3v": "Discreet · By referral",
    "home.hero.imglabel": "Visual placeholder",
    "home.hero.badge": "Off-Market · Berlin",
    "home.hero.scroll": "Explore",

    // --- Home: manifesto ---
    "home.manifesto.eyebrow": "Positioning",
    "home.manifesto.title": "We don't publish opportunities. We open access to them.",
    "home.manifesto.note": "Some transactions are never advertised. They happen between people who trust one another — quietly, precisely, and with the right partner in the room.",
    "home.manifesto.body": "We move within a resilient network of owners, investors, brokers, developers, financiers, tax advisors and lawyers. That is where the properties are that never appear on any portal.",
    "home.manifesto.c1": "Discreet",
    "home.manifesto.c2": "Precise",
    "home.manifesto.c3": "On equal terms",
    "home.manifesto.sign": "— The access point",

    // --- Home: pillars ---
    "home.pillars.eyebrow": "What defines us",
    "home.pillars.title": "Discretion, substance, access.",
    "home.pillars.intro": "Three principles carry every engagement — restrained in manner, tangible in outcome.",
    "home.pillars.p1t": "Discretion",
    "home.pillars.p1d": "Sensitive transactions demand confidentiality. We work discreetly and protect every party at the table.",
    "home.pillars.p1k": "Confidential",
    "home.pillars.p2t": "Network",
    "home.pillars.p2d": "Continuous exchange with the people who move the market — owners, capital partners and specialists.",
    "home.pillars.p2k": "Connected",
    "home.pillars.p3t": "Substance",
    "home.pillars.p3d": "We understand the market in depth and guide even complex transactions with a steady hand.",
    "home.pillars.p3k": "Substantial",

    // --- Home: audience ---
    "home.aud.eyebrow": "For whom",
    "home.aud.title": "Built for people who expect substance.",
    "home.aud.intro": "From the private owner to the family office — different paths, one shared standard: discretion, substance and access.",
    "home.aud.tag": "06 audiences · one access point",
    "home.aud.1t": "Private owners",
    "home.aud.1d": "With one or several properties",
    "home.aud.2t": "Professional holders",
    "home.aud.2d": "Portfolio and asset managers",
    "home.aud.3t": "Companies",
    "home.aud.3d": "With acquisition or disposal intent",
    "home.aud.4t": "Investors",
    "home.aud.4d": "Private and professional capital",
    "home.aud.5t": "Family offices & AGs",
    "home.aud.5d": "Strategic portfolio building",
    "home.aud.6t": "Brokers & partners",
    "home.aud.6d": "Cooperation on equal terms",

    // --- Home: network ---
    "home.net.eyebrow": "Connected",
    "home.net.title": "A network that carries transactions.",
    "home.net.intro": "Access is a function of relationships. Ours reach across every party a transaction needs.",
    "home.net.1": "Owners",
    "home.net.2": "Investors",
    "home.net.3": "Developers",
    "home.net.4": "Financiers & banks",
    "home.net.5": "Tax advisors",
    "home.net.6": "Lawyers",
    "home.net.7": "Brokers & partners",
    "home.net.8": "Family offices",

    // --- Home: cinematic band ---
    "home.cine.eyebrow": "Off-Market",
    "home.cine.label": "Visual placeholder",
    "home.cine.title": "The best properties change hands before anyone sees them.",

    // --- Home: portfolio dark ---
    "home.pf.eyebrow": "Strategic partnership",
    "home.pf.title": "We build real-estate portfolios alongside capital.",
    "home.pf.body": "For AGs, family offices and institutional partners we assemble and grow real-estate portfolios — strategically, discreetly and with access others do not have.",
    "home.pf.s1f": "12+", "home.pf.s1l": "Years in the Berlin market",
    "home.pf.s2f": "300+", "home.pf.s2l": "Network partners",
    "home.pf.s3f": "100%", "home.pf.s3l": "Off-market focus",
    "home.pf.s4f": "1:1", "home.pf.s4l": "Personal guidance",
    "home.pf.cta": "Discuss portfolio building",
    "home.pf.figures": "In figures",

    // --- Home: CTA ---
    "home.cta.eyebrow": "The access point",
    "home.cta.title": "Access begins with a conversation.",
    "home.cta.lead": "Tell us who you are and what you are looking for. We respond personally and in confidence.",

    // --- Zugang page ---
    "zg.crumb": "Off-Market Access",
    "zg.eyebrow": "By referral · Confidential",
    "zg.title": "Request access.",
    "zg.lead": "Off-market means: not everything is visible. Tell us your intent — buying, selling or building a portfolio — and we open the right doors.",
    "zg.how.eyebrow": "How access works",
    "zg.how.title": "Three steps to access.",
    "zg.how.intro": "No form marathon. A short, confidential path from first contact to the right access.",
    "zg.t1": "Strictly confidential",
    "zg.t2": "A personal reply",
    "zg.t3": "No obligation",
    "zg.t4": "No newsletter, no pop-ups",
    "zg.s1t": "You reach out", "zg.s1d": "A short, confidential message about your intent and profile. No obligation.",
    "zg.s2t": "We qualify", "zg.s2d": "We understand what you are looking for and match it against our off-market network.",
    "zg.s3t": "You gain access", "zg.s3d": "Relevant opportunities reach you personally — discreetly, curated, never public.",
    "zg.form.eyebrow": "Discreet enquiry",
    "zg.form.title": "Start the conversation.",
    "zg.form.note": "Your enquiry is treated confidentially and forwarded only internally.",

    // --- Form fields (shared) ---
    "f.name": "Name", "f.name.ph": "First and last name",
    "f.email": "Email", "f.email.ph": "you@example.com",
    "f.phone": "Phone", "f.phone.ph": "Optional",
    "f.company": "Company / Office", "f.company.ph": "Optional",
    "f.role": "You are",
    "f.role.opt0": "Please select",
    "f.role.opt1": "Private owner",
    "f.role.opt2": "Investor",
    "f.role.opt3": "Family office / AG",
    "f.role.opt4": "Company",
    "f.role.opt5": "Broker / partner",
    "f.intent": "Your intent",
    "f.intent.opt0": "Please select",
    "f.intent.opt1": "Buying / acquiring",
    "f.intent.opt2": "Selling / disposing",
    "f.intent.opt3": "Building a portfolio",
    "f.intent.opt4": "Cooperation",
    "f.msg": "Message", "f.msg.ph": "Briefly: what are you looking for or offering?",
    "f.consent": "I agree that my data may be used to process my enquiry. I have read the privacy policy.",
    "f.submit": "Send enquiry",
    "f.spam": "No pop-ups, no newsletter. Just a personal reply.",
    "f.err.name": "Please enter your name.",
    "f.err.email": "Please enter a valid email address.",
    "f.err.msg": "Please add a short message.",
    "f.err.consent": "Please confirm your consent.",
    "f.err.select": "Please make a selection.",
    "f.success.title": "Thank you — your enquiry has arrived.",
    "f.success.body": "We will get back to you personally and in confidence, usually within one business day.",

    // --- About ---
    "ab.crumb": "About",
    "ab.eyebrow": "About Abraham Immobilien",
    "ab.title": "A partner, not a portal.",
    "ab.lead": "We understand the Berlin market from the inside — and work where deals are made before they are ever published.",
    "ab.p1": "Abraham Immobilien stands for a quiet, precise way of working. We don't sell attention. We build trust — through the way we speak, the quality of every detail, and processes you can feel.",
    "ab.p2": "Our strength is the network: continuous exchange with owners, investors, brokers, developers, financiers, tax advisors and lawyers. That is how complex transactions are carried safely — and how access emerges that does not exist publicly.",
    "ab.vals.title": "How we work.",
    "ab.v1t": "On equal terms", "ab.v1d": "Calm, precise, without pressure. We speak to decision-makers as peers.",
    "ab.v2t": "Show, don't claim", "ab.v2d": "Quality speaks through references and results — not superlatives.",
    "ab.v3t": "Modern & efficient", "ab.v3d": "Technically up to date, structured processes, fast and reliable execution.",
    "ab.v4t": "Confidential", "ab.v4d": "Discretion is not a feature. It is the foundation of everything we do.",
    "ab.net.title": "Our network.",
    "ab.net.lead": "Access is a function of relationships. Ours reach across every party a transaction needs.",

    // --- Services ---
    "sv.crumb": "Services",
    "sv.eyebrow": "Services",
    "sv.title": "What we do — from first contact to close.",
    "sv.lead": "From the first confidential conversation to a closed transaction. On equal terms, with a network that carries.",
    "sv.1t": "Off-market brokerage",
    "sv.1d": "Discreet matching of properties and buyers — outside every portal, curated to intent.",
    "sv.2t": "Portfolio building",
    "sv.2d": "Strategic acquisition and growth of real-estate portfolios for AGs, family offices and capital partners.",
    "sv.3t": "Sell-side advisory",
    "sv.3d": "For owners who want to sell without publicity — quietly, at value, to the right buyer.",
    "sv.4t": "Buy-side mandates",
    "sv.4d": "We search on your behalf and open access to opportunities before they reach the market.",
    "sv.5t": "Network & introductions",
    "sv.5d": "Access to financiers, developers, tax advisors and lawyers — the full circle a deal requires.",
    "sv.6t": "Transaction guidance",
    "sv.6d": "Structured, reliable execution of complex transactions, from first contact to closing.",
    "sv.proc.eyebrow": "How we work",
    "sv.proc.title": "A clear, calm process.",
    "sv.p1t": "Contact", "sv.p1d": "A confidential conversation about intent, profile and expectations.",
    "sv.p2t": "Qualification", "sv.p2d": "We match your goal against our network and identify the right path.",
    "sv.p3t": "Access", "sv.p3d": "Relevant, curated opportunities — off-market and personal.",
    "sv.p4t": "Execution", "sv.p4d": "We guide the transaction to a secure close, with every specialist in place.",

    // --- Contact ---
    "ct.crumb": "Contact",
    "ct.eyebrow": "Contact",
    "ct.title": "Let's talk.",
    "ct.lead": "Whether you want to buy, sell or build a portfolio — reach out. We respond personally and in confidence.",
    "ct.info.title": "Direct",
    "ct.info.emailk": "Email", "ct.info.phonek": "Phone", "ct.info.addrk": "Office", "ct.info.hoursk": "By appointment",
    "ct.info.hoursv": "Meetings by arrangement",
    "ct.form.title": "Send a message.",

    // --- Market (On-Market world) ---
    "mk.tag": "The marketplace of Abraham Immobilien",
    "mk.eyebrow": "On-Market · Published listings",
    "mk.title": "Abraham Market.",
    "mk.lead": "Our publicly available properties — transparent, filterable, with exposé on request. Everything here is on the open market.",
    "mk.filter.all": "All",
    "mk.filter.type": "Type",
    "mk.filter.wohnen": "Residential",
    "mk.filter.gewerbe": "Commercial",
    "mk.filter.wohnanlage": "Multi-family",
    "mk.filter.grundstueck": "Land",
    "mk.filter.status": "Status",
    "mk.filter.verfuegbar": "Available",
    "mk.filter.reserviert": "Reserved",
    "mk.count.one": "property",
    "mk.count.many": "properties",
    "mk.card.expose": "Request exposé",
    "mk.card.from": "from",
    "mk.fact.area": "Area", "mk.fact.rooms": "Rooms", "mk.fact.yield": "Yield",
    "mk.status.verfuegbar": "Available",
    "mk.status.reserviert": "Reserved",
    "mk.return.title": "Looking for something that isn't listed here?",
    "mk.return.body": "Most of what we place never appears on any portal. Access to off-market properties runs through a personal, confidential conversation.",
    "mk.return.cta": "To the Off-Market world",
    "mk.empty": "No properties match this filter.",

    // --- Object detail ---
    "ob.crumb.market": "Market",
    "ob.status": "Available",
    "ob.loc": "Berlin · Charlottenburg",
    "ob.title": "Classic period building with courtyard",
    "ob.imglabel": "Visual placeholder",
    "ob.fact.area": "Living area", "ob.fact.rooms": "Rooms", "ob.fact.year": "Built", "ob.fact.yield": "Gross yield",
    "ob.desc.title": "About this property",
    "ob.desc.p1": "A representative period building in a sought-after location — this is a placeholder description. In production, object data is maintained in the CMS or synced automatically from your brokerage software via the OpenImmo interface.",
    "ob.desc.p2": "Details on layout, condition, energy performance and price on request. Exposé available to qualified parties.",
    "ob.cta.title": "Interested in this property?",
    "ob.cta.body": "Request the full exposé — we'll get back to you personally.",
    "ob.cta.btn": "Request exposé",
    "ob.back": "Back to Market",

    // --- Price calculator ---
    "rc.crumb": "Price Calculator",
    "rc.eyebrow": "Property value calculator",
    "rc.title": "What is your property worth?",
    "rc.lead": "A first, non-binding estimate in seconds — based on current Berlin market data. For a precise valuation, we speak personally.",
    "rc.f.bezirk": "Location / district",
    "rc.f.art": "Property type",
    "rc.f.area": "Living area (m²)",
    "rc.f.rooms": "Rooms",
    "rc.f.condition": "Condition",
    "rc.art.wohnung": "Apartment",
    "rc.art.haus": "House",
    "rc.art.mfh": "Multi-family house",
    "rc.art.gewerbe": "Commercial",
    "rc.cond.neu": "As new / new build",
    "rc.cond.saniert": "Renovated",
    "rc.cond.gepflegt": "Well maintained",
    "rc.cond.reno": "Needs renovation",
    "rc.result.label": "Estimated market value",
    "rc.result.perm2": "Guide value per m²",
    "rc.result.hint": "Non-binding estimate based on average values. Not a formal valuation.",
    "rc.cta.title": "Would you like a precise valuation?",
    "rc.cta.body": "We value your property individually and discreetly — with real market access, not a standard tool.",
    "rc.cta.btn": "Request a valuation",

    // --- Legal (short) ---
    "lg.imprint.crumb": "Imprint",
    "lg.privacy.crumb": "Privacy",
  };

  const html = document.documentElement;
  const originals = new Map();   // el -> { text, ph, ... }
  let current = "de";

  function cacheOriginals() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      originals.set(el, (originals.get(el) || {}));
      originals.get(el).text = el.textContent;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      originals.set(el, (originals.get(el) || {}));
      originals.get(el).ph = el.getAttribute("placeholder");
    });
  }

  function applyLang(lang) {
    current = lang;
    html.setAttribute("lang", lang);
    // text
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (lang === "en") {
        if (EN[key] != null) el.textContent = EN[key];
      } else {
        const o = originals.get(el);
        if (o && o.text != null) el.textContent = o.text;
      }
    });
    // placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (lang === "en") {
        if (EN[key] != null) el.setAttribute("placeholder", EN[key]);
      } else {
        const o = originals.get(el);
        if (o && o.ph != null) el.setAttribute("placeholder", o.ph);
      }
    });
    // toggle buttons
    document.querySelectorAll("[data-lang]").forEach((b) => {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    try { localStorage.setItem("ai_lang", lang); } catch (e) {}
  }

  /* ---------------------------------------------------------------
     2. Boot
  --------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    cacheOriginals();

    let saved = "de";
    try { saved = localStorage.getItem("ai_lang") || "de"; } catch (e) {}
    applyLang(saved);

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
    });

    initHeader();
    initMobileNav();
    initReveal();
    initForms();
    initMarket();
    initCountUp();
    initParallax();
    initRechner();
    initYear();
  });

  /* ---------------------------------------------------------------
     Immobilien-Wertrechner — instant, non-binding estimate from
     average Berlin sale prices (€/m²) × property-type × condition.
  --------------------------------------------------------------- */
  function initRechner() {
    const form = document.querySelector("[data-rechner]");
    if (!form) return;
    const base = { mitte: 6800, cw: 6500, fk: 6200, pankow: 6000, ts: 5200, sz: 6000,
                   neukoelln: 5000, tk: 4600, licht: 4300, mh: 3800, rd: 4200, spandau: 3900 };
    const art  = { wohnung: 1.0, haus: 1.05, mfh: 0.9, gewerbe: 0.85 };
    const cond = { neu: 1.15, saniert: 1.05, gepflegt: 1.0, reno: 0.82 };
    const byId = (id) => document.getElementById(id);
    const nf = () => new Intl.NumberFormat(current === "en" ? "en-US" : "de-DE", { maximumFractionDigits: 0 });
    const eur = (n) => nf().format(Math.round(n)) + " €";

    function calc() {
      const b = base[byId("rc-bezirk").value] || 5000;
      const a = art[byId("rc-art").value] || 1;
      const c = cond[byId("rc-cond").value] || 1;
      const area = Math.max(0, parseFloat(byId("rc-area").value) || 0);
      const perM2 = b * a * c;
      const val = perM2 * area;
      byId("rc-perm2").textContent = area > 0 ? eur(perM2) : "—";
      byId("rc-value").textContent = area > 0
        ? (nf().format(Math.round(val * 0.92)) + " – " + eur(val * 1.08))
        : "—";
    }
    form.querySelectorAll("input, select").forEach((el) => {
      el.addEventListener("input", calc);
      el.addEventListener("change", calc);
    });
    calc();
    // recompute on language switch so the number format follows the locale
    document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setTimeout(calc, 0)));
  }

  /* ---------------------------------------------------------------
     Scroll parallax — elements with [data-parallax="<factor>"] drift
     gently as the page scrolls (respects reduced-motion).
  --------------------------------------------------------------- */
  function initParallax() {
    const els = document.querySelectorAll("[data-parallax]");
    if (!els.length || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ticking = false;
    const update = () => {
      const mid = window.innerHeight / 2;
      els.forEach((el) => {
        const f = parseFloat(el.getAttribute("data-parallax")) || 0.06;
        const r = el.getBoundingClientRect();
        const offset = (r.top + r.height / 2) - mid;
        el.style.transform = "translate3d(0," + (offset * -f).toFixed(1) + "px,0)";
      });
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
  }

  /* ---------------------------------------------------------------
     Count-up for stat figures ([data-countup] + optional data-suffix)
  --------------------------------------------------------------- */
  function initCountUp() {
    const els = document.querySelectorAll("[data-countup]");
    if (!els.length) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const run = (el) => {
      const target = parseFloat(el.getAttribute("data-countup"));
      const suffix = el.getAttribute("data-suffix") || "";
      if (reduce || isNaN(target)) { el.textContent = target + suffix; return; }
      const dur = 1300, start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.4 });
    els.forEach((el) => io.observe(el));
  }

  /* ---------------------------------------------------------------
     3. Header scroll state
  --------------------------------------------------------------- */
  function initHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    const solid = header.classList.contains("is-solid");
    const onScroll = () => {
      if (solid) return;
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------------------------------------------------------
     4. Mobile nav
  --------------------------------------------------------------- */
  function initMobileNav() {
    const toggle = document.querySelector(".nav-toggle");
    const drawer = document.querySelector(".mobile-nav");
    if (!toggle || !drawer) return;
    const close = () => {
      toggle.classList.remove("is-open");
      drawer.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    toggle.addEventListener("click", () => {
      const open = drawer.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  /* ---------------------------------------------------------------
     5. Reveal on scroll
  --------------------------------------------------------------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
  }

  /* ---------------------------------------------------------------
     6. Forms — client validation + simulated submit
  --------------------------------------------------------------- */
  function initForms() {
    document.querySelectorAll("form[data-ai-form]").forEach((form) => {
      const success = form.querySelector(".form-success");
      form.setAttribute("novalidate", "");

      const showError = (field, on) => field.classList.toggle("has-error", on);

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let ok = true;
        let firstBad = null;

        form.querySelectorAll(".field").forEach((field) => {
          const input = field.querySelector("input, textarea, select");
          if (!input || input.type === "checkbox") return;
          let bad = false;
          if (input.hasAttribute("required") && !input.value.trim()) bad = true;
          if (input.type === "email" && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) bad = true;
          if (input.tagName === "SELECT" && input.hasAttribute("required") && !input.value) bad = true;
          showError(field, bad);
          if (bad) { ok = false; if (!firstBad) firstBad = input; }
        });

        // consent
        const consent = form.querySelector(".consent input[type=checkbox][required]");
        if (consent) {
          const cwrap = consent.closest(".consent");
          const bad = !consent.checked;
          cwrap.classList.toggle("has-error", bad);
          if (bad) { ok = false; if (!firstBad) firstBad = consent; }
        }

        if (!ok) { if (firstBad) firstBad.focus(); return; }

        // Simulated success. In production this posts to a mail endpoint
        // (e.g. serverless function forwarding to the company inbox).
        form.querySelectorAll("input, textarea, select, button").forEach((el) => (el.disabled = true));
        if (success) {
          success.classList.add("is-visible");
          success.setAttribute("role", "status");
          success.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });

      // clear error on input
      form.querySelectorAll("input, textarea, select").forEach((input) => {
        input.addEventListener("input", () => {
          const field = input.closest(".field") || input.closest(".consent");
          if (field) field.classList.remove("has-error");
        });
      });
    });
  }

  /* ---------------------------------------------------------------
     7. Market filters
  --------------------------------------------------------------- */
  function initMarket() {
    const grid = document.querySelector("[data-listings]");
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll(".card"));
    const filters = document.querySelectorAll("[data-filter]");
    const count = document.querySelector("[data-count]");
    const emptyMsg = document.querySelector("[data-empty]");
    const state = { type: "all", status: "all" };

    function render() {
      let visible = 0;
      cards.forEach((card) => {
        const t = card.getAttribute("data-type");
        const s = card.getAttribute("data-status");
        const show = (state.type === "all" || state.type === t) &&
                     (state.status === "all" || state.status === s);
        card.classList.toggle("is-hidden", !show);
        if (show) visible++;
      });
      if (count) {
        const word = visible === 1
          ? (current === "en" ? "property" : "Objekt")
          : (current === "en" ? "properties" : "Objekte");
        count.textContent = visible + " " + word;
      }
      if (emptyMsg) emptyMsg.hidden = visible !== 0;
    }

    filters.forEach((btn) => {
      btn.addEventListener("click", () => {
        const group = btn.getAttribute("data-group");
        const val = btn.getAttribute("data-filter");
        state[group] = val;
        document.querySelectorAll('[data-group="' + group + '"]').forEach((b) =>
          b.classList.toggle("is-active", b === btn));
        render();
      });
    });
    render();
  }

  /* ---------------------------------------------------------------
     8. Footer year
  --------------------------------------------------------------- */
  function initYear() {
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }
})();
