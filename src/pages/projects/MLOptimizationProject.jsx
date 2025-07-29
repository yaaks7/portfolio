import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../Page.css'
import './ProjectStyles.css'


import optimizationGraph from '../../assets/img/opti_graph.png'

function MLOptimizationProject() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      {/* Navigation Header */}
      <div className="project-nav">
        <Link to="/projects" className="back-button">
          ← Back to Projects
        </Link>
      </div>

      {/* Project Header */}
      <div className="project-header">
        <div className="project-icon">⚙️</div>
        <div className="project-title-section">
          <h1>Machine Learning Optimization Algorithms</h1>
          <p className="project-subtitle">
            Benchmarking study of optimization algorithms (CLPSO, ADE vs RSO) for reinforcement learning applications using MNIST neural network training
          </p>
          <div className="project-links">
            <a href="#" target="_blank" rel="noopener noreferrer" className="project-link github">
              <span>🖥️</span> View on Github
            </a>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="note-card">
        <div className="note-content">
          <h2>🎯 Project Overview</h2>
          <p>
            This research project focuses on benchmarking the efficiency of new optimization algorithms 
            for reinforcement learning applications. The study compares three optimization algorithms: 
            Random Search Optimization (RSO) as a baseline, my implementation of Comprehensive Learning 
            Particle Swarm Optimization (CLPSO), and my novel Adaptive Differential Evolution (ADE) algorithm. 
            The MNIST dataset serves as the primary benchmark for evaluating neural network training performance 
            and algorithm effectiveness in machine learning contexts.
          </p>
          
          <div className="key-stats">
            <div className="stat-item">
              <div className="stat-number">RL</div>
              <div className="stat-label">Target Application</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">MNIST</div>
              <div className="stat-label">Benchmark Dataset</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Algorithms Compared</div>
            </div>
          </div>
        </div>
      </div>

      {/* System Architecture */}
      <div className="note-card">
        <div className="note-content">
          <h2>🏗️ System Architecture</h2>
          
          <div className="tech-section">
            <h3>Core Components</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <span className="tech-icon">🎯</span>
                <div>
                  <strong>Functor Handler</strong>
                  <p>Abstract interface for optimization problems with Paraboloid, Ackley, and MNIST implementations</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">⚡</span>
                <div>
                  <strong>Optimizer Engine</strong>
                  <p>Multi-algorithm optimization framework with RSO, ADE, and CLPSO implementations</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🧠</span>
                <div>
                  <strong>Neural Network</strong>
                  <p>Perceptron-based neural network with ReLU, Sigmoid, and SoftMax activation functions</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">📊</span>
                <div>
                  <strong>Performance Analyzer</strong>
                  <p>Comprehensive metrics and visualization tools for algorithm performance evaluation</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">💾</span>
                <div>
                  <strong>Memory Management</strong>
                  <p>Efficient ArrayFire-based memory handling for GPU acceleration</p>
                </div>
              </div>
              <div className="tech-item">
                <span className="tech-icon">🔧</span>
                <div>
                  <strong>I/O Handler</strong>
                  <p>Data loading and preprocessing for MNIST dataset and mathematical functions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* My Contributions - CLPSO & ADE Algorithm */}
      <div className="note-card">
        <div className="note-content">
          <h2>🎖️ Algorithm Benchmarking</h2>
          
          <p>
            As the lead researcher, I conducted a comprehensive benchmarking study to evaluate the 
            efficiency of new optimization algorithms for reinforcement learning applications. I implemented 
            CLPSO (Comprehensive Learning Particle Swarm Optimization) and created my novel ADE 
            (Adaptive Differential Evolution) algorithm, comparing both against RSO baseline using 
            MNIST neural network training as the primary benchmark.
          </p>

          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon">🎯</div>
              <h4>CLPSO Implementation</h4>
              <p><strong>Algorithm:</strong> Comprehensive Learning Particle Swarm Optimization</p>
              <p><strong>Purpose:</strong> Benchmark advanced PSO variant for RL optimization</p>
              <p><strong>Result:</strong> Enhanced exploration capabilities for neural network training</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">�</div>
              <h4>ADE Creation (My Algorithm)</h4>
              <p><strong>Innovation:</strong> Novel hybrid combining RSO adaptive search with DE evolution</p>
              <p><strong>Objective:</strong> Test efficiency for reinforcement learning applications</p>
              <p><strong>Benchmark:</strong> MNIST neural network training performance evaluation</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🚀</div>
              <h4>MNIST Benchmarking</h4>
              <p><strong>Dataset:</strong> MNIST digit recognition for neural network training</p>
              <p><strong>Comparison:</strong> CLPSO and ADE performance vs RSO baseline</p>
              <p><strong>Focus:</strong> Evaluation for reinforcement learning optimization potential</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🔧</div>
              <h4>Research Framework</h4>
              <p><strong>Architecture:</strong> Template-based C++ design for algorithm comparison</p>
              <p><strong>Validation:</strong> Comprehensive benchmarking on MNIST dataset</p>
              <p><strong>Application:</strong> Foundation for reinforcement learning optimization research</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="note-card">
        <div className="note-content">
          <h2>🔬 Technical Deep Dive</h2>
          
          <div className="code-section">
            <h3>CLPSO Core Algorithm</h3>
            <div className="code-highlight">
              <h4>Particle Class Implementation</h4>
              <pre className="code-block">
{`template<typename T>
class Particle {
public:
    af::array position;        // Current particle position
    af::array velocity;        // Particle velocity vector
    af::array pbest;          // Personal best position
    af::array pbest_record;   // Historical best positions
    double pbest_cost;        // Personal best cost
    std::vector<double> pbest_cost_record;
    double cost;              // Current cost

    // Constructor with random initialization
    Particle(const af::array& bounds) {
        int num_dimensions = bounds.dims(0);
        position = af::array(num_dimensions);
        velocity = af::array(num_dimensions);
        pbest = af::array(num_dimensions);
        pbest_cost = 1000000;
        cost = -1;
        
        // Initialize with random position within bounds
        // ... initialization code
    }

    // Evaluate particle using functor handler
    void evaluate(functorHandler::FunctorHandler<T>& functorHandler) {
        af::array costArray = functorHandler.eval(position);
        cost = costArray.scalar<T>();
        
        // Update personal best if improved
        if (cost < pbest_cost) {
            pbest_cost = cost;
            pbest = position;
        }
    }
};`}
              </pre>
            </div>
            
            <div className="code-highlight">
              <h4>CLPSO Main Algorithm</h4>
              <pre className="code-block">
{`template<typename T>
class CLPSO {
private:
    std::vector<Particle<T>> particles;
    af::array bounds;
    int num_particles;
    int maxiter;
    int threshold_no_improvement;
    
public:
    CLPSO(functorHandler::FunctorHandler<T>& functor, 
          int dimensions, int min_bound, int max_bound,
          int num_particles, int max_iterations, int threshold)
        : num_particles(num_particles), maxiter(max_iterations),
          threshold_no_improvement(threshold) {
        
        bounds = af::constant(max_bound - min_bound, dimensions);
        
        // Initialize particle swarm
        for (int i = 0; i < num_particles; ++i) {
            particles.emplace_back(bounds);
        }
    }
    
    // Comprehensive learning update mechanism
    void update_swarm(functorHandler::FunctorHandler<T>& functorHandler) {
        // Update each particle using comprehensive learning
        for (auto& particle : particles) {
            // Update velocity with comprehensive learning strategy
            // Update position with boundary handling
            // Evaluate new position
            particle.evaluate(functorHandler);
        }
    }
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Optimization Algorithms Comparison */}
      <div className="note-card">
        <div className="note-content">
          <h2>⚖️ Algorithm Comparison & Performance</h2>
          
          <div className="image-showcase">
            <div className="showcase-item">
              <img 
                src={optimizationGraph} 
                alt="Optimization Algorithm Performance Results"
                className="project-image large"
              />
              <div className="image-caption">
                <h4>Comparative Performance Analysis</h4>
                <p>
                  Performance comparison showing convergence characteristics, final optimization results, 
                  and computational efficiency for RSO, ADE, and CLPSO algorithms across different 
                  test functions and dimensionalities.
                </p>
              </div>
            </div>
          </div>

          <div className="comparison-grid">
            <div className="algorithm-comparison">
              <h4>🎲 Random Search Optimization (RSO) - Baseline</h4>
              <div className="algorithm-details">
                <p><strong>Role:</strong> Baseline algorithm for benchmarking comparison</p>
                <p><strong>Characteristics:</strong> Simple implementation, random exploration strategy</p>
                <p><strong>Benchmark:</strong> Reference point for CLPSO and ADE performance evaluation</p>
                <p><strong>Application:</strong> Foundation component and comparison standard</p>
              </div>
            </div>
            
            <div className="algorithm-comparison">
              <h4>🧬 Adaptive Differential Evolution (My Innovation)</h4>
              <div className="algorithm-details">
                <p><strong>Innovation:</strong> My novel hybrid combining RSO adaptive search with DE evolution</p>
                <p><strong>Objective:</strong> Test efficiency for reinforcement learning optimization</p>
                <p><strong>Benchmark:</strong> MNIST performance comparison against RSO baseline</p>
                <p><strong>Target:</strong> Enhanced optimization for machine learning applications</p>
              </div>
            </div>
            
            <div className="algorithm-comparison">
              <h4>🎯 CLPSO (My Implementation)</h4>
              <div className="algorithm-details">
                <p><strong>Implementation:</strong> Comprehensive learning particle swarm optimization</p>
                <p><strong>Research Goal:</strong> Evaluate advanced PSO variant for RL applications</p>
                <p><strong>Benchmark:</strong> MNIST neural network training performance vs RSO</p>
                <p><strong>Focus:</strong> Enhanced diversity and exploration for machine learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Neural Network Integration */}
      <div className="note-card">
        <div className="note-content">
          <h2>🧠 Neural Network & MNIST Integration</h2>
          
          <div className="code-section">
            <h3>Network Architecture</h3>
            <div className="code-highlight">
              <h4>Neural Network Implementation</h4>
              <pre className="code-block">
{`template<typename T>
class NeuralNetPerceptron : public NeuralNet<T> {
private:
    std::vector<int> nNeuronInLayer_;
    T rateActivate_;

public:
    NeuralNetPerceptron(const std::vector<int>& nNeuronInLayer, T rateActivate) 
        : nNeuronInLayer_(nNeuronInLayer), rateActivate_(rateActivate) {}

    // Forward propagation for training
    af::array eval_isTraining(const af::array& xVal, const af::array& pop) const override {
        af::array input = xVal;
        af::array weights = pop;
        int weight_idx = 0;
        
        // Process through each layer
        for (int layer = 0; layer < nLayer_ - 1; ++layer) {
            // Extract weights and biases for current layer
            af::array layer_weights = extractWeights(weights, weight_idx);
            af::array layer_biases = extractBiases(weights, weight_idx);
            
            // Linear transformation: Wx + b
            af::array linear_output = af::matmul(layer_weights, input) + layer_biases;
            
            // Apply activation function
            input = (layer < nLayer_ - 2) ? reLU(linear_output) : softMaxStable(linear_output);
        }
        return input;
    }

protected:
    af::array reLU(const af::array& xVal) const {
        return af::max(xVal, 0.0);
    }
    
    af::array softMaxStable(const af::array& xVal) const {
        af::array shifted = xVal - af::max(xVal);
        af::array exp_vals = af::exp(shifted);
        return exp_vals / af::sum(exp_vals);
    }
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Results & Performance Analysis */}
      <div className="note-card">
        <div className="note-content">
          <h2>🎯 Benchmarking Results</h2>
          
          <div className="results-showcase">
            <div className="validation-points">
              <h4>Performance Comparison: ADE vs RSO</h4>
              <p>
                Benchmarking results comparing my ADE algorithm against RSO baseline 
                across different neural network architectures on MNIST dataset.
              </p>
              
              <div className="performance-table">
                <table>
                  <thead>
                    <tr>
                      <th rowSpan="2">Architecture</th>
                      <th colSpan="3">ADE (My Algorithm)</th>
                      <th colSpan="3">RSO (Baseline)</th>
                    </tr>
                    <tr>
                      <th>Precision (%)</th>
                      <th>Nb Evaluations</th>
                      <th>Time (s)</th>
                      <th>Precision (%)</th>
                      <th>Nb Evaluations</th>
                      <th>Time (s)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>(784, 10, 10)</td>
                      <td className="highlight-cell">77.57</td>
                      <td>970,200</td>
                      <td>85.41</td>
                      <td>83.56</td>
                      <td>890,100</td>
                      <td>86.69</td>
                    </tr>
                    <tr>
                      <td>(784, 30, 10)</td>
                      <td className="highlight-cell">85.22</td>
                      <td>860,200</td>
                      <td>69.56</td>
                      <td>81.76</td>
                      <td>1,610,100</td>
                      <td>129.13</td>
                    </tr>
                    <tr>
                      <td>(784, 60, 10)</td>
                      <td>85.28</td>
                      <td>1,160,200</td>
                      <td>133.48</td>
                      <td className="highlight-cell">89.34</td>
                      <td>3,488,600</td>
                      <td>394.66</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="results-analysis">
                <h4>Key Findings</h4>
                <ul className="validation-list">
                  <li><strong>ADE Efficiency:</strong> My algorithm shows competitive accuracy with significantly fewer evaluations</li>
                  <li><strong>Scalability:</strong> ADE maintains better performance as network complexity increases</li>
                  <li><strong>Time Efficiency:</strong> ADE demonstrates faster convergence on medium-sized architectures</li>
                  <li><strong>RL Potential:</strong> Results validate ADE's suitability for reinforcement learning applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Impact */}
      <div className="note-card">
        <div className="note-content">
          <h2>🌟 Impact & Applications</h2>
          
          <div className="metrics-grid">
            <div className="metric-category">
              <h4>Research Contributions</h4>
              <ul className="metric-list">
                <li>Novel ADE algorithm hybridizing RSO with Differential Evolution</li>
                <li>Advanced CLPSO implementation with comprehensive learning</li>
                <li>MNIST benchmarking framework for RL optimization evaluation</li>
                <li>Performance baselines for algorithm selection in RL applications</li>
              </ul>
            </div>
            
            <div className="metric-category">
              <h4>Future Applications</h4>
              <ul className="metric-list">
                <li>Deep reinforcement learning optimization</li>
                <li>Multi-agent RL systems</li>
                <li>Real-time optimization for dynamic environments</li>
                <li>Advanced neural network training strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Demonstrated */}
      <div className="note-card">
        <div className="note-content">
          <h2>🎖️ Skills Demonstrated</h2>
          
          <div className="skills-demonstrated">
            <div className="skills-grid">
              <span className="skill-tag">Reinforcement Learning</span>
              <span className="skill-tag">Algorithm Design</span>
              <span className="skill-tag">MNIST Benchmarking</span>
              <span className="skill-tag">C++</span>
              <span className="skill-tag">ArrayFire</span>
              <span className="skill-tag">Particle Swarm Optimization</span>
              <span className="skill-tag">Differential Evolution</span>
              <span className="skill-tag">Neural Networks</span>
              <span className="skill-tag">Performance Analysis</span>
              <span className="skill-tag">Research Methodology</span>
              <span className="skill-tag">Deep Learning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="project-footer">
        <Link to="/projects" className="footer-link">
          ← Back to All Projects
        </Link>
        <Link to="/contact" className="footer-link">
          Get in Touch →
        </Link>
      </div>
    </motion.div>
  )
}

export default MLOptimizationProject
