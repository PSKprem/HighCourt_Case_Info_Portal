# Setup Guide

This guide walks through running the High Court Case Info Portal locally.

## Prerequisites

- **Python 3.8+** - check with `python --version`.
- **pip** - usually bundled with Python.
- A modern web browser (Chrome/Edge recommended for voice search support).

## 1. Get the code

```bash
git clone https://github.com/PSKprem/HighCourt_Case_Info_Portal.git
cd HighCourt_Case_Info_Portal
```

## 2. (Recommended) Create a virtual environment

```bash
# Windows (PowerShell)
python -m venv .venv
.venv\Scripts\Activate.ps1

# macOS / Linux
python3 -m venv .venv
source .venv/bin/activate
```

## 3. Install dependencies

```bash
pip install -r requirements.txt
```

This installs Flask, Flask-CORS, and pandas.

## 4. Run the backend

```bash
python app.py
```

You should see Flask start in debug mode on `http://127.0.0.1:5000`.
Visit that URL and you should see `Flask is working`.

## 5. Open the frontend

Open the HTML pages in the `frontend/` folder in your browser. Start with:

```
frontend/index.html
```

The frontend calls the backend at `http://127.0.0.1:5000`, so keep the Flask
server running.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `ModuleNotFoundError: No module named 'flask'` | Run `pip install -r requirements.txt` inside your virtual environment. |
| CORS errors in the browser console | Ensure the Flask server is running; CORS is already enabled in `app.py`. |
| Search returns nothing | Confirm `judgment_data.csv` exists and has the expected columns. |
| Voice search button disabled | Your browser does not support the Web Speech API; use Chrome/Edge. |
