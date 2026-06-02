# GLR Proposal Site

Single-page tabbed landing page + individual asset pages for Green Ladder Roofing proposal follow-up. Built for GitHub Pages.

## Two ways to use it
1. **One tabbed page** (`index.html`) — everything on one URL, switch via tabs. Share `proposals.greenladderroofinginc.com`.
2. **Individual pages** (`/pages/*.html`) — deep-link a single asset into Hatch, e.g. `proposals.greenladderroofinginc.com/pages/quote-comparison.html`.

Both share the same content, styles, photos, and PDFs.

## Deploy (GitHub Pages)
1. Create repo, push these files to `main`.
2. Settings > Pages > Source: `main`, `/ (root)`.
3. Live at `https://<user>.github.io/<repo>/` in ~1 min.
4. Custom domain: add DNS CNAME `proposals` -> `<user>.github.io`. CNAME file is set to `proposals.greenladderroofinginc.com` (edit if different).

## Hatch usage
Paste a page URL into SMS/email. Add UTM for tracking:
`?utm_source=hatch&utm_medium=sms&utm_campaign=proposal_followup&utm_content=day2`

## TODO
- Embed live calendar in book tab
- Restore exact Google rating once verified
- Add CSLB license # once legal name confirmed
- Add a verified testimonial
