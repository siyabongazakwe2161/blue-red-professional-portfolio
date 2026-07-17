# Siyabonga Zakwe — Portfolio

A personal portfolio website for Siyabonga Shaun Zakwe. It shows who I am,
my skills, experience, education, certifications, and lets visitors download
my CV in one click.

Live sections: Home · About · Skills · Projects · Experience · Education ·
Certifications · Contact.

## Tech stack

- **React 19** + **TanStack Start** (file-based routing under `src/routes/`)
- **Vite 7** for the build
- **Tailwind CSS v4** for styling (design tokens in `src/styles.css`)
- **Lucide React** for icons

## Project structure

```
src/
  routes/
    __root.tsx      # HTML shell, <head> meta tags, fonts, providers
    index.tsx       # The whole portfolio page (all sections live here)
  assets/
    cv.asset.json   # Pointer to the uploaded CV PDF (served from CDN)
    hero-portrait.jpg
  styles.css        # Colors, fonts, gradients — the design system
```

All page content (bio, skills, projects, jobs, education) is in plain
JavaScript arrays at the top of `src/routes/index.tsx`. Edit those arrays
to update the site — no layout code needs to change.

## Run locally

```bash
bun install
bun run dev
```

Open http://localhost:8080.

## Build for production

```bash
bun run build
```

## How to update content

Open `src/routes/index.tsx` and edit the arrays near the top:

- `TECH_SKILLS` — skill name + proficiency (0–100)
- `SOFT_SKILLS` — chips shown under Personal Attributes
- `PROJECTS` — title, description, tech tags, category
- `EXPERIENCE` — role, company, period, bullet points
- `EDUCATION` — school, qualification, subjects
- `CERTIFICATIONS` — title + issuer

To change contact info (email, phone, address, social links), edit the
`Contact()` function in the same file.

### Replace the CV

The CV is hosted as an asset. To swap in a new PDF, upload it and update
`src/assets/cv.asset.json` with the new URL.

### Change colors or fonts

All colors, gradients and fonts live in `src/styles.css` under `:root`.
Change `--primary` (red), `--secondary` (blue) or `--background` and the
whole site updates.

## Deploy

Click **Publish** in the Lovable editor (top-right). The site deploys to a
`*.lovable.app` URL and can be connected to a custom domain from
Project Settings → Domains.

## License

Personal project. All content © Siyabonga Shaun Zakwe.