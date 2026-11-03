# hello-envoy

Marketing site for [hello-envoy.com](https://hello-envoy.com), deployed via GitHub Pages from `/docs`.

## Envoy 2.0 interactive demo (SCRUM-341)

Planner + landing mockups live in `envoy-2.0-mockups/`. **Exact run steps**, demo spine, and interactive vs static notes:

```bash
npm install
npm run demo
```

→ [http://localhost:5174/app/portfolio.html](http://localhost:5174/app/portfolio.html) (dashboard) or see `envoy-2.0-mockups/README.md`.

Draft PR: [hello-envoy#4](https://github.com/hello-envoy/hello-envoy/pull/4) on branch `SCRUM-341_Envoy20DemoRedesign` (do not merge via agent).

## Shader background

The animated background uses the official [`@shadergradient/react`](https://github.com/ruucm/shadergradient) package. Settings live in `src/shader-bg.jsx`.

After changing gradient props, rebuild:

```bash
npm install
npm run build:shader
```

This writes `docs/assets/shader-bg.js`, which `docs/index.html` loads.
