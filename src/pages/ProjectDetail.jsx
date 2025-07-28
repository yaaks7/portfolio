import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import './Page.css'

const projectsData = {
  'grid-trading': {
    title: "Grid Trading Strategy Backtester",
    icon: "🔁",
    color: "#34D399",
    description: "Advanced algorithmic trading system implementing grid trading strategies with comprehensive backtesting capabilities and risk management features.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Algorithmic Trading"],
    features: [
      "Real-time market data integration",
      "Advanced backtesting engine", 
      "Risk management algorithms",
      "Performance analytics dashboard"
    ],
    github: "https://github.com/yaaks7/grid-trading",
    demo: "https://grid-trading.streamlit.app/",
    detailedDescription: `This sophisticated trading system implements grid trading strategies with advanced backtesting capabilities. 
    The system analyzes historical market data to optimize grid parameters and provides comprehensive risk management tools.`
  },
  'ml-prediction': {
    title: "Machine Learning Market Prediction System",
    icon: "🤖", 
    color: "#60A5FA",
    description: "Sophisticated ML system for financial market prediction using ensemble methods, feature engineering, and real-time data processing.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Feature Engineering", "Time Series"],
    features: [
      "Multiple ML algorithms ensemble",
      "Real-time prediction pipeline",
      "Feature importance analysis", 
      "Model performance tracking"
    ],
    github: "#",
    demo: "#",
    detailedDescription: `Advanced machine learning system that combines multiple algorithms to predict financial market movements. 
    Features sophisticated feature engineering and real-time data processing capabilities.`
  },
  'options-pricing': {
    title: "Options Pricing Modelization App",
    icon: "📊",
    color: "#F59E0B", 
    description: "Comprehensive options pricing application implementing Black-Scholes, Binomial, Monte Carlo, and Neural Network models.",
    technologies: ["React", "Python", "Financial Mathematics", "Monte Carlo", "Neural Networks"],
    features: [
      "Black-Scholes implementation",
      "Binomial tree modeling",
      "Monte Carlo simulations",
      "Neural network pricing"
    ],
    github: "#",
    demo: "#",
    detailedDescription: `Complete options pricing solution implementing multiple mathematical models including Black-Scholes, 
    Binomial trees, Monte Carlo simulations, and modern neural network approaches.`
  },
  'energy-optimization': {
    title: "Energy Production Optimization Model",
    icon: "⚡",
    color: "#10B981",
    description: "Data-driven model for Hydro-Québec optimizing energy production using hourly data analysis and CO2 emission optimization.",
    technologies: ["Python", "Optimization", "Data Analysis", "Environmental Modeling"],
    features: [
      "Hourly production optimization",
      "CO2 emission reduction algorithms", 
      "Predictive analytics",
      "Real-time monitoring dashboard"
    ],
    github: "#",
    demo: "#",
    detailedDescription: `Environmental optimization system designed for Hydro-Québec to maximize energy production efficiency 
    while minimizing CO2 emissions through advanced predictive modeling.`
  },
  'ml-optimization': {
    title: "Machine Learning Optimization Algorithm", 
    icon: "🧠",
    color: "#8B5CF6",
    description: "High-performance differential evolution algorithm implemented in C++ for ML hyperparameter optimization.",
    technologies: ["C++", "Optimization Algorithms", "Differential Evolution", "Performance Computing"],
    features: [
      "High-performance C++ implementation",
      "Parallel processing capabilities",
      "Adaptive parameter tuning",
      "Benchmarking suite"
    ],
    github: "#",
    demo: "#",
    detailedDescription: `High-performance optimization algorithm implemented in C++ using differential evolution techniques 
    for machine learning hyperparameter optimization and model selection.`
  },
  'attention-comparator': {
    title: "AI Attention Maps Comparator",
    icon: "👁",
    color: "#EC4899",
    description: "Advanced tool for comparing and analyzing attention mechanisms in neural networks.",
    technologies: ["Python", "Deep Learning", "Attention Mechanisms", "Visualization", "Model Interpretability"],
    features: [
      "Attention pattern visualization",
      "Model comparison framework",
      "Interactive analysis tools",
      "Export capabilities"
    ],
    github: "#", 
    demo: "#",
    detailedDescription: `Comprehensive analysis tool for understanding and comparing attention mechanisms across different 
    neural network architectures, providing insights into model interpretability.`
  },
  'sentiment-analysis': {
    title: "Financial Reports Sentiment Analysis",
    icon: "💬",
    color: "#06B6D4",
    description: "NLP-powered system for analyzing sentiment in financial reports and market sentiment tracking.",
    technologies: ["Python", "NLP", "Sentiment Analysis", "Financial Data", "Text Mining"],
    features: [
      "Real-time sentiment scoring",
      "Financial keyword extraction",
      "Trend analysis dashboard", 
      "Historical sentiment tracking"
    ],
    github: "#",
    demo: "#", 
    detailedDescription: `Natural Language Processing system specialized in financial document analysis, 
    providing real-time sentiment scoring and trend analysis for investment decision support.`
  }
}

function ProjectDetail() {
  const { projectId } = useParams()
  const project = projectsData[projectId]

  if (!project) {
    return (
      <div className="page-container">
        <h1>Project Not Found</h1>
        <Link to="/projects">← Back to Projects</Link>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <div className="project-detail-header">
        <Link to="/projects" className="back-link">
          ← Back to Projects
        </Link>
        <div className="project-detail-title">
          <div 
            className="project-detail-icon"
            style={{ backgroundColor: project.color }}
          >
            {project.icon}
          </div>
          <div>
            <h1>{project.title}</h1>
            <p className="page-subtitle">{project.description}</p>
          </div>
        </div>
      </div>

      <div className="note-card">
        <div className="note-content">
          <div className="project-image-large">
            [Project Screenshot/Demo Placeholder]
          </div>
          
          <h3>Project Overview</h3>
          <p>{project.detailedDescription}</p>
          
          <div className="project-detail-grid">
            <div className="project-detail-section">
              <h4>Key Features</h4>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-detail-section">
              <h4>Technologies Used</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="project-links">
            <a href={project.github} className="project-link primary">
              📂 View on GitHub
            </a>
            <a href={project.demo} className="project-link">
              🚀 Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectDetail
