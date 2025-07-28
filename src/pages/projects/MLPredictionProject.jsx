import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../Page.css'
import './ProjectStyles.css'

// Import ML Prediction images
import mlStep1 from '../../assets/img/ml_step1.png'
import mlStep2 from '../../assets/img/ml_step2.png'
import mlResults from '../../assets/img/ml_results.png'
import mlCompare from '../../assets/img/ml_compare.png'

function MLPredictionProject() {
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
        <div className="project-icon">🤖</div>
        <div className="project-title-section">
          <h1>ML Market Prediction System</h1>
          <p className="project-subtitle">
            Modular machine learning system for financial market directional prediction with Streamlit interface and benchmark strategies
          </p>
          <div className="project-links">
            <a href="https://github.com/yaaks7/ml-trading" target="_blank" rel="noopener noreferrer" className="project-link github">
              <span>🖥️</span> View on GitHub
            </a>
            <a href="https://ml-trading.streamlit.app/" target="_blank" rel="noopener noreferrer" className="project-link demo">
              <span>🚀</span> Website
            </a>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="note-card">
        <div className="note-content">
          <h2>🎯 Project Overview</h2>
          <p>
            This project implements machine learning models to predict the direction (up/down) of financial markets 
            with a modular architecture. The system supports multiple asset classes and provides both CLI and web 
            interfaces for evaluation against benchmark strategies.
          </p>
          
          <div className="key-stats">
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Supported Assets</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">ML Models</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">Benchmark</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Technical Indicators</div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="note-card">
        <div className="note-content">
          <h2>🏗️ Technical Architecture</h2>
          
          <div className="tech-section">
            <h3>Core Technologies</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <span className="tech-icon">🐍</span>
                <div>
                  <strong>Python</strong>
                  <p>Primary language for ML algorithms and data processing</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🤖</span>
                <div>
                  <strong>Scikit-learn</strong>
                  <p>Machine learning models and evaluation metrics</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">📊</span>
                <div>
                  <strong>Pandas & NumPy</strong>
                  <p>Data manipulation and numerical computing</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">📈</span>
                <div>
                  <strong>Plotly</strong>
                  <p>Interactive financial charting and visualization</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🌐</span>
                <div>
                  <strong>Streamlit</strong>
                  <p>Web interface for model configuration and evaluation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Asset Coverage */}
      <div className="note-card">
        <div className="note-content">
          <h2>🎯 Asset Portfolio Coverage</h2>
          <p>
            The system supports 15 selected assets across 4 major asset classes, providing 
            coverage for diversified ML prediction strategies.
          </p>
          
          <div className="asset-classes">
            <div className="asset-class">
              <div className="asset-header">
                <span className="asset-icon">📈</span>
                <h4>Stock Indices (3)</h4>
              </div>
              <div className="asset-list">S&P 500 (^GSPC), NASDAQ (^IXIC), Dow Jones (^DJI)</div>
            </div>
            
            <div className="asset-class">
              <div className="asset-header">
                <span className="asset-icon">🏢</span>
                <h4>Individual Stocks (7)</h4>
              </div>
              <div className="asset-list">AAPL, MSFT, GOOGL, TSLA, NVDA, META, AMZN</div>
            </div>
            
            <div className="asset-class">
              <div className="asset-header">
                <span className="asset-icon">₿</span>
                <h4>Cryptocurrencies (3)</h4>
              </div>
              <div className="asset-list">Bitcoin (BTC-USD), Ethereum (ETH-USD), Solana (SOL-USD)</div>
            </div>
            
            <div className="asset-class">
              <div className="asset-header">
                <span className="asset-icon">🥇</span>
                <h4>Commodities (2)</h4>
              </div>
              <div className="asset-list">Gold Futures (GC=F), Crude Oil Futures (CL=F)</div>
            </div>
          </div>
        </div>
      </div>

      {/* ML Models & Strategies */}
      <div className="note-card">
        <div className="note-content">
          <h2>🤖 Machine Learning Models</h2>
          
          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon">🌳</div>
              <h4>Random Forest</h4>
              <p>Ensemble method with multiple decision trees, feature importance analysis, and robust performance across different market conditions</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🧠</div>
              <h4>Multi-Layer Perceptron (MLP)</h4>
              <p>Neural network with configurable hidden layers, early stopping, and adaptive learning for complex pattern recognition</p>
            </div>
          </div>

          <h3>Benchmark Strategies</h3>
          <p>
            Evaluation against 6 benchmark strategies to ensure ML models provide meaningful improvements 
            over simple baselines.
          </p>
          
          <div className="parameter-grid">
            <div className="parameter-item">
              <h4>Always Up/Down</h4>
              <p>Bullish and bearish bias strategies</p>
            </div>
            <div className="parameter-item">
              <h4>Random Strategy</h4>
              <p>50/50 random predictions baseline</p>
            </div>
            <div className="parameter-item">
              <h4>Historical Frequency</h4>
              <p>Predictions based on historical probabilities</p>
            </div>
            <div className="parameter-item">
              <h4>Momentum Strategy</h4>
              <p>Assumes continuation of recent trends</p>
            </div>
            <div className="parameter-item">
              <h4>Mean Reversion</h4>
              <p>Contrarian approach expecting reversals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interface Showcase */}
      <div className="note-card">
        <div className="note-content">
          <h2>🌐 Interface</h2>
          
          <h3>Three-Step Workflow</h3>
          <p>
            The Streamlit interface follows a logical, pedagogical approach with an intuitive 
            three-step workflow for comprehensive ML evaluation.
          </p>
          
          <div className="interface-section">
            <h4>Step 1: Data Configuration & Features</h4>
            <div className="project-screenshot">
              <img src={mlStep1} alt="Data Configuration Interface showing asset selection, date range, and technical indicator setup" className="interface-img" />
            </div>
            <ul className="feature-list">
              <li>Asset selection from 15 supported instruments</li>
              <li>Flexible date range configuration</li>
              <li>4 technical indicators (MA, RSI, MACD, Bollinger Bands)</li>
              <li>Interactive price charts with feature visualization</li>
            </ul>
          </div>
          
          <div className="interface-section">
            <h4>Step 2: Model Configuration</h4>
            <div className="project-screenshot">
              <img src={mlStep2} alt="Model Configuration panel with ML models and benchmark strategy selection interface" className="interface-img" />
            </div>
            <ul className="feature-list">
              <li>ML model selection (Random Forest, MLP)</li>
              <li>Benchmark strategy configuration</li>
              <li>Hyperparameter tuning options</li>
              <li>Training progress tracking</li>
            </ul>
          </div>
          
          <div className="interface-section">
            <h4>Step 3: Results & Evaluation</h4>
            <div className="project-screenshot">
              <img src={mlResults} alt="Complete results with performance metrics, model comparison, confusion matrices, and feature importance analysis" className="interface-img" />
            </div>
            <ul className="feature-list">
              <li>Comprehensive performance metrics (Accuracy, Precision, Recall, F1)</li>
              <li>Model ranking and comparison tables</li>
              <li>Confusion matrices and classification reports</li>
              <li>Feature importance visualization</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Features */}
      <div className="note-card">
        <div className="note-content">
          <h2>⚙️ Technical Features</h2>
          
          <h3>Advanced Technical Indicators</h3>
          <div className="metrics-grid">
            <div className="metric-category">
              <h4>Price & Volume</h4>
              <ul className="metric-list">
                 <li>Multiple Moving Averages (5, 10, etc.)</li>
              </ul>
            </div>
            <div className="metric-category">
              <h4>Momentum Indicators</h4>
              <ul className="metric-list">
                <li>RSI (Relative Strength Index)</li>
                <li>MACD with Signal & Histogram</li>
              </ul>
            </div>
            <div className="metric-category">
              <h4>Volatility & Bands</h4>
              <ul className="metric-list">
                <li>Bollinger Bands (Upper, Middle, Lower)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Highlights */}
      <div className="note-card">
        <div className="note-content">
          <h2>💡 Implementation Highlights</h2>
          
          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon">🏗️</div>
              <h4>Modular Architecture</h4>
              <p>Separation between data fetching, feature engineering, model training, and evaluation components</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🔧</div>
              <h4>Extensible Design</h4>
              <p>Easy addition of new models, strategies, and technical indicators through abstract base classes</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">📊</div>
              <h4>Comprehensive Evaluation</h4>
              <p>Multiple metrics, cross-validation, and statistical significance testing for robust model assessment</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">⚡</div>
              <h4>Performance Optimization</h4>
              <p>Efficient data processing, vectorized operations, and smart caching for fast execution</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Deep Dive */}
      <div className="note-card">
        <div className="note-content">
          <h2>🔬 Technical Deep Dive</h2>
          
          <div className="code-section">
            <h3>Core Architecture</h3>
            <div className="code-highlight">
              <h4>Base ML Model Class</h4>
              <pre className="code-block">
{`class BaseMLModel(ABC):
    """Base class for all ML models"""
    
    def __init__(self, name: str, **kwargs):
        self.name = name
        self.model = None
        self.is_fitted = False
        self.feature_names = None
        
    @abstractmethod
    def create_model(self, **kwargs):
        """Create the underlying model with given parameters"""
        pass
    
    def predict_proba(self, X: pd.DataFrame) -> np.ndarray:
        """Get prediction probabilities"""
        if hasattr(self.model, 'predict_proba'):
            return self.model.predict_proba(X)
        else:
            # Fallback for models without predict_proba
            predictions = self.predict(X)
            proba = np.zeros((len(predictions), 2))
            proba[predictions == 0, 0] = 1.0
            proba[predictions == 1, 1] = 1.0
            return proba`}
              </pre>
            </div>
            
            <div className="code-highlight">
              <h4>Feature Engineering Pipeline</h4>
              <pre className="code-block">
{`def add_technical_indicators(self, data: pd.DataFrame) -> pd.DataFrame:
    """Add comprehensive technical indicators"""
    result_df = data.copy()
    
    # Price-based features
    result_df['Returns'] = result_df['Close'].pct_change()
    result_df['Log_Returns'] = np.log(result_df['Close'] / result_df['Close'].shift(1))
    
    # Moving averages
    for period in [5, 10, 20, 50, 100, 200]:
        result_df[f'MA_{period}'] = result_df['Close'].rolling(window=period).mean()
        result_df[f'MA_Ratio_{period}'] = result_df['Close'] / result_df[f'MA_{period}']
    
    # RSI, MACD, Bollinger Bands, etc.
    result_df['RSI'] = self.calculate_rsi(result_df['Close'])
    macd_data = self.calculate_macd(result_df['Close'])
    bb_data = self.calculate_bollinger_bands(result_df['Close'])
    
    return result_df`}
              </pre>
            </div>
          </div>
          
          <div className="performance-section">
            <h3>Model Performance Optimizations</h3>
            <ul className="optimization-list">
              <li><strong>Efficient Data Processing:</strong> Vectorized operations with pandas and NumPy for fast computation</li>
              <li><strong>Smart Feature Selection:</strong> Automated feature importance ranking and selection</li>
              <li><strong>Early Stopping:</strong> Neural network training with validation-based early stopping</li>
              <li><strong>Memory Management:</strong> Optimized data structures and garbage collection</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Results & Validation */}
      <div className="note-card">
        <div className="note-content">
          <h2>🎯 Results & Validation</h2>
          
          <h3>Sample Model Performance</h3>
          <div className="results-showcase">
            <div className="project-screenshot">
              <img src={mlCompare} alt="Example results showing model comparison, performance metrics, and feature importance analysis" className="interface-img" />
            </div>
          </div>
          
          <div className="validation-points">
            <h3>Validation Methodology</h3>
            <ul className="validation-list">
              <li>Rigorous train-test split with temporal ordering</li>
              <li>Multiple evaluation metrics (Accuracy, Precision, Recall, F1-Score)</li>
              <li>Statistical significance testing against benchmarks</li>
              <li>Cross-validation for robust performance estimation</li>
              <li>Feature importance analysis for model interpretability</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CLI Interface */}
      <div className="note-card">
        <div className="note-content">
          <h2>💻 Command Line Interface</h2>
          
          <div className="code-highlight">
            <h4>Quick Start Examples</h4>
            <pre className="code-block">
{`# Default analysis (S&P 500, 2023)
python main.py

# Custom asset and strategies
python main.py --asset BTC-USD --start-date 2023-01-01 --end-date 2024-12-31 --strategies bullish,random

# All strategies with verbose output
python main.py --asset ^GSPC --strategies all --verbose

# Quick system test
python main.py --test`}
            </pre>
          </div>
          
          <h3>Supported Arguments</h3>
          <div className="parameter-grid">
            <div className="parameter-item">
              <h4>--asset</h4>
              <p>Asset symbol to analyze (^GSPC, BTC-USD, AAPL, etc.)</p>
            </div>
            <div className="parameter-item">
              <h4>--start-date / --end-date</h4>
              <p>Date range for analysis (YYYY-MM-DD format)</p>
            </div>
            <div className="parameter-item">
              <h4>--strategies</h4>
              <p>Comma-separated strategies or "all"</p>
            </div>
            <div className="parameter-item">
              <h4>--verbose</h4>
              <p>Enable detailed logging and progress tracking</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Impact */}
      <div className="note-card">
        <div className="note-content">
          <h2>🎖️ Skills Demonstrated</h2>
          
          <div className="impact-summary">
            <div className="skills-demonstrated">
              <div className="skills-grid">
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Data Science</span>
                <span className="skill-tag">Feature Engineering</span>
                <span className="skill-tag">Model Evaluation</span>
                <span className="skill-tag">Statistical Analysis</span>
                <span className="skill-tag">Technical Indicators</span>
                <span className="skill-tag">Neural Networks</span>
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

export default MLPredictionProject
