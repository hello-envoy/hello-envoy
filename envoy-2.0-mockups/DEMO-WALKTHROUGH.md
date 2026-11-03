# Envoy 2.0 demo walkthrough (SCRUM-341)

Open local `index.html` or, in PM repo after checkout: `npm run demo:envoy-2`.

## 90-second story (founder → wedding planner)
1. **Portfolio (dashboard)** — Good morning across all weddings. Needs-you one-clicks; scroll the **12-month timeline**; open Elena & Marcus (or Kate & Dom / Noor & Eli / Priya & Sam).
2. **Elena & Marcus → Overview** — Left wedding panel + top tabs (Overview | Contacts | Project | …); needs attention; budget Sankey; **Email the team** primary; milestone timeline uses **chevron** markers.
3. **Contacts** — Attach from contact book; **Compare** tab; Send A/B to couple.
4. **Couple portal** — **Your tasks**; florist pick; **Mark as paid** only inside a task.
5. **Project** — This week tab; Log deposit → Lock catering Done; Risks count drops.
6. **Approve & send** — Thread above draft; From = business Gmail; single **Approve & send** (no review checkbox).
7. **Share update** — Toggle what’s visible; preview as couple; Send update (demo).
8. **Day-of packet** — Run-of-show + rain plan; Print packet.

## Draft PRs (do not merge without Jonathan + GE)
- https://github.com/hello-envoy/hello-envoy/pull/4
- https://github.com/hello-envoy/envoy-project-management/pull/138

## Design
Design system and landing page come from hello-envoy/envoy-redesign (main): Instrument Sans, ground `#EAECFA`, ink `#0C1024`, indigo `#3A34D6`, pill buttons. Linen is retired. See `design-system/index.html`.
