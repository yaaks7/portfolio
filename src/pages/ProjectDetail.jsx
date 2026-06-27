import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { GitBranch, ExternalLink } from 'lucide-react'
import './Page.css'

const projectsData = {
  'grid-trading': {
    title: "Grid Trading Strategy Backtester",
    description: "Grid trading backtester with dynamic threshold calibration, multi-asset support, and a Streamlit dashboard for strategy evaluation.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Algorithmic Trading"],
    features: [
      "Dynamic grid parameter calibration from historical volatility",
      "Multi-asset backtesting engine",
      "Risk management with drawdown controls",
      "Performance analytics dashboard"
    ],
    github: "https://github.com/yaaks7/grid-trading",
    demo: "https://grid-trading.streamlit.app/"
  },
  'ml-prediction': {
    title: "ML Market Prediction System",
    description: "Modular ML system predicting daily market direction across 15 assets. Benchmarked against 6 baseline strategies via a Streamlit interface.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Plotly", "Streamlit"],
    features: [
      "Random Forest and MLP models",
      "Technical indicator feature engineering (MA, RSI, MACD, Bollinger)",
      "6-strategy benchmark comparison",
      "CLI and web interfaces"
    ],
    github: "https://github.com/yaaks7/ml-trading",
    demo: "https://ml-trading.streamlit.app/"
  },
  'options-pricing': {
    title: "Options Pricing Modelization",
    description: "Options pricing app with Black-Scholes, Binomial, Monte Carlo, and Neural Network models. Full Greeks calculation and P&L heatmaps via React + FastAPI.",
    technologies: ["React", "FastAPI", "Python", "NumPy", "TensorFlow"],
    features: [
      "4 pricing models with side-by-side comparison",
      "Full Greeks (Δ Γ Θ ν ρ) calculation",
      "P&L heatmaps and sensitivity analysis",
      "RESTful API with auto-documentation"
    ],
    github: "https://github.com/yaaks7/options-pricing",
    demo: "https://optionspricing.vercel.app/"
  },
  'energy-optimization': {
    title: "Energy Production Model — HarmoniQ",
    description: "Energy system optimization platform for Hydro-Québec. I built the network module: PyPSA-based grid topology, AC/DC power flow, and linear programming dispatch.",
    technologies: ["Python", "PyPSA", "HiGHS", "Linear Programming", "Async"],
    features: [
      "5-source grid (hydro, wind, solar, nuclear, thermal)",
      "AC/DC power flow analysis with constraint validation",
      "Economic dispatch via HiGHS LP solver",
      "Real-time weather data integration"
    ],
    github: "https://github.com/Houjio/HarmoniQ",
    demo: null
  },
  'ml-optimization': {
    title: "ML Optimization Algorithms",
    description: "Benchmarking study comparing RSO, CLPSO, and my novel ADE algorithm for RL applications. Evaluated on MNIST neural network training in C++ with ArrayFire.",
    technologies: ["C++", "ArrayFire", "MNIST", "PSO", "Differential Evolution"],
    features: [
      "Novel ADE (Adaptive Differential Evolution) algorithm",
      "CLPSO implementation for comparison",
      "Template-based C++ architecture",
      "MNIST benchmarking framework"
    ],
    github: null,
    demo: null
  },
  'attention-comparator': {
    title: "Transformer Attention Comparator",
    description: "Comparative analysis of attention mechanisms across BERT, DistilBERT, and RoBERTa using BertViz and quantitative metrics (CLS aggregation, entropy, content/function ratio).",
    technologies: ["Python", "PyTorch", "HuggingFace", "BertViz", "Plotly"],
    features: [
      "Head view and model view visualizations",
      "4 quantitative attention metrics",
      "Behavioral signature analysis per model",
      "Layer-by-layer specialization study"
    ],
    github: "https://github.com/yaaks7/portfolio-ia",
    demo: "https://github.com/yaaks7/portfolio-ia/blob/main/projets/semaine-01-02-transformers/notebooks/01-comparateur-attention.ipynb"
  },
  'sentiment-analysis': {
    title: "Financial Sentiment Analysis",
    description: "Multi-model sentiment framework (BERT, FinBERT, VADER, TextBlob) on financial news for AAPL, MSFT, JPM, TSLA, NVDA. Includes sentiment-price correlation analysis.",
    technologies: ["Python", "Transformers", "Pandas", "News API", "Yahoo Finance"],
    features: [
      "4 NLP models with normalized scoring",
      "Sentiment-return correlation (Pearson + quintile analysis)",
      "Temporal JPM case study",
      "Statistical significance p < 0.05 for major tech stocks"
    ],
    github: "https://github.com/yaaks7/portfolio-ia",
    demo: "https://github.com/yaaks7/portfolio-ia/blob/main/projets/semaine-01-02-transformers/notebooks/02-analyse-sentiment.ipynb"
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
          <div>
            <h1>{project.title}</h1>
            <p className="page-subtitle">{project.description}</p>
          </div>
        </div>
      </div>

      <div className="note-card">
        <div className="note-content">
          <h3>Project Overview</h3>
          <p>{project.description}</p>
          
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
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link primary">
                <GitBranch size={14} strokeWidth={1.5} /> View on GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                <ExternalLink size={14} strokeWidth={1.5} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectDetail
