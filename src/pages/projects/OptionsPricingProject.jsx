import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../Page.css'
import './ProjectStyles.css'

// Import Options Pricing images
import optionsStep1 from '../../assets/img/options_step1.png'
import optionsResults from '../../assets/img/options_results.png'
import optionsGreeks from '../../assets/img/options_greeks.png'
import optionsHeatmap from '../../assets/img/options_heatmap.png'
import optionsSensitivity from '../../assets/img/options_sensitivity.png'

function OptionsPricingProject() {
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
        <div className="project-icon">📊</div>
        <div className="project-title-section">
          <h1>Options Pricing Modelization</h1>
          <p className="project-subtitle">
            Financial options pricing application with multiple models, Greeks calculation, and interactive analysis tools
          </p>
          <div className="project-links">
            <a href="https://github.com/yaaks7/options-pricing" target="_blank" rel="noopener noreferrer" className="project-link github">
              <span>🖥️</span> View on GitHub
            </a>
            <a href="https://optionspricing.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link demo">
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
            This application implements multiple financial option pricing models including Black-Scholes, 
            Binomial, Monte Carlo, and Neural Network approaches. The system provides a 
            suite of tools for options analysis with a React frontend and FastAPI backend.
          </p>
          
          <div className="key-stats">
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Pricing Models</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Greeks Calculated</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Analysis Tools</div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="note-card">
        <div className="note-content">
          <h2>🏗️ Technical Architecture</h2>
          
          <div className="tech-section">
            <h3>Frontend Technologies</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <span className="tech-icon">⚛️</span>
                <div>
                  <strong>React.js</strong>
                  <p>Frontend framework</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">📊</span>
                <div>
                  <strong>Plotly</strong>
                  <p>Data visualization for options analysis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-section">
            <h3>Backend Technologies</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <span className="tech-icon">🚀</span>
                <div>
                  <strong>FastAPI</strong>
                  <p>Python web framework with automatic API documentation</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🧮</span>
                <div>
                  <strong>NumPy & SciPy</strong>
                  <p>Scientific computing libraries for numerical computations</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🤖</span>
                <div>
                  <strong>TensorFlow/Keras</strong>
                  <p>Neural network implementation for ML-based pricing</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">📈</span>
                <div>
                  <strong>Pandas & Matplotlib</strong>
                  <p>Data manipulation and visualization for analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Models */}
      <div className="note-card">
        <div className="note-content">
          <h2>💰 Options Pricing Models</h2>
          
          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon">📐</div>
              <h4>Black-Scholes Model</h4>
              <p>Analytical solution for European options pricing using geometric Brownian motion assumptions with constant volatility and interest rates</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🌳</div>
              <h4>Binomial Tree Model</h4>
              <p>Discrete-time model supporting both American and European options with configurable steps for accuracy vs performance trade-offs</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🎲</div>
              <h4>Monte Carlo Simulation</h4>
              <p>Stochastic simulation approach with 10,000+ paths for complex payoffs and exotic options pricing</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🧠</div>
              <h4>Neural Network Model</h4>
              <p>Machine learning approach trained on artificial data using TensorFlow</p>
            </div>
          </div>
        </div>
      </div>

      {/* Greeks Analysis */}
      <div className="note-card">
        <div className="note-content">
          <h2>🔢 Greeks Analysis</h2>
          <p>
            Calculation of option sensitivities (Greeks) to assess risk and price sensitivity 
            to various market parameters using the Black-Scholes framework.
          </p>
          
          <div className="parameter-grid">
            <div className="parameter-item">
              <h4>Delta (Δ)</h4>
              <p>Price sensitivity to underlying asset price changes</p>
            </div>
            <div className="parameter-item">
              <h4>Gamma (Γ)</h4>
              <p>Rate of change of delta (second derivative)</p>
            </div>
            <div className="parameter-item">
              <h4>Theta (Θ)</h4>
              <p>Time decay - price sensitivity to time passage</p>
            </div>
            <div className="parameter-item">
              <h4>Vega (ν)</h4>
              <p>Volatility sensitivity for risk management</p>
            </div>
            <div className="parameter-item">
              <h4>Rho (ρ)</h4>
              <p>Interest rate sensitivity analysis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interface Features */}
      <div className="note-card">
        <div className="note-content">
          <h2>🌐 User Interface</h2>
          
          <h3>Multi-Tab Interface</h3>
          <p>
            The application features an interface with multiple analysis tabs 
            for comprehensive options evaluation and comparison.
          </p>
          
          <div className="interface-section">
            <h4>Options Pricing Tab</h4>
            <div className="project-screenshot">
              <img src={optionsResults} alt="Main pricing interface with model selection and parameter inputs" className="interface-img" />
            </div>
            <ul className="feature-list">
              <li>Real-time parameter adjustment</li>
              <li>Side-by-side model comparison for call and put options</li>
            </ul>
          </div>
          
          <div className="interface-section">
            <h4>Greeks Analysis Tab</h4>
            <div className="project-screenshot">
              <img src={optionsGreeks} alt="Greeks calculation interface with sensitivity analysis" className="interface-img" />
            </div>
            <ul className="feature-list">
              <li>Greeks calculation for risk assessment</li>
              <li>Interactive sensitivity analysis tools</li>
              <li>Visual representation of option sensitivities</li>
            </ul>
          </div>
          
          <div className="interface-section">
            <h4>P&L Heatmaps & Sensitivity Analysis</h4>
            <div className="project-screenshot">
              <img src={optionsHeatmap} alt="Heatmap visualization and sensitivity analysis tools" className="interface-img" />
            </div>
            <ul className="feature-list">
              <li>Profit & Loss heatmaps for different market scenarios</li>
              <li>Parameter sensitivity analysis across models</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Features */}
      <div className="note-card">
        <div className="note-content">
          <h2>⚙️ Technical Features</h2>
          
          <h3>Backend API Architecture</h3>
          <div className="metrics-grid">
            <div className="metric-category">
              <h4>RESTful Endpoints</h4>
              <ul className="metric-list">
                <li>/price/blackscholes - Analytical pricing</li>
                <li>/price/binomial - Tree-based calculation</li>
                <li>/price/montecarlo - Simulation pricing</li>
                <li>/price/neuralnetwork - ML predictions</li>
              </ul>
            </div>
            <div className="metric-category">
              <h4>Analysis Endpoints</h4>
              <ul className="metric-list">
                <li>/greeks - Sensitivity calculations</li>
                <li>/heatmap_pnl - P&L visualizations</li>
                <li>/option_sensitivity - Parameter analysis</li>
                <li>/greeks_sensitivity - Greeks analysis</li>
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
              <div className="highlight-icon">🎯</div>
              <h4>Model Accuracy</h4>
              <p>Testing suite with theoretical value validation and cross-model comparison for accuracy verification</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">⚡</div>
              <h4>Performance Optimization</h4>
              <p>Vectorized NumPy calculations, preloaded ML models, and efficient data structures for real-time computation</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🔧</div>
              <h4>Modular Design</h4>
              <p>Separation between pricing models, Greeks calculation, visualization, and API layers for maintainability</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🌐</div>
              <h4>Full-Stack Integration</h4>
              <p>React-FastAPI communication</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Deep Dive */}
      <div className="note-card">
        <div className="note-content">
          <h2>🔬 Technical Deep Dive</h2>
          
          <div className="code-section">
            <h3>Core Model Implementation</h3>
            <div className="code-highlight">
              <h4>Black-Scholes Model Class</h4>
              <pre className="code-block">
{`class BlackScholes:
    def __init__(self, time_to_maturity, strike, current_price, 
                 volatility, interest_rate, option_type='call'):
        self.T = time_to_maturity
        self.K = strike
        self.S = current_price
        self.sigma = volatility
        self.r = interest_rate
        self.option_type = option_type
        
    def calculate(self):
        d1 = self.get_d1()
        d2 = self.get_d2()
        
        if self.option_type == 'call':
            price = (self.S * norm.cdf(d1) - 
                    self.K * exp(-self.r * self.T) * norm.cdf(d2))
        else:
            price = (self.K * exp(-self.r * self.T) * norm.cdf(-d2) - 
                    self.S * norm.cdf(-d1))
        
        return price`}
              </pre>
            </div>
            
            <div className="code-highlight">
              <h4>Monte Carlo Simulation</h4>
              <pre className="code-block">
{`def calculate(self):
    dt = self.T / self.num_steps
    prices = []
    
    for _ in range(self.num_simulations):
        price_path = [self.S]
        for _ in range(self.num_steps):
            z = np.random.standard_normal()
            price_path.append(
                price_path[-1] * exp((self.r - 0.5 * self.sigma**2) * dt + 
                                   self.sigma * sqrt(dt) * z)
            )
        
        if self.option_type == 'call':
            payoff = max(0, price_path[-1] - self.K)
        else:
            payoff = max(0, self.K - price_path[-1])
        
        prices.append(payoff)
    
    return exp(-self.r * self.T) * np.mean(prices)`}
              </pre>
            </div>
          </div>
          
        </div>
      </div>

      {/* Results & Validation */}
      <div className="note-card">
        <div className="note-content">
          <h2>🎯 Results & Validation</h2>
          
          <h3>Model Performance</h3>
          <div className="results-showcase">
            <div className="project-screenshot">
              <img src={optionsSensitivity} alt="Model comparison results showing pricing accuracy and performance metrics" className="interface-img" />
            </div>
          </div>
          
          <div className="validation-points">
            <h3>Validation Methodology</h3>
            <ul className="validation-list">
              <li>Theoretical value comparison using established Black-Scholes benchmarks</li>
              <li>Cross-model validation to ensure consistency across pricing approaches</li>
              <li>Greeks accuracy validation against analytical solutions</li>
            </ul>
          </div>
        </div>
      </div>


      {/* Testing & Development */}
      <div className="note-card">
        <div className="note-content">
          <h2>🧪 Testing & Development Tools</h2>
          
          <div className="code-highlight">
            <h4>API Testing Scripts</h4>
            <pre className="code-block">
{`# Start the API server locally
uvicorn app:app --reload

# Or using the batch script
start_api.bat

# Run comprehensive tests
python test_model.py

# Test all pricing models
python api_requests.py`}
            </pre>
          </div>
          
          <h3>Development Features</h3>
          <div className="parameter-grid">
            <div className="parameter-item">
              <h4>Automated Testing</h4>
              <p>Comprehensive test suite validating all models against theoretical values</p>
            </div>
            <div className="parameter-item">
              <h4>API Development</h4>
              <p>FastAPI with automatic documentation and request validation</p>
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
                <span className="skill-tag">Financial Mathematics</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">Options Pricing</span>
                <span className="skill-tag">Mathematical Modeling</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Monte Carlo Methods</span>
                <span className="skill-tag">Data Visualization</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Full-Stack Development</span>
                <span className="skill-tag">Quantitative Finance</span>
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

export default OptionsPricingProject
