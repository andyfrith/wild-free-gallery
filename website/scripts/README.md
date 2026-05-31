# Website Scripts

## Design intake (Stitch → application)

Google Stitch produces **design references**, not application code. See [FOUNDATION.md](../FOUNDATION.md) and DEC-019.

Archived exports live in `assets/visual-exploration/cinematic-light/`. Screen IDs and project metadata are in `manifest.json`.

### Workflow

```
Stitch export (design reference)
       ↓
Archive HTML to assets/visual-exploration/
       ↓
Review: what changed visually?
       ↓
Map to tokens → components → page composition in website/src/
       ↓
npm run build + optional visual comparison
```

The maintained application uses:

- React components and section composition
- CSS design tokens in `globals.css`
- Shared hooks for motion and interaction
- Route `layout.tsx` files with `PageThemeShell`
- Shared `Navigation` and `Footer` components

### Step 1 — Export HTML via Google Stitch MCP

Use the Stitch MCP server configured in the repo root `opencode.json`.

1. Ensure the Stitch MCP is enabled (`stitch` → `https://stitch.googleapis.com/mcp`).
2. Re-export screens listed in `manifest.json` to `assets/visual-exploration/cinematic-light/*.html`.

Example agent prompt:

> Re-export all Cinematic Light screens from Stitch using manifest.json and overwrite the HTML files in assets/visual-exploration/cinematic-light/. Do not modify website/src/ — archive only.

### Step 2 — Integrate into the application (manual)

After reviewing the export diff:

1. Update design tokens in `globals.css` if the palette or typography changed.
2. Update or create section components in `components/sections/`.
3. Adjust page composition in `src/app/**/page.tsx`.
4. Run `npm run build` and fix any regressions.

Optional: run `stitch-to-tsx.py` to generate **draft** TSX for diffing only:

```bash
python3 website/scripts/stitch-to-tsx.py   # drafts — never blind-commit
cd website && npm run build
```

**Do not** commit generator output without manual integration — it drops Navigation, Footer, page themes, tokens, and React patterns.

## MCP tools reference

| Tool | Purpose |
|------|---------|
| `list_projects` | List Stitch projects |
| `list_screens` | List screens in a project |
| `get_screen` | Screen metadata + HTML download URL |
| `generate_screen_from_text` | Create new screens from prompts |
| `edit_screens` | Modify existing screens |

Authentication is handled by MCP config in `opencode.json`.
