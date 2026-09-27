# High Court Case Info Portal

A web application to **search and explore High Court judgments**. Users can
look up cases by petitioner name or case number, view linked judgment PDFs,
and browse visual insights such as court-wise and year-wise judgment counts.

The project has two parts:

- **Backend** - a [Flask](https://flask.palletsprojects.com/) API (`app.py`)
  that reads judgment records from a CSV and exposes search and insights
  endpoints.
- **Frontend** - a set of HTML/CSS/JS pages (in `frontend/`) providing the
  search UI, dark mode, voice search, accessibility pages, and data
  visualisation.

## Features

- 🔍 **Search** judgments by petitioner name or case number.
- 📄 **Direct links** to judgment PDF / HTML documents.
- 📊 **Insights** dashboard - court-wise and year-wise judgment counts.
- 🌙 **Dark / light mode** toggle.
- 🎤 **Voice search** (browsers that support the Web Speech API).
- ♿ **Accessibility** pages (screen-reader support, accessibility statement).

## Tech stack

| Layer     | Technology                     |
|-----------|--------------------------------|
| Backend   | Python, Flask, Flask-CORS      |
| Data      | pandas, CSV (`judgment_data.csv`) |
| Frontend  | HTML, CSS, JavaScript          |

## Quick start

```bash
# 1. Clone
git clone https://github.com/PSKprem/HighCourt_Case_Info_Portal.git
cd HighCourt_Case_Info_Portal

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run the backend
python app.py
```

The server starts on `http://127.0.0.1:5000`. Open the frontend pages in
`frontend/` (for example `frontend/index.html`) in your browser.

For a detailed walkthrough see [`docs/SETUP.md`](docs/SETUP.md).

## Data format

`judgment_data.csv` has the following columns:

```
Judgment Date, Judge, Case Number, Petitioner, Respondent, PDF Link, HTML Link
```

## Documentation

- [API reference](docs/API.md) - backend endpoints.
- [Setup guide](docs/SETUP.md) - detailed local setup.
- [Frontend guide](docs/FRONTEND.md) - pages and client features.
- [Contributing](CONTRIBUTING.md) - how to contribute.

## License

Released under the MIT License. See [LICENSE](LICENSE).
