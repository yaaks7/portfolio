import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GitBranch, ExternalLink, Waves, Layers } from 'lucide-react'
import '../Page.css'
import './ProjectStyles.css'

// Import Deep OFI figures
import ofiR2Boxplot from '../../assets/img/ofi_r2_boxplot.png'
import ofiR2Horizon from '../../assets/img/ofi_r2_horizon.png'
import ofiPnlCurve from '../../assets/img/ofi_pnl_curve.png'
import ofiLevelImportance from '../../assets/img/ofi_level_importance.png'

function DeepOfiProject() {
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
            <span style={{ display: 'flex', color: '#6366F1' }}><Waves size={28} strokeWidth={1.5} /></span>
            <h1>Deep Order Flow Imbalance</h1>
          </div>
          <p className="project-subtitle">
            Replicating and extending Kolm, Turiel &amp; Westray (2021) — deep learning for high-frequency
            return forecasting from limit order book data
          </p>
          <div className="project-links">
            <a href="https://github.com/yaaks7/deep-ofi" target="_blank" rel="noopener noreferrer" className="project-link github">
              <GitBranch size={14} strokeWidth={1.5} /> View on GitHub
            </a>
            <a href="https://github.com/yaaks7/deep-ofi/blob/main/reports/deep_ofi_report.pdf" target="_blank" rel="noopener noreferrer" className="project-link demo">
              <ExternalLink size={14} strokeWidth={1.5} /> Report
            </a>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="note-card">
        <div className="note-content">
          <h2>Project Overview</h2>
          <p>
            I replicated and extended a published deep-learning framework for forecasting short-horizon
            returns from limit order book order flow, using real Nasdaq data purchased from Databento, then
            tested whether peer-stock order flow adds predictive power beyond a stock's own order flow.
          </p>

          <div className="key-stats">
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Nasdaq Stocks</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Models</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Stock × Horizon Combinations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">52</div>
              <div className="stat-label">Unit Tests</div>
            </div>
          </div>
        </div>
      </div>

      {/* Data & Methodology */}
      <div className="note-card">
        <div className="note-content">
          <h2>Data &amp; Methodology</h2>

          <div className="tech-section">
            <div className="tech-grid">
              <div className="tech-item">
                <div>
                  <strong>Order Flow Imbalance</strong>
                  <p>MLOFI features computed across the first 10 limit order book price levels (Cont, Kukanov
                    &amp; Stoikov 2014; Xu, Gould &amp; Howison 2019)</p>
                </div>
              </div>
              <div className="tech-item">
                <div>
                  <strong>Data Source</strong>
                  <p>Databento XNAS.ITCH (mbp-10) converted to LOBSTER format — AAPL, MSFT, AMZN, GOOG, META
                    over 32 trading days (May–June 2024), ~171M events / 56GB</p>
                </div>
              </div>
              <div className="tech-item">
                <div>
                  <strong>Event Bucketing</strong>
                  <p>20-event buckets; stationarity confirmed via an augmented Dickey-Fuller test</p>
                </div>
              </div>
              <div className="tech-item">
                <div>
                  <strong>Chronological Split</strong>
                  <p>60/20/20 train/validation/test by calendar date (19/6/7 days) — no shuffling, no lookahead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Models */}
      <div className="note-card">
        <div className="note-content">
          <h2>Models</h2>

          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon"><Layers size={20} strokeWidth={1.5} /></div>
              <h4>Ridge / OLS</h4>
              <p>Linear baseline — RidgeCV with penalty swept over 13 values; unpenalized OLS reported
                alongside as a sanity check</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><Layers size={20} strokeWidth={1.5} /></div>
              <h4>MLP</h4>
              <p>3 fully-connected hidden layers (128 → 64 → 32), dropout 0.2, ~36K parameters</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><Layers size={20} strokeWidth={1.5} /></div>
              <h4>LSTM</h4>
              <p>2-layer LSTM, hidden size 64, ~54K parameters, followed by a small feedforward head</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><GitBranch size={20} strokeWidth={1.5} /></div>
              <h4>Cross-Asset LSTM</h4>
              <p>Same architecture, ingesting 4 peer stocks' order flow (input size 50, hidden size 128),
                aligned via a lagged as-of merge to avoid lookahead</p>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="note-card">
        <div className="note-content">
          <h2>Results</h2>

          <h3>Mean Test R² (15 Stock × Horizon Combinations)</h3>
          <div className="key-stats">
            <div className="stat-item">
              <div className="stat-number">0.54%</div>
              <div className="stat-label">Ridge / OLS</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">0.92%</div>
              <div className="stat-label">MLP</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">0.83%</div>
              <div className="stat-label">LSTM</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">0.70%</div>
              <div className="stat-label">Cross-Asset LSTM</div>
            </div>
          </div>
          <p>
            The LSTM beats ridge regression on 11 of 15 combinations; the best single result is the LSTM on
            META at h=10 (R²=2.98%). Ridge's 0.54% is concordant with Kolm et al.'s reported ARX baseline
            (≈0.10%).
          </p>

          <div className="results-showcase">
            <div className="interface-screenshot">
              <img src={ofiR2Boxplot} alt="Out-of-sample test R² distribution by model, across all 15 stock × horizon combinations" className="interface-img" />
            </div>
          </div>

          <div className="results-showcase">
            <div className="interface-screenshot">
              <img src={ofiR2Horizon} alt="Mean test R² versus forecast horizon, one line per model" className="interface-img" />
            </div>
          </div>
          <p>
            R² decreases as the forecast horizon lengthens for every model — signal decays the further out
            the prediction reaches.
          </p>
        </div>
      </div>

      {/* Learning-Rate Investigation */}
      <div className="note-card">
        <div className="note-content">
          <h2>Learning-Rate Investigation</h2>
          <p>
            An initial sweep (lr=10⁻³) had the MLP beating the LSTM on 12 of 15 combinations — discordant
            with the source paper. Traced to a 100× learning-rate mismatch against Kolm et al.'s reported
            setting.
          </p>

          <div className="performance-table">
            <table>
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>lr=10⁻³</th>
                  <th>lr=10⁻⁵</th>
                  <th>lr=10⁻⁴ (adopted)</th>
                  <th>MLP (fixed)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="model-name">AAPL</td>
                  <td>0.549</td>
                  <td>0.532</td>
                  <td className="best-value">0.546</td>
                  <td>0.788</td>
                </tr>
                <tr>
                  <td className="model-name">META</td>
                  <td>1.510</td>
                  <td>1.436</td>
                  <td className="best-value">1.579</td>
                  <td>1.500</td>
                </tr>
                <tr>
                  <td className="model-name">GOOG</td>
                  <td>0.021</td>
                  <td>0.350</td>
                  <td className="best-value">0.342</td>
                  <td>0.176</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            LSTM test R² (%) at h=20. After adopting lr=10⁻⁴, mean LSTM test R² across all 15 combinations
            rose from 0.74% to 0.83%, and its win-rate against ridge rose from 9/15 to 11/15 — the MLP still
            wins 10 of 15, so the discordance is narrowed, not fully resolved.
          </p>
        </div>
      </div>

      {/* Cross-Asset Extension */}
      <div className="note-card">
        <div className="note-content">
          <h2>Cross-Asset Extension</h2>
          <p>
            Testing whether peer-stock order flow adds predictive power beyond a stock's own order flow
            (Cont, Cucuringu &amp; Zhang 2023), before and after the learning-rate fix above.
          </p>

          <div className="performance-table">
            <table>
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>LSTM (before)</th>
                  <th>Cross-Asset (before)</th>
                  <th>LSTM (after)</th>
                  <th>Cross-Asset (after)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="model-name">AAPL</td>
                  <td>0.891</td>
                  <td>0.867</td>
                  <td>0.885</td>
                  <td>0.878</td>
                </tr>
                <tr>
                  <td className="model-name">MSFT</td>
                  <td>1.517</td>
                  <td className="best-value">1.537</td>
                  <td className="best-value">1.580</td>
                  <td>1.533</td>
                </tr>
                <tr>
                  <td className="model-name">AMZN</td>
                  <td>0.389</td>
                  <td className="best-value">0.477</td>
                  <td>0.487</td>
                  <td className="best-value">0.501</td>
                </tr>
                <tr>
                  <td className="model-name">GOOG</td>
                  <td>-0.002</td>
                  <td className="best-value">0.425</td>
                  <td className="best-value">0.616</td>
                  <td>0.587</td>
                </tr>
                <tr>
                  <td className="model-name">META</td>
                  <td>3.054</td>
                  <td className="best-value">3.277</td>
                  <td className="best-value">2.977</td>
                  <td>2.558</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Test R² (%) at h=10. Before the fix, cross-asset improved on 6 of 15 combinations. After it,
            cross-asset improves on only <strong>1 of 15</strong> (AMZN at h=10, by 0.014 percentage points):
            peer order flow adds essentially no forecasting value beyond a stock's own order flow.
          </p>
        </div>
      </div>

      {/* Trading Interpretation */}
      <div className="note-card">
        <div className="note-content">
          <h2>Trading Interpretation</h2>
          <div className="results-showcase">
            <div className="interface-screenshot">
              <img src={ofiPnlCurve} alt="Cumulative hypothetical PnL net of trading costs, AAPL, best model, over the chronological test period" className="interface-img" />
            </div>
          </div>
          <p>
            Cumulative hypothetical PnL (net of a 1bp cost per position change), AAPL, best model (MLP,
            h=10), over the chronological test period.
          </p>
        </div>
      </div>

      {/* Interpretability */}
      <div className="note-card">
        <div className="note-content">
          <h2>Interpretability</h2>
          <div className="results-showcase">
            <div className="interface-screenshot">
              <img src={ofiLevelImportance} alt="Permutation importance of each order flow level for the LSTM model" className="interface-img" />
            </div>
          </div>
          <p>
            Permutation importance by OFI price level (LSTM, AAPL, h=20) — level 1 dominates almost
            completely, with levels 2–10 contributing negligible measurable importance.
          </p>
        </div>
      </div>

      {/* Limitations */}
      <div className="note-card">
        <div className="note-content">
          <h2>Limitations</h2>

          <div className="validation-points">
            <ul className="validation-list">
              <li>The MLP-over-LSTM discordance is narrowed, not resolved — the MLP still wins 10 of 15 combinations</li>
              <li>The cross-asset null is the corrected, final verdict — not the original finding</li>
              <li>A single static 60/20/20 date split, versus Kolm et al.'s 18 rolling windows across 11 months</li>
              <li>A volume-vs-R² cross-sectional check has zero residual degrees of freedom (5 stocks, 5 parameters) — descriptive only</li>
              <li>Reported Sharpe ratios are elevated by a small test sample (~7 days per stock), not an unusually large edge</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="note-card">
        <div className="note-content">
          <h2>Tech Stack</h2>

          <div className="tech-grid">
            <div className="tech-item">
              <div>
                <strong>PyTorch</strong>
                <p>Deep learning models (MLP, LSTM, Cross-Asset LSTM)</p>
              </div>
            </div>
            <div className="tech-item">
              <div>
                <strong>scikit-learn &amp; statsmodels</strong>
                <p>Ridge/OLS baseline and augmented Dickey-Fuller stationarity testing</p>
              </div>
            </div>
            <div className="tech-item">
              <div>
                <strong>pandas &amp; polars</strong>
                <p>High-throughput processing of ~171M order book events</p>
              </div>
            </div>
            <div className="tech-item">
              <div>
                <strong>Databento</strong>
                <p>Direct acquisition of Nasdaq TotalView-ITCH order book data</p>
              </div>
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
                <span className="skill-tag">Deep Learning</span>
                <span className="skill-tag">LSTM Networks</span>
                <span className="skill-tag">Market Microstructure</span>
                <span className="skill-tag">Order Flow Imbalance</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">Time Series Forecasting</span>
                <span className="skill-tag">Statistical Testing</span>
                <span className="skill-tag">Quantitative Research</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Data Engineering</span>
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

export default DeepOfiProject
