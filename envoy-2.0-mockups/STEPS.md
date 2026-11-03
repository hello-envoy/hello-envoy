# Envoy 2.0 mockups: flight log (SCRUM-341)

These are static HTML/CSS/JS mockups with no build step. Open `index.html` over `file://`. Nothing was cloned, pushed or sent. The output is local files only, ready to port into the hello-envoy repos through Cursor Liaison.

## IA
**Overview | Contacts | Project** is the planner app, with one shared topbar. The **Couple portal** is a separate surface with its own header, reached from "Couple view" in the topbar.

## Files
| File | What it is |
|---|---|
| `index.html` | Index of every page. |
| `assets/tokens.css` | The "Linen" tokens: color, type, space, radius, elevation, chart palette. Also the base element styles and the Google Fonts import (Fraunces, Geist, Geist Mono). |
| `assets/components.css` | All components: topbar and nav tabs, Ask Envoy bar, buttons, inputs, chips and filter chips, tabs and segmented controls, cards and KPIs, bars, avatars, table with row actions, `.sheet` grid, attention strip, empty state, kanban, toast, demo rail, legend, Sankey, milestone timeline, gantt, utilities. |
| `assets/app.js` | Shared runtime. It does the following: <br>• Injects the topbar from `body[data-page]`. <br>• Turns `<i data-i>` placeholders into an inline SVG icon set (about 45 icons). <br>• Handles toasts (`[data-toast]`) and tabs (`[data-tabs]`/`[data-tab]`/`[data-panel]`, where `data-hash` syncs the URL). <br>• Sets Chart.js defaults. <br>• Provides a dependency-free SVG `Envoy.sankey()`. <br>• Draws the demo-story rail. <br>• Fires the `envoy:ready` event. |
| `app/overview.html` | Wedding hero: countdown, venue, guests 128/140, milestones 5/12, and the 5 CTAs. <br>Needs-attention strip: failed send, unanswered >3d, date conflict, missing deposit. <br>Vendor status table with a Needs me / Waiting on them / All toggle. <br>Budget card: total/committed/remaining, donut, and 8 category chips that deep-link to `contacts.html?type=`. <br>Milestone timeline (Booked/Deposit due/Final/Day-of), the Sankey (Total → Category → Booked/Remaining) and recent activity. |
| `app/contacts.html` | Replaces chat. <br>Filters: this wedding vs preferred directory, status, 14 vendor types, has/missing email. <br>Six row actions: open thread, draft inquiry, log status, attach to another wedding, copy email, website. <br>Contact drawer with a per-contact thread and a thin Ask Envoy bar. <br>Attach-from-directory card (`#attach`). <br>Florist compare (`#compare`): a Chart.js radar on price/style/availability/response/package/vibe with Draft inquiry, Book and Mark preferred, plus "Send A/B to couple". <br>Draft-inquiry composer. |
| `app/project.html` | Planner-language project view. <br>Focus milestone cards, including "Lock catering" (`#lock`), which auto-completes when the caterer is Booked and the deposit is paid. <br>12-milestone strip. <br>Tabs (default **This week**): This week ("50 weeks out", grouped Me/Couple/Vendor), Board (kanban with drag and drop), Timeline (gantt), Risks & holds (9 rows, red badge = open count). Sheet (editable grid with subtotals) is demoted to a quiet "Sheet view" button next to the owner filter. <br>Owner filter: Me/Couple/Vendor. No story points or velocity. |
| `app/couple-portal.html` | Couple-facing surface. <br>It shows: date, venue, facts, the florist A/B decision (`#ab`), the deposit acknowledgement, milestones, the team (Booked/Exploring) and a budget glance. <br>"Tell Sarah": guest stepper, style, must-haves and absolutely-not. <br>Leave-a-note box. <br>It never shows drafts, threads, markup, RAID or other clients, and the couple cannot send as the planner. |
| `design-system/index.html` | Living style guide: principles, color with contrast notes, type scale, spacing, radius/elevation, buttons, inputs, chips/status vocabulary, tabs, cards/KPIs, table and sheet, empty states, chart palette with a live bar chart and Sankey. |
| `design-system/DESIGN.md` | Principles, token table, usage rules and don'ts. |
| `landing/index.html` | Marketing page for planners. <br>Hero ("Plan the wedding, not the inbox.") with an HTML-built product shot, placeholder planner logos, the 3-step story (Attach → Know → Share), a 6-feature grid, a placeholder testimonial and illustrative stats, placeholder pricing, CTA and footer. |
| `app/portfolio.html` | *Round 3 idea.* Planner home across all weddings ("Good morning, Sarah"). KPI strip (needs you today, deposits due in 7 days, vendors waiting on you, next wedding), a ranked "Start here" list of five cross-wedding actions, and 6 wedding cards with a countdown, needs-attention count, budget left with a bar, and next milestone. Filters: All / Needs attention / Next 6 months; sort by date or attention. Only Elena & Marcus opens (to overview.html). |
| `app/approve-send.html` | *Round 3 idea.* The approval flow. Two queued drafts (Lowcountry Glam reply, Wildflour deposit + Menu B). From = sarah@whitfieldco.com (Gmail), editable subject and body, "Won't send until you approve" guard, and a required "I've read this" check before Approve & send is enabled. Ask Envoy panel side by side, with a strike/insert diff, sources and Apply/Dismiss, plus a "Before you send" checklist and their last message. Sending updates the status (Needs reply → Waiting, Booked → Deposit paid) and offers a 10-second Undo. `?to=wild` opens the Wildflour draft. |
| `app/decisions.html` | *Round 3 idea.* A decisions log that builds on Risks & holds. Three "Noticed this week" insights can be added as decisions. Editable sheet: Decision / Owner / Status / Due / Notes / Couple sees. Text cells are contenteditable (Enter saves, Esc reverts). Owner and Status are pill selects. Open / Decided / All filter with counts, a couple-visible-only chip, a "N of M visible to Elena & Marcus" counter, and Add a decision. |

