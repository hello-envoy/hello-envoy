/* ==========================================================================
   Envoy 2.0 — shared shell: icons, top navigation, toasts, tabs, chart
   defaults, SVG Sankey, demo-narrative rail. No build step; file:// safe.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Icons (1.5px stroke, 24 grid) ---------- */
  const P = {
    home: '<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5"/><path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c1.8.7 3 2.5 3.5 5.2"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
    send: '<path d="M21 3 10 14"/><path d="m21 3-7 18-4-7-7-4z"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    checkc: '<circle cx="12" cy="12" r="9"/><path d="m8 12.5 3 3 5-6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    share: '<circle cx="18" cy="5.5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="18.5" r="2.5"/><path d="m8.2 10.8 7.6-4M8.2 13.2l7.6 4"/>',
    cal: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    heart: '<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>',
    guests: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.9-3.6 3.6-5.5 7-5.5s6.1 1.9 7 5.5"/>',
    alert: '<path d="M12 4 2.8 19.5h18.4z"/><path d="M12 10v4.5M12 17.2v.3"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    dollar: '<path d="M12 3v18M16.5 7.5c-.7-1.5-2.4-2.3-4.5-2.3-2.6 0-4.3 1.3-4.3 3.2 0 4.6 9 2.4 9 7 0 1.9-1.9 3.4-4.7 3.4-2.3 0-4-1-4.7-2.6"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    chevd: '<path d="m7 10 5 5 5-5"/>',
    chevr: '<path d="m10 7 5 5-5 5"/>',
    arrowr: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    more: '<circle cx="5.5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="18.5" cy="12" r="1.2"/>',
    link: '<path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z"/>',
    thread: '<path d="M4 5h16v11H9l-5 4z"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
    attach: '<path d="M20 11.5 12 19.5a5 5 0 0 1-7-7l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7L9.7 17.2a1.7 1.7 0 0 1-2.4-2.4L15 7"/>',
    star: '<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.8z"/>',
    filter: '<path d="M4 5h16l-6 7.5V19l-4 1.5v-8z"/>',
    board: '<rect x="3.5" y="4" width="5" height="16" rx="1.2"/><rect x="10" y="4" width="5" height="11" rx="1.2"/><rect x="16.5" y="4" width="4" height="7" rx="1.2"/>',
    listi: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
    gantt: '<path d="M4 4v16h16"/><rect x="7" y="7" width="7" height="3" rx="1"/><rect x="10" y="12" width="8" height="3" rx="1"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.5 3.2 8 7.5 9.5 4.3-1.5 7.5-5 7.5-9.5V6z"/>',
    grid: '<rect x="3.5" y="3.5" width="17" height="17" rx="2"/><path d="M3.5 9.5h17M3.5 15h17M9.5 3.5v17"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
    note: '<path d="M5 4h10l4 4v12H5z"/><path d="M15 4v4h4M8.5 12.5h7M8.5 16h5"/>',
    flower: '<circle cx="12" cy="12" r="2.2"/><path d="M12 9.8c-2-3.2-.8-6 0-6.3.8.3 2 3.1 0 6.3zM14.2 12c3.2-2 6-.8 6.3 0-.3.8-3.1 2-6.3 0zM12 14.2c2 3.2.8 6 0 6.3-.8-.3-2-3.1 0-6.3zM9.8 12c-3.2 2-6 .8-6.3 0 .3-.8 3.1-2 6.3 0z"/>',
    bolt: '<path d="M13 3 5 13.5h6L10 21l8-10.5h-6z"/>',
  };
  function icon(name, size) {
    const s = size || 16;
    return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ""}</svg>`;
  }
  function hydrateIcons(root) {
    (root || document).querySelectorAll("i[data-i]").forEach((el) => {
      el.outerHTML = icon(el.dataset.i, +el.dataset.s || 16);
    });
  }

  const BRAND = `<svg class="brand-mark" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 21.5 6.5 12 21 2.5 6.5 12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M7 8.2c3.4 1.6 6.6 1.6 10 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg><span class="brand-word">Envoy</span>`;

  /* ---------- App topbar (planner) ---------- */
  function mountTopbar() {
    const host = document.querySelector("[data-topbar]");
    if (!host) return;
    const page = document.body.dataset.page;
    const tab = (id, label, href) => `<a href="${href}" ${page === id ? 'aria-current="page"' : ""}>${label}</a>`;
    host.outerHTML = `
    <header class="topbar"><div class="topbar-inner">
      <a class="brand" href="${page === "portfolio" ? "portfolio.html" : "portfolio.html"}" title="Envoy">${BRAND}</a>
      ${page === "portfolio" ? `<nav class="navtabs" aria-label="Primary"><a href="portfolio.html" aria-current="page">Dashboard</a></nav>` : `<nav class="navtabs" aria-label="Primary">
        ${tab("overview", "Overview", "overview.html")}
        ${tab("contacts", "Contacts", "contacts.html")}
        ${tab("project", "Project", "project.html")}
        <details class="menu nav-more">
          <summary class="${["decisions", "approve", "dayof", "share"].includes(page) ? "is-cur" : ""}">More ${icon("chevd", 13)}</summary>
          <div class="menu-pop" role="menu">
            <a role="menuitem" href="decisions.html" ${page === "decisions" ? 'aria-current="page"' : ""}>${icon("listi", 15)}<span>Decisions<span class="sub">Open &amp; decided, couple-visible</span></span></a>
            <a role="menuitem" href="approve-send.html" ${page === "approve" ? 'aria-current="page"' : ""}>${icon("send", 15)}<span>Approve &amp; send<span class="sub">2 drafts waiting for you</span></span></a>
            <a role="menuitem" href="vendor-compare.html">${icon("layers", 15)}<span>Vendor compare<span class="sub">Three florists, your lean</span></span></a>
            <a role="menuitem" href="day-of.html" ${page === "dayof" ? 'aria-current="page"' : ""}>${icon("cal", 15)}<span>Day-of packet<span class="sub">Run of show, call times, rain plan</span></span></a>
            <a role="menuitem" href="share-update.html" ${page === "share" ? 'aria-current="page"' : ""}>${icon("share", 15)}<span>Share update<span class="sub">Choose what the couple sees</span></span></a>
            <a role="menuitem" href="portfolio.html">${icon("grid", 15)}<span>All weddings<span class="sub">24 active · start your day here</span></span></a>
          </div>
        </details>
      </nav>`}
      <div class="topbar-right">
        <label class="ask" title="Ask Envoy — search, draft, or do">${icon("spark", 15)}<span>Ask Envoy to draft, find, or update…</span><span class="kbd">⌘K</span></label>
        <a class="btn btn-secondary btn-sm" href="couple-portal.html">${icon("eye", 14)} Couple view</a>
        <span class="av av-ink" title="Sarah Whitfield · Planner">SW</span>
      </div>
    </div></header>`;
  }

  document.addEventListener("click", (e) => { document.querySelectorAll("details.menu[open]").forEach((m) => { if (!m.contains(e.target)) m.open = false; }); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") document.querySelectorAll("details.menu[open]").forEach((m) => (m.open = false)); });

  /* ---------- Toast ---------- */
  let toastEl, toastT;
  function toast(html) {
    if (!toastEl) { toastEl = document.createElement("div"); toastEl.className = "toast"; toastEl.setAttribute("role", "status"); document.body.appendChild(toastEl); }
    toastEl.innerHTML = icon("checkc", 15) + "<span>" + html + "</span>";
    toastEl.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove("show"), 2600);
  }
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-toast]");
    if (t) { e.preventDefault(); toast(t.dataset.toast); }
  });

  /* ---------- Tabs / segmented controls ---------- */
  function wireTabs(root) {
    (root || document).querySelectorAll("[data-tabs]").forEach((group) => {
      const btns = group.querySelectorAll("[data-tab]");
      btns.forEach((b) => b.addEventListener("click", () => {
        btns.forEach((x) => x.setAttribute("aria-selected", x === b ? "true" : "false"));
        const scope = document.querySelector(group.dataset.tabs);
        if (!scope) return;
        scope.querySelectorAll("[data-panel]").forEach((p) => p.classList.toggle("hide", p.dataset.panel !== b.dataset.tab));
        if (group.dataset.hash !== undefined) history.replaceState(null, "", "#" + b.dataset.tab);
        window.dispatchEvent(new CustomEvent("envoy:tab", { detail: b.dataset.tab }));
      }));
    });
    document.querySelectorAll("[data-toggle-pressed]").forEach((b) =>
      b.addEventListener("click", () => b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true")));
  }

  /* ---------- Chart.js defaults ---------- */
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  function chartDefaults() {
    if (!window.Chart) return;
    const C = window.Chart;
    C.defaults.font.family = "Instrument Sans, ui-sans-serif, system-ui, sans-serif";
    C.defaults.font.size = 11.5;
    C.defaults.color = css("--ink-3");
    C.defaults.borderColor = css("--line");
    C.defaults.plugins.legend.display = false;
    C.defaults.plugins.tooltip.backgroundColor = css("--ink");
    C.defaults.plugins.tooltip.titleColor = "#EAECFA";
    C.defaults.plugins.tooltip.bodyColor = "#E5E7F4";
    C.defaults.plugins.tooltip.padding = 10;
    C.defaults.plugins.tooltip.cornerRadius = 6;
    C.defaults.plugins.tooltip.displayColors = true;
    C.defaults.plugins.tooltip.boxPadding = 4;
    C.defaults.elements.line.borderWidth = 1.75;
    C.defaults.elements.point.radius = 0;
    C.defaults.elements.point.hoverRadius = 4;
    C.defaults.maintainAspectRatio = false;
  }
  const palette = () => [1,2,3,4,5,6,7,8].map((i) => css("--chart-" + i));

  /* ---------- SVG Sankey (dependency-free) ----------
     data = { nodes:[{id,label,col,color?}], links:[{source,target,value,color?}] } */
  function sankey(el, data, opt) {
    opt = Object.assign({ height: 360, nodeW: 10, gap: 10, padL: 0, padR: 0, fmt: (v) => v }, opt || {});
    const W = el.clientWidth || 800, H = opt.height;
    const byId = {}; data.nodes.forEach((n) => { byId[n.id] = Object.assign(n, { inV: 0, outV: 0, so: 0, to: 0 }); });
    data.links.forEach((l) => { byId[l.source].outV += l.value; byId[l.target].inV += l.value; });
    const cols = Math.max(...data.nodes.map((n) => n.col)) + 1;
    const colNodes = [...Array(cols)].map((_, c) => data.nodes.filter((n) => n.col === c));
    const labelSpace = opt.labelSpace || 150;
    const x0 = opt.padL, x1 = W - opt.padR - labelSpace;
    const colX = (c) => x0 + (cols === 1 ? 0 : (c * (x1 - x0)) / (cols - 1));
    let k = Infinity;
    colNodes.forEach((ns) => { const tot = ns.reduce((s, n) => s + Math.max(n.inV, n.outV), 0); k = Math.min(k, (H - opt.gap * (ns.length - 1)) / tot); });
    colNodes.forEach((ns, c) => {
      const tot = ns.reduce((s, n) => s + Math.max(n.inV, n.outV) * k, 0) + opt.gap * (ns.length - 1);
      let y = (H - tot) / 2;
      ns.forEach((n) => { n.x = colX(c); n.h = Math.max(1, Math.max(n.inV, n.outV) * k); n.y = y; y += n.h + opt.gap; });
    });
    let svg = `<svg class="sankey" viewBox="0 0 ${W} ${H}" width="100%" height="${H}" role="img" aria-label="${opt.aria || "Sankey diagram"}">`;
    data.links.forEach((l) => {
      const s = byId[l.source], t = byId[l.target], w = l.value * k;
      const sx = s.x + opt.nodeW, tx = t.x, sy = s.y + s.so, ty = t.y + t.to; s.so += w; t.to += w;
      const mx = (sx + tx) / 2, col = l.color || t.color || css("--chart-4");
      svg += `<path class="link" d="M${sx},${sy}C${mx},${sy} ${mx},${ty} ${tx},${ty}L${tx},${ty + w}C${mx},${ty + w} ${mx},${sy + w} ${sx},${sy + w}Z" fill="${col}" opacity="${l.opacity || 0.42}"><title>${s.label} → ${t.label}: ${opt.fmt(l.value)}</title></path>`;
    });
    data.nodes.forEach((n) => {
      const v = Math.max(n.inV, n.outV);
      svg += `<rect x="${n.x}" y="${n.y}" width="${opt.nodeW}" height="${n.h}" rx="2" fill="${n.color || css("--ink")}"/>`;
      const left = n.col === 0 && opt.padL > 0;
      const lx = left ? n.x - 8 : n.x + opt.nodeW + 8, ly = n.y + n.h / 2, anc = left ? ' text-anchor="end"' : "";
      if (left) { svg += `<text x="${lx}" y="${ly - 1}"${anc} class="n-label">${n.label}</text><text x="${lx}" y="${ly + 13}"${anc} class="num">${opt.fmt(v)}</text>`; return; }
      if (n.h > 13) svg += `<text x="${lx}" y="${ly - 1}" dominant-baseline="auto" class="n-label">${n.label}</text><text x="${lx}" y="${ly + 13}" class="num">${opt.fmt(v)}</text>`;
      else svg += `<text x="${lx}" y="${ly + 4}"><tspan class="n-label">${n.label}</tspan> · ${opt.fmt(v)}</text>`;
    });
    el.innerHTML = svg + "</svg>";
  }

  /* ---------- Demo narrative rail ---------- */
  const WEDDINGS = [
    { id: "em", ini: "E&M", label: "Elena & Marcus", href: "overview.html" },
    { id: "kd", ini: "K&D", label: "Kate & Dom", href: "overview.html?w=kd" },
    { id: "ne", ini: "N&E", label: "Noor & Eli", href: "overview.html?w=ne" },
    { id: "ps", ini: "P&S", label: "Priya & Sam", href: "overview.html?w=ps" },
  ];
  function activeWeddingId() {
    const q = new URLSearchParams(location.search).get("w");
    if (q) return q;
    const p = location.pathname.split("/").pop();
    if (p === "portfolio.html") return null;
    return "em";
  }
  function mountPlannerShell() {
    if (document.body.dataset.shell !== "planner") return;
    const main = document.querySelector("main.page");
    if (!main || document.querySelector(".planner-shell")) return;
    const wrap = document.createElement("div");
    wrap.className = "planner-shell";
    main.parentNode.insertBefore(wrap, main);
    const wid = activeWeddingId();
    const panel = document.createElement("aside");
    panel.className = "project-panel";
    panel.setAttribute("aria-label", "Weddings");
    panel.innerHTML = `<div class="eyebrow">Weddings</div>` +
      `<a href="portfolio.html"${wid ? "" : ' aria-current="page"'}><span class="ini">24</span>All weddings</a>` +
      WEDDINGS.map((w) => `<a href="${w.href}"${wid === w.id ? ' aria-current="page"' : ""}><span class="ini">${w.ini}</span>${w.label}</a>`).join("");
    wrap.appendChild(panel);
    wrap.appendChild(main);
  }

  const STORY = [
    ["portfolio.html", "Start the day — portfolio across 24 weddings"],
    ["overview.html#attention", "Open a wedding — Overview surfaces what needs attention"],
    ["contacts.html#attach", "Attach preferred vendors from your directory"],
    ["contacts.html#compare", "Compare florists → draft inquiries"],
    ["couple-portal.html#ab", "Couple picks florist A/B in their portal"],
    ["project.html#lock", "Milestone “Lock catering” → Done on Booked → Deposit paid"],
  ];
  const IDEAS = [
    ["portfolio.html", "All weddings — start the day across 24"],
    ["approve-send.html", "Approve & send — nothing leaves without you"],
    ["decisions.html", "Decisions — open vs decided, couple-visible"],
    ["day-of.html", "Day-of packet — calm, printable"],
    ["share-update.html", "Share update — thin couple share"],
    ["vendor-compare.html", "Vendor compare — three florists, your lean"],
  ];
  function mountRail() {
    if (document.body.dataset.rail === "off") return;
    const file = location.pathname.split("/").pop();
    const d = document.createElement("details");
    d.className = "demo-rail"; d.open = sessionStorage.getItem("envoy-rail") === "open";
    d.addEventListener("toggle", () => sessionStorage.setItem("envoy-rail", d.open ? "open" : "closed"));
    d.innerHTML = `<summary><span class="pulse"></span> Demo story <span class="faint" style="font-weight:400;margin-left:auto">5 beats + ideas</span></summary><ol>${STORY.map(([h, t]) => `<li class="${h.split("#")[0] === file ? "here" : ""}"><a href="${h}">${t}</a></li>`).join("")}</ol><div class="rail-ideas"><div class="eyebrow">Ideas · rounds 3–5</div><ul>${IDEAS.map(([h, t]) => `<li class="${h === file ? "here" : ""}"><a href="${h}">${t}</a></li>`).join("")}</ul></div>`;
    document.body.appendChild(d);
  }

  /* ---------- Drag & drop for boards ---------- */
  function wireBoards() {
    let drag = null;
    document.querySelectorAll(".kcard[draggable]").forEach((c) => {
      c.addEventListener("dragstart", () => { drag = c; c.classList.add("dragging"); });
      c.addEventListener("dragend", () => { c.classList.remove("dragging"); drag = null; document.querySelectorAll(".col").forEach((x) => x.classList.remove("drop")); });
    });
    document.querySelectorAll(".col[data-col]").forEach((col) => {
      col.addEventListener("dragover", (e) => { e.preventDefault(); col.classList.add("drop"); });
      col.addEventListener("dragleave", () => col.classList.remove("drop"));
      col.addEventListener("drop", (e) => {
        e.preventDefault(); col.classList.remove("drop");
        if (!drag) return; col.querySelector(".col-cards").appendChild(drag);
        document.querySelectorAll(".col[data-col]").forEach((x) => { const n = x.querySelector(".count"); if (n) n.textContent = x.querySelectorAll(".kcard").length; });
        toast(`Moved to <b>${col.dataset.col}</b>`);
      });
    });
  }

  window.Envoy = { icon, hydrateIcons, toast, sankey, palette, css, chartDefaults };

  document.addEventListener("DOMContentLoaded", () => {
    mountTopbar(); mountPlannerShell(); hydrateIcons(); wireTabs(); chartDefaults(); mountRail(); wireBoards();
    window.dispatchEvent(new Event("envoy:ready"));
  });
})();
