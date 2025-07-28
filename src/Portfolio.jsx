import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import AboutMe from './pages/AboutMe'
import AcademicBackground from './pages/AcademicBackground'
import Experience from './pages/Experience'
import Certificates from './pages/Certificates'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail.jsx'
import GridTradingProject from './pages/projects/GridTradingProject'
import MLPredictionProject from './pages/projects/MLPredictionProject'
import Contact from './pages/Contact'

function Portfolio() {
  return (
    <div className="portfolio-container">
      <Sidebar />
      <main className="main-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="content-wrapper"
        >
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/academic" element={<AcademicBackground />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/grid-trading" element={<GridTradingProject />} />
            <Route path="/projects/ml-prediction" element={<MLPredictionProject />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </main>
    </div>
  )
}

export default Portfolio
