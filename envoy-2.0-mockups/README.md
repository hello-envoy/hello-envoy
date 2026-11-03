# Envoy 2.0 interactive demo (SCRUM-341)

Static HTML/CSS/JS mockups — **hello-envoy** primary landing + planner demo. Design tokens and logo from [hello-envoy/envoy-redesign](https://github.com/hello-envoy/envoy-redesign) (reference only; no PRs there).

## Run locally (exact steps)

From the **repository root**:

```bash
npm install
npm run demo
```

Open [http://localhost:5174/](http://localhost:5174/) (hub) or go straight to:

- [Portfolio / dashboard](http://localhost:5174/app/portfolio.html) — start of demo spine
- [Landing](http://localhost:5174/landing/index.html) — marketing + **Open the demo →**
- [Waitlist stub](http://localhost:5174/landing/waitlist.html)

Alternative (no Node): from this folder, `python3 -m http.server 5174` and open `http://localhost:5174/index.html`.

Chart.js and Instrument Sans load from the network. The budget **Sankey** is pure SVG in `assets/app.js` and works offline.

## Demo spine (click in order)

1. **Portfolio** — Needs-you one-clicks, 12-month timeline, open **Elena & Marcus** (or Kate & Dom / Noor & Eli / Priya & Sam for overview slice).
2. **Overview** — Needs attention, budget **Sankey** (booked vs spent), milestones + activity (no % complete theater).
3. **Contacts** — Grouped vendors, contact book attach, compare radar → vendor compare.
4. **Approve & send** — Thread above draft, From visible, single **Approve & send** (no review checkbox).
5. **Couple portal** — This week tasks, text-only florist A/B, Mark as paid (outside Envoy), quiet budget flow.
6. **Project / Decisions / Share update** — via tabs and **More** menu.

Day-of packet and full second-wedding data are available but not on the spine.

## Interactive vs static

| Interactive (client-side) | Mostly static / toast |
|---------------------------|------------------------|
| Portfolio filters, Needs-you done, timeline links | New wedding, most quiet-table rows |
| Overview Sankey resize, donut toggle, vendor table tabs, attention one-clicks | Milestone dates (view only) |
| Contacts filters, drawer thread, attach directory, compare radar | Full multi-wedding contact data |
| Approve & send draft switch, From change, Apply suggestion, Approve & send, Undo edit | Real Gmail send |
| Vendor compare lean + radar bold | Book → Approve queue (toast) |
| Decisions ledger edit, couple-visible toggles, Preview as couple | Persist across refresh |
| Couple A/B pick, guest stepper, Mark as paid | Notes to Sarah (toast) |
| Share update visibility toggles + preview | Send update |
| Project kanban drag, This week tabs, Sheet view | |
| Saved views / filters on portfolio & contacts | Backend waitlist |

## Deferred / out of scope

- Merge or production API wiring
- Real photos / moodboards (E20-019, E20-042)
- Full data for all 24 weddings (E&M spine is richest)
- Auto-send / multi-axis approval matrices on spine
- Companion PM repo sync (PR #138) — keep narrative aligned manually

## Docs

- `STEPS.md` — flight log + **FULL REBUILD** notes
- `DEMO-WALKTHROUGH.md` — 90-second founder path
- `../DEMO.md` — short index from repo root
