# Academic portfolio

Open `dist/index.html` in a browser. The six pages work directly or on any static web host.

## Personalize

1. Edit `dist/content.js`. Replace bracketed text with your name, biography, education, and achievements. Remove entries that do not apply; duplicate entries to add more.
2. Create `dist/images/` and add photographs. Set `portrait` to `images/portrait.jpg`; use similar paths for project and certificate images. Empty paths retain the image spaces.
3. Add your email address and full https URLs for Google Scholar, ORCID, GitHub, publications, and credentials. Empty links are hidden.
4. Add a CV in `dist/files/` and set `cv` to `files/cv.pdf` to display the curriculum vitae button.
5. Edit `dist/styles.css` for colors and typography. Update the contact invitation text in `dist/app.js`.

All sample academic details are placeholders, not claims about your background. Images have not been supplied. Google Fonts loads the preferred typography when online; system fonts provide an offline fallback.

`node create-pages.mjs` regenerates the HTML page wrappers. Content and styles do not require a build.
