import { motion } from 'framer-motion'
import './Page.css'
import mmprodLogo from '../assets/img/mmprod.png'
import fenixLogo from '../assets/img/fenix.png'
import polyfinanceLogo from '../assets/img/polyfinances.png'
import datarankLogo from '../assets/img/datarank.png'

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <div className="page-header">
        <h1>Professional Experience</h1>
      </div>
      
      <div className="education-timeline">
        {/* PolyFinance */}
        <div className="note-card education-card">
          <div className="note-content">
            <div className="education-header">
              <div className="education-info">
                <h2>📊 Software Developer</h2>
                <h3>
                  <span className="university-link">PolyFinances</span>
                </h3>
                <div className="education-meta">
                  <span className="duration">Jan. 2025 – May 2025</span>
                </div>
              </div>
              <div className="university-logo">
                <a 
                  href="https://www.polyfinances.ca/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src={polyfinanceLogo} alt="PolyFinance" />
                </a>
              </div>
            </div>
            
            <div className="education-content">
              <p className="education-description">
                Contributed to quantitative research of a student-managed investment fund. 
                Developed internal tools to support portfolio analysis and recruitment operations.
              </p>
              
              <h4>Key Achievements:</h4>
              <ul>
                <li>Built a dynamic portfolio visualization dashboard</li>
                <li>Developed FinXplore, a custom recruitment platform</li>
                <li>Integrated real-time financial data via public APIs</li>
              </ul>
              
              <h4>Technologies Used:</h4>
              <div className="coursework-grid">
                <span className="course-item">Angular</span>
                <span className="course-item">Python</span>
                <span className="course-item">FastAPI</span>
                <span className="course-item">Financial APIs</span>
                <span className="course-item">Data Visualization</span>
              </div>
            </div>
          </div>
        </div>

        {/* DataRank Co-founder */}
        <div className="note-card education-card">
          <div className="note-content">
            <div className="education-header">
              <div className="education-info">
                <h2>🚀 Co-founder & CTO</h2>
                <h3>
                  <span className="university-link">DataRank</span>
                </h3>
                <div className="education-meta">
                  <span className="duration">Dec. 2024 – Present</span>
                </div>
              </div>
              <div className="university-logo">
                <a 
                  href="https://data-rank.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src={datarankLogo} alt="DataRank" />
                </a>
              </div>
            </div>
            
            <div className="education-content">
              <p className="education-description">
                Co-founded a startup focused on data quality assessment using machine learning. 
                Led technical architecture, model design, and MVP delivery.
              </p>
              
              <h4>Key Achievements:</h4>
              <ul>
                <li>Developed a decision-tree–based adaptive scoring engine</li>
                <li>Designed scalable cloud infrastructure</li>
                <li>Managed team of developers and presented MVP to enterprise clients</li>
              </ul>
              
              <h4>Technologies Used:</h4>
              <div className="coursework-grid">
                <span className="course-item">Python</span>
                <span className="course-item">Supabase</span>
                <span className="course-item">AWS</span>
                <span className="course-item">React</span>
                <span className="course-item">Data Engineering</span>
              </div>
            </div>
          </div>
        </div>

        {/* MMPROD */}
        <div className="note-card education-card">
          <div className="note-content">
            <div className="education-header">
              <div className="education-info">
                <h2>🛠 Freelance Developer</h2>
                <h3>
                  <span className="university-link">MMPROD</span>
                </h3>
                <div className="education-meta">
                  <span className="duration">Sept. 2024 – Present</span>
                </div>
              </div>
              <div className="university-logo">
                <a 
                  href="https://mmprod.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src={mmprodLogo} alt="MMPROD" />
                </a>
              </div>
            </div>
            
            <div className="education-content">
              <p className="education-description">
                Developed an AI-powered document translation system using MarianMT, capable of handling 
                large PDF and DOCX files. Successfully translated a 200-page book in under 10 minutes 
                for the first client.
              </p>
              
              <h4>Key Achievements:</h4>
              <ul>
                <li>Designed a scalable translation pipeline for large multilingual documents</li>
                <li>Achieved 10× speed improvement over manual methods</li>
                <li>Integrated automated quality assurance and file preprocessing tools</li>
              </ul>
              
              <h4>Technologies Used:</h4>
              <div className="coursework-grid">
                <span className="course-item">Python</span>
                <span className="course-item">MarianMT</span>
                <span className="course-item">Natural Language Processing</span>
                <span className="course-item">PDF/DOCX Parsing</span>
              </div>
            </div>
          </div>
        </div>

        {/* FENIX */}
        <div className="note-card education-card">
          <div className="note-content">
            <div className="education-header">
              <div className="education-info">
                <h2>🌐 Software Engineer Intern</h2>
                <h3>
                  <span className="university-link">FENIX</span>
                </h3>
                <div className="education-meta">
                  <span className="duration">May 2024 – Aug. 2024</span>
                </div>
              </div>
              <div className="university-logo">
                <a 
                  href="https://fxhotsauce.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src={fenixLogo} alt="FENIX" />
                </a>
              </div>
            </div>
            
            <div className="education-content">
              <p className="education-description">
                Led the complete redesign and redevelopment of the company's website, enhancing 
                both design and performance.
              </p>
              
              <h4>Key Achievements:</h4>
              <ul>
                <li>Improved UX/UI leading to a +85% conversion rate</li>
                <li>Increased website visits by +45% post-deployment</li>
                <li>Delivered a fully responsive, SEO-optimized, and modular front-end</li>
              </ul>
              
              <h4>Technologies Used:</h4>
              <div className="coursework-grid">
                <span className="course-item">JavaScript</span>
                <span className="course-item">HTML</span>
                <span className="course-item">CSS</span>
                <span className="course-item">SEO</span>
                <span className="course-item">Python</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Experience
