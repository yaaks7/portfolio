// Generated from the stack-diagram layout; edit the layout, not this file by hand.
import csv from '../../assets/stack/csv.svg'
import huggingface from '../../assets/stack/huggingface.svg'
import jupyter from '../../assets/stack/jupyter.svg'
import newsapi from '../../assets/stack/newsapi.svg'
import pandas from '../../assets/stack/pandas.svg'
import plotly from '../../assets/stack/plotly.svg'
import pytorch from '../../assets/stack/pytorch.svg'
import scipy from '../../assets/stack/scipy.svg'
import vader from '../../assets/stack/vader.svg'
import yahoo from '../../assets/stack/yahoo.svg'

const icons = {
  csv: csv,
  huggingface: huggingface,
  jupyter: jupyter,
  newsapi: newsapi,
  pandas: pandas,
  plotly: plotly,
  pytorch: pytorch,
  scipy: scipy,
  vader: vader,
  yahoo: yahoo,
}

const sentimentStack = {
  icons,
  ...{
 "accent": "#06B6D4",
 "label": "Tech stack of the Financial Sentiment Analysis project",
 "description": "Two Jupyter notebooks. In the first, requests pulls articles from NewsAPI and yfinance pulls prices from Yahoo Finance; pandas cleans them and writes CSV files. In the second, the CSV files go to Hugging Face Transformers (FinBERT and a general BERT, running on PyTorch) and to the VADER and TextBlob lexicons; pandas joins each article to the following trading day, SciPy runs the Pearson test, and Plotly draws the figures.",
 "breakpoint": 640,
 "wide": {
  "w": 620,
  "h": 810,
  "groups": [
   {
    "id": "src",
    "label": "Data sources",
    "icon": null,
    "pos": "tl",
    "variant": "plain",
    "x": 16,
    "y": 20,
    "w": 360,
    "h": 190
   },
   {
    "id": "nb1",
    "label": "data-collect.ipynb",
    "icon": "jupyter",
    "pos": "bl",
    "variant": "plain",
    "x": 16,
    "y": 230,
    "w": 180,
    "h": 210
   },
   {
    "id": "nb2",
    "label": "sentiment-analysis.ipynb",
    "icon": "jupyter",
    "pos": "tr",
    "variant": "plain",
    "x": 46,
    "y": 460,
    "w": 555,
    "h": 330
   }
  ],
  "nodes": [
   {
    "id": "news",
    "cx": 106,
    "top": 80,
    "icon": "newsapi",
    "name": "NewsAPI",
    "role": "news search api",
    "tile": ""
   },
   {
    "id": "yahoo",
    "cx": 286,
    "top": 80,
    "icon": "yahoo",
    "name": "Yahoo Finance",
    "role": "daily prices",
    "tile": "wide"
   },
   {
    "id": "pandas1",
    "cx": 106,
    "top": 290,
    "icon": "pandas",
    "name": "pandas",
    "role": "dedupe · returns",
    "tile": ""
   },
   {
    "id": "csv",
    "cx": 286,
    "top": 290,
    "icon": "csv",
    "name": "CSV files",
    "role": "../data folder",
    "tile": ""
   },
   {
    "id": "lex",
    "cx": 136,
    "top": 520,
    "icon": "vader",
    "name": "VADER · TextBlob",
    "role": "lexicon baselines",
    "tile": ""
   },
   {
    "id": "hf",
    "cx": 286,
    "top": 520,
    "icon": "huggingface",
    "name": "Transformers",
    "role": "FinBERT · BERT",
    "tile": ""
   },
   {
    "id": "torch",
    "cx": 436,
    "top": 520,
    "icon": "pytorch",
    "name": "PyTorch",
    "role": "model runtime",
    "tile": ""
   },
   {
    "id": "pandas2",
    "cx": 211,
    "top": 660,
    "icon": "pandas",
    "name": "pandas",
    "role": "merge_asof join",
    "tile": ""
   },
   {
    "id": "scipy",
    "cx": 361,
    "top": 660,
    "icon": "scipy",
    "name": "SciPy",
    "role": "pearson test",
    "tile": ""
   },
   {
    "id": "plotly",
    "cx": 511,
    "top": 660,
    "icon": "plotly",
    "name": "Plotly",
    "role": "figures (png)",
    "tile": ""
   }
  ],
  "edges": [
   {
    "d": "M106 186 V284",
    "kind": "flow",
    "label": "requests",
    "lx": 116,
    "ly": 205,
    "anchor": "start"
   },
   {
    "d": "M286 186 V220 H126 V284",
    "kind": "flow",
    "label": "yfinance",
    "lx": 296,
    "ly": 205,
    "anchor": "start"
   },
   {
    "d": "M142 320 H250",
    "kind": "flow",
    "label": "to_csv",
    "lx": 196,
    "ly": 312,
    "anchor": "middle"
   },
   {
    "d": "M286 396 V514",
    "kind": "flow",
    "label": "read_csv",
    "lx": 296,
    "ly": 440,
    "anchor": "start"
   },
   {
    "d": "M286 494 H136 V514",
    "kind": "flow",
    "label": null,
    "lx": null,
    "ly": null,
    "anchor": "middle"
   },
   {
    "d": "M322 550 H400",
    "kind": "link",
    "label": "runs on",
    "lx": 361.0,
    "ly": 542,
    "anchor": "middle"
   },
   {
    "d": "M136 626 V640 H203 V654",
    "kind": "flow",
    "label": null,
    "lx": null,
    "ly": null,
    "anchor": "middle"
   },
   {
    "d": "M286 626 V640 H219 V654",
    "kind": "flow",
    "label": null,
    "lx": null,
    "ly": null,
    "anchor": "middle"
   },
   {
    "d": "M247 690 H325",
    "kind": "flow",
    "label": "returns",
    "lx": 286.0,
    "ly": 682,
    "anchor": "middle"
   },
   {
    "d": "M397 690 H475",
    "kind": "flow",
    "label": "figures",
    "lx": 436.0,
    "ly": 682,
    "anchor": "middle"
   }
  ]
 },
 "narrow": {
  "w": 330,
  "h": 1100,
  "groups": [
   {
    "id": "src",
    "label": "Data sources",
    "icon": null,
    "pos": "tl",
    "variant": "plain",
    "x": 5,
    "y": 20,
    "w": 320,
    "h": 190
   },
   {
    "id": "nb1",
    "label": "data-collect.ipynb",
    "icon": "jupyter",
    "pos": "tl",
    "variant": "plain",
    "x": 5,
    "y": 230,
    "w": 320,
    "h": 190
   },
   {
    "id": "nb2",
    "label": "sentiment-analysis.ipynb",
    "icon": "jupyter",
    "pos": "br",
    "variant": "plain",
    "x": 5,
    "y": 590,
    "w": 320,
    "h": 490
   }
  ],
  "nodes": [
   {
    "id": "news",
    "cx": 95,
    "top": 80,
    "icon": "newsapi",
    "name": "NewsAPI",
    "role": "news search api",
    "tile": ""
   },
   {
    "id": "yahoo",
    "cx": 235,
    "top": 80,
    "icon": "yahoo",
    "name": "Yahoo Finance",
    "role": "daily prices",
    "tile": "wide"
   },
   {
    "id": "pandas1",
    "cx": 235,
    "top": 290,
    "icon": "pandas",
    "name": "pandas",
    "role": "dedupe · returns",
    "tile": ""
   },
   {
    "id": "csv",
    "cx": 235,
    "top": 470,
    "icon": "csv",
    "name": "CSV files",
    "role": "../data folder",
    "tile": ""
   },
   {
    "id": "lex",
    "cx": 95,
    "top": 650,
    "icon": "vader",
    "name": "VADER · TextBlob",
    "role": "lexicon baselines",
    "tile": ""
   },
   {
    "id": "hf",
    "cx": 235,
    "top": 650,
    "icon": "huggingface",
    "name": "Transformers",
    "role": "FinBERT · BERT",
    "tile": ""
   },
   {
    "id": "pandas2",
    "cx": 95,
    "top": 790,
    "icon": "pandas",
    "name": "pandas",
    "role": "merge_asof join",
    "tile": ""
   },
   {
    "id": "torch",
    "cx": 235,
    "top": 790,
    "icon": "pytorch",
    "name": "PyTorch",
    "role": "model runtime",
    "tile": ""
   },
   {
    "id": "scipy",
    "cx": 95,
    "top": 930,
    "icon": "scipy",
    "name": "SciPy",
    "role": "pearson test",
    "tile": ""
   },
   {
    "id": "plotly",
    "cx": 235,
    "top": 930,
    "icon": "plotly",
    "name": "Plotly",
    "role": "figures (png)",
    "tile": ""
   }
  ],
  "edges": [
   {
    "d": "M95 186 V220 H215 V284",
    "kind": "flow",
    "label": "requests",
    "lx": 105,
    "ly": 205,
    "anchor": "start"
   },
   {
    "d": "M235 186 V284",
    "kind": "flow",
    "label": "yfinance",
    "lx": 245,
    "ly": 205,
    "anchor": "start"
   },
   {
    "d": "M235 396 V464",
    "kind": "flow",
    "label": "to_csv",
    "lx": 245,
    "ly": 432,
    "anchor": "start"
   },
   {
    "d": "M235 576 V644",
    "kind": "flow",
    "label": "read_csv",
    "lx": 245,
    "ly": 585,
    "anchor": "start"
   },
   {
    "d": "M235 612 H95 V644",
    "kind": "flow",
    "label": null,
    "lx": null,
    "ly": null,
    "anchor": "middle"
   },
   {
    "d": "M235 756 V784",
    "kind": "link",
    "label": "runs on",
    "lx": 245,
    "ly": 774,
    "anchor": "start"
   },
   {
    "d": "M95 756 V784",
    "kind": "flow",
    "label": null,
    "lx": null,
    "ly": null,
    "anchor": "middle"
   },
   {
    "d": "M199 680 H165 V820 H131",
    "kind": "flow",
    "label": null,
    "lx": null,
    "ly": null,
    "anchor": "middle"
   },
   {
    "d": "M95 896 V924",
    "kind": "flow",
    "label": null,
    "lx": null,
    "ly": null,
    "anchor": "middle"
   },
   {
    "d": "M131 960 H199",
    "kind": "flow",
    "label": "figures",
    "lx": 165.0,
    "ly": 952,
    "anchor": "middle"
   }
  ]
 }
},
}

export default sentimentStack
