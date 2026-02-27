# Nexus Partners — Website (Initial Launch Version)

Static HTML site deployable on GitHub + Netlify.

## Folder Structure

```
nexus-partners-launch/
├── index.html              ← All page copy — edit text here
├── css/styles.css          ← Colors, fonts, layout
├── js/main.js              ← Navigation, animations, form
├── images/
│   ├── hero-bg.jpg
│   ├── about.jpg
│   ├── services-business.jpg
│   ├── services-digital.jpg
│   ├── services-org.jpg
│   ├── contact-bg.jpg
│   ├── logo.svg
│   ├── favicon.png
│   └── logos/              ← Full brand kit (LinkedIn, letterhead, etc.)
├── netlify.toml            ← Netlify config (no edits needed)
└── README.md
```

## Launch Version — What Changed

This is the initial launch version of the site. The following are
intentionally excluded pending future activation:

- Work / Case Studies section (removed from page and navigation)
- Case study modals (ADT, Sony, Hallmark)
- "View Our Work" hero CTA button

The full version with all case studies is preserved in `nexus-partners-v3.html`
for future use. To reintroduce case studies, merge from that file.

## Stats (this version)
- $152M Value Created for Clients
- >90% NPS & CSAT Scores

## Editing Copy
Open `index.html`. Each section has a `===` comment banner labeling what to edit.

## Editing Brand Colors
Open `css/styles.css` and edit the `:root` block at the very top.

## Deploy to Netlify
Push to GitHub → connect repo in Netlify → publish directory: `.`
Netlify auto-deploys on every commit. No build command needed.

## Activating the Contact Form
Add `name="contact" data-netlify="true"` to the `<form>` tag in index.html.
