import { motion } from 'framer-motion'
import './Page.css'
import stanfordLogo from '../assets/img/stanford.png'
import columbiaLogo from '../assets/img/columbia.png'

function Certificates() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <div className="page-header">
        <h1>Certificates</h1>
      </div>
      
      <div className="education-timeline">
        {/* Stanford Machine Learning */}
        <div className="note-card education-card">
          <div className="note-content">
            <div className="education-header">
              <div className="education-info">
                <h2>🤖 Machine Learning</h2>
                <h3>
                  <a 
                    href="https://www.coursera.org/account/accomplishments/specialization/3GC89C8LX3MX" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="university-link"
                  >
                    Stanford University – Andrew Ng
                  </a>
                </h3>
                <div className="education-meta">
                  <span className="duration">2023</span>
                  <span className="platform">via Coursera</span>
                </div>
              </div>
              <div className="university-logo">
                <a 
                  href="https://www.coursera.org/account/accomplishments/specialization/3GC89C8LX3MX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src={stanfordLogo} alt="Stanford University" />
                </a>
              </div>
            </div>
            
            <div className="education-content">
              <p className="education-description">
                Specialization on both supervised and unsupervised learning, with hands-on 
                implementation using NumPy, Scikit-learn, and TensorFlow. The course also covered 
                neural networks, decision trees, best practices in ML development, clustering, 
                anomaly detection, recommender systems, and deep reinforcement learning.
              </p>
              
              <h4>Key Skills:</h4>
              <div className="coursework-grid">
                <span className="course-item">Supervised & Unsupervised Learning</span>
                <span className="course-item">Neural Networks & Deep Learning</span>
                <span className="course-item">TensorFlow, Scikit-Learn, NumPy</span>
                <span className="course-item">Decision Trees & Ensemble Methods</span>
                <span className="course-item">Recommender Systems</span>
                <span className="course-item">Reinforcement Learning</span>
                <span className="course-item">Data Ethics in AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Columbia Financial Engineering */}
        <div className="note-card education-card">
          <div className="note-content">
            <div className="education-header">
              <div className="education-info">
                <h2>📊 Financial Engineering and Risk Management</h2>
                <h3>
                  <a 
                    href="https://www.coursera.org/account/accomplishments/verify/MQKHD4ZE7ZE4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="university-link"
                  >
                    Columbia University
                  </a>
                </h3>
                <div className="education-meta">
                  <span className="duration">2024</span>
                  <span className="platform">via Coursera</span>
                </div>
              </div>
              <div className="university-logo">
                <a 
                  href="https://www.coursera.org/account/accomplishments/verify/MQKHD4ZE7ZE4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src={columbiaLogo} alt="Columbia University" />
                </a>
              </div>
            </div>
            
            <div className="education-content">
              <p className="education-description">
                Specialization focused on derivatives pricing, portfolio construction, 
                and risk modeling, using stochastic and statistical methods to build real-world 
                financial models. Emphasis on backtesting trading strategies and analyzing asset 
                class behaviors in live market contexts.
              </p>
              
              <h4>Key Skills:</h4>
              <div className="coursework-grid">
                <span className="course-item">Options, Swaps, Forwards & Futures Pricing</span>
                <span className="course-item">Portfolio Optimization & Asset Allocation</span>
                <span className="course-item">Quantitative Risk Modeling</span>
                <span className="course-item">Backtesting & Strategy Implementation</span>
                <span className="course-item">Regression Analysis & Applied Math</span>
                <span className="course-item">Capital Markets & Credit Risk</span>
                <span className="course-item">Financial Data Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Certificates
