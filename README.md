# Kazi Md Zareer's academic portfolio

This is a static website. The ready-to-publish site is in `dist/`; `dist/index.html` is its home page. It includes research experience, academic projects, industry experience, publications, certifications, and awards.

To preview locally, run `node preview.mjs` in this directory and open `http://127.0.0.1:4173/`.

Update portfolio content in `dist/content.js` and styling in `dist/styles.css`. If you add or remove a page, update the navigation in `dist/app.js` and the page list in `create-pages.mjs`, then run `node create-pages.mjs`.

The GitHub Pages workflow in `.github/workflows/pages.yml` publishes `dist/` whenever `main` is pushed. Everything committed under `dist/` is publicly accessible on the website, including linked PDF files and images.
