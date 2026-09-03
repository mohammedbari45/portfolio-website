# Pixel Hero Portfolio

A responsive, pixel-inspired personal portfolio with comic-book visual cues influenced by web-slinging heroes and midnight vigilantes. The website is built with plain HTML, CSS, and JavaScript, so it has no framework or build dependencies.

## Features

- Pixel-art hero section and character card
- About-me details and quick stats
- Skills and tools list
- Featured and secondary project cards
- Experience and education timeline
- Résumé preview and download area
- Contact and social links
- Responsive mobile navigation
- Reduced-motion accessibility support

## Preview locally

Clone the repository and open `index.html` in a browser, or run a small local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customize the portfolio

Most content lives in `home.html`. Search for placeholders such as:

- `[YOUR NAME]`
- `[YOUR ROLE]`
- `[YOUR LOCATION]`
- `[COMPANY NAME]`
- `PROJECT TITLE`
- `hello@example.com`

Replace the placeholder project links, GitHub URL, LinkedIn URL, and email address with your own information.

### Add a résumé

1. Add your PDF to the repository, for example as `resume.pdf`.
2. Find the résumé download link in `home.html`.
3. Change its `href` from `#` to `resume.pdf` and add the `download` attribute.

```html
<a class="btn primary" href="resume.pdf" download>DOWNLOAD RESUME ↓</a>
```

## Project structure

```text
.
├── index.html    # Entry point; redirects to the portfolio
├── home.html     # Portfolio content and page structure
├── styles.css    # Pixel/comic visual system and responsive layout
├── script.js     # Navigation and small interactions
└── README.md
```

## Deploy with GitHub Pages

1. Open the repository's **Settings** tab.
2. Select **Pages** under **Code and automation**.
3. Choose **Deploy from a branch** as the source.
4. Select the `main` branch and `/ (root)` folder, then save.

GitHub will display the public URL after the deployment finishes.

## License

This project is intended for use as a personal portfolio template. Replace all placeholder content before publishing.
