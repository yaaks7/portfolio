import { motion } from 'framer-motion'
import './Page.css'
import polymtlLogo from '../assets/img/polymtl.png'
import cityuLogo from '../assets/img/cityu.png'

function AcademicBackground() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <div className="page-header">
        <h1>Academic Background</h1>
      </div>
      
      <div className="education-timeline">
        {/* Polytechnique Montréal */}
        <div className="note-card education-card">
          <div className="note-content">
            <div className="education-header">
              <div className="education-info">
                <h2>Bachelor's in Mechanical Engineering</h2>
                <h3>
                  <a 
                    href="https://www.polymtl.ca/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="university-link"
                  >
                    Polytechnique Montréal
                  </a>
                </h3>
                <div className="education-meta">
                  <span className="duration">Sep 2020 - Dec 2025</span>
                </div>
                <div className="education-achievements">
                  <span className="achievement">Dean's List</span>
                </div>
              </div>
              <div className="university-logo">
                <a 
                  href="https://www.polymtl.ca/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src={polymtlLogo} alt="Polytechnique Montréal" />
                </a>
              </div>
            </div>
            
            <div className="education-content">
              <h4>Relevant Coursework:</h4>
              <div className="coursework-grid">
                <span className="course-item">Python Programming</span>
                <span className="course-item">IT Systems</span>
                <span className="course-item">Numerical Modeling</span>
                <span className="course-item">Probability & Statistics</span>
                <span className="course-item">Calculus & Linear Algebra</span>
                <span className="course-item">Data Structures</span>
                <span className="course-item">Differential Equations</span>
              </div>
              
              <p className="education-description">
                A solid technical foundation combining analytical rigor, computational 
                thinking, and real-world engineering problem-solving.
              </p>
            </div>
          </div>
        </div>

        {/* City University of Hong Kong */}
        <div className="note-card education-card">
          <div className="note-content">
            <div className="education-header">
              <div className="education-info">
                <h2>Exchange Program</h2>
                <h3>
                  <a 
                    href="https://www.cityu.edu.hk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="university-link"
                  >
                    City University of Hong Kong
                  </a>
                </h3>
                <div className="education-meta">
                  <span className="duration">Sep 2025 - Dec 2025</span>
                </div>
              </div>
              <div className="university-logo">
                <a 
                  href="https://www.cityu.edu.hk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src={cityuLogo} alt="City University of Hong Kong" />
                </a>
              </div>
            </div>
            
            <div className="education-content">
              <h4>Relevant Coursework:</h4>
              <div className="coursework-grid">
                <span className="course-item">Introductory Mathematical Finance</span>
                <span className="course-item">Derivatives and Risk Management</span>
                <span className="course-item">Foundations of Data Engineering</span>
              </div>
              
              <p className="education-description">
                Gained global perspective and exposure to advanced topics in finance 
                and economics within a multicultural academic setting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AcademicBackground