## Design decisions
- **One accent, clay #9A3B27.** It's the colour of a wax seal (6.6:1 on paper). It marks urgency and the main action, and it doubles as the "risk" semantic so the UI never has two competing reds. Ok, warn and info are muted.
- **Warm neutrals instead of grey.** Paper #F7F4EE for the page, #FFFDF9 for surfaces, ink #1C1A17. This reads as hospitality and stationery rather than generic SaaS.
- **Fraunces + Geist.** Fraunces is variable with optical sizing: light weights at display sizes, an italic clay ampersand and "days". Geist handles UI and Geist Mono handles numbers and tokens. No Inter.
- **Borders before shadows.** Shadows appear only on floating elements: toasts, the rail, dragged cards, the landing product shot.
- **Charts are monochrome plus clay**, in a fixed series order. Ink means booked, sand means remaining, clay means "look here".
- **Status reads by shape as well as colour:** dashed ring, ring, clay dot, ink dot, green dot.
- **Planner language throughout:** milestone, checklist item, hold, "N weeks out". Milestones auto-close from vendor state, so nobody has to hunt for checkboxes.
- **Chat isn't the home screen.** Ask Envoy is a thin bar (⌘K) in the topbar and in each contact's thread.
- **Consistent sample data across every page:** Elena & Marcus, Sat Oct 16 2027, The Ashby Estate in Charleston, $120k total / $80k committed, 128 of 140 guests, 348 days, 5 of 12 milestones.

## Demo script (follow the rail, bottom-right)
1. `contacts.html#attach`: attach 3 preferred vendors from the directory. The count goes from 16 to 19.
2. `overview.html#attention`: the needs-attention strip flashes. Click **Failed send**: Sweetgrass opens with the email field focused; **Retry send** moves it to Waiting.
3. `contacts.html#compare`: compare florists on the radar, then draft inquiries and send A/B to the couple.
4. `couple-portal.html#ab`: Elena picks florist A, which triggers a toast and updates the count.
5. `project.html#lock`: click "Log deposit paid". Lock catering becomes Done, milestones go from 5 to 6 of 12, and the risk row resolves.

## Round 2 polish (planner + couple feedback)
**Status ladder (one vocabulary everywhere).** Not contacted → Waiting → Needs reply → Booked → Deposit paid → Declined.
- `.status` / `.s-*` styles now live once in `assets/components.css`. The page-local copies in overview, contacts and the design system were removed.
- Used in: Needs attention (each item carries its ladder status), the Overview vendor table, the Contacts status filter (all 6 in ladder order; "Deposit paid" no longer folds into Booked), a clickable ladder in the contact drawer, the row "Log status" toast, Project milestone copy ("Auto-completes when Wildflour moves Booked → Deposit paid"; Done chip reads "Deposit paid"), the landing preview, and the demo rail.

**Overview**
- The CTA row has 2 solid primaries: **Email shortlist** and **Log a booking**. Share update with couple, Import vendors and Open timeline moved into a **More** menu (`<details class="menu">`, closes on outside click or Esc).
- Needs-attention rows go straight to the fix:
  - `contacts.html?c=sweetgrass&fix=email` opens the drawer with **Add email + Retry send** first, email focused.
  - `?c=glam&fix=reply` opens the thread with the **Draft reply** composer open and **Send reply** focused.
  - `?c=harborline&fix=hold` shows **Request Oct 15–17 hold**.
  - The deposit item goes to `project.html#lock`.
  - The vendor table's next-action links use the same URLs.
- Budget labels: Budgeted / Spent / Remaining. Category chips read `$spent / $budgeted` under a "Spent / Budgeted" label, with a tooltip spelling it out.

**Contacts**
- Eyebrow is now "Elena & Marcus · **Vendors**".
- The drawer leads with a `.fix` block whenever the contact has a problem (missing email, Needs reply, or the hold conflict). With `?fix=`, it pulses and focuses the primary control. Fixing it updates the ladder status and thread (Needs reply → Waiting, Not contacted → Waiting).
- Preferred vendors show "**Also on N other weddings**" with names, plus an **Attach to another wedding** picker (N goes up on attach). Non-preferred vendors show "First wedding together · Save to preferred". "Only this wedding" is gone.

**Project**
- The 3 in-motion cards and the 12-milestone strip are unchanged.
- Lower tabs default to **This week**. Sheet is out of the tab row (still reachable via "Sheet view" and `#sheet`).
- **Risks & holds** has a red count badge (3 open). It drops to 2 when the deposit is logged.

**Couple portal**
- "Waiting on you" is now **This week**, with a quiet text count ("2 things" → "1 thing" → "all set") instead of the red numeric badge.
- Florals has an ownership line under the prompt: "You choose · Sarah inquiries & books." Above the options: "Marcus can see this too — only one of you needs to tap." The footer is now "you can change your mind until Sarah sends the inquiry".
- Deposit: **Mark as paid** + "Confirms outside Envoy — nothing charges here." After a tap it shows a "Marked as paid" chip.
- The facts list replaces "Progress · 5 of 12 milestones" with "**Open this month** · Food & flowers".
- The "Sarah's worked with 6×" chip is now "Sarah's worked with them", so it can't contradict the planner-side count.
- Kept: mood boards, tags, Sarah handles booking. No confetti, no new tabs.

## Round 3: ideas on the same vision
New pages are linked from `index.html` under "Ideas · round 3", from the demo rail (a new "Ideas · round 3" list under the 5 beats) and from the topbar.

