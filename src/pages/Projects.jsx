import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TrendingUp, Cpu, Activity, Zap, Target, Eye, AlignLeft } from 'lucide-react'
import './Page.css'

const projects = [
  {
    id: 'grid-trading',
    title: "Grid Trading Backtester",
    Icon: TrendingUp,
    color: "#34D399",
    description: "Algorithmic trading system"
  },
  {
    id: 'ml-prediction',
    title: "ML Market Prediction",
    Icon: Cpu,
    color: "#60A5FA",
    description: "Machine learning for financial markets"
  },
  {
    id: 'options-pricing',
    title: "Options Pricing App",
    Icon: Activity,
    color: "#F59E0B",
    description: "Black-Scholes, Monte Carlo & Neural Networks"
  },
  {
    id: 'energy-optimization',
    title: "Energy Production Model",
    Icon: Zap,
    color: "#10B981",
    description: "Hydro-Québec optimization system"
  },
  {
    id: 'ml-optimization',
    title: "ML Optimization Algorithm",
    Icon: Target,
    color: "#8B5CF6",
    description: "Differential evolution in C++"
  },
  {
    id: 'attention-comparator',
    title: "AI Attention Comparator",
    Icon: Eye,
    color: "#EC4899",
    description: "Analysis of transformers attention mechanisms"
  },
  {
    id: 'sentiment-analysis',
    title: "Financial Sentiment Analysis",
    Icon: AlignLeft,
    color: "#06B6D4",
    description: "NLP for financial reports"
  }
]

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <div className="page-header">
        <h1>Projects</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={`/projects/${project.id}`} className="project-icon-card">
              <div
                className="project-icon-container"
                style={{ backgroundColor: project.color }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="project-animated-icon"
                >
                  <project.Icon size={32} strokeWidth={1.5} />
                </motion.div>
              </div>
              <h4 className="project-icon-title">{project.title}</h4>
              <p className="project-icon-description">{project.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>

    </motion.div>
  )
}

export default Projects
