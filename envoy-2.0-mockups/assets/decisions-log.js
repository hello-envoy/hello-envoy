/* Decisions log + insights — mounted on Project → Decisions tab (and legacy decisions.html) */
(function () {
  "use strict";
  function initDecisionsLog() {
    const body = document.getElementById("rows");
    if (!body || body.dataset.wired === "1") return;
    body.dataset.wired = "1";
    const OWNERS = { Me: "var(--ink)", Couple: "var(--clay)", Vendor: "var(--ink-4)" };
    const STATUSES = [
      ["open", "Open"],
      ["couple", "Waiting on couple"],
      ["decided", "Decided"],
    ];
    let rows = [
      { d: "Florist", a: "Heron & Fern Florals", b: "Marlowe Flower Co.", o: "Couple", s: "couple", due: "Nov 9", v: false },
      { d: "Harborline hold for Oct 8–10", a: "Release it", b: "Move to Oct 15–17", o: "Me", s: "open", due: "Nov 4", v: false, late: true },
      { d: "Ceremony rain plan", a: "Tent on the allée", b: "Ashby ballroom", o: "Couple", s: "open", due: "Dec 1", v: false },
      { d: "Rehearsal dinner room", a: "Ashby library (40)", b: "Harborline terrace", o: "Me", s: "open", due: "Dec 15", v: false },
      { d: "Hair & makeup trial date", a: "Sat Aug 21", b: "Sun Aug 29", o: "Vendor", s: "open", due: "Nov 5", v: false, link: "approve-send.html?to=glam" },
      { d: "Catering menu", a: "Menu A · stations", b: "Menu B · plated", o: "Couple", s: "decided", due: "Oct 24", v: false, pick: "b" },
      { d: "Guest count", a: "128", b: "140", o: "Couple", s: "decided", due: "Oct 20", v: false, pick: "a" },
      { d: "Wildflour deposit $7,920", a: "Pay now", b: "Pay on Nov 6", o: "Me", s: "decided", due: "Nov 6", v: false, pick: "a", link: "approve-send.html?to=wild" },
    ];
    let filter = "open";
    let onlyCouple = false;
    const $ = (id) => document.getElementById(id);
    const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
    function counts() {
      const c = {
        open: rows.filter((r) => r.s !== "decided").length,
        decided: rows.filter((r) => r.s === "decided").length,
        all: rows.length,
      };
      document.querySelectorAll("#decisions-log [data-c]").forEach((e) => (e.textContent = c[e.dataset.c]));
      const visN = $("vis-n");
      const allN = $("all-n");
      if (visN) visN.textContent = rows.filter((r) => r.v).length;
      if (allN) allN.textContent = rows.length;
    }
    function couple() {
      const cpv = $("cpv");
      if (!cpv) return;
      const vis = rows.filter((r) => r.v);
      cpv.innerHTML = vis.length
        ? vis
            .map(
              (r) => `<article class="cd"><div class="t">${esc(r.d)}</div>
      <div class="o"><span>${r.pick === "a" ? "✓ " : "A · "}${esc(r.a)}</span><span>${r.pick === "b" ? "✓ " : "B · "}${esc(r.b)}</span></div>
      <div class="m"><span>${r.s === "decided" ? "Decided" : r.o === "Couple" ? "Your pick" : "Sarah is on it"}</span><span>${r.s === "decided" ? "" : "By " + esc(r.due)}</span></div></article>`,
            )
            .join("")
        : `<div class="empty">Nothing shared yet. Turn on “Couple sees” for a row to put it here.</div>`;
    }
    function render(flashIdx) {
      const list = rows
        .map((r, i) => [r, i])
        .filter(([r]) => (filter === "all" || (filter === "open" ? r.s !== "decided" : r.s === "decided")) && (!onlyCouple || r.v));
      body.innerHTML = list.length
        ? list
            .map(
              ([r, i], n) => `
      <tr data-i="${i}" class="${r.s === "decided" ? "is-decided" : ""} ${i === flashIdx ? "flash" : ""}">
        <td class="idx">${n + 1}</td>
        <td class="dec"><div class="cell" contenteditable="true" data-k="d">${esc(r.d)}</div></td>
        <td class="opts"><div class="cell" style="display:block"><b>A</b> <span contenteditable="true" data-k="a" class="ed">${esc(r.a)}</span> <span class="faint">/</span> <b>B</b> <span contenteditable="true" data-k="b" class="ed">${esc(r.b)}</span>${r.link ? ` <a class="btn-link" href="${r.link}" style="white-space:nowrap;margin-left:6px">Draft →</a>` : ""}</div></td>
        <td class="pick"><span class="owner-dot" style="background:${OWNERS[r.o]}"></span><select class="psel" data-k="o" aria-label="Owner">${Object.keys(OWNERS)
          .map((o) => `<option ${o === r.o ? "selected" : ""}>${o}</option>`)
          .join("")}</select></td>
        <td class="due ${r.late && r.s !== "decided" ? "late" : ""}"><div class="cell" contenteditable="true" data-k="due">${esc(r.due)}</div></td>
        <td class="pick"><select class="psel st-${r.s}" data-k="s" aria-label="Status">${STATUSES.map(([v, l]) => `<option value="${v}" ${v === r.s ? "selected" : ""}>${l}</option>`).join("")}</select></td>
        <td><div class="vis"><input type="checkbox" class="toggle" data-k="v" ${r.v ? "checked" : ""} aria-label="Who can see"><span class="lbl">${r.v ? "Shared" : "Private"}</span></div></td>
      </tr>`,
            )
            .join("")
        : `<tr><td colspan="7"><div class="empty">Nothing ${filter === "decided" ? "decided" : "open"} here${onlyCouple ? " that the couple can see" : ""}.</div></td></tr>`;
      counts();
      couple();
    }
    body.addEventListener("keydown", (e) => {
      const c = e.target.closest("[contenteditable=true]");
      if (!c) return;
      if (e.key === "Enter") {
        e.preventDefault();
        c.blur();
      }
      if (e.key === "Escape") {
        const r = rows[+c.closest("tr").dataset.i];
        c.textContent = r[c.dataset.k];
        c.blur();
      }
    });
    body.addEventListener("focusout", (e) => {
      const c = e.target.closest("[contenteditable=true]");
      if (!c) return;
      const r = rows[+c.closest("tr").dataset.i];
      const k = c.dataset.k;
      const v = c.textContent.trim();
      if (v && v !== r[k]) {
        r[k] = v;
        couple();
        Envoy.toast(r.v ? "Saved · couple will see this update" : "Saved · private");
      }
    });
    body.addEventListener("change", (e) => {
      const t = e.target;
      const tr = t.closest("tr");
      if (!tr) return;
      const i = +tr.dataset.i;
      const r = rows[i];
      const k = t.dataset.k;
      if (k === "v") {
        r.v = t.checked;
        Envoy.toast(t.checked ? "Shared · now in Elena &amp; Marcus’s portal" : "Private again · removed from their portal");
      } else if (k === "s") {
        r.s = t.value;
        Envoy.toast(t.value === "decided" ? `<b>Decided</b> · moved out of Open` : `Status · <b>${t.selectedOptions[0].text}</b>`);
      } else if (k === "o") r.o = t.value;
      render(i);
    });
    document.querySelectorAll("#decisions-log #filt button").forEach((b) =>
      b.addEventListener("click", () => {
        document.querySelectorAll("#decisions-log #filt button").forEach((x) => x.setAttribute("aria-selected", x === b));
        filter = b.dataset.f;
        render();
      }),
    );
    const onlyCoupleBtn = $("only-couple");
    if (onlyCoupleBtn)
      onlyCoupleBtn.addEventListener("click", (e) => {
        onlyCouple = !onlyCouple;
        e.currentTarget.setAttribute("aria-pressed", onlyCouple);
        render();
      });
    function addRow(r) {
      rows.unshift(r);
      if (filter === "decided") {
        filter = "open";
        document.querySelectorAll("#decisions-log #filt button").forEach((x) => x.setAttribute("aria-selected", x.dataset.f === "open"));
      }
      render(0);
      return body.querySelector('tr[data-i="0"] td.dec .cell');
    }
    const addBtn = $("add");
    if (addBtn)
      addBtn.addEventListener("click", () => {
        const c = addRow({ d: "New decision", a: "Option A", b: "Option B", o: "Me", s: "open", due: "—", v: false });
        c.focus();
        document.getSelection().selectAllChildren(c);
      });
    const INS = [
      { d: "Videographer", a: "Lumen Reel", b: "Saltmarsh Films", o: "Me", s: "open", due: "Dec 1", v: false },
      { d: "Harborline room block", a: "Confirm 20 rooms", b: "Release the hold", o: "Couple", s: "couple", due: "Dec 15", v: false },
      { d: "Firm tent hold ($600)", a: "Hold now", b: "Wait to Sep 1", o: "Couple", s: "open", due: "Jan 15", v: false },
    ];
    const aaNote = $("aa-note");
    const aaAll = $("aa-all");
    const aaToggles = [...document.querySelectorAll("#decisions-log [data-aa]")];
    function aaScopeOn() {
      return (aaAll && aaAll.checked) || aaToggles.some((t) => t.checked);
    }
    function syncAaNote() {
      if (!aaNote) return;
      aaNote.innerHTML = aaAll && aaAll.checked
        ? "Auto-approve all is on (demo) — new insights would become decision rows automatically; past ledger unchanged."
        : aaScopeOn()
          ? "Some auto-approve scopes are on (demo) — matching insights can skip Add as decision; you still control Shared/Private per row."
          : "All scopes off — use <b>Add as decision</b> on each card below (you still approve what couples see).";
    }
    function insightAutoApproved(card) {
      if (aaAll && aaAll.checked) return true;
      const t = card.dataset.insType;
      if (t === "timing" && document.querySelector('#decisions-log [data-aa="type-timing"]')?.checked) return true;
      if (t === "hold" && document.querySelector('#decisions-log [data-aa="type-hold"]')?.checked) return true;
      if (t === "weather" && document.querySelector('#decisions-log [data-aa="type-weather"]')?.checked) return true;
      if (document.querySelector('#decisions-log [data-aa="scope-account"]')?.checked) return true;
      if (document.querySelector('#decisions-log [data-aa="scope-project"]')?.checked) return true;
      if (t === "hold" && document.querySelector('#decisions-log [data-aa="vtype-hotel"]')?.checked) return true;
      if (card.dataset.insVendor === "harborline" && document.querySelector('#decisions-log [data-aa="vendor-harborline"]')?.checked) return true;
      return false;
    }
    function wireInsightCard(card) {
      const btn = card.querySelector("button");
      if (!btn || btn.disabled) return;
      if (insightAutoApproved(card)) {
        addRow({ ...INS[+card.dataset.ins] });
        card.classList.add("added");
        btn.disabled = true;
        btn.innerHTML = Envoy.icon("check", 13) + " Auto-approved";
        Envoy.toast("Insight auto-approved (demo) · added to Open decisions");
      }
    }
    if (aaAll) {
      aaAll.addEventListener("change", () => {
        if (aaAll.checked) aaToggles.forEach((t) => { t.checked = true; });
        else aaToggles.forEach((t) => { t.checked = false; });
        Envoy.toast(aaAll.checked ? "Auto-approve all ON (demo)" : "Auto-approve all OFF");
        syncAaNote();
        document.querySelectorAll("#decisions-log .ins:not(.added)").forEach(wireInsightCard);
      });
    }
    aaToggles.forEach((el) =>
      el.addEventListener("change", () => {
        if (!el.checked && aaAll) aaAll.checked = false;
        else if (aaAll && aaToggles.every((t) => t.checked)) aaAll.checked = true;
        Envoy.toast(el.checked ? `Auto-approve ON · ${el.closest(".aa-row")?.querySelector("b")?.textContent || "scope"}` : "Auto-approve scope OFF");
        syncAaNote();
        document.querySelectorAll("#decisions-log .ins:not(.added)").forEach(wireInsightCard);
      }),
    );
    syncAaNote();
    document.querySelectorAll("#decisions-log .ins").forEach((card) =>
      card.querySelector("button").addEventListener("click", (e) => {
        if (card.classList.contains("added")) return;
        addRow({ ...INS[+card.dataset.ins] });
        card.classList.add("added");
        e.currentTarget.disabled = true;
        e.currentTarget.innerHTML = Envoy.icon("check", 13) + " Added";
        Envoy.toast("Added to Open decisions");
      }),
    );
    const pvBtn = $("pv-btn");
    if (pvBtn)
      pvBtn.addEventListener("click", (e) => {
        const on = e.currentTarget.getAttribute("aria-pressed") !== "true";
        e.currentTarget.setAttribute("aria-pressed", on);
        e.currentTarget.querySelector("span").textContent = on ? "Back to planner view" : "Preview as couple";
        e.currentTarget.classList.toggle("btn-primary", on);
        e.currentTarget.classList.toggle("btn-secondary", !on);
        $("planner-view").classList.toggle("hidden", on);
        $("couple-view").classList.toggle("hidden", !on);
        const barL = document.querySelector("#decisions-log .bar-row .l");
        if (barL) barL.style.visibility = on ? "hidden" : "";
      });
    render();
  }
  window.EnvoyDecisionsLog = { init: initDecisionsLog };
  document.addEventListener("envoy:ready", () => initDecisionsLog());
  document.addEventListener("envoy:tab", (e) => {
    if (e.detail === "decisions") initDecisionsLog();
  });
})();
