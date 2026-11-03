window.addEventListener("envoy:ready", () => {
  const { icon, toast, css, weddingSlice, applyWeddingPageHead, withW, contactsHref, BOOK_GATES } = Envoy;
  const qs = new URLSearchParams(location.search);
  const wId = qs.get("w") || "em";
  const wSlice = weddingSlice(wId);
  const mb = document.getElementById("meta-booked");
  const mr = document.getElementById("meta-reply");
  const metaExtra = document.querySelectorAll(".meta-extra");

  const TYPES = ["Venue", "Caterer", "Photo", "Video", "Florist", "Band/DJ", "Officiant", "Planner", "Beauty", "Cake", "Rentals", "Transport", "Hotel block", "Other"];
  let C = [
    ["ashby", "The Ashby Estate", "Margaret Ashby", "Venue", "paid", "Send floor plan to rentals", "2d", "events@ashbyestate.com", "project", 1, "ashbyestate.com"],
    ["wildflour", "Wildflour Catering", "Priya Natarajan", "Caterer", "booked", "Log $7,920 deposit · due Nov 6", "1d", "priya@wildflourcatering.com", "project", 1, "wildflourcatering.com"],
    ["juniper", "Juniper & Vale Photo", "Ana Ortiz", "Photo", "paid", "Engagement shoot · March", "6d", "ana@junipervale.com", "project", 1, "junipervale.com"],
    ["saltmarsh", "Saltmarsh Films", "Ben Hollis", "Video", "waiting", "Nudge Thursday if silent", "—", "ben@saltmarshfilms.com", "project", 0, "saltmarshfilms.com"],
    ["heron", "Heron & Fern Florals", "Iris Calloway", "Florist", "none", "Draft inquiry", "—", "iris@heronandfern.co", "project", 1, "heronandfern.co"],
    ["marlowe", "Marlowe Flower Co.", "June Marlowe", "Florist", "waiting", "Awaiting proposal", "—", "june@marloweflowers.com", "project", 0, "marloweflowers.com"],
    ["sweetgrass", "Sweetgrass Stems", "—", "Florist", "none", "Find email — last send bounced", "—", "", "project", 0, "sweetgrassstems.com"],
    ["tidewater", "The Tidewater Six", "Marcus Lee", "Band/DJ", "paid", "Song list · August", "3w", "book@tidewatersix.com", "project", 1, "tidewatersix.com"],
    ["holloway", "Rev. Anne Holloway", "Anne Holloway", "Officiant", "none", "Intro call with couple", "—", "anne@holloway.org", "project", 1, "holloway.org"],
    ["lena", "Lena Park", "Whitfield & Co.", "Planner", "booked", "Day-of coordinator", "1h", "lena@whitfieldco.com", "project", 0, "whitfieldco.com"],
    ["glam", "Lowcountry Glam", "Tasha Greene", "Beauty", "reply", "Reply with trial dates", "4d", "tasha@lowcountryglam.com", "project", 0, "lowcountryglam.com"],
    ["sugar", "Sugar Hall Cakes", "Odette Hall", "Cake", "waiting", "Tasting dates pending", "—", "hello@sugarhall.com", "project", 0, "sugarhall.com"],
    ["coastal", "Coastal Event Rentals", "Dev Patel", "Rentals", "reply", "Confirm chair count (128)", "5d", "dev@coastalrentals.com", "project", 0, "coastalrentals.com"],
    ["palmetto", "Palmetto Coach Co.", "Ray Simms", "Transport", "declined", "Find alternative shuttle", "1w", "ray@palmettocoach.com", "project", 0, "palmettocoach.com"],
    ["harborline", "Harborline Hotel", "Group Sales", "Hotel block", "waiting", "Fix hold date → Oct 16", "2d", "groups@harborline.com", "project", 0, "harborlinehotel.com"],
    ["stationer", "Inkwell & Oak", "Clara Boone", "Other", "booked", "Save-the-date proofs", "2d", "clara@inkwelloak.com", "project", 1, "inkwelloak.com"],
  ];
  const DIR = [
    ["bloom", "Bloom Theory", "Nadia Reyes", "Florist", "none", "Not on a wedding yet", "—", "nadia@bloomtheory.co", "dir", 1, "bloomtheory.co", "Garden, loose · 3 past weddings"],
    ["kiawah", "Kiawah Cake Studio", "Jules Hart", "Cake", "none", "—", "—", "jules@kiawahcake.com", "dir", 1, "kiawahcake.com", "Buttercream · 9 past weddings"],
    ["lantern", "Lens & Lantern Video", "Omar Diaz", "Video", "none", "—", "—", "omar@lenslantern.com", "dir", 1, "lenslantern.com", "Documentary · 5 past weddings"],
    ["holycity", "Holy City Shuttles", "Fran Moss", "Transport", "none", "—", "—", "fran@holycityshuttle.com", "dir", 1, "holycityshuttle.com", "Fleet of 4 · 11 past weddings"],
  ];

  const LADDER = ["none", "waiting", "reply", "booked", "paid", "declined"];
  const SLABEL = { none: ["Not contacted", "s-none"], waiting: ["Waiting", "s-waiting"], reply: ["Needs reply", "s-reply"], booked: ["Booked", "s-booked"], paid: ["Deposit paid", "s-paid"], declined: ["Declined", "s-declined"] };
  const bucket = (s) => s;
  const ALL_LABELS = ["Shortlist", "Charleston", "Garden", "Peak season", "Family-style", "Rain plan"];
  const CLABELS = {
    ashby: ["Charleston", "Booked team"], wildflour: ["Family-style", "Booked team"], juniper: ["Booked team"], heron: ["Shortlist", "Garden", "Florist"],
    marlowe: ["Shortlist", "Florist"], sweetgrass: ["Florist"], glam: ["Peak season"], coastal: ["Rain plan"], stationer: ["Booked team"],
    bloom: ["Garden", "Florist"], kiawah: ["Charleston"], lantern: ["Peak season"], holycity: ["Charleston"],
  };
  const OTHER = { ashby: ["Priya & Sam · May 2027", "Noor & Eli · Apr 2027", "Kate & Dom · Nov 2026", "Rosa & Ian · Jun 2027"], wildflour: ["Priya & Sam · May 2027", "Noor & Eli · Apr 2027", "Kate & Dom · Nov 2026"], juniper: ["Priya & Sam · May 2027", "Rosa & Ian · Jun 2027", "Kate & Dom · Nov 2026", "Noor & Eli · Apr 2027", "Bea & Jon · Aug 2027", "Lila & Max · Sep 2027"], heron: ["Rosa & Ian · Jun 2027", "Kate & Dom · Nov 2026"], tidewater: ["Noor & Eli · Apr 2027", "Bea & Jon · Aug 2027"], holloway: ["Priya & Sam · May 2027", "Rosa & Ian · Jun 2027", "Kate & Dom · Nov 2026", "Bea & Jon · Aug 2027", "Lila & Max · Sep 2027"], stationer: ["Priya & Sam · May 2027", "Noor & Eli · Apr 2027", "Lila & Max · Sep 2027"] };
  const ALL_WEDDINGS = ["Priya & Sam · May 2027", "Noor & Eli · Apr 2027", "Rosa & Ian · Jun 2027", "Bea & Jon · Aug 2027", "Lila & Max · Sep 2027", "Kate & Dom · Nov 2026"];
  const otherFor = (c) => OTHER[c[0]] || (OTHER[c[0]] = c[11] ? ALL_WEDDINGS.slice(0, Math.min(+(c[11].match(/(\d+) past/) || [0, 0])[1], 6)) : []);

  let pickWedding = false;
  const F = {
    scope: qs.get("scope") === "project" ? "project" : "dir",
    status: qs.get("status") || "all",
    types: new Set(qs.get("type") ? [qs.get("type")] : []),
    email: "all",
    q: "",
    label: qs.get("label") || "",
    view: "",
    sortKey: "name",
    sortDir: "asc",
  };
  let selected = qs.get("c") || (F.scope === "dir" ? "ashby" : "glam");
  let fixFocus = qs.get("fix") || (location.hash === "#fix" ? "auto" : "");
  let replyOpen = fixFocus === "reply";

  function accountBookRows() {
    return C.filter((c) => c[9]).concat(DIR);
  }

  function weddingCount(c) {
    if (c[8] === "dir") return +(c[11]?.match(/(\d+) past/) || [0, 0])[1] || 0;
    return otherFor(c).length + 1;
  }

  function syncPageHead() {
    const eb = document.getElementById("page-eyebrow");
    const attachBtn = document.getElementById("open-attach");
    const backDir = document.getElementById("back-to-dir");
    if (F.scope === "dir") {
      if (eb) eb.textContent = "Account · Directory";
      document.title = "Directory · Contacts · Envoy";
      const book = accountBookRows();
      document.getElementById("meta-n").textContent = `${book.length} in contact book`;
      if (mb) mb.textContent = `${book.filter((c) => c[8] === "dir").length} directory-only`;
      if (mr) mr.textContent = `${C.filter((c) => c[4] === "reply").length} need your reply on weddings`;
      attachBtn?.classList.add("hide");
      backDir?.classList.add("hide");
      metaExtra.forEach((el) => el.classList.remove("hide"));
    } else {
      applyWeddingPageHead("Contacts");
      document.getElementById("meta-n").textContent = `${wSlice.contactsOn} on this wedding`;
      if (mb) mb.textContent = `${wSlice.contactsBooked} booked`;
      if (mr) mr.textContent = `${wSlice.contactsReply} need your reply`;
      attachBtn?.classList.remove("hide");
      backDir?.classList.remove("hide");
      if (backDir) backDir.href = "contacts.html";
      metaExtra.forEach((el) => el.classList.remove("hide"));
    }
  }
  syncPageHead();

  if (wId !== "em" && !wSlice.fullSpine && F.scope === "project") {
    const note = document.createElement("div");
    note.className = "card card-pad mb-4";
    note.innerHTML = `<span class="text-sm"><b>${wSlice.label}</b> — lighter demo slice. Switch to <a class="btn-link" href="${contactsHref(true)}">Elena &amp; Marcus</a> for the full vendor spine.</span>`;
    document.querySelector("main.page").insertBefore(note, document.querySelector("main.page").children[1]);
  }

  function goApproveSend(vendorName) {
    if (vendorName) toast(`Review draft for <b>${vendorName.replace("&amp;", "&")}</b> in Approve &amp; send`);
    location.href = withW("approve-send.html");
  }

  document.getElementById("type-menu-pop").innerHTML = `<div class="eyebrow">Vendor types</div><div class="type-checks" id="type-checks">${TYPES.map((t) => `<label><input type="checkbox" value="${t}" ${F.types.has(t) ? "checked" : ""}> ${t}</label>`).join("")}</div>`;
  document.getElementById("advanced-filters").innerHTML = `
    <div class="eyebrow">Sort</div>
    <div class="outreach-filter-row" data-f="sortKey">
      <button type="button" class="fopt" data-v="name" aria-pressed="true">Name</button>
      <button type="button" class="fopt" data-v="type" aria-pressed="false">Type</button>
      <button type="button" class="fopt" data-v="weddings" aria-pressed="false">Weddings</button>
    </div>
    <div class="outreach-filter-row" data-f="sortDir">
      <button type="button" class="fopt" data-v="asc" aria-pressed="true">Ascending</button>
      <button type="button" class="fopt" data-v="desc" aria-pressed="false">Descending</button>
    </div>
    <div class="eyebrow">Status</div>
    <div class="outreach-filter-row" data-f="status">
      <button type="button" class="fchip" data-v="all" aria-pressed="true">All</button>
      <button type="button" class="fchip" data-v="reply" aria-pressed="false">Needs reply</button>
      <button type="button" class="fchip" data-v="waiting" aria-pressed="false">Waiting</button>
      <button type="button" class="fchip" data-v="booked" aria-pressed="false">Booked</button>
    </div>
    <div class="eyebrow">Labels</div>
    <div class="outreach-filter-row" id="label-chips">${ALL_LABELS.map((l) => `<button type="button" class="fchip" data-label="${l}" aria-pressed="${F.label === l}">${l}</button>`).join("")}</div>
    <div class="eyebrow">Saved views</div>
    <select class="input" id="saved-view" aria-label="Saved views">
      <option value="">Saved views…</option>
      <option value="reply">Needs reply · 2</option>
      <option value="florists">Florists · 3</option>
      <option value="booked-team">Booked · 7</option>
      <option value="in-book">In contact book · 8</option>
      <option value="missing-email">Missing email · 1</option>
    </select>
    <div class="eyebrow">Email</div>
    <div class="outreach-filter-row" data-f="email">
      <button type="button" class="fopt" data-v="all" aria-pressed="true">Any</button>
      <button type="button" class="fopt" data-v="missing" aria-pressed="false">Missing</button>
    </div>`;

  document.getElementById("type-checks").addEventListener("change", (e) => {
    const inp = e.target.closest('input[type="checkbox"]');
    if (!inp) return;
    if (inp.checked) F.types.add(inp.value);
    else F.types.delete(inp.value);
    F.view = "";
    document.getElementById("saved-view").value = "";
    syncFilterAll();
    render();
  });
  document.getElementById("filter-all").addEventListener("click", () => {
    F.types.clear();
    F.status = "all";
    F.label = "";
    F.email = "all";
    F.view = "";
    F.q = "";
    document.getElementById("q").value = "";
    document.getElementById("saved-view").value = "";
    document.querySelectorAll("#type-checks input").forEach((i) => { i.checked = false; });
    syncFilterAll();
    render();
  });
  function syncFilterAll() {
    const on = !F.types.size && F.status === "all" && !F.label && F.email === "all" && !F.view && !F.q;
    document.getElementById("filter-all").setAttribute("aria-pressed", on);
  }
  document.getElementById("label-chips").addEventListener("click", (e) => {
    const b = e.target.closest("[data-label]");
    if (!b) return;
    F.label = F.label === b.dataset.label ? "" : b.dataset.label;
    F.view = "";
    document.getElementById("saved-view").value = "";
    render();
  });
  document.getElementById("saved-view").addEventListener("change", (e) => {
    F.view = e.target.value;
    F.label = "";
    if (F.view === "reply") Object.assign(F, { status: "reply", types: new Set(), email: "all" });
    else if (F.view === "florists") Object.assign(F, { status: "all", types: new Set(["Florist"]), email: "all" });
    else if (F.view === "booked-team") Object.assign(F, { status: "booked", types: new Set(), email: "all" });
    else if (F.view === "in-book") Object.assign(F, { status: "all", types: new Set(), email: "all", bookOnly: true });
    else if (F.view === "missing-email") Object.assign(F, { status: "all", types: new Set(), email: "missing", bookOnly: false });
    else { F.bookOnly = false; }
    syncTypeChecks();
    render();
  });
  document.getElementById("advanced-filters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-v]");
    if (!b || !b.closest("[data-f]")) return;
    const g = b.closest("[data-f]").dataset.f;
    F[g] = b.dataset.v;
    render();
  });
  function syncTypeChecks() {
    document.querySelectorAll("#type-checks input").forEach((i) => { i.checked = F.types.has(i.value); });
  }
  document.getElementById("q").addEventListener("input", (e) => { F.q = e.target.value.toLowerCase(); render(); });
  document.getElementById("reset").onclick = () => {
    Object.assign(F, { status: "all", types: new Set(), email: "all", q: "", label: "", view: "", bookOnly: false, sortKey: "name", sortDir: "asc" });
    document.getElementById("q").value = "";
    document.getElementById("saved-view").value = "";
    document.querySelectorAll("#type-checks input").forEach((i) => { i.checked = false; });
    syncFilterAll();
    render();
  };

  function rowsFor() {
    const src = F.scope === "dir" ? accountBookRows() : C;
    let rows = src.filter((c) =>
      (F.status === "all" || bucket(c[4]) === F.status) &&
      (!F.types.size || F.types.has(c[3])) &&
      (F.email === "all" || (F.email === "has" ? !!c[7] : !c[7])) &&
      (!F.label || (CLABELS[c[0]] || []).includes(F.label)) &&
      (!F.bookOnly || c[9]) &&
      (!F.q || (c[1] + c[2] + c[7] + (CLABELS[c[0]] || []).join(" ")).toLowerCase().includes(F.q)));
    const dir = F.sortDir === "asc" ? 1 : -1;
    rows.sort((a, b) => {
      if (F.sortKey === "type") return dir * a[3].localeCompare(b[3]) || a[1].localeCompare(b[1]);
      if (F.sortKey === "weddings") return dir * (weddingCount(a) - weddingCount(b));
      return dir * a[1].localeCompare(b[1]);
    });
    return rows;
  }

  function rowHtml(c) {
    const [lab, cls] = SLABEL[c[4]];
    const inDirView = F.scope === "dir";
    const sel = c[0] === selected ? " is-selected" : "";
    const nWed = weddingCount(c);
    const sub = inDirView ? `${c[3]} · ${nWed} ${nWed === 1 ? "wedding" : "weddings"}` : `${c[3]} · ${lab}`;
    return `<button type="button" class="outreach-row${sel}${c._new ? " new-row" : ""}" data-id="${c[0]}" role="option" aria-selected="${c[0] === selected}">
      <span class="logo-sq">${c[1].replace(/^(The|Rev\.) /, "")[0]}</span>
      <span class="outreach-row-main"><span class="outreach-row-name">${c[1]}${c[9] ? " ★" : ""}</span><span class="outreach-row-sub">${sub}</span></span>
      ${inDirView ? "" : `<span class="status ${cls}">${lab === "Needs reply" ? "!" : ""}</span>`}
    </button>`;
  }

  function renderListBody(rows) {
    if (F.scope === "dir" && !F.q && !F.types.size && F.status === "all" && !F.label) {
      const needs = rows.filter((c) => !c[7]);
      const ok = rows.filter((c) => c[7]);
      let body = "";
      if (needs.length) body += `<div class="outreach-type outreach-section-needs">Contact details needed · ${needs.length}</div>` + needs.map(rowHtml).join("");
      const order = [...new Set(ok.map((c) => c[3]))].sort();
      order.forEach((t) => {
        const chunk = ok.filter((c) => c[3] === t);
        if (!chunk.length) return;
        body += `<div class="outreach-type">${t} · ${chunk.length}</div>` + chunk.map(rowHtml).join("");
      });
      return body || rows.map(rowHtml).join("");
    }
    if (F.scope === "project" && !F.q && !F.types.size) {
      const order = [...new Set(rows.map((c) => c[3]))].sort();
      let body = "";
      order.forEach((t) => {
        const chunk = rows.filter((c) => c[3] === t);
        if (!chunk.length) return;
        body += `<div class="outreach-type">${t} · ${chunk.length}</div>` + chunk.map(rowHtml).join("");
      });
      return body || rows.map(rowHtml).join("");
    }
    return rows.map(rowHtml).join("");
  }

  function render() {
    ["status", "email", "sortKey", "sortDir"].forEach((g) => {
      document.querySelectorAll(`#advanced-filters [data-f="${g}"] [data-v]`).forEach((b) => b.setAttribute("aria-pressed", b.dataset.v === F[g]));
    });
    document.querySelectorAll("#label-chips [data-label]").forEach((b) => b.setAttribute("aria-pressed", b.dataset.label === F.label));
    syncFilterAll();

    const rows = rowsFor();
    const typeLabel = F.types.size === 1 ? [...F.types][0] : F.types.size > 1 ? `${F.types.size} types` : "";
    document.getElementById("result-n").textContent = `${rows.length} ${rows.length === 1 ? "contact" : "contacts"}${typeLabel ? " · " + typeLabel : ""}`;
    document.getElementById("empty").classList.toggle("hide", rows.length > 0);
    document.getElementById("inbox-list").classList.toggle("hide", rows.length === 0);
    document.getElementById("list-title").textContent = F.scope === "dir" ? "Contact book" : `${wSlice.label}`;
    syncPageHead();
    document.getElementById("inbox-list").innerHTML = renderListBody(rows);
    if (rows.length && !rows.some((c) => c[0] === selected)) selected = rows[0][0];
    drawDrawer();
  }

  document.getElementById("inbox-list").addEventListener("click", (e) => {
    const row = e.target.closest(".outreach-row[data-id]");
    if (!row) return;
    const id = row.dataset.id;
    const c = C.concat(DIR).find((x) => x[0] === id);
    if (c && F.scope === "project" && c[8] === "dir" && e.detail === 2) { attach([id]); return; }
    selected = id;
    render();
  });

  const THREADS = {
    glam: [["Tasha Greene", "Oct 29", 0, "Hi Sarah! We'd love to do Elena's hair & makeup. Trials are usually 6–8 weeks out — do they want a trial in August or September? We'd need a 30% retainer to hold Oct 16."], ["You", "Oct 27", 1, "Hi Tasha — inquiring for Oct 16, 2027 at The Ashby Estate. Bride + 5 bridesmaids + 2 moms, getting ready on-site. Are you available?"]],
    wildflour: [["Priya Natarajan", "Yesterday", 0, "Signed contract attached. Deposit of $7,920 (30%) due Nov 6 to lock the date. Tasting penciled for Feb 12."], ["You", "Oct 30", 1, "Elena & Marcus loved the Lowcountry menu. Let's go with option B, 128 guests, family-style."]],
    harborline: [["Group Sales", "Oct 31", 0, "We've placed a courtesy hold of 30 rooms for Oct 8–10, 2027. Please sign the block agreement within 14 days."]],
    sweetgrass: [["Mail delivery", "Oct 30", 0, "Message not delivered: address info@sweetgrass-stems.com not found."]],
  };

  function fixFor(c) {
    if (F.scope === "dir" || c[8] === "dir") return "";
    if (!c[7]) return `<div class="fix" id="fix" data-fix="email">
      <div class="fix-t">${icon("alert", 14)}Last send bounced — add an email and retry</div>
      <div class="fix-d">Envoy found <b>hello@sweetgrassstems.com</b> on ${c[10]}. Your inquiry is saved and will resend as-is.</div>
      <div class="fix-row"><input class="input" id="fix-email" type="email" value="hello@sweetgrassstems.com" aria-label="Email for ${c[1]}"><button type="button" class="btn btn-primary btn-sm" id="fix-retry">${icon("send", 13)}Retry send</button></div></div>`;
    if (c[4] === "reply") {
      const ask = { glam: "Trial dates", coastal: "Chair count (128)" }[c[0]] || "Their last question";
      const body = { glam: "Hi Tasha — thank you! Elena would love a trial in <b>late August</b>; Sat Aug 21 or Sun Aug 29 both work. Happy to send the 30% retainer to hold Oct 16 once you confirm.<br><br>Warmly,<br>Sarah",
        coastal: "Hi Dev — confirming <b>128 chairs</b> (cap 140), plus 14 farm tables for the estate reception. Can you send an updated quote?<br><br>Thanks,<br>Sarah" }[c[0]] || `Hi ${c[2].split(" ")[0]} — thanks for your note. Following up for Elena &amp; Marcus, Oct 16, 2027.<br><br>Sarah`;
      return `<div class="fix" id="fix" data-fix="reply">
        <div class="fix-t">${icon("thread", 14)}Needs reply · waiting on you ${c[6]}</div>
        <div class="fix-d">They asked: <b>${ask}</b>. Envoy drafted an answer from the project details.</div>
        ${replyOpen ? `<div class="input contacts-fix-body" contenteditable="true" id="fix-body">${body}</div>
          <div class="fix-row fix-row-end"><button type="button" class="btn btn-ghost btn-sm" id="fix-cancel">Cancel</button><button type="button" class="btn btn-primary btn-sm" id="fix-send">${icon("send", 13)}Send reply</button></div>`
        : `<div class="fix-row"><button type="button" class="btn btn-primary btn-sm" id="fix-draft">${icon("spark", 13)}Draft reply</button><button type="button" class="btn btn-ghost btn-sm" data-toast="Reminder set for Thursday">${icon("clock", 13)}Nudge Thu</button></div>`}</div>`;
    }
    if (c[0] === "harborline" && !c._fixed) return `<div class="fix" id="fix" data-fix="hold">
      <div class="fix-t">${icon("alert", 14)}Hold is Oct 8–10 — wedding is Oct 16</div>
      <div class="fix-d">Ask Group Sales to move the 30-room courtesy hold to <b>Oct 15–17, 2027</b>.</div>
      <div class="fix-row"><button type="button" class="btn btn-primary btn-sm" id="fix-hold">${icon("send", 13)}Request Oct 15–17 hold</button></div></div>`;
    return "";
  }

  function weddingsFor(c) {
    const n = weddingCount(c);
    if (!c[9]) return `<dt>Weddings</dt><dd>First wedding together · <button type="button" class="btn-link" id="save-pref">Add to contact book</button></dd>`;
    const o = otherFor(c);
    return `<dt>Weddings</dt><dd><b>${n} ${n === 1 ? "wedding" : "weddings"} with you</b>${o.length ? `<div class="faint text-xs mt-1">${o.slice(0, 2).join(" · ")}${o.length > 2 ? ` · +${o.length - 2} more` : ""}</div>` : ""}</dd>`;
  }

  function bookGateHtml(c) {
    const items = BOOK_GATES[c[3]] || BOOK_GATES.Other;
    return `<div class="book-gate" id="book-gate">
      <div class="eyebrow mb-2">Before Booked · ${c[3]} · skippable</div>
      <p class="faint text-sm mb-2">Quick checklist by vendor type — not a rules engine.</p>
      <ul class="gate-list">${items.map((t, i) => `<li><label><input type="checkbox" data-gi="${i}"> ${t}</label></li>`).join("")}</ul>
      <div class="row gap-2 mt-3"><button type="button" class="btn btn-ghost btn-sm" id="gate-skip">Skip for now</button><button type="button" class="btn btn-primary btn-sm" id="gate-book">Mark Booked</button></div></div>`;
  }

  function drawDrawer() {
    const c = C.concat(DIR).find((x) => x[0] === selected) || accountBookRows()[0];
    const [lab, cls] = SLABEL[c[4]];
    const th = THREADS[c[0]] || (F.scope === "dir" ? [["You", "Sep 2026", 1, `Added <b>${c[1]}</b> to your contact book — not on a wedding thread yet.`]] : [["You", "Oct 20", 1, `Hi ${c[2].split(" ")[0]} — following up on Elena & Marcus, Oct 16, 2027 at The Ashby Estate.`]]);
    const fix = fixFor(c);
    const free = ALL_WEDDINGS.filter((w) => !otherFor(c).includes(w));
    const projectScope = F.scope === "project";
    document.getElementById("drawer").innerHTML = `
      <div class="card-head contacts-thread-head">
        <div class="row row-start grow-min"><span class="logo-sq contacts-drawer-logo">${c[1].replace(/^(The|Rev\.) /, "")[0]}</span>
          <div class="min-w-0"><div class="text-md fw-600">${c[1]}</div><div class="cell-sub">${c[2]} · ${c[3]}</div>
          <div class="row gap-2 mt-2 wrap">${c[8] === "dir" || F.scope === "dir" ? '<span class="chip chip-outline">Contact book</span>' : `<span class="status ${cls}">${lab}</span>`}${c[9] ? '<span class="chip chip-outline">In contact book</span>' : ""}</div></div></div>
        <div class="row gap-1">${projectScope && c[8] === "dir" ? `<button type="button" class="btn btn-primary btn-sm" data-attach-one="${c[0]}">${icon("attach", 13)}Attach to wedding</button>` : projectScope ? `<button type="button" class="btn btn-ghost btn-sm btn-icon" data-copy="${c[7] || ""}" title="Copy email">${icon("copy", 15)}</button><button type="button" class="btn btn-ghost btn-sm btn-icon" data-draft="${c[1]}" title="Draft in Approve &amp; send">${icon("edit", 15)}</button>` : ""}
        </div>
      </div>
      <div class="drawer-scroll">
        ${fix ? `<div class="card-body card-body-fix">${fix}</div>` : ""}
        <div class="card-body ${fix ? "card-body-after-fix" : "card-body-loose"}">
          ${c._showGate && projectScope && c[8] !== "dir" ? `<div class="mb-4">${bookGateHtml(c)}</div>` : ""}
          <dl class="kv"><dt>Email</dt><dd>${c[7] || '<span class="accent">Missing</span>'}</dd><dt>Website</dt><dd><a class="btn-link" href="#" onclick="return false">${c[10]}</a></dd><dt>Next action</dt><dd>${c[5]}</dd>${weddingsFor(c)}</dl>
          ${projectScope && c[8] !== "dir" ? `<div class="eyebrow mt-4 mb-2">Status</div><div class="ladder" role="group" aria-label="Status">${LADDER.map((s, i) => `${i ? '<span class="arrow">→</span>' : ""}<button type="button" data-set="${s}" aria-pressed="${c[4] === s}">${SLABEL[s][0]}</button>`).join("")}</div>` : ""}
          <div class="row gap-2 mt-4 wrap">
            ${projectScope && c[9] ? `<button type="button" class="btn btn-secondary btn-sm" id="attach-other">${icon("attach", 13)}Attach to another wedding</button>` : ""}
            ${projectScope && c[8] !== "dir" && !fix ? `<button type="button" class="btn btn-secondary btn-sm" data-draft="${c[1]}">${icon("edit", 13)}Draft inquiry</button>` : ""}
            ${projectScope && c[8] !== "dir" ? `<a class="btn btn-ghost btn-sm" href="${withW("approve-send.html")}">${icon("send", 13)}Approve &amp; send</a>` : ""}
          </div>
          ${projectScope && c[9] && pickWedding ? `<div class="wed-list" id="wed-list">${free.length ? free.map((w) => `<button type="button" data-wed="${w}"><span>${w.replace("&", "&amp;")}</span><span class="faint text-xs">Attach →</span></button>`).join("") : '<span class="faint text-sm">Already on every active wedding.</span>'}</div>` : ""}
        </div>
        <div class="thread-body contacts-thread-pane">
          <div class="row-between mb-3"><div class="eyebrow m-0">Conversation</div><span class="faint text-xs">${th.length} ${th.length === 1 ? "message" : "messages"}</span></div>
          <div class="stack stack-tight">${th.map((m) => `<div class="msg ${m[2] ? "me" : ""}"><div class="msg-h"><b>${m[0]}</b><span>${m[1]}</span></div>${m[3]}</div>`).join("")}</div>
        </div>
      </div>
      <form class="ask-bar" onsubmit="event.preventDefault(); Envoy.toast('Envoy is drafting — you\\'ll review before it sends'); this.reset();">
        ${icon("spark", 15)}<input class="input" placeholder="Ask Envoy about ${c[1]}…" aria-label="Ask Envoy"><button class="btn btn-primary btn-sm btn-icon" title="Ask">${icon("arrowr", 14)}</button>
      </form>`;
    if (fixFocus && fix) {
      document.getElementById("fix").classList.add("is-focus");
      requestAnimationFrame(() => { const ds = document.querySelector("#drawer .drawer-scroll"); if (ds) ds.scrollTop = 0; const el = document.getElementById("fix-email") || document.getElementById("fix-retry") || document.getElementById("fix-send") || document.getElementById("fix-draft") || document.getElementById("fix-hold"); el && el.focus({ preventScroll: true }); });
      fixFocus = "";
    }
  }

  const THREAD_ADD = (id, who, text) => (THREADS[id] = THREADS[id] || []).unshift([who, "Just now", who === "You" ? 1 : 0, text]);
  document.getElementById("drawer").addEventListener("click", (e) => {
    const c = C.concat(DIR).find((x) => x[0] === selected); if (!c) return;
    const cp = e.target.closest("[data-copy]");
    if (cp) {
      cp.dataset.copy ? (navigator.clipboard?.writeText(cp.dataset.copy), toast("Copied <b>" + cp.dataset.copy + "</b>")) : toast("No email on file — <b>add one</b>");
      return;
    }
    const dr = e.target.closest("[data-draft]");
    if (dr) { goApproveSend(dr.dataset.draft); return; }
    const ao = e.target.closest("[data-attach-one]");
    if (ao) { attach([ao.dataset.attachOne]); return; }
    const t = e.target.closest("button"); if (!t) return;
    if (t.id === "fix-retry") { const v = document.getElementById("fix-email").value.trim(); if (!/@/.test(v)) { toast("Add a valid email first"); return; }
      c[7] = v; c[4] = "waiting"; c[5] = "Nudge Thursday if silent"; THREAD_ADD(c[0], "You", "Inquiry resent — Oct 16, 2027 at The Ashby Estate, ~128 guests.");
      render(); toast(`Sent to <b>${v}</b> · ${c[1]} → <b>Waiting</b>`); }
    else if (t.id === "fix-draft") { replyOpen = true; drawDrawer(); document.getElementById("fix-body")?.focus(); }
    else if (t.id === "fix-cancel") { replyOpen = false; drawDrawer(); }
    else if (t.id === "fix-send") { THREAD_ADD(c[0], "You", document.getElementById("fix-body").innerHTML); c[4] = "waiting"; c[5] = "Waiting on " + c[2].split(" ")[0]; c[6] = "now"; replyOpen = false;
      render(); toast(`Reply sent to <b>${c[1]}</b> · Needs reply → <b>Waiting</b>`); }
    else if (t.id === "fix-hold") { c._fixed = 1; c[5] = "Awaiting revised hold · Oct 15–17"; THREAD_ADD(c[0], "You", "Could we move the 30-room courtesy hold to Oct 15–17, 2027? The wedding is Saturday, Oct 16.");
      render(); toast("Date change requested · <b>Harborline</b> stays <b>Waiting</b>"); }
    else if (t.id === "attach-other") { pickWedding = !pickWedding; drawDrawer(); }
    else if (t.dataset.wed) { otherFor(c).push(t.dataset.wed); pickWedding = false; drawDrawer(); toast(`<b>${c[1]}</b> attached to <b>${t.dataset.wed.replace("&", "&amp;")}</b>`); }
    else if (t.id === "save-pref") { c[9] = 1; render(); toast(`<b>${c[1]}</b> added to your contact book`); }
    else if (t.id === "gate-skip") { c._showGate = false; c._bookGateDone = true; c[4] = "booked"; render(); toast(`<b>${c[1]}</b> → Booked (gate skipped)`); }
    else if (t.id === "gate-book") { c._showGate = false; c._bookGateDone = true; c[4] = "booked"; render(); toast(`<b>${c[1]}</b> → Booked · checklist noted`); }
    else if (t.dataset.set) {
      if (t.dataset.set === "booked" && LADDER.indexOf(c[4]) < LADDER.indexOf("booked") && !c._bookGateDone) { c._showGate = true; drawDrawer(); return; }
      c._showGate = false;
      c[4] = t.dataset.set;
      render();
      toast(`${c[1]} → <b>${SLABEL[t.dataset.set][0]}</b>`);
    }
  });

  const attachCard = document.getElementById("attach");
  const showAttach = () => { if (F.scope !== "project") return; attachCard.classList.remove("hide"); attachCard.scrollIntoView({ behavior: "smooth", block: "start" }); };
  document.getElementById("open-attach").onclick = showAttach;
  document.getElementById("close-attach").onclick = () => attachCard.classList.add("hide");
  document.getElementById("dir-grid").innerHTML = DIR.map((d, i) => `
    <label class="dir-item"><span class="check"><input type="checkbox" value="${d[0]}" ${i < 3 ? "checked" : ""}></span>
      <div><div class="cell-main">${d[1]} <span class="chip chip-outline chip-xs">Contact book</span></div><div class="cell-sub">${d[3]} · ${d[11]}</div></div></label>`).join("");
  document.getElementById("dir-grid").addEventListener("change", () => { document.getElementById("attach-n").textContent = document.querySelectorAll("#dir-grid input:checked").length; });
  function attach(ids) {
    ids.forEach((id) => { const i = DIR.findIndex((d) => d[0] === id); if (i < 0) return; const d = DIR.splice(i, 1)[0]; const row = d.slice(0, 11); row[8] = "project"; row[5] = "Draft inquiry"; row._new = 1; C.unshift(row); });
    F.scope = "project";
    F.status = "all";
    F.types.clear();
    attachCard.classList.add("hide");
    const url = new URL(location.href);
    url.searchParams.set("scope", "project");
    history.replaceState(null, "", url.pathname + url.search + url.hash);
    render();
    toast(`Attached <b>${ids.length}</b> contact-book ${ids.length === 1 ? "vendor" : "vendors"} — inquiries ready to draft`);
  }
  document.getElementById("do-attach").onclick = () => attach([...document.querySelectorAll("#dir-grid input:checked")].map((x) => x.value));

  Envoy.mountFloristCompareMatrix(document.getElementById("florist-matrix"), { compact: true });

  const R = [
    ["Heron & Fern", [8, 9.5, 9, 9.5, 8, 9], css("--chart-1")],
    ["Marlowe Flower Co.", [6, 8.5, 9, 6, 9.5, 8], css("--chart-2")],
    ["Bloom Theory", [9.5, 7, 5.5, 5, 6.5, 7], css("--chart-4")],
  ];
  document.getElementById("radar-legend").innerHTML = R.map((r) => `<span><i style="background:${r[2]}"></i>${r[0]}</span>`).join("");
  const hexA = (h, a) => h + Math.round(a * 255).toString(16).padStart(2, "0");
  if (window.Chart) {
    new Chart(document.getElementById("radar"), {
      type: "radar",
      data: { labels: ["Price fit", "Style", "Date", "Replies", "Package", "Track record"],
        datasets: R.map((r, i) => ({ label: r[0], data: r[1], borderColor: r[2], backgroundColor: hexA(r[2], i === 0 ? 0.10 : 0.06), borderWidth: i === 0 ? 2 : 1.5, pointRadius: 2.5, pointBackgroundColor: r[2], borderDash: i === 2 ? [4, 3] : [] })) },
      options: { maintainAspectRatio: false, scales: { r: { min: 0, max: 10, ticks: { display: false, stepSize: 2.5 }, grid: { color: css("--line") }, angleLines: { color: css("--line") }, pointLabels: { color: css("--ink-2"), font: { size: 12, weight: 500 } } } } },
    });
  }

  render();
  if (location.hash === "#attach" && F.scope === "project") showAttach();
  const goContactsTab = (name) => {
    const b = document.querySelector(`[data-tabs="#contacts-views"] [data-tab="${name}"]`);
    if (b) b.click();
  };
  if (location.hash === "#compare") { goContactsTab("compare"); setTimeout(() => document.getElementById("compare").scrollIntoView({ block: "start" }), 50); }
  else if (location.hash === "#attach") goContactsTab("list");
  else if (location.hash === "#draft") goApproveSend("Heron & Fern Florals");
});
