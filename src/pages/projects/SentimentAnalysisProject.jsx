import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GitBranch, ExternalLink, Target, TrendingUp, BarChart2, AlignLeft } from 'lucide-react'
import '../Page.css'
import './ProjectStyles.css'

// Import images
import sentimentCompare from '../../assets/img/sentiment_compare.png'
import sentimentCorrelation from '../../assets/img/sentiment_correlation.png'

function SentimentAnalysisProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      {/* Navigation Header */}
      <div className="project-nav">
        <Link to="/projects" className="back-button">
          ← Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <div className="project-header">
        <div className="project-title-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'flex', color: '#06B6D4' }}><AlignLeft size={28} strokeWidth={1.5} /></span>
            <h1>Financial Sentiment Analysis</h1>
          </div>
          <p className="project-subtitle">
            Does news sentiment predict what a stock does the next day? A 4-model NLP pipeline (BERT,
            FinBERT, VADER, TextBlob) tests that question rigorously — and finds a well-powered null.
          </p>
          <div className="project-links">
            <a href="https://github.com/yaaks7/financial-sentiment" target="_blank" rel="noopener noreferrer" className="project-link github">
              <GitBranch size={14} strokeWidth={1.5} /> View on Github
            </a>
            <a href="https://github.com/yaaks7/financial-sentiment/blob/main/sentiment-analysis.ipynb" target="_blank" rel="noopener noreferrer" className="project-link demo">
              <ExternalLink size={14} strokeWidth={1.5} /> Notebook
            </a>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="note-card">
        <div className="note-content">
          <h2>Project Overview</h2>
          <p>
            I built a 4-model sentiment pipeline (BERT, FinBERT, VADER, TextBlob) for financial news, then
            correlated daily sentiment scores against forward returns for 12 large-cap companies.
          </p>

          <div className="key-stats">
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">NLP Models</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Companies Analyzed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">141</div>
              <div className="stat-label">Ticker-Days (Pooled Sample)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="note-card">
        <div className="note-content">
          <h2>Data Collection Pipeline</h2>

          <div className="tech-section">
            <h3>Financial News Sources</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <div>
                  <strong>News API Integration</strong>
                  <p>Real-time financial news collection with targeted keyword searches</p>
                </div>
              </div>
              <div className="tech-item">
                <div>
                  <strong>Multi-Company Coverage</strong>
                  <p>12 large-cap tickers across tech, finance, and energy: AAPL, MSFT, JPM, TSLA, NVDA,
                    GOOGL, AMZN, META, AMD, BAC, WMT, XOM</p>
                </div>
              </div>
              <div className="tech-item">
                <div>
                  <strong>Yahoo Finance Integration</strong>
                  <p>Historical stock prices, returns, and volatility metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Models Architecture */}
      <div className="note-card">
        <div className="note-content">
          <h2>Sentiment Analysis Models</h2>

          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon"><Target size={20} strokeWidth={1.5} /></div>
              <h4>BERT General</h4>
              <p><strong>Model:</strong> nlptown/bert-base-multilingual-uncased-sentiment</p>
              <p><strong>Approach:</strong> General-purpose multilingual sentiment detection</p>
              <p><strong>Strength:</strong> Broad language understanding and context</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><TrendingUp size={20} strokeWidth={1.5} /></div>
              <h4>FinBERT</h4>
              <p><strong>Model:</strong> ProsusAI/finbert</p>
              <p><strong>Approach:</strong> Finance-specialized BERT model</p>
              <p><strong>Strength:</strong> Domain expertise in financial terminology</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><BarChart2 size={20} strokeWidth={1.5} /></div>
              <h4>VADER</h4>
              <p><strong>Model:</strong> Valence Aware Dictionary and sEntiment Reasoner</p>
              <p><strong>Approach:</strong> Lexicon-based sentiment analysis</p>
              <p><strong>Strength:</strong> Social media optimized, intensifier awareness</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><AlignLeft size={20} strokeWidth={1.5} /></div>
              <h4>TextBlob</h4>
              <p><strong>Model:</strong> Pattern-based sentiment analysis</p>
              <p><strong>Approach:</strong> Rule-based lexical analysis</p>
              <p><strong>Strength:</strong> Fast processing, baseline comparison</p>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div className="note-card">
        <div className="note-content">
          <h2>Analysis Methodology</h2>

          <h3>Text Preprocessing Pipeline</h3>
          <div className="parameter-grid">
            <div className="parameter-item">
              <h4>Content Extraction</h4>
              <p>Intelligent combination of article titles and descriptions with deduplication</p>
            </div>
            <div className="parameter-item">
              <h4>Financial Text Cleaning</h4>
              <p>Preservation of financial symbols ($, %) while removing noise and URLs</p>
            </div>
            <div className="parameter-item">
              <h4>Length Filtering</h4>
              <p>Quality control with minimum 10 and maximum 2000 character limits</p>
            </div>
          </div>

          <h3>Multi-Model Analysis Framework</h3>
          <div className="code-section">
            <div className="code-highlight">
              <h4>Sentiment Analysis Engine</h4>
              <pre className="code-block">
{`def analyze_sentiment_transformers(text, models_dict):
    results = {}

    for model_name, model_data in models_dict.items():
        pipeline = model_data["pipeline"]
        prediction = pipeline(text[:512])  # Limit length

        best_pred = max(prediction[0], key=lambda x: x['score'])
        label = best_pred['label'].lower()
        score = best_pred['score']

        # Normalize sentiment scores across models
        if 'neg' in label:
            sentiment_score = -score
            final_label = "negative"
        elif 'pos' in label:
            sentiment_score = score
            final_label = "positive"
        else:
            sentiment_score = 0
            final_label = "neutral"

        results[model_name] = {
            "label": final_label,
            "confidence": score,
            "sentiment_score": sentiment_score
        }

    return results`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Key Findings */}
      <div className="note-card">
        <div className="note-content">
          <h2>Key Research Findings</h2>

          <h3>Model Agreement</h3>
          <p>
            Running all four models on the same headlines shows they don't agree with each other very much,
            which matters for how much weight to put on any single one of them.
          </p>
          <div className="key-stats">
            <div className="stat-item">
              <div className="stat-number">~37%</div>
              <div className="stat-label">BERT General vs FinBERT Agreement</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">~27%</div>
              <div className="stat-label">BERT General vs TextBlob Agreement</div>
            </div>
          </div>
          <p>
            Because agreement is this low, averaging the models would cancel out information rather than
            combine it. Only <strong>FinBERT</strong>, the finance-specialized model, is carried forward
            into the price correlation test.
          </p>

          <h3>Model Distribution Analysis</h3>
          <div className="interface-section">
            <div className="project-screenshot">
              <img src={sentimentCompare} alt="Comparative analysis of sentiment model distributions showing BERT General, FinBERT, TextBlob, and VADER behavioral patterns with correlation heatmap" className="interface-img" />
            </div>
            <p>
              The four models produce distinct score distributions: BERT General is bimodal with extreme
              positive and negative peaks and little middle ground; FinBERT concentrates heavily around
              neutral with smaller positive and negative tails, reflecting its finance-specific training;
              TextBlob is roughly Gaussian and centered near neutral-to-positive; and VADER is positively
              skewed, consistent with a lexicon tuned for informal, social-media-style text. The correlation
              heatmap in the same figure confirms these are measuring meaningfully different things, not
              just noisy versions of the same signal.
            </p>
          </div>

          <h3>Behavioral Signatures</h3>
          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon"><Target size={20} strokeWidth={1.5} /></div>
              <h4>BERT General - Conservative Analyzer</h4>
              <p><strong>Pattern:</strong> Bimodal distribution with extreme peaks</p>
              <p><strong>Strength:</strong> Clear decisional boundaries, low ambiguity</p>
              <p><strong>Weakness:</strong> Limited financial context understanding</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><TrendingUp size={20} strokeWidth={1.5} /></div>
              <h4>FinBERT - Domain Expert</h4>
              <p><strong>Pattern:</strong> Neutral-concentrated with positive/negative tails</p>
              <p><strong>Strength:</strong> Financial terminology expertise, context awareness</p>
              <p><strong>Role:</strong> The only model used for the price correlation test</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><BarChart2 size={20} strokeWidth={1.5} /></div>
              <h4>VADER - Social Media Optimized</h4>
              <p><strong>Pattern:</strong> Positive skewness, intensifier sensitive</p>
              <p><strong>Strength:</strong> Amplifier detection, informal language</p>
              <p><strong>Speed:</strong> Fastest processing for real-time applications</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><AlignLeft size={20} strokeWidth={1.5} /></div>
              <h4>TextBlob - Optimistic Baseline</h4>
              <p><strong>Pattern:</strong> Gaussian distribution, neutral concentration</p>
              <p><strong>Characteristic:</strong> Conservative approach, positive bias</p>
              <p><strong>Reliability:</strong> Consistent lexicon-based baseline for comparison</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sentiment-Price Correlation */}
      <div className="note-card">
        <div className="note-content">
          <h2>Sentiment-Price Correlation Analysis</h2>

          <h3>Market Impact Measurement</h3>
          <div className="metrics-grid">
            <div className="metric-category">
              <h4>Temporal Alignment Strategy</h4>
              <ul className="metric-list">
                <li>Daily sentiment aggregation by company</li>
                <li>Forward-looking returns (1D, 3D, 5D)</li>
                <li>Volatility impact assessment</li>
              </ul>
            </div>

            <div className="metric-category">
              <h4>Correlation Metrics</h4>
              <ul className="metric-list">
                <li>Pearson correlation sentiment-returns</li>
                <li>Quintile-based performance analysis</li>
              </ul>
            </div>
          </div>

          <h3>Sentiment-Return Correlation Results</h3>
          <div className="code-highlight">
            <pre className="code-block">
{`# FinBERT sentiment vs next-day forward return
# Pooled across 12 companies, z-scored within each ticker
result = {
    "r": 0.000,
    "p_value": 1.000,
    "n": 141,  # ticker-days
    "bootstrap_95_ci": [-0.187, 0.177],
}

interpretation = "No detectable relationship - consistent with sentiment already being priced in"`}
            </pre>
          </div>
          <p>
            The 95% confidence interval is tight enough to rule out a moderate-to-large effect. A small one
            (r ≈ 0.05–0.10) could still exist below what this sample can detect — the collection window is
            18 trading days, capped by the NewsAPI free tier, and a few tickers have too few articles to
            trust individually.
          </p>

          <h3>Temporal Analysis Case Study</h3>
          <div className="interface-section">
            <div className="project-screenshot">
              <img src={sentimentCorrelation} alt="Temporal analysis of XOM showing FinBERT sentiment vs price over time, with article volume and volatility patterns" className="interface-img" />
            </div>
            <p>
              Temporal analysis of ExxonMobil (XOM): the top chart tracks FinBERT sentiment against the
              stock's price over the same window, and the bottom chart tracks article volume against 5-day
              realized volatility — together illustrating the kind of case that feeds into the pooled result
              above.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="note-card">
        <div className="note-content">
          <h2>Technical Implementation</h2>

          <div className="code-section">
            <h3>Data Collection Pipeline</h3>
            <div className="code-highlight">
              <h4>Financial News API Integration</h4>
              <pre className="code-block">
{`def collect_financial_news(company_ticker, company_info, days_back=30):
    all_articles = []
    search_terms = [company_info['name']] + company_info['keywords']

    for term in search_terms[:3]:
        params = {
            'q': f'"{term}" AND (stock OR shares OR earnings OR revenue)',
            'language': 'en',
            'sortBy': 'publishedAt',
            'from': (END_DATE - timedelta(days=days_back)).strftime('%Y-%m-%d'),
            'apiKey': NEWS_API_KEY,
            'pageSize': 50
        }

        response = requests.get(NEWS_API_URL, params=params)
        data = response.json()

        for article in data.get('articles', []):
            all_articles.append({
                'ticker': company_ticker,
                'title': article['title'],
                'description': article['description'],
                'published_at': article['publishedAt'],
                'source': article['source']['name']
            })

    return pd.DataFrame(all_articles).drop_duplicates(subset=['title'])`}
              </pre>
            </div>

            <h3>Sentiment-Price Data Alignment</h3>
            <div className="code-highlight">
              <h4>Temporal Data Synchronization</h4>
              <pre className="code-block">
{`def prepare_sentiment_price_data(sentiment_df, prices_df):
    # Daily sentiment aggregation
    daily_sentiment = sentiment_df.groupby(['ticker', 'date']).agg({
        'FinBERT_score': ['mean', 'std', 'count'],
        'BERT_General_score': ['mean', 'std', 'count'],
        'VADER_score': ['mean', 'std', 'count']
    })

    # Forward-looking returns calculation
    prices_daily['return_1d'] = prices_daily.groupby('ticker')['Close'].pct_change(1)
    prices_daily['return_3d'] = prices_daily.groupby('ticker')['Close'].pct_change(3)
    prices_daily['volatility_5d'] = prices_daily.groupby('ticker')['return_1d'].rolling(5).std()

    # Merge datasets for correlation analysis
    combined_data = pd.merge(daily_sentiment, prices_daily, on=['ticker', 'date'])

    return combined_data`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Research Insights */}
      <div className="note-card">
        <div className="note-content">
          <h2>Research Insights</h2>

          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon"><GitBranch size={20} strokeWidth={1.5} /></div>
              <h4>Inter-Model Agreement</h4>
              <p><strong>BERT vs FinBERT:</strong> ~37% agreement</p>
              <p><strong>BERT vs TextBlob:</strong> ~27% agreement</p>
              <p><strong>Implication:</strong> Only FinBERT is used for the price test</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><BarChart2 size={20} strokeWidth={1.5} /></div>
              <h4>Predictive Value</h4>
              <p><strong>Result:</strong> r ≈ 0.000, p = 1.000, n = 141</p>
              <p><strong>Interpretation:</strong> Consistent with market efficiency</p>
              <p><strong>Not ruled out:</strong> A small effect below detection threshold</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><Target size={20} strokeWidth={1.5} /></div>
              <h4>Scope & Next Steps</h4>
              <p><strong>Window:</strong> 18 trading days, 12 tickers</p>
              <p><strong>Biggest lever:</strong> More calendar time, not more tickers</p>
              <p><strong>Unresolved:</strong> A mild U-shaped quintile pattern, untested</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Demonstrated */}
      <div className="note-card">
        <div className="note-content">
          <h2>Skills Demonstrated</h2>

          <div className="impact-summary">
            <div className="skills-demonstrated">
              <div className="skills-grid">
                <span className="skill-tag">Financial NLP</span>
                <span className="skill-tag">BERT/FinBERT</span>
                <span className="skill-tag">Sentiment Analysis</span>
                <span className="skill-tag">Data Pipeline</span>
                <span className="skill-tag">Time Series Analysis</span>
                <span className="skill-tag">Multi-Model Comparison</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">Transformers</span>
                <span className="skill-tag">Financial Markets</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="project-footer">
        <Link to="/projects" className="footer-link">
          ← Back to All Projects
        </Link>
        <Link to="/contact" className="footer-link">
          Get in Touch →
        </Link>
      </div>
    </motion.div>
  )
}

export default SentimentAnalysisProject
