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
                <span className="card-icon">📧</span>
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
                <span className="card-icon">💼</span>
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
                <span className="card-icon">🖥️</span>
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
              Whether you're looking for someone to bridge the gap between complex mathematics and real-world applications, or just want to chat about ideas — I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
