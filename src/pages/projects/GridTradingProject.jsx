import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../Page.css'
import './ProjectStyles.css'

// Import Grid Trading images
import gridArchitecture from '../../assets/img/grid_architecture.svg?url'
import gridStep1 from '../../assets/img/grid_step1.png'
import gridStep2 from '../../assets/img/grid_step2.png'
import gridAnalytics from '../../assets/img/grid_analytics.png'
import gridResults from '../../assets/img/grid_results.png'

function GridTradingProject() {
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
        <div className="project-icon">🔁</div>
        <div className="project-title-section">
          <h1>Grid Trading Strategy Backtester</h1>
          <p className="project-subtitle">
            Algorithmic trading system with backtesting capabilities and risk management
          </p>
          <div className="project-links">
            <a href="https://github.com/yaaks7/grid-trading" target="_blank" rel="noopener noreferrer" className="project-link github">
              <span>🖥️</span> View on GitHub
            </a>
            <a href="https://grid-trading.streamlit.app/" target="_blank" rel="noopener noreferrer" className="project-link demo">
              <span>🚀</span> Website
            </a>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="note-card">
        <div className="note-content">
          <h2>📊 Project Overview</h2>
          <p>
            This project implements a grid trading algorithm with backtesting capabilities. This system combines
            quantitative finance principles with a Streamlit interface to deliver a comprehensive
            trading strategy analysis platform.
          </p>
          
          <div className="key-stats">
            <div className="stat-item">
              <div className="stat-number">48</div>
              <div className="stat-label">Supported Assets</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">Asset Classes</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Grid Levels</div>
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
                  <p>Primary language for algorithmic logic and data processing</p>
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
                  <p>Web interface for strategy configuration</p>
                </div>
              </div>
            </div>
          </div>

          <div className="architecture-diagram">
            <h3>System Architecture</h3>
            <div className="architecture-image">
              <img src={gridArchitecture} alt="Grid Trading System Architecture" className="architecture-diagram-img" />
            </div>
          </div>
        </div>
      </div>

      {/* Asset Coverage */}
      <div className="note-card">
        <div className="note-content">
          <h2>🎯 Asset Coverage</h2>
          <p>
            The system supports 48 selected assets across 6 major asset classes, providing 
            coverage for diversified trading strategies.
          </p>
          
          <div className="asset-classes">
            <div className="asset-class">
              <div className="asset-header">
                <span className="asset-icon">🏢</span>
                <h4>Tech Stocks (10)</h4>
              </div>
              <div className="asset-list">AAPL, TSLA, META, NVDA, GOOGL, MSFT, AMZN, NFLX, AMD, CRM</div>
            </div>
            
            <div className="asset-class">
              <div className="asset-header">
                <span className="asset-icon">🏦</span>
                <h4>Finance (11)</h4>
              </div>
              <div className="asset-list">JPM, V, MA, PYPL, BAC, WFC, GS, MS, AXP, C, BRK-B</div>
            </div>
            
            <div className="asset-class">
              <div className="asset-header">
                <span className="asset-icon">📈</span>
                <h4>ETFs (7)</h4>
              </div>
              <div className="asset-list">SPY, QQQ, XLK, XLF, IWM, VTI, ARKK</div>
            </div>
            
            <div className="asset-class">
              <div className="asset-header">
                <span className="asset-icon">₿</span>
                <h4>Cryptocurrency (6)</h4>
              </div>
              <div className="asset-list">BTC-USD, ETH-USD, SOL-USD, ADA-USD, DOT-USD, AVAX-USD</div>
            </div>
            
            <div className="asset-class">
              <div className="asset-header">
                <span className="asset-icon">💱</span>
                <h4>Forex (7)</h4>
              </div>
              <div className="asset-list">EURUSD=X, GBPUSD=X, USDJPY=X, USDCAD=X, AUDUSD=X, NZDUSD=X, USDCHF=X</div>
            </div>
            
            <div className="asset-class">
              <div className="asset-header">
                <span className="asset-icon">🥇</span>
                <h4>Commodities (7)</h4>
              </div>
              <div className="asset-list">GC=F, SI=F, CL=F, NG=F, ZC=F, ZS=F, KC=F</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Trading Strategy */}
      <div className="note-card">
        <div className="note-content">
          <h2>⚙️ Grid Trading Strategy</h2>
          
          <h3>Strategy Mechanics</h3>
          <p>
            Grid trading is a systematic approach that places buy and sell orders at predetermined 
            price intervals around a central price point. The strategy profits from market volatility 
            by capturing small price movements within a defined range.
          </p>
          
          <div className="strategy-visual">
            <div className="grid-example">
              <div className="grid-level sell">Price Level 220 ──── [SELL]</div>
              <div className="grid-level sell">Price Level 215 ──── [SELL]</div>
              <div className="grid-level center">Price Level 210 ──── [MIDPRICE] ← Center</div>
              <div className="grid-level buy">Price Level 205 ──── [BUY]</div>
              <div className="grid-level buy">Price Level 200 ──── [BUY]</div>
            </div>
          </div>
          
          <h3>Key Parameters</h3>
          <div className="parameter-grid">
            <div className="parameter-item">
              <h4>Midprice</h4>
              <p>Static or dynamic center point of the grid</p>
            </div>
            <div className="parameter-item">
              <h4>Grid Distance</h4>
              <p>ATR-based spacing between grid levels</p>
            </div>
            <div className="parameter-item">
              <h4>Grid Range</h4>
              <p>Total coverage area (typically 10-25% from midprice)</p>
            </div>
            <div className="parameter-item">
              <h4>Risk Management</h4>
              <p>ATR-based stop losses and take profit ratios</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interface Showcase */}
      <div className="note-card">
        <div className="note-content">
          <h2>🌐 Professional Interface</h2>
          
          <h3>Two-Step Workflow</h3>
          <p>
            The Streamlit interface follows a logical, pedagogical approach with an intuitive 
            two-step workflow designed.
          </p>
          
          <div className="interface-section">
            <h4>Step 1: Data & Grid Configuration</h4>
            <div className="interface-screenshot">
              <img src={gridStep1} alt="Step 1: Data Loading & Grid Configuration Interface" className="interface-img" />
            </div>
            <ul className="feature-list">
              <li>Asset selection from 48 supported instruments</li>
              <li>Flexible date range configuration</li>
              <li>Real-time grid parameter adjustment</li>
              <li>Interactive price chart with grid overlay</li>
            </ul>
          </div>
          
          <div className="interface-section">
            <h4>Step 2: Backtesting & Analysis</h4>
            <div className="interface-screenshot">
              <img src={gridStep2} alt="Step 2: Backtesting & Analysis Interface" className="interface-img" />
            </div>
            <ul className="feature-list">
              <li>Portfolio and position sizing configuration</li>
              <li>Advanced risk management parameters</li>
              <li>Comprehensive performance metrics</li>
              <li>Interactive equity curve and drawdown analysis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Performance Analytics */}
      <div className="note-card">
        <div className="note-content">
          <h2>📈 Advanced Analytics</h2>
          
          <h3>Performance Metrics</h3>
          <div className="metrics-grid">
            <div className="metric-category">
              <h4>Return Analysis</h4>
              <ul className="metric-list">
                <li>Total Return & Annualized Return</li>
                <li>Risk-Adjusted Returns (Sharpe Ratio)</li>
                <li>Comparison vs Buy & Hold</li>
              </ul>
            </div>
            <div className="metric-category">
              <h4>Risk Assessment</h4>
              <ul className="metric-list">
                <li>Maximum Drawdown Analysis</li>
                <li>Volatility Measurements</li>
                <li>Calmar Ratio (Return/Max DD)</li>
              </ul>
            </div>
            <div className="metric-category">
              <h4>Trade Statistics</h4>
              <ul className="metric-list">
                <li>Win Rate & Average Trade Duration</li>
                <li>Best/Worst Trade Analysis</li>
                <li>Trade Distribution Patterns</li>
              </ul>
            </div>
          </div>
          
          <div className="analytics-showcase">
            <div className="interface-screenshot">
              <img src={gridAnalytics} alt="Performance Analytics Dashboard" className="interface-img" />
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
              <div className="highlight-icon">⚡</div>
              <h4>Performance Optimization</h4>
              <p>Smart grid generation with automatic level limiting (max 1000 levels) and optimized signal detection algorithms</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🛡️</div>
              <h4>Risk Management</h4>
              <p>ATR-based stop losses, position sizing controls, and maximum concurrent trades limitations</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">📊</div>
              <h4>Data Integration</h4>
              <p>Real-time Yahoo Finance API integration</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🔧</div>
              <h4>Modular Architecture</h4>
              <p>Clean separation between data fetching, strategy logic, backtesting engine, and visualization components</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Deep Dive */}
      <div className="note-card">
        <div className="note-content">
          <h2>🔬 Technical Deep Dive</h2>
          
          <div className="code-section">
            <h3>Core Algorithm</h3>
            <div className="code-highlight">
              <h4>Grid Level Generation</h4>
              <pre className="code-block">
{`def _generate_grid(self) -> np.ndarray:
    """Generate symmetric grid levels around midprice"""
    start = self.midprice - self.grid_range
    end = self.midprice + self.grid_range
    grid = np.arange(start, end + self.grid_distance, self.grid_distance)
    
    # Performance optimization: limit grid levels
    if len(grid) > 1000:
        grid = np.linspace(start, end, 1000)
    
    return grid`}
              </pre>
            </div>
            
            <div className="code-highlight">
              <h4>Signal Generation Logic</h4>
              <pre className="code-block">
{`def generate_signals(self, data: pd.DataFrame) -> List[int]:
    """Generate trading signals when price crosses grid levels"""
    signals = [0] * len(data)
    
    for i, (index, row) in enumerate(data.iterrows()):
        for level in self.grid_levels:
            if self._price_crosses_level(row, level):
                signals[i] = 1
                break
    
    return signals`}
              </pre>
            </div>
          </div>
          
          <div className="performance-section">
            <h3>Performance Optimizations</h3>
            <ul className="optimization-list">
              <li><strong>Smart Grid Limiting:</strong> Automatic reduction to max 1000 levels for UI performance</li>
              <li><strong>Vectorized Calculations:</strong> NumPy-based operations for signal generation</li>
              <li><strong>Efficient Data Handling:</strong> Pandas optimizations for large datasets</li>
              <li><strong>Memory Management:</strong> Strategic data copying and cleanup</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Results Showcase */}
      <div className="note-card">
        <div className="note-content">
          <h2>🎯 Results & Validation</h2>
          
          <h3>Sample Backtest Results</h3>
          <div className="results-showcase">
            <div className="interface-screenshot">
              <img src={gridResults} alt="Sample Backtest Results" className="interface-img" />
            </div>
          </div>
          
          <div className="validation-points">
            <h3>Validation & Testing</h3>
            <ul className="validation-list">
              <li>Comprehensive unit testing with pytest framework</li>
              <li>Historical data validation across multiple timeframes</li>
              <li>Performance benchmarking against buy-and-hold strategies</li>
              <li>Cross-asset class testing for strategy robustness</li>
            </ul>
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
                <span className="skill-tag">Quantitative Finance</span>
                <span className="skill-tag">Algorithmic Trading</span>
                <span className="skill-tag">Python Development</span>
                <span className="skill-tag">Data Analysis</span>
                <span className="skill-tag">Risk Management</span>
                <span className="skill-tag">Software Architecture</span>
                <span className="skill-tag">Financial Mathematics</span>
                <span className="skill-tag">Performance Optimization</span>
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">Testing & Validation</span>
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

export default GridTradingProject
