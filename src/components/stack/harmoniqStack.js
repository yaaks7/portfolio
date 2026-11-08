// Generated from the stack-diagram layout; edit the layout, not this file by hand.
import bootstrap from '../../assets/stack/bootstrap.svg'
import fastapi from '../../assets/stack/fastapi.svg'
import highs from '../../assets/stack/highs.png'
import javascript from '../../assets/stack/javascript.svg'
import jinja from '../../assets/stack/jinja.svg'
import jquery from '../../assets/stack/jquery.svg'
import leaflet from '../../assets/stack/leaflet.svg'
import modules from '../../assets/stack/modules.svg'
import networkx from '../../assets/stack/networkx.svg'
import pandas from '../../assets/stack/pandas.svg'
import plotly from '../../assets/stack/plotly.svg'
import pvlib from '../../assets/stack/pvlib.png'
import pypsa from '../../assets/stack/pypsa.svg'
import sqlite from '../../assets/stack/sqlite.svg'

const icons = {
  bootstrap: bootstrap,
  fastapi: fastapi,
  highs: highs,
  javascript: javascript,
  jinja: jinja,
  jquery: jquery,
  leaflet: leaflet,
  modules: modules,
  networkx: networkx,
  pandas: pandas,
  plotly: plotly,
  pvlib: pvlib,
  pypsa: pypsa,
  sqlite: sqlite,
}

