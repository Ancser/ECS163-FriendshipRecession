# The Friendship Recession

An interactive **D3.js scrollytelling** visualization tracing the decline of close friendship and social connection in America, and how it compares across the world. The piece follows a single recurring character ("John") through a sequence of full-screen scenes, moving from a guided, author-driven narrative into open, reader-driven exploration — the [Segel & Heer](https://idl.cs.washington.edu/papers/narrative/) "martini-glass" structure.

> ECS 163 — Information Interfaces, Final Project — Team 01

---

## Description

The application is a **single-page, client-side web app** built on **D3 v7**. There is no build step, no bundler, and no server framework, it is plain HTML, CSS, and JavaScript that loads its data files at runtime and renders every visual with D3.

The narrative is organized as **eight full-height scenes**, each with its own section ID, connected by scroll-snapping and a progress indicator so that one idea stays on screen at a time:

1. **John (intro)** : A reusable "human battery" glyph paired with a social radar. Six spokes (Friends, Health, Trust, Community Attendance, Romance, Mental Health) are driven by GSS and YRBSS time series, with a year slider and play/pause control that drains the battery as the years advance.
2. **Hero sparkline** : A compact line of weekly social hours that frames the scale of the decline.
3. **Everyone (line chart)** : The primary national trend: average daily socializing hours, 2003–2024, from ATUS. The missing 2020 reading (BLS did not field the survey during COVID-19) is shown as an honest visible break rather than interpolated over.
4. **By Group (demographic bar chart)** : The same trend broken out by gender, age, employment, income, education, and race.
5. **Lost Time (stream graph)** : A stacked stream graph showing where social time was reallocated.
6. **The Weight (health icons)** : An icon-array chart expressing the mortality cost of chronic loneliness in cigarette-equivalent terms.
7. **World (choropleth + policy panel)** : An interactive D3 world map built from GeoJSON and the Meta–Gallup *State of Social Connections* data, with a drill-down panel of per-country detail.
8. **John, restored (closing)** : The opening glyph replayed in the opposite direction to close the arc.

Throughout, a single semantic color scheme is held constant (teal = improving, red = decline) so the reader never has to relearn what a chart means.

### Repository structure

```
.
├── index.html                        # The scrollytelling experience — all eight scenes
├── main.js                           # Scene logic for index.html (glyph, charts, scene wiring)
├── style.css                         # Styles for the scrollytelling page
│
├── map.html                          # Standalone "Global Loneliness Atlas" — entry point
├── map.js                            # Map + policy-detail engine (embedded Gallup + policy data)
├── map.css                           # Styles for the standalone map
│
├── line-chart.html                   # Standalone prototype of the socializing-time line chart
├── sankey.html                       # Standalone prototype of the (deferred) Sankey / flow view
├── preview.html                      # Development preview page
│
├── data/
│   ├── GSS.csv                       # General Social Survey series → John's radar/battery spokes
│   ├── YRBSS.csv                     # CDC Youth Risk Behavior series → youth spokes + framing
│   ├── ConnectedByCountry.csv        # Meta–Gallup connection % by country → world choropleth
│   ├── ConnectedByGenderCountry.csv  # Meta–Gallup connection % by country & gender
│   ├── LonlinessByCountry.csv        # Meta–Gallup loneliness % by country → world choropleth
│   ├── LonlinessByGenderCountry.csv  # Meta–Gallup loneliness % by country & gender
│   ├── data-24h.js                   # ATUS time-use constants (daily breakdown / stream graph)
│   ├── data-age.js                   # ATUS socializing-time split by age
│   ├── data-gender.js                # ATUS socializing-time split by gender
│   ├── data-income.js                # ATUS socializing-time split by income
│   ├── data-education.js             # ATUS socializing-time split by education
│   ├── data-race.js                  # ATUS socializing-time split by race/ethnicity
│   ├── data-companion-years.js       # Companion-presence series for the narrative
│   ├── maps-icon.png                 # Map UI asset
│   └── world.geojson                 # Country geometries for the choropleth
│
└── README.md
```

> **Note on the two artifacts.** The repo contains the main eight-scene scrollytelling page (`index.html` + `main.js` + `style.css`) and a **standalone "Global Loneliness Atlas"** (`map.html` + `map.js` + `map.css`) — a self-contained, more polished version of the world-map scene with an embedded Gallup dataset and a curated policy database. The two share the same map design language but are independently runnable. `line-chart.html`, `sankey.html`, and `preview.html` are standalone prototype/development pages for individual scenes and are not part of the main narrative flow.

### Data provenance

| Dataset | Source | Role in the piece | How it is consumed |
|---|---|---|---|
| **ATUS** — American Time Use Survey | U.S. Bureau of Labor Statistics | National socializing-time trend (2003–2024), with demographic splits | Cleaned into JavaScript constant modules (`data/data-*.js`); drives the line chart, demographic bar chart, and stream graph |
| **Meta–Gallup State of Social Connections** | Meta / Gallup (~140 countries) | Global connection & loneliness comparison, incl. gender splits | Loaded from CSV at runtime; drives the world choropleth + drill-down |
| **GSS** — General Social Survey | NORC, University of Chicago | Long-run U.S. wellbeing & confidant indicators | Loaded from `GSS.csv` at runtime; drives the glyph spokes |
| **YRBSS** — Youth Risk Behavior Surveillance System | U.S. CDC | Youth wellbeing & social-participation proxies | Loaded from `YRBSS.csv` at runtime; combined with GSS for the glyph |

**Honest provenance note:** the national ATUS series and demographic splits are cleaned constants stored in `data/data-*.js` rather than read from raw microdata, and the race/ethnicity bar values are approximated from supplemental tables. The Gallup, GSS, and YRBSS layers load from CSV at runtime. All sources are public; links are listed under [Datasets](#datasets) below.

---

## Installation

No package installation or build is required — the project runs in any modern browser. You only need a way to serve the folder over HTTP so the browser can load the CSV and GeoJSON files.

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd <repo-folder>
```

The included datasets are small (toy/quick-start sized) and ship with the repo inside `data/`, so **no separate dataset download is needed** to run the demo. To re-fetch the original public sources, see [Datasets](#datasets).

**Requirements:** any modern browser (Chrome, Firefox, Edge, Safari) and, for serving the files, **either** Python 3 **or** Node.js — whichever you already have. D3 v7 is loaded from a CDN in `index.html`, so an internet connection is needed on first load.

---

## Execution

Because `index.html` loads the CSV and GeoJSON files at runtime, it **must be served over HTTP**. Opening the file directly with `file://` (double-clicking it) will leave the data-driven charts blank, because browsers block `fetch` over the `file://` protocol.

Start a local static server from the project root:

```bash
# Option A — Python 3 (no install needed)
python3 -m http.server 8000

# Option B — Node.js
npx serve .       # or: npx http-server -p 8000
```

Then open the experience in your browser:

```
http://localhost:8000/index.html
```

To run the standalone Global Loneliness Atlas:

```
http://localhost:8000/map.html
```

Scroll through the page to advance the narrative; use the year slider / play-pause on the opening scene, the filter tabs on the demographic chart, and hover or click on the world map to open per-country detail.

---

## Reproducibility

A grader can reproduce the full project with three steps and no special setup:

1. Clone the repo (above).
2. From the project root, run `python3 -m http.server 8000`.
3. Open `http://localhost:8000/index.html` in a modern browser.

That is sufficient to view all eight scenes with live data. The only external dependency fetched at runtime is the D3 v7 library from its CDN, so the machine needs internet access on first load. Everything else (datasets, GeoJSON, all code) is contained in the repository.

If a chart appears blank, the cause is almost always that the page was opened via `file://` instead of `http://localhost` — start the local server and reload.

---

## Datasets

The small datasets needed to run the demo are included in `data/`. To obtain the original public sources:

- **ATUS** — American Time Use Survey, U.S. Bureau of Labor Statistics: https://www.bls.gov/tus/
- **Meta–Gallup State of Social Connections**: https://www.gallup.com/analytics/509675/state-of-social-connections.aspx
- **GSS** — General Social Survey, NORC: https://gss.norc.org/
- **YRBSS** — Youth Risk Behavior Surveillance System, U.S. CDC: https://www.cdc.gov/yrbs/

Any cleaning/preprocessing applied to these sources is reflected in the cleaned CSV/constants shipped in the repo; the values were extracted and tidied from the published tables of each source.

---

## Technology

- **D3.js v7** — every advanced visualization (radar/battery glyph, line chart, demographic bar chart, stream graph, icon-array health chart, and the world choropleth with drill-down) is implemented in D3.
- **Vanilla HTML / CSS / JavaScript** — no framework, no bundler, no build step.
- **GeoJSON** — Natural-Earth-style country geometries for the choropleth.

---

## Demo video (optional)

<!-- Add an unlisted YouTube link here showing install + execution -->
*Coming soon — unlisted YouTube walkthrough.*

---

## Team

Team 01 — ECS 163, Information Interfaces.
