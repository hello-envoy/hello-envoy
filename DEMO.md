# Envoy 2.0 demo

Static mockups for the hello-envoy landing and planner desk, re-skinned to **hello-envoy/envoy-redesign** (Instrument Sans, ground `#EAECFA`, indigo ramp). Tokens and components live in `envoy-2.0-mockups/`. The flight log, through round 5 and redesign alignment, is `envoy-2.0-mockups/STEPS.md`. The 90-second founder walkthrough is `envoy-2.0-mockups/DEMO-WALKTHROUGH.md`. The product map is `envoy-2.0-mockups/VISION.md`. The living design system page is `envoy-2.0-mockups/design-system/index.html`. Reference shots are in `envoy-2.0-mockups/screenshots/`.

## Run locally

From the repository root:

```bash
npm install
npm run demo
```

Vite serves the mockups at [http://localhost:5174/](http://localhost:5174/).

- [Landing](http://localhost:5174/landing/) — envoy-redesign `build/index.html` + [waitlist](http://localhost:5174/landing/waitlist.html)
- [Overview](http://localhost:5174/app/overview.html) — Email shortlist, Log a booking, More
- [Contacts](http://localhost:5174/app/contacts.html) — defaults to **Account Directory** (contact book); wedding list via [?scope=project](http://localhost:5174/app/contacts.html?scope=project); master **section tabs** (primary fill) + outreach shell; **Directory | Compare**; single filter row; Approve &amp; send for drafts
- [Project](http://localhost:5174/app/project.html) — opens on This week
- [Couple portal](http://localhost:5174/app/couple-portal.html)
- [Design system](http://localhost:5174/design-system/)

Ideas · round 3, also linked from the index, the topbar **More** menu, and the demo rail:

- [All weddings](http://localhost:5174/app/portfolio.html) — planner home across weddings
- [Approve & send](http://localhost:5174/app/approve-send.html) — drafts stay in Gmail until you approve
- [Decisions](http://localhost:5174/app/project.html#decisions) — on Project tab; couple-visible toggles; **Preview as couple** only on Overview → More

Ideas · round 4, same index, **More** menu, and demo rail:

- [Day-of packet](http://localhost:5174/app/day-of.html) — run of show, call times, rain plan, print
- [Share update](http://localhost:5174/app/share-update.html) — visibility toggles, couple preview, never-shared list

Ideas · round 5, also in **More** and the demo rail:

- [Vendor compare](http://localhost:5174/app/contacts.html#compare) — Contacts → **Compare** subtab (matrix + radar)

Stop the server with Ctrl+C.

The pages are plain HTML, CSS, and one script. `file://` works too: open `envoy-2.0-mockups/index.html`. Google Fonts and Chart.js load from the network. The Sankey is SVG and still draws offline.

`npm run build:shader` is the existing marketing-site background. It is separate from this demo.

## Sample wedding

Elena & Marcus · Saturday, October 16, 2027 · The Ashby Estate, Charleston · $120k budget / $80k committed · 128 of 140 guests.

## Demo rail

The rail in the bottom-right of the app pages walks the story in `STEPS.md`: attach three vendors, needs attention, florist radar and A/B, the couple picks A, then Log deposit paid moves milestones from 5 to 6 of 12. Under that, **Ideas · rounds 3–5** also links Vendor compare.
