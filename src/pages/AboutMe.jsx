import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import './Page.css'
import portraitImg from '../assets/img/portrait.jpg'
import resumePdf from '../assets/docs/Yanis_Aksas_Resume.pdf'

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
                I studied mechanical engineering at Polytechnique Montréal, but shaped the degree
                with quantitative finance in mind — picking courses in probability, numerical methods,
                and data structures, spending a semester at City University of Hong Kong to study
                derivatives and mathematical finance, and joining PolyFinances to work on real
                portfolio problems. The projects here are part of the same thread. It all leads to
                MSc Computational Finance at UCL, starting September 2026.
              </p>
            </div>
          </div>
          
          <div className="resume-section">
            <a 
              href={resumePdf} 
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              <span className="resume-icon"><FileText size={22} strokeWidth={1.5} /></span>
              <span className="resume-text">
                <strong>View Resume</strong>
                <small>PDF · 1 page</small>
              </span>
            </a>
          </div>
          
          <div className="content-section">
            
            <h4>A little more about me</h4>
          <p>
            Beyond the screen, I'm someone who finds balance between logic and creativity. 
            I'm a lifelong basketball player, the rhythm of the game has shaped my mindset: 
            strategic, fast-paced, and resilient. I also have a deep love for music and 
            sound design. As a former sound engineer and co-founder of a recording studio, I've spent countless hours mixing, mastering, and helping artists 
            bring their vision to life.
          </p>
          
          <p>
            These passions taught me to listen closely, work collaboratively, and never 
            stop learning whether I'm on the court, in the studio, or writing code.
          </p>
          
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutMe
