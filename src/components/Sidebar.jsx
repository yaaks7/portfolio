import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../App'
import './Sidebar.css'

const navigationItems = [
  { path: '/about', label: 'About Me', icon: '👋' },
  { path: '/academic', label: 'Academic Background', icon: '🎓' },
  { path: '/experience', label: 'Professional Experience', icon: '💼' },
  { path: '/certificates', label: 'Certificates', icon: '📜' },
  { path: '/projects', label: 'Projects', icon: '🚀' },
  { path: '/contact', label: 'Contact', icon: '📧' }
]

function Sidebar() {
  const location = useLocation()
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <motion.aside
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="sidebar"
    >
      <div className="sidebar-header">
        <h1 className="sidebar-title">Yanis Aksas</h1>
        <p className="sidebar-subtitle">BEng Mechanical Engineering</p>
        <button 
          className="theme-toggle-sidebar"
          onClick={toggleTheme}
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
      
      <nav className="sidebar-nav">
        {navigationItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) => 
                `nav-item ${isActive || (location.pathname === '/' && item.path === '/about') ? 'active' : ''}`
              }
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </NavLink>
          </motion.div>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <p className="footer-text">Portfolio 2025</p>
      </div>
    </motion.aside>
  )
}

export default Sidebar
