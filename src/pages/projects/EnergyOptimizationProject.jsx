import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../Page.css'
import './ProjectStyles.css'

// Import interface screenshots
import harmoniQInterface from '../../assets/img/harmoniq_interface.png'
import harmoniQGraph from '../../assets/img/harmoniq_graph.png'

function EnergyOptimizationProject() {
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
        <div className="project-icon">🔋</div>
        <div className="project-title-section">
          <h1>Energy Production Model</h1>
          <p className="project-subtitle">
            HarmoniQ - Energy system optimization platform for Hydro-Québec with network modeling and multi-source integration
          </p>
          <div className="project-links">
            <a href="https://github.com/Houjio/HarmoniQ" target="_blank" rel="noopener noreferrer" className="project-link github">
              <span>🖥️</span> View on Github
            </a>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="note-card">
        <div className="note-content">
          <h2>🎯 Project Overview</h2>
          <p>
            HarmoniQ is an energy system optimization platform developed for Hydro-Québec to model, 
            analyze, and optimize the province's electrical grid. The system integrates multiple energy sources 
            including hydroelectric, nuclear, wind, solar, and thermal power plants to optimize production 
            scheduling, minimize costs, and ensure grid stability.
          </p>
          
          <div className="key-stats">
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Energy Sources</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">PyPSA</div>
              <div className="stat-label">Core Framework</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Grid</div>
              <div className="stat-label">Network Optimization</div>
            </div>
          </div>
        </div>
      </div>

      {/* System Architecture */}
      <div className="note-card">
        <div className="note-content">
          <h2>🏗️ System Architecture</h2>
          
          <div className="tech-section">
            <h3>Energy Source Modules</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <span className="tech-icon">💧</span>
                <div>
                  <strong>Hydroelectric Module</strong>
                  <p>Run-of-river and reservoir management with natural flow integration</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🌪️</span>
                <div>
                  <strong>Wind Power Module</strong>
                  <p>17 turbine models with weather-based production forecasting</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">☀️</span>
                <div>
                  <strong>Solar Module</strong>
                  <p>Centralized and residential solar with regional optimization</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">⚛️</span>
                <div>
                  <strong>Nuclear Module</strong>
                  <p>Base load generation with maintenance scheduling</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🔥</span>
                <div>
                  <strong>Thermal Module</strong>
                  <p>Peak load and backup generation systems</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🔌</span>
                <div>
                  <strong>Network Module</strong>
                  <p>Grid optimization with PyPSA and import/export management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HarmoniQ Interface & Analytics */}
      <div className="note-card">
        <div className="note-content">
          <h2>🖥️ HarmoniQ Platform Interface</h2>
          
          <p>
            The HarmoniQ platform provides an intuitive web-based interface for energy system modeling, 
            scenario planning, and real-time optimization. The interface was designed for power system 
            operators and energy planners to visualize and control the Quebec electrical grid.
          </p>

          <div className="image-showcase">
            <div className="showcase-item">
              <img 
                src={harmoniQInterface} 
                alt="HarmoniQ Platform Interface"
                className="project-image large"
              />
              <div className="image-caption">
                <h4>Interactive Network Map & Control Panel</h4>
                <p>
                  Real-time visualization of the Quebec electrical grid with infrastructure controls. 
                  The interface allows operators to configure scenarios, select energy sources, and 
                  monitor system status across different regions including hydroelectric dams, 
                  wind farms, solar installations, and thermal plants.
                </p>
              </div>
            </div>
          </div>

          <div className="interface-features">
            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon">🗺️</div>
                <h4>Geographic Network View</h4>
                <p>Interactive map showing all energy infrastructure with real-time status indicators</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">⚙️</div>
                <h4>Scenario Configuration</h4>
                <p>Easy setup of different operational scenarios with customizable parameters</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <h4>Infrastructure Management</h4>
                <p>Individual control and monitoring of each energy source type and facility</p>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🎛️</div>
                <h4>Real-time Controls</h4>
                <p>Live system controls for launching simulations and monitoring optimization progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Energy Analytics & Visualization */}
      <div className="note-card">
        <div className="note-content">
          <h2>📈 Energy Production Analytics</h2>
          
          <p>
            Advanced time-series analytics and visualization tools provide detailed insights into 
            energy production patterns, demand forecasting, and system optimization results. 
            The platform integrates weather data, historical patterns, and real-time measurements 
            to deliver comprehensive energy management capabilities.
          </p>

          <div className="image-showcase">
            <div className="showcase-item">
              <img 
                src={harmoniQGraph} 
                alt="Energy Production Time Series Analysis"
                className="project-image large"
              />
              <div className="image-caption">
                <h4>Multi-Source Energy Production Dashboard</h4>
                <p>
                  Comprehensive time-series visualization showing coordinated production from all energy sources: 
                  hydroelectric (both run-of-river and reservoir), wind, solar, thermal, and nuclear power. 
                  The dashboard includes demand forecasting, import/export tracking, and optimal dispatch 
                  scheduling across the Quebec grid.
                </p>
              </div>
            </div>
          </div>

          <div className="analytics-features">
            <div className="analytics-grid">
              <div className="analytics-item">
                <div className="analytics-icon">💧</div>
                <h4>Hydroelectric Optimization</h4>
                <p><strong>Reservoir Management:</strong> Optimal water release scheduling</p>
                <p><strong>Flow Integration:</strong> Natural flow data and seasonal patterns</p>
                <p><strong>Efficiency:</strong> Maximized energy output while respecting environmental constraints</p>
              </div>
              
              <div className="analytics-item">
                <div className="analytics-icon">🌱</div>
                <h4>Renewable Integration</h4>
                <p><strong>Weather Forecasting:</strong> Wind and solar production prediction</p>
                <p><strong>Grid Stability:</strong> Variable renewable source coordination</p>
                <p><strong>Optimization:</strong> Balanced dispatch across all clean energy sources</p>
              </div>
              
              <div className="analytics-item">
                <div className="analytics-icon">🔄</div>
                <h4>System Coordination</h4>
                <p><strong>Import/Export:</strong> Cross-border energy trading optimization</p>
                <p><strong>Load Balancing:</strong> Real-time demand-supply matching</p>
                <p><strong>Cost Minimization:</strong> Economic dispatch with operational constraints</p>
              </div>
              
              <div className="analytics-item">
                <div className="analytics-icon">📊</div>
                <h4>Performance Metrics</h4>
                <p><strong>Efficiency Tracking:</strong> System-wide performance indicators</p>
                <p><strong>Cost Analysis:</strong> Operational and marginal cost monitoring</p>
                <p><strong>Reliability:</strong> Grid stability and availability metrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Contribution - Network Module */}
      <div className="note-card">
        <div className="note-content">
          <h2>🎖️ My Contribution : Network  Module</h2>
          
          <p>
            As the lead developer for the network optimization module, I designed and implemented the core 
            infrastructure for electrical grid modeling, optimization, and analysis using PyPSA (Python for 
            Power System Analysis). This module serves as the central orchestrator for all energy sources 
            and ensures optimal power flow across the Québec electrical grid.
          </p>

          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon">🏗️</div>
              <h4>Network Builder</h4>
              <p><strong>Responsibility:</strong> Grid topology construction</p>
              <p><strong>Features:</strong> Bus/line creation, generator integration, demand modeling</p>
              <p><strong>Technology:</strong> PyPSA network objects with geographic data integration</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">⚡</div>
              <h4>Power Flow Analyzer</h4>
              <p><strong>Responsibility:</strong> AC/DC power flow calculations</p>
              <p><strong>Features:</strong> Line loading analysis, critical line identification, loss calculation</p>
              <p><strong>Technology:</strong> Advanced power flow algorithms with constraint validation</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">📊</div>
              <h4>Network Optimizer</h4>
              <p><strong>Responsibility:</strong> Cost minimization and dispatch optimization</p>
              <p><strong>Features:</strong> Generator scheduling, reservoir management, import/export optimization</p>
              <p><strong>Technology:</strong> Linear programming with HiGHS solver integration</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🌐</div>
              <h4>Data Integration</h4>
              <p><strong>Responsibility:</strong> Multi-source data orchestration</p>
              <p><strong>Features:</strong> Real-time weather data, demand forecasting, production scheduling</p>
              <p><strong>Technology:</strong> Async data loading with caching mechanisms</p>
            </div>
          </div>
        </div>
      </div>

      {/* System Integration */}
      <div className="note-card">
        <div className="note-content">
          <h2>🔄 Multi-Source Integration</h2>
          
          <h3>Coordinated Energy Management</h3>
          <div className="metrics-grid">
            <div className="metric-category">
              <h4>Hydroelectric Integration</h4>
              <ul className="metric-list">
                <li>Natural flow data integration from HydroGenerate</li>
                <li>Reservoir level optimization with seasonal constraints</li>
                <li>Run-of-river vs storage dispatch coordination</li>
                <li>Environmental flow requirements management</li>
              </ul>
            </div>
            
            <div className="metric-category">
              <h4>Renewable Energy Coordination</h4>
              <ul className="metric-list">
                <li>Weather-dependent production forecasting</li>
                <li>Wind farm wake effect modeling (17 turbine types)</li>
                <li>Solar irradiance and temperature corrections</li>
                <li>Grid stability with variable renewable sources</li>
              </ul>
            </div>
          </div>

          <h3>Network Performance Metrics</h3>
          <div className="parameter-grid">
            <div className="parameter-item">
              <h4>Economic Optimization</h4>
              <p>Minimizes total system cost while respecting technical constraints and reliability standards</p>
            </div>
            <div className="parameter-item">
              <h4>Grid Stability</h4>
              <p>Ensures voltage stability, frequency regulation, and line loading within operational limits</p>
            </div>
            <div className="parameter-item">
              <h4>Import/Export Optimization</h4>
              <p>Maximizes economic benefits from interconnections with neighboring grids</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Achievements */}
      <div className="note-card">
        <div className="note-content">
          <h2>🏆 Technical Achievements</h2>
          
          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon">⚡</div>
              <h4>Real-Time Optimization</h4>
              <p><strong>Performance:</strong> Sub-second optimization for hourly dispatch</p>
              <p><strong>Technology:</strong> HiGHS linear programming solver integration</p>
              <p><strong>Impact:</strong> Enables real-time grid management and emergency response</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🔄</div>
              <h4>Modular Architecture</h4>
              <p><strong>Design:</strong> Plug-and-play energy source integration</p>
              <p><strong>Scalability:</strong> Easy addition of new generation technologies</p>
              <p><strong>Maintainability:</strong> Clean separation of concerns and interfaces</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">📈</div>
              <h4>Advanced Analytics</h4>
              <p><strong>Capabilities:</strong> Critical line identification, loss analysis</p>
              <p><strong>Visualization:</strong> Interactive network maps and time series</p>
              <p><strong>Decision Support:</strong> Marginal cost-based reservoir management</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🌐</div>
              <h4>Geographic Integration</h4>
              <p><strong>Features:</strong> Coordinate-based network topology</p>
              <p><strong>Accuracy:</strong> Haversine distance calculations for line parameters</p>
              <p><strong>Applications:</strong> Transmission expansion planning and cost estimation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Impact */}
      <div className="note-card">
        <div className="note-content">
          <h2>🌟 Project Impact</h2>
          
          <h3>Industry Applications</h3>
          <div className="metrics-grid">
            <div className="metric-category">
              <h4>Grid Operations</h4>
              <ul className="metric-list">
                <li>Real-time economic dispatch optimization</li>
                <li>Preventive maintenance scheduling</li>
                <li>Emergency response and load shedding</li>
                <li>Renewable energy integration planning</li>
              </ul>
            </div>
            
            <div className="metric-category">
              <h4>Strategic Planning</h4>
              <ul className="metric-list">
                <li>Transmission network expansion studies</li>
                <li>Generation capacity planning</li>
                <li>Interconnection benefit analysis</li>
                <li>Climate change adaptation strategies</li>
              </ul>
            </div>
          </div>

          <h3>Environmental & Economic Benefits</h3>
          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon">🌱</div>
              <h4>Environmental Impact</h4>
              <p><strong>Clean Energy:</strong> 95%+ renewable energy integration</p>
              <p><strong>Efficiency:</strong> Optimized hydro reservoir management</p>
              <p><strong>Sustainability:</strong> Reduced environmental flow violations</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">💰</div>
              <h4>Economic Optimization</h4>
              <p><strong>Cost Savings:</strong> Operational cost reduction</p>
              <p><strong>Revenue:</strong> Enhanced import/export arbitrage</p>
              <p><strong>Reliability:</strong> Reduced outage costs and penalties</p>
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
                <span className="skill-tag">PyPSA</span>
                <span className="skill-tag">Power Systems</span>
                <span className="skill-tag">Network Optimization</span>
                <span className="skill-tag">Linear Programming</span>
                <span className="skill-tag">Geographic Analysis</span>
                <span className="skill-tag">Time Series</span>
                <span className="skill-tag">System Architecture</span>
                <span className="skill-tag">Data Integration</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Async Programming</span>
                <span className="skill-tag">Database Design</span>
                <span className="skill-tag">Energy Systems</span>
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

export default EnergyOptimizationProject