**Topbar (assets/app.js + components.css)**
- The crumb is now `All weddings / [E&M Elena & Marcus ▾]`. Both "All weddings" and the project switch go to `portfolio.html`. On the portfolio page the wedding switch and tabs are hidden, because you haven't opened a wedding yet.
- The main nav is still Overview | Contacts | Project, with a quiet **More ▾** menu: Decisions, Approve & send (2 drafts waiting), All weddings. More is underlined when you're on one of its pages.
- The menu close-on-outside-click and Esc handling is now global for every `details.menu`. The overview-only copy was removed.

**Pages**
1. **All weddings (`app/portfolio.html`).** This is where a planner with 15–30 weddings starts the day. It works in triage order: what needs me across all weddings → each wedding at a glance → the quiet rest in a plain table. Countdowns use the Fraunces display face. Under 14 days the countdown turns clay italic, which is the only accent use. "Start here" deep-links to the overview attention strip and to the Glam draft.
2. **Approve & send (`app/approve-send.html`).** This flow is treated as sacred. Envoy never auto-sends, and no scheduled send is offered. The button stays disabled until the planner ticks "I've read this and it's ready to go". Applying a suggestion clears that tick, so she has to re-read the changed draft. The suggestion is highlighted in the body in clay-soft. After sending there is a 10-second Undo, and the result is logged to the vendor thread.
3. **Decisions (`app/decisions.html`).** This is RAID turned into a planner's own words. Private is the default, and the couple sees only rows that are toggled on, which surface in their portal. It is reachable from More and from a new "Decisions log →" link in the Project Risks & holds footer.

**Demo beats to add to the script**
- Start at All weddings → click Elena & Marcus.
- More → Approve & send → Apply suggestion → tick → Approve & send → status chip changes to Waiting → Undo.
- More → Decisions → set "Release Harborline hold" to Decided (it leaves Open) → add the videographer insight → toggle it couple-visible.

**Round 3 verification**
- All 10 pages load headless with 0 page errors (`/tmp/shot/s.js`).
- `/tmp/shot/t4.js` passed:
  - Portfolio: 6 cards with countdowns 5/166/201/222/299/348; the attention filter shows 4; sorting by attention puts E&M first.
  - Approve: send disabled → apply → enabled after tick → Waiting → Undo → Needs reply; switching to Wildflour works.
  - Decisions: Open shows 5, deciding a row leaves 4, Decided shows 4; the visible counter updates; inline edit saves; the insight adds a row; the couple-only filter works.

## Verification
- Headless Chrome (puppeteer-core) loaded all 7 pages over `file://` with 0 page errors, 0 console errors and 0 failed requests. Fonts and Chart.js loaded.
- Smoke tests passed: Lock catering goes 5 → 6 of 12, attach goes 16 → 19 contacts, the couple A/B pick works with a toast.
- Round 2 (`/tmp/shot/t3.js`), all with 0 page errors:
  - 2 primaries plus a 3-item More menu.
  - Each `?fix=` URL renders and focuses the right control. Retry send and Send reply move the status to Waiting, and the hold request clears the conflict.
  - Ashby shows "Also on 4" → 5 after attach.
  - Project defaults to This week with 4 visible tabs and a red badge that goes 3 → 2. Sheet view opens.
  - Couple portal: "This week 2 things" → "all set", with a transparent badge background.

