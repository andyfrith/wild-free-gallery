# Visual comparison

Capture MVP screenshots for side-by-side review against Stitch references in `stitch-screenshots/`.

## Usage

From `website/` with the dev server running on port 3000:

```bash
npm run screenshots
```

Output: `app-screenshots/*.png`

## Setup

Playwright is a dev dependency of the website package. Install the browser once:

```bash
npx playwright install chromium
```

Do not commit `node_modules/` in this folder — use the website root install only.
