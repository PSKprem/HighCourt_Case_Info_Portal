# API Reference

The backend is a Flask application defined in `app.py`. It runs on
`http://127.0.0.1:5000` by default and has CORS enabled for all origins.

All judgment data is read from `judgment_data.csv` on each request.

---

## `GET /`

Health-check endpoint.

**Response** (`text/plain`):

```
Flask is working
```

---

## `POST /search`

Search judgments by petitioner name or by case number.

**Request** (form-encoded fields):

| Field         | Values             | Description                                   |
|---------------|--------------------|-----------------------------------------------|
| `search-type` | `name` \| anything | `name` searches the *Petitioner* column; any other value searches the *Case Number* column. |
| `search-input`| string             | The text to search for (case-insensitive substring match). |

**Behaviour**

- When `search-type` is `name`, rows are matched where the `Petitioner`
  column contains `search-input`.
- Otherwise, rows are matched where the `Case Number` column contains
  `search-input`.
- `PDF Link` and `HTML Link` values are wrapped in clickable
  `<a target="_blank">` anchors in the response.

**Response** (`application/json`) - a list of matching records, e.g.:

```json
[
  {
    "Judgment Date": "2023-05-12",
    "Judge": "Hon'ble Justice X",
    "Case Number": "WP(C) 123/2023",
    "Petitioner": "John Doe",
    "Respondent": "State",
    "PDF Link": "<a href=\"...\" target=\"_blank\">View PDF</a>",
    "HTML Link": "<a href=\"...\" target=\"_blank\">View HTML</a>"
  }
]
```

**Example**

```bash
curl -X POST http://127.0.0.1:5000/search \
  -d "search-type=name" \
  -d "search-input=doe"
```

---

## `GET /insights-data`

Return aggregate statistics used by the insights / visualisation page.

**Response** (`application/json`):

```json
{
  "court_counts": { "High Court of X": 120, "High Court of Y": 87 },
  "year_counts":  { "2021": 45, "2022": 61, "2023": 78 }
}
```

- `court_counts` - number of judgments per value in the `Court` column.
- `year_counts` - number of judgments per year, parsed from the `Date`
  column.
