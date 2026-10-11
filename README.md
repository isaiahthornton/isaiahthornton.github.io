# Isaiah Thornton · Portfolio

My personal portfolio site, built as an Angular single-page app and hosted on GitHub Pages.

**Live site:** https://isaiahthornton.github.io

## Built with

- **Angular 22** with standalone components, signals, and the new `@if` / `@for` control flow
- **Lazy-loaded routes** for Home, Projects, About, Contact, and a 404 page, each with its own page title
- **Reactive forms** with validation on the contact page, sent through a small `ContactService` that uses `HttpClient`
- **Vitest** unit tests for the app shell, form validation, and the contact service
- **GitHub Actions** to test, build, and deploy to GitHub Pages on every push to `main`

## Project structure

```
src/app/
├── data/profile.ts          All site content (projects, experience, skills) in one place
├── layout/                  Navbar (with mobile menu) and footer
├── shared/project-card/     Reusable project card, compact or detailed
└── pages/                   home, projects, about, contact, not-found
```

To update the site's content, edit `src/app/data/profile.ts`. The pages read from it.

## Run it locally

Requires Node.js 22.22.3+ or 24.15+.

```bash
npm install
npm start            # http://localhost:4200
npm test -- --watch=false
npm run build
```

## Contact form

GitHub Pages only serves static files, so the form can't send email by itself. To receive messages in your inbox, create a free form at [formspree.io](https://formspree.io) and paste its endpoint into `FORM_ENDPOINT` in `src/app/pages/contact/contact.service.ts`. Until then, the form opens a pre-filled email in the visitor's mail app.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`. In the repository's **Settings → Pages**, set **Source** to **GitHub Actions** once.
