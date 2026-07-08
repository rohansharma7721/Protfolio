# Rohan Sharma — Portfolio Website

Task 01 of a 4-part frontend internship track. A responsive personal portfolio site built with HTML5, CSS3 and vanilla JavaScript — no frameworks, no build step.

**Live site:** https://YOUR-USERNAME.github.io/portfolio/

## Sections

- **Home** — intro, role, and a quick status gauge
- **Skills** — RPM-gauge style circular progress dials for core tools
- **Projects** — a running log of all 4 internship tasks (updates as each is built)
- **Contact** — email + social links

## Built with

- HTML5
- CSS3 (Flexbox, Grid, custom properties, media queries)
- JavaScript ES6+ (IntersectionObserver for scroll-based nav + gauge animation)
- Google Fonts (Rajdhani, Inter, JetBrains Mono)

## Run locally

No build tools needed. Just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Hosted for free on **GitHub Pages** from the `main` branch, root folder. See deployment steps below.

## To personalize

- Swap out placeholder email/GitHub/LinkedIn/Instagram links in the Contact section of `index.html`.
- Edit the `skills` array in `script.js` to change skills or proficiency levels.
- Update project cards in `index.html` as Tasks 02–04 go live (swap `disabled` links for real ones and change status badges from `progress` to `live`).
