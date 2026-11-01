# Nikhil Mahapure — Portfolio

A responsive, single-page portfolio for UI/UX design and frontend development. Built with React, Vite, Tailwind CSS, and custom CSS animations.

## Requirements

- Node.js 22 or newer
- npm

## Run locally

From the project directory:

```powershell
npm ci
npm run dev
```

Open the local URL printed by Vite. To create and preview a production build:

```powershell
npm run build
npm run preview
```

The production files are written to `dist/`.

## Portfolio sections

- **Hero:** animated introduction, location, email, and contact link
- **Services:** interactive UI Design, Product Design, and Code cards
- **About:** personal statement, illustration, and optional CV download
- **Work:** project cards with hover animations and configurable links/images
- **Contact:** validated contact form that opens a prefilled email draft
- **Footer:** section navigation and Instagram, LinkedIn, and GitHub links

The contact form uses `mailto:` and has no backend. Visitors must have an email app or handler configured and press Send themselves; the website does not transmit messages automatically.

## Update your information

- Edit your name, location, email, CV URL, social links, and navigation in `src/data/site.js`.
- Edit service text in `src/data/services.js`.
- Edit project titles, image names, and destination URLs in `src/data/projects.js`.
- Add project artwork under `src/assets/projects/` and use the exact filename in the project data. Empty image fields keep the designed placeholder.
- Replace `src/assets/hero.webp`, `about.webp`, or `contact.webp` to update the existing illustrations.
- Edit colors and motion in `src/styles/index.css`. Fonts are imported locally from the `@fontsource` packages in `src/main.jsx`.

The CV link is currently unset. Project cards currently point to the GitHub profile until individual project URLs and images are supplied.

## Deploy to GitHub Pages

The included `.github/workflows/deploy.yml` builds and deploys the site when changes are pushed to the `main` branch.

1. Create a GitHub repository for this portfolio.
2. Put the **contents of this project directory at the repository root** and push them to the `main` branch.
3. In the repository, open **Settings → Pages** and set the source to **GitHub Actions**.
4. Open **Actions** and wait for **Deploy portfolio to GitHub Pages** to complete.
5. Use the published URL shown by the workflow or in **Settings → Pages**.

Vite uses relative asset paths, so the build supports both a root GitHub Pages site and a repository project site. Do not upload `node_modules/` or `dist/`; the workflow installs dependencies and builds `dist/` for you.

## Project report

See [PROJECT_REPORT.md](./PROJECT_REPORT.md) for the architecture, features, deployment notes, verification, and current content limitations.
