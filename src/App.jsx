import { useState, createContext, useContext, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Portfolio from './Portfolio'
import './styles/App.css'
import './styles/LaunchScreen.css'

// Theme Context
const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

function App() {
  // Vérifier si l'application a déjà été lancée auparavant
  const [isLaunched, setIsLaunched] = useState(() => {
    const savedLaunchState = localStorage.getItem('portfolio-launched')
    return savedLaunchState === 'true'
  })
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleLaunch = () => {
    setIsLaunched(true)
    // Sauvegarder l'état dans le localStorage
    localStorage.setItem('portfolio-launched', 'true')
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
        <AnimatePresence mode="wait">
          {!isLaunched ? (
            <motion.div
              key="launch"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="launch-screen"
              onClick={handleLaunch}
            >
              <div className="launch-content">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                  className="app-icon"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="notes-icon">
                    <div className="icon-top"></div>
                    <div className="icon-lines">
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>
                  </div>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="app-name"
                >
                  Portfolio - Yanis Aksas
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="tap-instruction"
                >
                  Tap to open
                </motion.p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Portfolio />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
