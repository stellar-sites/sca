# Shrewsbury Christian Academy — site

Modern rebuild of the SCA website. Replaces the legacy `sca-vuepress/` project.

## Stack

- **Astro 4** static site generator
- **Tailwind CSS** with a custom *Warm Academic* palette (ivory / navy / brass / sage)
- **Fraunces** (display) + **Inter** (body), self-hosted via `@fontsource`
- **Decap CMS** for Git-based content editing (mounted at `/admin`)
- **Web3Forms** for the contact form (no backend)
- **Cloudflare Pages** for hosting (planned)

## Local development

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

### Dev server in Docker

```bash
docker compose up        # build + run; http://localhost:4321
docker compose up -d     # same, detached
docker compose down      # stop
```

The project is bind-mounted into the container, so edits hot-reload. `node_modules` is kept inside the container (so native binaries match the Linux image, not your host). `CHOKIDAR_USEPOLLING=true` is set so the file watcher works reliably across bind mounts.

To rebuild after changing `Dockerfile`:

```bash
docker compose build
```

**After editing `package.json`**, the dev container's `node_modules` is in an anonymous volume that shadows the image's copy, so re-running `docker compose build` alone won't pick up the change. Sync deps inside the running container:

```bash
docker compose exec dev npm install
```

Or, to start fresh with a clean volume:

```bash
docker compose down -v
docker compose up -d --build
```

### Editing content locally via the CMS

`docker compose up` also starts a second service, `cms`, that runs [`decap-server`](https://decapcms.org/docs/working-with-a-local-git-repository/) on port **8081**. This lets you edit content through Decap CMS without needing GitHub OAuth.

1. `docker compose up -d`
2. Open **http://localhost:4321/admin/**
3. Because `local_backend: true` is set in `public/admin/config.yml`, the admin UI auto-connects to the local filesystem proxy at `localhost:8081`
4. Edits land directly in `src/content/**` on your host, owned by your user (the cms container runs as UID 1000)
5. Review changes with `git diff` and commit when you're happy

For production, `public/admin/config.yml` still points at the GitHub backend (`repo: taemon1337/sca`). `local_backend` is ignored off-localhost.

## Content model

Everything that a non-technical editor might change lives in `src/content/`:

- `site/default.json` — school year, principal, phone, email, tuition rows, quick facts
- `staff/*.md` — faculty and staff members (one file per person)
- `books/*.json` — middle school reading list (one file per book)
- `announcements/*.md` — homepage announcement strip

The schemas are defined in `src/content/config.ts` (validated at build time).
The matching Decap CMS admin schemas are in `public/admin/config.yml`.

## Going live checklist

1. Replace `PUBLIC_WEB3FORMS_KEY` placeholder in env / `ContactForm.astro` with real Web3Forms access key (or swap for Cloudflare Pages Forms).
2. Set up a GitHub OAuth app for Decap CMS; wire up an OAuth proxy (e.g., `decap-proxy` on Cloudflare Workers).
3. Connect Cloudflare Pages to the repo. Build command `npm run build`, output directory `dist`.
4. Point `scaonline.org` CNAME to `sca-site.pages.dev` once preview is approved.
5. Update the Google Maps embed to use an up-to-date embed URL if Google's iframe expires.

## Design tokens

| Token        | Hex     | Use                       |
|--------------|---------|---------------------------|
| `ivory`      | #FAF7F2 | Background                |
| `navy-700`   | #1B2B4B | Primary text, headings    |
| `navy-900`   | #0E1A33 | Dark surfaces (footer)    |
| `brass`      | #C9A55C | Accents, CTAs             |
| `sage`       | #6B8E6F | Secondary accent, banners |

Fonts: `font-display` → Fraunces · `font-sans` → Inter.