## Gaps
- Google Fonts and the Chart.js CDN need internet. Offline, the pages fall back to system serif/sans, and the donut and radar don't render (the Sankey is pure SVG and still works).
- All interactions are demo-only: no persistence (except the rail's open state in sessionStorage), no real sends, no backend.
- Responsive layout is basic, tuned for desktop at 1280–1440. Landing has a simple mobile breakpoint, but the app pages aren't mobile-polished.
- Logos, testimonial, stats and pricing on the landing page are labelled placeholders.
- Accessibility: there's a focus ring and contrast is AA, but keyboard support for drag and drop and the ARIA patterns for tabs are only partial.

## Round 4 — Day-of packet + Share update (local only, no git)

- **`app/day-of.html`** — Planner-facing day-of packet for Elena & Marcus (Sat Oct 16, 2027). It includes:
  - A cover showing ceremony at 4:30, sunset at 6:44 and last song at 10:45.
  - A run-of-show timeline running ceremony → cocktail → dinner → dancing, with a clay dot on each key event.
  - Vendor call times with honest statuses. Unbooked vendors are marked as unbooked, not guessed.
  - A rain-plan hold card (decide by Oct 14 → Decisions).
  - Quick-dial `tel:` cards.
  - A print stylesheet: "Print packet" hides the chrome.
  - It is deliberately not a minute-by-minute checklist.
- **`app/share-update.html`** — "Share update with couple" composer.
  - Toggles choose what's in the update: milestones (on), florist A/B (on), decisions you've shared (off), budget glance (off) and day-of outline (off).
  - A note from Sarah, plus a live preview of the couple portal.
  - A "Never shared" box: threads, drafts, markup, private decisions, other clients.
  - Send update shows a demo toast and a banner.
  - This is a thin share, not a co-inbox.
- Linked from index ("Ideas · round 4"), the More menu (Day-of packet, Share update) and the demo rail.

## Round 3 polish (portfolio · approve & send · decisions)

- **Portfolio**
  - KPI counts are replaced by **Needs you** rows. Each row shows wedding + vendor + what happened + one button (Fix email / Reply / Log deposit). Clicking a button marks the row done and decrements the count.
  - Cards show the date, a red "N need(s) you" and the next action ("Next: catering deposit Fri"). Budget and % complete are removed.
  - The quiet-weddings table is hidden by default behind a "Show quiet · 18" toggle.
- **Approve & send**
  - **From is the hero, above the body:** full address + inbox name (Business inbox · Whitfield & Co · Gmail) + Change. Switching to Personal warns that the vendor has only heard from the business address.
  - A review tick reads "I reviewed this note to Tasha Greene at Lowcountry Glam", with the subject and first lines shown. Approve stays disabled until it's ticked. Any edit, apply/undo or From change clears the tick.
  - Undo is now **"Undo Envoy edit"** only. It reverts the last Ask Envoy apply, not the whole draft. Post-send undo is removed.
- **Decisions**
  - Columns: Decision · Options (A / B, editable inline) · Owner (Me / Couple / Vendor) · Due · Status (Open / Waiting on couple / Decided) · Couple sees.
  - **Couple sees defaults OFF** on every row, including rows added from insights. The couple opts in per row.
  - **Preview as couple** swaps the table for portal-style cards showing only rows that are toggled on. It shows an empty state when nothing is shared.
  - Florist names now match the portal: Heron & Fern Florals / Marlowe Flower Co.
- Share update's "Decisions you've shared" now defaults off to match.

### Files (round 4)
| File | What |
|---|---|
| `app/day-of.html` | Day-of packet, printable |
| `app/share-update.html` | Share-update composer + portal preview |

## Round 5: Vendor compare (local only, no git)

- **`app/vendor-compare.html`** compares Elena & Marcus's three florists: Heron & Fern Florals, Marlowe Flower Co. and Bloom Theory.
  - Side-by-side cards show price vs. budget, Oct 16 availability, reply time, package and history.
  - The existing Contacts radar is reused with plain axes (Price fit, Style, Date, Replies, Package, Track record), each explained in one line.
  - "You're leaning X because…" lists reasons and one honest "Watch" caveat. Clicking a card changes the lean.
  - CTAs: Draft inquiry, Mark preferred, Book (it drafts into Approve & send and never sends) and Send A/B to couple (goes to Share update).
- Linked from Contacts → Compare ("Open full compare →"), index "Ideas · round 5", the topbar More menu, and the demo rail. VISION.md IA table gained one row.
