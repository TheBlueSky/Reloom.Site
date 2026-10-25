# Reloom.Site

The marketing site for Reloom, served at [reloomapp.com](https://reloomapp.com). The app itself lives at `my.reloomapp.com`.

Plain HTML and CSS with no build step. Everything that is published is in `public/`.

| Path | What it is |
| --- | --- |
| `public/index.html` | Landing page and private-beta waitlist form |
| `public/privacy.html` | Privacy notice for the waitlist and this site |
| `public/confirmed.html` | Landing page after a visitor confirms their email (double opt-in) |
| `public/404.html` | Not-found page |
| `public/signup.js` | Submits the waitlist form to Brevo in the background |
| `public/_headers` | Security headers for Cloudflare Pages |
| `public/img/` | App screenshots, light and dark |
| `public/fonts/` | Self-hosted Fraunces and Inter (SIL Open Font License) |

## Preview locally

```sh
npx --yes serve public
```

## Deploy

Cloudflare Pages deploys every push to `main`: no framework preset, no build command, output directory `public`.

## Waitlist

The waitlist is a Brevo list with double opt-in. The form's `action` in `public/index.html` is the Brevo form endpoint (`https://<id>.sibforms.com/serve/<form-id>`). After confirming, visitors land on `/confirmed`.

## Before launch

Replace the placeholders in `public/privacy.html` and the page footers: `[LEGAL OPERATOR NAME]`, `[ADDRESS]`, `[CONTACT EMAIL]` and `[DATE]`.
