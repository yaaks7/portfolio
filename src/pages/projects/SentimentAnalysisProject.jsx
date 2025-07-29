import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
        <div className="project-icon">📰</div>
        <div className="project-title-section">
          <h1>Financial Sentiment Analysis</h1>
          <p className="project-subtitle">
            Multi-model sentiment analysis for financial news and reports using BERT, FinBERT, and traditional NLP approaches
          </p>
          <div className="project-links">
            <a href="https://github.com/yaaks7/portfolio-ia" target="_blank" rel="noopener noreferrer" className="project-link github">
              <span>🖥️</span> View on Github
            </a>
            <a href="https://github.com/yaaks7/portfolio-ia/blob/main/projets/semaine-01-02-transformers/notebooks/02-analyse-sentiment.ipynb" target="_blank" rel="noopener noreferrer" className="project-link demo">
              <span>📓</span> Notebook
            </a>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="note-card">
        <div className="note-content">
          <h2>🎯 Project Overview</h2>
          <p>
            This comprehensive sentiment analysis project develops a multi-model framework for analyzing financial news and reports. 
            The system combines state-of-the-art transformer models with traditional NLP approaches to provide nuanced sentiment 
            scoring and correlation analysis with market movements.
          </p>
          
          <div className="key-stats">
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">NLP Models</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Companies Analyzed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="note-card">
        <div className="note-content">
          <h2>🏗️ Data Collection Pipeline</h2>
          
          <div className="tech-section">
            <h3>Financial News Sources</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <span className="tech-icon">📡</span>
                <div>
                  <strong>News API Integration</strong>
                  <p>Real-time financial news collection with targeted keyword searches</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🎯</span>
                <div>
                  <strong>Multi-Company Coverage</strong>
                  <p>AAPL, MSFT, JPM, TSLA, NVDA across technology and financial sectors</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">📈</span>
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
          <h2>🤖 Sentiment Analysis Models</h2>
          
          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon">🎯</div>
              <h4>BERT General</h4>
              <p><strong>Model:</strong> nlptown/bert-base-multilingual-uncased-sentiment</p>
              <p><strong>Approach:</strong> General-purpose multilingual sentiment detection</p>
              <p><strong>Strength:</strong> Broad language understanding and context</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">💰</div>
              <h4>FinBERT</h4>
              <p><strong>Model:</strong> ProsusAI/finbert</p>
              <p><strong>Approach:</strong> Finance-specialized BERT model</p>
              <p><strong>Strength:</strong> Domain expertise in financial terminology</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">📊</div>
              <h4>VADER</h4>
              <p><strong>Model:</strong> Valence Aware Dictionary and sEntiment Reasoner</p>
              <p><strong>Approach:</strong> Lexicon-based sentiment analysis</p>
              <p><strong>Strength:</strong> Social media optimized, intensifier awareness</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🔤</div>
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
          <h2>🔬 Analysis Methodology</h2>
          
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
          <h2>🏆 Key Research Findings</h2>
          
          <h3>Model Performance Comparison</h3>
          <div className="performance-table">
            <table>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Approach</th>
                  <th>Avg Score Range</th>
                  <th>Positive %</th>
                  <th>Negative %</th>
                  <th>Neutral %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="model-name">BERT General</td>
                  <td>Deep Learning</td>
                  <td>[-0.8, +0.8]</td>
                  <td>35%</td>
                  <td>25%</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <td className="model-name">FinBERT</td>
                  <td>Finance-Specialized</td>
                  <td>[-0.9, +0.9]</td>
                  <td className="best-value">42%</td>
                  <td>28%</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td className="model-name">VADER</td>
                  <td>Lexicon-Based</td>
                  <td>[-1.0, +1.0]</td>
                  <td>38%</td>
                  <td>22%</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <td className="model-name">TextBlob</td>
                  <td>Pattern-Based</td>
                  <td>[-1.0, +1.0]</td>
                  <td>45%</td>
                  <td>18%</td>
                  <td className="best-value">37%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Model Distribution Analysis</h3>
          <div className="interface-section">
            <div className="project-screenshot">
              <img src={sentimentCompare} alt="Comparative analysis of sentiment model distributions showing BERT General, FinBERT, TextBlob, and VADER behavioral patterns with correlation heatmap" className="interface-img" />
            </div>
            <p>
              The comparative analysis reveals distinct behavioral patterns across models: BERT General shows 
              bimodal distribution with extreme sentiment peaks, FinBERT demonstrates balanced scoring with 
              financial domain expertise, TextBlob exhibits Gaussian distribution around neutral-positive territory, 
              and VADER displays positive skewness optimized for social media content.
            </p>
          </div>

          <h3>Behavioral Signatures</h3>
          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon">🎯</div>
              <h4>BERT General - Conservative Analyzer</h4>
              <p><strong>Pattern:</strong> Bimodal distribution with extreme peaks</p>
              <p><strong>Strength:</strong> Clear decisional boundaries, low ambiguity</p>
              <p><strong>Weakness:</strong> Limited financial context understanding</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">💰</div>
              <h4>FinBERT - Domain Expert</h4>
              <p><strong>Pattern:</strong> Balanced distribution with nuanced scoring</p>
              <p><strong>Strength:</strong> Financial terminology expertise, context awareness</p>
              <p><strong>Advantage:</strong> Highest positive detection rate (42%)</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">📊</div>
              <h4>VADER - Social Media Optimized</h4>
              <p><strong>Pattern:</strong> Positive skewness, intensifier sensitive</p>
              <p><strong>Strength:</strong> Amplifier detection, informal language</p>
              <p><strong>Speed:</strong> Fastest processing for real-time applications</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🔤</div>
              <h4>TextBlob - Optimistic Baseline</h4>
              <p><strong>Pattern:</strong> Gaussian distribution, neutral concentration</p>
              <p><strong>Characteristic:</strong> Conservative approach, positive bias</p>
              <p><strong>Reliability:</strong> Consistent baseline for model comparison</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sentiment-Price Correlation */}
      <div className="note-card">
        <div className="note-content">
          <h2>📈 Sentiment-Price Correlation Analysis</h2>
          
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

          <h3>Quintile Analysis Results</h3>
          <div className="code-highlight">
            <h4>Sentiment-Return Correlation Results</h4>
            <pre className="code-block">
{`# Sentiment Quintile Performance Analysis
sentiment_quintiles = {
    "Very Negative": {"return_mean": -0.008, "observations": 45},
    "Negative": {"return_mean": -0.003, "observations": 48},
    "Neutral": {"return_mean": 0.001, "observations": 52},
    "Positive": {"return_mean": 0.004, "observations": 47},
    "Very Positive": {"return_mean": 0.009, "observations": 43}
}

# Clear directional relationship observed
correlation_strength = "Moderate positive correlation (0.15-0.25)"
statistical_significance = "p < 0.05 for major tech stocks"`}
            </pre>
          </div>

          <h3>Temporal Analysis Case Study</h3>
          <div className="interface-section">
            <div className="project-screenshot">
              <img src={sentimentCorrelation} alt="Temporal analysis of JPM showing sentiment vs price correlation over time, with volume of articles and volatility patterns" className="interface-img" />
            </div>
            <p>
              The temporal analysis of JPMorgan Chase demonstrates the dynamic relationship between news sentiment 
              and stock performance. The upper chart shows FinBERT sentiment scores alongside price movements, 
              revealing correlation patterns and sentiment-driven price reactions. The lower chart correlates 
              article volume with market volatility, highlighting how news intensity impacts market stability.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="note-card">
        <div className="note-content">
          <h2>⚙️ Technical Implementation</h2>
          
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
          <h2>🔍 Research Insights</h2>
          
          <h3>Model Divergence Analysis</h3>
          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon">🔄</div>
              <h4>Inter-Model Agreement</h4>
              <p><strong>BERT vs FinBERT:</strong> 34% agreement rate</p>
              <p><strong>BERT vs TextBlob:</strong> 22% agreement rate</p>
              <p><strong>Insight:</strong> Complementary perspectives reveal analysis depth</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">📊</div>
              <h4>Correlation Patterns</h4>
              <p><strong>Financial News:</strong> Weak to moderate correlations</p>
              <p><strong>Extreme Events:</strong> Stronger correlation during high volatility</p>
              <p><strong>Temporal Decay:</strong> Sentiment impact diminishes over 3-5 days</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🎯</div>
              <h4>Predictive Value</h4>
              <p><strong>Best Performer:</strong> FinBERT for financial context</p>
              <p><strong>Ensemble Approach:</strong> Combined models outperform individuals</p>
              <p><strong>Application:</strong> Risk management and trading signals</p>
            </div>
          </div>

        </div>
      </div>

      {/* Skills Demonstrated */}
      <div className="note-card">
        <div className="note-content">
          <h2>🎖️ Skills Demonstrated</h2>
          
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
