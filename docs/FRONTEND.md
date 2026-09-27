# Frontend Guide

The frontend lives in the `frontend/` folder and is built with plain HTML,
CSS, and JavaScript (no build step required).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home page with the search bar and navigation. |
| `results.html` | Displays search results returned by the backend. |
| `insights.html` | Charts of court-wise and year-wise judgment counts. |
| `visualisation.html` | Additional data visualisations. |
| `information.html` | General information about the portal. |
| `features.html` | List of portal features. |
| `About.html` / `About_website.html` | About the team / the website. |
| `contact.html` | Contact details. |
| `feedback.html` | User feedback form. |
| `FAQs.html` | Frequently asked questions. |
| `help_us.html` | How users can help / contribute. |
| `Accessbility.html` / `Screen_reader.html` | Accessibility statement and screen-reader guidance. |
| `Term_and_condition.html` | Terms and conditions. |
| `update.html` | Update / changelog page. |
| `sikkim.html`, `Tripura.html` | Court-specific pages. |

## Assets

- `app.css` - shared styles for all pages.
- `app.js` - shared client-side behaviour (see below).
- Images (`*.jpg`, `*.jpeg`, `*.png`) - logos and team/court photos.

## Client-side features (`app.js`)

### Dark / light mode
A toggle button (`#modeToggle`) adds or removes the `dark-mode` class on
`<body>` and swaps the icon between 🌙 and ☀️.

### Voice search
Uses the browser **Web Speech API** (`webkitSpeechRecognition`). Clicking the
voice button (`#voiceSearchBtn`) starts recognition and fills the search input
with the transcribed text. If the browser does not support the API, the button
is disabled with an explanatory tooltip.

### Search dropdown
The search input shows a dropdown of navigation options on focus, hides it when
clicking outside, and navigates to a page when an option with a `data-url`
attribute is clicked.

## Connecting to the backend

The pages send requests to the Flask backend running on
`http://127.0.0.1:5000` (see [API.md](API.md)). Make sure the backend is
running before using search or insights features.