const harmoniqStack = {
  icons,
  ...{
 "accent": "#10B981",
 "label": "Tech stack of HarmoniQ and its reseau module",
 "description": "The browser page (JavaScript with jQuery, Bootstrap, Leaflet and Plotly.js) sends one request to a FastAPI server, which also renders pages with Jinja2. The request reaches the reseau module, which uses pandas to load data, PyPSA to model the grid, HiGHS for dispatch and NetworkX to check for disconnected islands. It reads the grid and plants from SQLite and demand from a read-only SQLite file, and receives production profiles from the wind, solar, hydro and nuclear modules (solar uses pvlib).",
 "breakpoint": 640,
 "wide": {
  "w": 780,
  "h": 900,
  "groups": [
   {
    "id": "browser",
    "label": "Browser",
    "icon": null,
    "pos": "tl",
    "variant": "plain",
    "x": 20,
    "y": 20,
    "w": 740,
    "h": 190
   },
   {
    "id": "server",
    "label": "Python server",
    "icon": null,
    "pos": "tr",
    "variant": "plain",
    "x": 300,
    "y": 240,
    "w": 320,
    "h": 190
   },
   {
    "id": "reseau",
    "label": "reseau · my module",
    "icon": null,
    "pos": "tl",
    "variant": "accent",
    "x": 160,
    "y": 460,
    "w": 600,
    "h": 190
   },
   {
    "id": "data",
    "label": "Data",
    "icon": null,
    "pos": "br",
    "variant": "plain",
    "x": 60,
    "y": 670,
    "w": 320,
    "h": 210
   },
   {
    "id": "mods",
    "label": "Production modules",
    "icon": null,
    "pos": "br",
    "variant": "plain",
    "x": 400,
    "y": 670,
    "w": 320,
    "h": 210
   }
  ],
  "nodes": [
   {
    "id": "plotly",
    "cx": 110,
    "top": 80,
    "icon": "plotly",
    "name": "Plotly.js",
    "role": "charts",
    "tile": ""
   },
   {
    "id": "leaflet",
    "cx": 250,
    "top": 80,
    "icon": "leaflet",
    "name": "Leaflet",
    "role": "grid map",
    "tile": "wide"
   },
   {
    "id": "js",
    "cx": 390,
    "top": 80,
    "icon": "javascript",
    "name": "JavaScript",
    "role": "harmoniq.js · fetch",
    "tile": ""
   },
   {
    "id": "jquery",
    "cx": 530,
    "top": 80,
    "icon": "jquery",
    "name": "jQuery",
    "role": "DOM",
    "tile": "wide"
   },
   {
    "id": "bootstrap",
    "cx": 670,
    "top": 80,
    "icon": "bootstrap",
    "name": "Bootstrap",
    "role": "layout · modals",
    "tile": ""
   },
   {
    "id": "fastapi",
    "cx": 390,
    "top": 300,
    "icon": "fastapi",
    "name": "FastAPI",
    "role": "REST · uvicorn",
    "tile": ""
   },
   {
    "id": "jinja",
    "cx": 530,
    "top": 300,
    "icon": "jinja",
    "name": "Jinja2",
    "role": "html pages",
    "tile": ""
   },
   {
    "id": "pandas",
    "cx": 250,
    "top": 520,
    "icon": "pandas",
    "name": "pandas",
    "role": "loader · series",
    "tile": ""
   },
   {
    "id": "pypsa",
    "cx": 390,
    "top": 520,
    "icon": "pypsa",
    "name": "PyPSA",
    "role": "network model",
    "tile": ""
   },
   {
    "id": "highs",
    "cx": 530,
    "top": 520,
    "icon": "highs",
    "name": "HiGHS",
    "role": "LP dispatch",
    "tile": ""
   },
   {
    "id": "nx",
    "cx": 670,
    "top": 520,
    "icon": "networkx",
    "name": "NetworkX",
    "role": "islands check",
    "tile": ""
   },
   {
    "id": "sqlite",
    "cx": 150,
    "top": 730,
    "icon": "sqlite",
    "name": "SQLite",
    "role": "SQLAlchemy ORM",
    "tile": "wide"
   },
   {
    "id": "demand",
    "cx": 290,
    "top": 730,
    "icon": "sqlite",
    "name": "Demand DB",
    "role": "read-only sqlite",
    "tile": "wide"
   },
   {
    "id": "pvlib",
    "cx": 490,
    "top": 730,
    "icon": "pvlib",
    "name": "pvlib",
    "role": "solar · PVGIS",
    "tile": ""
   },
   {
    "id": "plants",
    "cx": 630,
    "top": 730,
    "icon": "modules",
    "name": "Plant modules",
    "role": "wind/hydro/nuclear",
    "tile": ""
   }
  ],
  "edges": [
   {
    "d": "M390 186 V294",
    "kind": "flow",
    "label": "POST /api/reseau/production",
    "lx": 400,
    "ly": 232,
    "anchor": "start"
   },
   {
    "d": "M426 330 H494",
    "kind": "link",
    "label": "pages",
    "lx": 460.0,
    "ly": 322,
    "anchor": "middle"
   },
   {
    "d": "M390 406 V514",
    "kind": "flow",
    "label": "InfraReseau",
    "lx": 400,
    "ly": 450,
    "anchor": "start"
   },
   {
    "d": "M286 550 H354",
    "kind": "flow",
    "label": "network",
    "lx": 320.0,
    "ly": 542,
    "anchor": "middle"
   },
   {
    "d": "M426 550 H494",
    "kind": "flow",
    "label": "dispatch",
    "lx": 460.0,
    "ly": 542,
    "anchor": "middle"
   },
   {
    "d": "M150 724 V660 H240 V626",
    "kind": "link",
    "label": "grid · plants",
    "lx": 160,
    "ly": 700,
    "anchor": "start"
   },
   {
    "d": "M290 724 V660 H260 V626",
    "kind": "link",
    "label": "demand",
    "lx": 300,
    "ly": 700,
    "anchor": "start"
   },
   {
    "d": "M490 724 V660 H400 V626",
    "kind": "link",
    "label": "profiles",
    "lx": 500,
    "ly": 700,
    "anchor": "start"
   },
   {
    "d": "M630 724 V660 H415 V626",
    "kind": "link",
    "label": null,
    "lx": null,
    "ly": null,
    "anchor": "middle"
   }
  ]
 },
 "narrow": {
  "w": 330,
  "h": 1440,
  "groups": [
   {
    "id": "browser",
    "label": "Browser",
    "icon": null,
    "pos": "tl",
    "variant": "plain",
    "x": 5,
    "y": 20,
    "w": 320,
    "h": 470
   },
   {
    "id": "server",
    "label": "Python server",
    "icon": null,
    "pos": "tr",
    "variant": "plain",
    "x": 5,
    "y": 510,
    "w": 320,
    "h": 190
   },
   {
    "id": "reseau",
    "label": "reseau · my module",
    "icon": null,
    "pos": "tr",
    "variant": "accent",
    "x": 5,
    "y": 720,
    "w": 320,
    "h": 330
   },
   {
    "id": "inputs",
    "label": "Inputs",
    "icon": null,
    "pos": "br",
    "variant": "plain",
    "x": 5,
    "y": 1070,
    "w": 320,
    "h": 350
   }
  ],
  "nodes": [
   {
    "id": "plotly",
    "cx": 95,
    "top": 80,
    "icon": "plotly",
    "name": "Plotly.js",
    "role": "charts",
    "tile": ""
   },
   {
    "id": "leaflet",
    "cx": 235,
    "top": 80,
    "icon": "leaflet",
    "name": "Leaflet",
    "role": "grid map",
    "tile": "wide"
   },
   {
    "id": "jquery",
    "cx": 95,
    "top": 220,
    "icon": "jquery",
    "name": "jQuery",
    "role": "DOM",
    "tile": "wide"
   },
   {
    "id": "bootstrap",
    "cx": 235,
    "top": 220,
    "icon": "bootstrap",
    "name": "Bootstrap",
    "role": "layout · modals",
    "tile": ""
   },
   {
    "id": "js",
    "cx": 95,
    "top": 360,
    "icon": "javascript",
    "name": "JavaScript",
    "role": "harmoniq.js · fetch",
    "tile": ""
   },
   {
    "id": "fastapi",
    "cx": 95,
    "top": 570,
    "icon": "fastapi",
    "name": "FastAPI",
    "role": "REST · uvicorn",
    "tile": ""
   },
   {
    "id": "jinja",
    "cx": 235,
    "top": 570,
    "icon": "jinja",
    "name": "Jinja2",
    "role": "html pages",
    "tile": ""
   },
   {
    "id": "pypsa",
    "cx": 95,
    "top": 780,
    "icon": "pypsa",
    "name": "PyPSA",
    "role": "network model",
    "tile": ""
   },
   {
    "id": "highs",
    "cx": 235,
    "top": 780,
    "icon": "highs",
    "name": "HiGHS",
    "role": "LP dispatch",
    "tile": ""
   },
   {
    "id": "pandas",
    "cx": 95,
    "top": 920,
    "icon": "pandas",
    "name": "pandas",
    "role": "loader · series",
    "tile": ""
   },
   {
    "id": "nx",
    "cx": 235,
    "top": 920,
    "icon": "networkx",
    "name": "NetworkX",
    "role": "islands check",
    "tile": ""
   },
   {
    "id": "sqlite",
    "cx": 95,
    "top": 1130,
    "icon": "sqlite",
    "name": "SQLite",
    "role": "SQLAlchemy ORM",
    "tile": "wide"
   },
   {
    "id": "demand",
    "cx": 235,
    "top": 1130,
    "icon": "sqlite",
    "name": "Demand DB",
    "role": "read-only sqlite",
    "tile": "wide"
   },
   {
    "id": "pvlib",
    "cx": 95,
    "top": 1270,
    "icon": "pvlib",
    "name": "pvlib",
    "role": "solar · PVGIS",
    "tile": ""
   },
   {
    "id": "plants",
    "cx": 235,
    "top": 1270,
    "icon": "modules",
    "name": "Plant modules",
    "role": "wind/hydro/nuclear",
    "tile": ""
   }
  ],
  "edges": [
   {
    "d": "M95 466 V564",
    "kind": "flow",
    "label": "POST /api/reseau/production",
    "lx": 105,
    "ly": 503,
    "anchor": "start"
   },
   {
    "d": "M131 600 H199",
    "kind": "link",
    "label": "pages",
    "lx": 165.0,
    "ly": 592,
    "anchor": "middle"
   },
   {
    "d": "M95 676 V774",
    "kind": "flow",
    "label": "InfraReseau",
    "lx": 105,
    "ly": 740,
    "anchor": "start"
   },
   {
    "d": "M131 810 H199",
    "kind": "flow",
    "label": "dispatch",
    "lx": 165.0,
    "ly": 802,
    "anchor": "middle"
   },
   {
    "d": "M95 914 V886",
    "kind": "flow",
    "label": "network",
    "lx": 105,
    "ly": 905,
    "anchor": "start"
   },
   {
    "d": "M95 1124 V1026",
    "kind": "link",
    "label": "grid · plants",
    "lx": 105,
    "ly": 1100,
    "anchor": "start"
   },
   {
    "d": "M235 1124 V1060 H110 V1026",
    "kind": "link",
    "label": "demand",
    "lx": 245,
    "ly": 1100,
    "anchor": "start"
   }
  ]
 }
},
}

export default harmoniqStack
