# Envoy 2.0 demo walkthrough (SCRUM-341)

Open local `index.html` or, in PM repo after checkout: `npm run demo:envoy-2`.

## 90-second story (founder → wedding planner)
1. **Portfolio** — Good morning across all weddings. Tap a Needs-you row (Fix email / Reply / Log deposit).
2. **Elena & Marcus → Overview** — Needs attention one-click; budget Spent/Budgeted; Email shortlist + Log a booking.
3. **Contacts** — Attach preferred vendors; open **Vendor compare**; Send A/B to couple.
4. **Couple portal** — This week; florist pick with ownership; Mark as paid (outside Envoy).
5. **Project** — This week tab; Log deposit → Lock catering Done; Risks count drops.
6. **Approve & send** — From = Business Gmail; tick “I reviewed this note to …”; Approve.
7. **Share update** — Toggle what’s visible; preview as couple; Send update (demo).
8. **Day-of packet** — Run-of-show + rain plan; Print packet.

## Draft PRs (do not merge without Jonathan + GE)
- https://github.com/hello-envoy/hello-envoy/pull/4
- https://github.com/hello-envoy/envoy-project-management/pull/138

## Design
Design system and landing page come from hello-envoy/envoy-redesign (main): Instrument Sans, ground `#EAECFA`, ink `#0C1024`, indigo `#3A34D6`, pill buttons. Linen is retired. See `design-system/index.html`.
