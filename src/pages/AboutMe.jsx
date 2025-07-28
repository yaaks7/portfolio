import { motion } from 'framer-motion'
import './Page.css'
// Import your portrait image here once it's added
import portraitImg from '../assets/img/portrait.jpg'
import resumePdf from '../assets/docs/resume.pdf'

function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <div className="page-header">
        <h1>About Me</h1>
      </div>
      
      <div className="note-card">
        <div className="note-content">
          <div className="profile-section">
            <div className="profile-photo">
              <img src={portraitImg} alt="Yanis Aksas" className="profile-image" />
            </div>
            <div className="profile-info">
              <h3>Welcome to my portfolio</h3>
              <p>
                I'm a passionate mechanical engineering student with a strong interest in 
                quantitative finance, artificial intelligence, and software development. 
                My journey blends rigorous academic training with hands-on experience in 
                algorithmic trading, energy modeling, NLP, and AI optimization.
              </p>
            </div>
          </div>
          
          <div className="profile-description">
            <p>
              At the intersection of mathematics, code, and real-world impact, I build 
              tools that solve complex problems with clarity and precision — from 
              backtesting trading strategies and pricing financial derivatives to 
              optimizing renewable energy systems.
            </p>
            
            <p>
              With a strong foundation in Python, C++, and React, I thrive on building 
              elegant solutions that bridge theory and practice.
            </p>
          </div>
          
          <div className="resume-section">
            <a 
              href={resumePdf} 
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              <span className="resume-icon">📄</span>
              <span className="resume-text">
                <strong>View Resume</strong>
                <small>See my full experience & qualifications</small>
              </span>
            </a>
          </div>
          
          <div className="content-section">
            
            <h4>A little more about me</h4>
          <p>
            Beyond the screen, I'm someone who finds balance between logic and creativity. 
            I'm a lifelong basketball player — the rhythm of the game has shaped my mindset: 
            strategic, fast-paced, and resilient. I also have a deep love for music and 
            sound design. As a former sound engineer and co-founder of a recording studio 
            in France, I've spent countless hours mixing, mastering, and helping artists 
            bring their vision to life.
          </p>
          
          <p>
            These passions taught me to listen closely, work collaboratively, and never 
            stop learning — whether I'm on the court, in the studio, or writing code.
          </p>
          
          <h4>What drives me</h4>
          <ul>
            <li>🧠 Exploring the frontiers of AI and machine learning</li>
            <li>📊 Applying quantitative methods to financial markets</li>
            <li>⚙️ Building efficient, scalable software tools</li>
            <li>📚 Bridging theory and real-world decision making</li>
            <li>🚀 Lifelong learning and cross-disciplinary curiosity</li>
          </ul>
          
          <p>
            <em>
              "At the convergence of mathematics, technology, and finance lies a world 
              of infinite possibilities. I'm here to explore and build that future."
            </em>
          </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutMe
