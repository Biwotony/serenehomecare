# Serene Home Care Services

The official website for **Serene Home Care Services**, a 24-hour home-care provider serving Eldoret and surrounding areas in Kenya.

[Visit the live website](https://serene-home-care.vercel.app) · [Call 0703 862 025](tel:+254703862025) · [WhatsApp Serene](https://wa.me/254703862025)

## About the website

The site helps individuals and families understand Serene's services, learn how care is arranged, and make an enquiry by phone or WhatsApp. Its content is designed to be clear, reassuring, accessible and useful on mobile devices.

### Services presented

- Elderly and dementia care
- Post-hospital and recovery care
- Skilled nursing and wound care
- Respite and family caregiver support
- Physiotherapy and rehabilitation support
- Antenatal and postnatal support

### Key features

- Responsive pages for desktop, tablet and mobile
- Direct phone and WhatsApp contact actions
- Service pages with eligibility, care tasks and frequently asked questions
- Accessible navigation, keyboard focus states and display controls
- Search metadata, structured business data, sitemap and robots directives
- Google Search Console verification
- Consent-aware Meta Pixel analytics
- Social sharing artwork and consistent Serene branding

## Technology

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- TypeScript
- CSS with responsive and high-contrast styles
- Vinext/Vite tooling for local and artifact builds
- Vercel for production hosting

## Local development

### Requirements

- Node.js 22.13 or newer
- npm
- Bash; Windows users can use Git Bash or WSL for the project scripts

### Start the project

```bash
git clone https://github.com/Biwotony/serenehomecare.git
cd serenehomecare
npm ci
npm run dev
```

Open the local address shown in the terminal.

## Quality checks

```bash
# Run linting
npm run lint

# Build the Vercel/Next.js application
npm run build:vercel

# Run the full project build and rendered HTML tests
npm test

# Validate the generated deployment artifact
npm run validate:artifact
```

## Project structure

```text
app/
  components.tsx       Shared interactive components
  site-data.ts         Contact information and service content
  site-shell.tsx       Shared page shell and layout sections
  seo.ts               Metadata and LocalBusiness structured data
  services/            Service listing and individual service pages
  sitemap.ts           Generated XML sitemap
  robots.ts            Search crawler rules
public/
  images/               Website photography and illustrations
  serene-profile-*     Brand profile artwork
  serene-social-*      Social sharing artwork
tests/                  Rendered HTML and search-discovery checks
scripts/                Build, environment and validation scripts
```

Most public business details and service descriptions are maintained in `app/site-data.ts`. Page-specific copy lives in the corresponding route under `app/`.

## Configuration

The website supports these public environment variables:

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used by metadata, structured data, robots and the sitemap | `https://serene-home-care.vercel.app` |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel identifier loaded only after analytics consent | Serene's current Pixel ID |

When `serenehome.care` is connected, set `NEXT_PUBLIC_SITE_URL=https://serenehome.care` in Vercel and redeploy.

## Deployment

The `main` branch deploys to Vercel. Vercel uses `npm run build:vercel`, as configured in `vercel.json`.

Before merging a public content change:

1. Confirm phone numbers, service details and business information with Serene.
2. Run the relevant quality checks.
3. Review the affected pages at mobile and desktop widths.
4. Use a clear commit title that describes the user-facing change.

## Business contact

- **Phone and WhatsApp:** 0703 862 025
- **Office:** Kenyatta Street, Eldoret, Kenya
- **Service area:** Eldoret and surrounding areas
- **Availability:** 24 hours
- **Planned domain:** [serenehome.care](https://serenehome.care)

## Content and image note

Care-team images currently used on the website are illustrative. Replace them with approved original team photography when it becomes available, and obtain consent before publishing identifiable clients, staff or testimonials.

## Licence

This repository contains proprietary website content and brand assets for Serene Home Care Services. No open-source licence has been granted.
