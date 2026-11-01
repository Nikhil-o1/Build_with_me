# Portfolio Project Report

## 1. Overview

This project is a responsive, single-page personal portfolio for Nikhil Mahapure. It presents a UI/UX design and frontend development profile, services, selected-work placeholders, contact options, and social profiles. The visual direction follows the supplied portfolio wireframe and design system: slate surfaces, dark editorial typography, violet and flame accents, and illustrated portraits.

## 2. Technology

- React 19 for UI components and interactive state
- Vite 8 for local development and production builds
- Tailwind CSS 3 with custom CSS for the portfolio-specific layouts and motion
- `lucide-react` for interface icons
- `@fontsource` packages for locally bundled Anton, Inter, and Mr Dafoe fonts
- GitHub Actions for GitHub Pages deployment

## 3. Application structure

### Entry and page composition

- `index.html` supplies document metadata, favicon, and the React root.
- `src/main.jsx` imports fonts and styles, enables the JavaScript animation class, and mounts the app.
- `src/App.jsx` composes the header and the Hero, Services, About, Portfolio, and Contact sections.
- `src/styles/index.css` contains global styles, responsive layouts, interaction states, animations, and reduced-motion handling.

### Components

- `Header.jsx`: sticky desktop navigation, social links, contact CTA, and mobile-menu control.
- `MobileMenu.jsx`: responsive full-screen navigation; closes on Escape or link selection.
- `Hero.jsx`: animated introduction, illustration, email link, and contact CTA.
- `Services.jsx` and `Collapse.jsx`: expandable service cards with pointer, keyboard, and click interaction.
- `About.jsx`: animated personal statement, portrait, and optional CV download.
- `Portfolio.jsx`, `ProjectCard.jsx`, and `GhostHeading.jsx`: portfolio heading and project cards with reveal and hover effects.
- `Contact.jsx`: contact form and site footer.
- `SocialLinks.jsx`: reusable Instagram, LinkedIn, and GitHub links with inline SVG icons.

### Data and media

- `src/data/site.js`: personal details, email, CV URL, social profiles, and navigation.
- `src/data/services.js`: service headings and descriptions.
- `src/data/projects.js`: project card labels, images, URLs, and external-link configuration.
- `src/data/assets.js`: optional project/tool image discovery.
- `src/hooks/useInView.js`: Intersection Observer hook for once-only scroll reveals.
- `src/assets/hero.webp`, `about.webp`, and `contact.webp`: the current local illustrations.
- `public/favicon.svg`: site favicon.

## 4. Implemented behavior

- Responsive desktop and mobile layouts.
- Sticky navigation and a keyboard-dismissable mobile menu.
- Animated hero entrance and cursor-responsive headline styling.
- Service descriptions reveal on hover or focus; touch users can toggle the cards.
- Scroll-triggered reveal effects and project-card hover effects.
- Reduced-motion CSS rules respect the visitor's system preference.
- Working in-page navigation and contact calls to action.
- Footer links to Instagram, LinkedIn, and GitHub.
- Contact form validates required fields and opens a prefilled `mailto:` draft with name, reply email, subject, and message.
- Accessible labels, a skip link, focus-visible styling, form status announcements, and image alternative text.

## 5. Personal links and content status

Configured social profiles:

- Instagram: `https://www.instagram.com/nik._journal/`
- LinkedIn: `https://www.linkedin.com/in/nikhil-mahapure`
- GitHub: `https://github.com/Nikhil-o1`

The site email is configured in `src/data/site.js`.

Items that still need personal content:

- The CV URL is empty, so the CV control is displayed as unavailable.
- The project entries use placeholder artwork and currently point to the GitHub profile, rather than individual project pages.
- Add project images to `src/assets/projects/` and set their exact filenames and project-specific links in `src/data/projects.js`.

## 6. Contact form limitation

The contact form requires no backend because it prepares a message using the visitor's `mailto:` handler. It does **not** transmit or deliver messages itself. The visitor's device must have an email app or handler configured, and the visitor must review and send the draft. Guaranteed direct sending from the website would require a backend or a third-party form/email service.

## 7. Build and deployment

Useful commands:

```powershell
npm ci
npm run dev
npm run build
npm run preview
```

`npm run build` generates the production site in `dist/`. The project sets Vite's `base` to `./`, so generated scripts, styles, and bundled assets use relative paths compatible with GitHub Pages project URLs.

`.github/workflows/deploy.yml` checks out the repository, sets up Node.js, installs locked dependencies with `npm ci`, builds the app, and deploys `dist/` to GitHub Pages when `main` is updated or the workflow is manually run. Configure the repository's Pages source as **GitHub Actions**.

For the workflow's default paths to work, commit the contents of this project directory at the root of its own GitHub repository. Do not commit `node_modules/` or `dist/`; `.gitignore` excludes these generated directories.

## 8. Verification

- `npm run build` completed successfully during project validation.
- Browser verification confirmed the configured social links, mobile-menu behavior, service hover/focus behavior, footer link hit targets, contact form draft construction, and local hero/about/contact image loading.
- The footer signature was made non-interactive so it cannot block pointer interaction with footer social links.

