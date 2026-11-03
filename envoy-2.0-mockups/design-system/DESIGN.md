# Envoy design system (redesign)

The source of truth is **hello-envoy/envoy-redesign → `redesign/_system/system.css`** (main). A reference copy is at `/workspace/envoy-redesign-ref/`.

- `assets/tokens.css` contains the system's `:root` block copied verbatim, followed by kit aliases (`--paper`→`--ground`, `--clay`→`--indigo-600`, and so on) so the older component rules resolve to redesign values.
- `assets/components.css` contains the system's button block copied verbatim (`.btn-primary/secondary/ghost/chip`, `.btn-sm/md/lg`, `.btn-icon`, `.on-dark`), plus kit extensions that add no new colours.
- Font: Instrument Sans 400–700, from Google Fonts.
- Rules (check.mjs): ≥24px targets, a visible hover and focus on every control, no local `.btn` overrides, palette-only colour, 4.5:1 text contrast and 3:1 for boundaries and focus.
- Living page: `design-system/index.html`.
