# Style Guide (Next.js + Tailwind v4)

All design tokens live in `app/globals.css` (`@theme static`, plus light/dark semantic tokens).
To reuse on a new project: copy `app/globals.css`, `app/layout.tsx` (fonts), `app/theme-toggle.tsx`,
then edit the values. `app/page.tsx` is the live preview of every token and component.

```bash
npm install && npm run dev
```
