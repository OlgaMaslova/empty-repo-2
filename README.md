# The Rustic Table — Food Blog Starter

A production-ready **HTML/CSS/JS static site foundation** for a food blog. No frameworks, no build step required — open `index.html` in any browser and you're running.

This is a skeleton, not a finished product. It gives you clean semantic markup, a warm design system, and progressively-enhanced JavaScript to build on top of, not a CMS or a full application.

---

## Tech Stack

| Layer      | Choice                                                         |
|------------|----------------------------------------------------------------|
| Markup     | Semantic HTML5                                                 |
| Styles     | CSS3 — custom properties (design tokens), CSS Grid, Flexbox   |
| Scripting  | Vanilla ES2015+ — zero runtime dependencies                    |
| Dev server | [Vite](https://vitejs.dev/) (optional — any static host works) |

---

## File Structure

```
food-blog/
├── index.html       # Semantic homepage — header, hero, recipe grid, footer
├── styles.css       # Design tokens, layout, components, responsive breakpoints
├── script.js        # Progressive enhancement — nav toggle, scroll header, smooth-scroll
├── vite.config.js   # Vite static dev-server config (no plugins needed)
├── package.json
└── README.md
```

---

## Running Locally

**Option A — Vite dev server** (hot-reload, recommended while developing):

```bash
npm install
npm start
# → http://localhost:5173
```

**Option B — No install, no build step:**

```
Open index.html directly in any browser.
```

All three files (`index.html`, `styles.css`, `script.js`) are plain static assets — they work on any host: GitHub Pages, Netlify, Vercel, an S3 bucket, or a bare nginx server.

---

## Extending This Foundation

- **More pages** — add `recipes.html`, `about.html`, `contact.html` alongside `index.html`; link them from the `<nav>`.
- **Real recipe data** — create a `recipes.json` file and fetch it with the Fetch API to replace the placeholder cards dynamically.
- **Headless CMS** — connect [Contentful](https://www.contentful.com/), [Sanity](https://www.sanity.io/), or [Decap CMS](https://decapcms.org/) for content management without giving up the static-site model.
- **Add a framework** — Vite makes this trivial: `npm install react react-dom @vitejs/plugin-react`, update `vite.config.js`, and your existing CSS/JS sits right alongside React components.
- **Styling enhancements** — drop in [Sass](https://sass-lang.com/) or [PostCSS](https://postcss.org/) via a Vite plugin; the existing CSS custom properties map cleanly onto Sass variables.
- **Hero photo** — swap the CSS gradient in `styles.css` `.hero` for a real photograph (the inline comment shows the exact one-liner).
- **Recipe card images** — replace the `<!-- Replace with <img …> -->` comments in each `.recipe-card__image` div with a real `<img>` tag or an inline `style="background-image: url(…)"`.
