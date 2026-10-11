# Alex Garrow's career transition portfolio

React, TypeScript, Vite and Tailwind website documenting a move into systems administration, infrastructure and automation. Current focus: PowerShell, Windows, Git and CS50x. Later study and technical builds are labelled as planned.

## Development

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run preview`

## Content

- `src/pages/Home.tsx`: positioning, background and learning path presentation.
- `src/data/portfolio.ts`: learning stages, project records and typed case-study structure.
- `src/pages/Portfolio.tsx`: project progression and filters.
- `src/components/PortfolioUI.tsx`: project rendering, route metadata and contact form.
- `src/index.css`: responsive presentation and accessibility styles.

Only the website currently has live evidence. Four technical builds are planned, including a future cloud/hybrid capstone. Add real repository links and case-study fields only after evidence exists. The optional `caseStudy` field supports problem, environment, diagrams, tools, actions, troubleshooting, security implications, screenshots, results, lessons, improvements and interview talking points. Screenshots and diagrams need descriptive alt text. Clearly label simulations and sanitise output before publication.

The Cisco Computer Hardware Basics completion is recorded in the user-supplied career guide; no badge link is available in this repository.

## Deployment

Existing routes remain `/` and `/portfolio`. Netlify publishes `dist` from the Vite production build. `public/_redirects` retains the SPA fallback for direct route visits. The existing Formspree POST contact destination and email fallback remain in use. Form submissions have not been sent during development verification.

Live site: https://garrow-cyber-ai.netlify.app/
