# Envoy 2.0 demo

Static Linen mockups for the hello-envoy landing and the planner desk. Tokens and components live in `envoy-2.0-mockups/`. The flight log, including round-2 polish and the round-3 idea pages, is `envoy-2.0-mockups/STEPS.md`. The design system is `envoy-2.0-mockups/design-system/DESIGN.md`. Reference shots of the core pages are in `envoy-2.0-mockups/screenshots/`.

## Run locally

From the repository root:

```bash
npm install
npm run demo
```

Vite serves the mockups at [http://localhost:5174/](http://localhost:5174/).

- [Landing](http://localhost:5174/landing/) — planner marketing page
- [Overview](http://localhost:5174/app/overview.html) — Email shortlist, Log a booking, More
- [Contacts](http://localhost:5174/app/contacts.html) — vendors, status ladder, preferred attach
- [Project](http://localhost:5174/app/project.html) — opens on This week
- [Couple portal](http://localhost:5174/app/couple-portal.html)
- [Design system](http://localhost:5174/design-system/)

Ideas · round 3, also linked from the index, the topbar **More** menu, and the demo rail:

- [All weddings](http://localhost:5174/app/portfolio.html) — planner home across weddings
- [Approve & send](http://localhost:5174/app/approve-send.html) — drafts stay in Gmail until you approve
- [Decisions](http://localhost:5174/app/decisions.html) — Decision, Options, Owner, Due, Status. Couple-visible starts off. Preview as couple shows only shared rows.

Stop the server with Ctrl+C.

The pages are plain HTML, CSS, and one script. `file://` works too: open `envoy-2.0-mockups/index.html`. Google Fonts and Chart.js load from the network. The Sankey is SVG and still draws offline.

`npm run build:shader` is the existing marketing-site background. It is separate from this demo.

## Sample wedding

Elena & Marcus · Saturday, October 16, 2027 · The Ashby Estate, Charleston · $120k budget / $80k committed · 128 of 140 guests.

## Demo rail

The rail in the bottom-right of the app pages walks the story in `STEPS.md`: attach three vendors, needs attention, florist radar and A/B, the couple picks A, then Log deposit paid moves milestones from 5 to 6 of 12. Under that, **Ideas · round 3** links All weddings, Approve & send, and Decisions.
