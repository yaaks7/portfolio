import { motion } from 'framer-motion'
import './Page.css'

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <div className="page-header">
        <h1>📬 Contact</h1>
      </div>
      
      <div className="note-card">
        <div className="note-content">
          <p>
            I'm always interested in discussing new opportunities, collaborating on innovative projects, or connecting with fellow professionals in quantitative finance, AI/ML, and software development.
          </p>
          
          <div className="section-grid" style={{ marginTop: 'var(--spacing-2xl)' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="section-card"
            >
              <div className="card-header">
                <span className="card-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.887.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.749 1.636 1.636z"/>
                  </svg>
                </span>
                <div>
                  <h4 className="card-title">Email</h4>
                </div>
              </div>
              <div className="card-content">
                <p>
                  <a href="mailto:yanis.aksas@gmail.com" 
                     style={{ color: 'var(--text-primary)', fontWeight: 'var(--font-weight-medium)' }}>
                    yanis.aksas@gmail.com
                  </a>
                </p>
                <p>Feel free to reach out for collaborations, job opportunities, or general inquiries.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="section-card"
            >
              <div className="card-header">
                <span className="card-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                <div>
                  <h4 className="card-title">LinkedIn</h4>
                </div>
              </div>
              <div className="card-content">
                <p>
                  <a href="https://www.linkedin.com/in/yanisaks" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     style={{ color: 'var(--text-primary)', fontWeight: 'var(--font-weight-medium)' }}>
                    linkedin.com/in/yanisaks
                  </a>
                </p>
                <p>Connect with me to stay updated on my professional journey and latest projects.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="section-card"
            >
              <div className="card-header">
                <span className="card-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
                <div>
                  <h4 className="card-title">GitHub</h4>
                </div>
              </div>
              <div className="card-content">
                <p>
                  <a href="https://github.com/yaaks7" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     style={{ color: 'var(--text-primary)', fontWeight: 'var(--font-weight-medium)' }}>
                    github.com/yaaks7
                  </a>
                </p>
                <p>Explore my open-source projects, trading systems, AI experiments, and technical contributions.</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ 
              marginTop: 'var(--spacing-2xl)', 
              padding: 'var(--spacing-xl)', 
              backgroundColor: 'var(--bg-secondary)', 
              borderRadius: 'var(--border-radius-md)',
              textAlign: 'center'
            }}
          >
            <h4>🔍 What I'm Looking For</h4>
            <div style={{ marginTop: 'var(--spacing-lg)' }}>
              <span className="tag">Quantitative Finance Roles</span>
              <span className="tag">AI/ML Engineering</span>
              <span className="tag">Full-Stack Development</span>
              <span className="tag">Algorithmic Trading</span>
              <span className="tag">Data Science</span>
              <span className="tag">Research Collaborations</span>
            </div>
            <p style={{ marginTop: 'var(--spacing-lg)', marginBottom: 0 }}>
              Whether you're looking for someone to bridge the gap between mathematics and real-world applications, or just want to chat about ideas — I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
