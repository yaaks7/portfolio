import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GitBranch, ExternalLink, Target, Zap, TrendingUp, Cpu, Eye, BarChart2 } from 'lucide-react'
import '../Page.css'
import './ProjectStyles.css'

// Import attention visualization images
import attentionModel from '../../assets/img/attention_model.png'
import attentionView from '../../assets/img/attention_view.png'

function AttentionComparatorProject() {
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
        <div className="project-title-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'flex', color: '#EC4899' }}><Eye size={28} strokeWidth={1.5} /></span>
            <h1>Transformer Attention Comparator</h1>
          </div>
          <p className="project-subtitle">
            Analysis and visualization of attention mechanisms across BERT, DistilBERT, and RoBERTa models using BertViz
          </p>
          <div className="project-links">
            <a href="https://github.com/yaaks7/portfolio-ia" target="_blank" rel="noopener noreferrer" className="project-link github">
              <GitBranch size={14} strokeWidth={1.5} /> View on Github
            </a>
            <a href="https://github.com/yaaks7/portfolio-ia/blob/main/projets/semaine-01-02-transformers/notebooks/01-comparateur-attention.ipynb" target="_blank" rel="noopener noreferrer" className="project-link demo">
              <ExternalLink size={14} strokeWidth={1.5} /> Notebook
            </a>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="note-card">
        <div className="note-content">
          <h2>Project Overview</h2>
          <p>
            I ran a quantitative comparison of attention mechanisms across BERT, DistilBERT, and RoBERTa —
            four metrics per model, 5 test sentences, visualized head-by-head with BertViz.
          </p>

          <div className="key-stats">
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Models Analyzed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Attention Metrics</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Test Sentences</div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="note-card">
        <div className="note-content">
          <h2>Technical Stack</h2>

          <div className="tech-section">
            <h3>Core Libraries & Frameworks</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <div>
                  <strong>Transformers</strong>
                  <p>HuggingFace library for model loading and inference</p>
                </div>
              </div>
              <div className="tech-item">
                <div>
                  <strong>BertViz</strong>
                  <p>Attention visualization toolkit</p>
                </div>
              </div>
              <div className="tech-item">
                <div>
                  <strong>PyTorch</strong>
                  <p>Deep learning framework for model operations</p>
                </div>
              </div>
              <div className="tech-item">
                <div>
                  <strong>Plotly</strong>
                  <p>Interactive data visualization and analysis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-section">
            <h3>Analysis & Visualization</h3>
            <div className="tech-grid">
              <div className="tech-item">
                <div>
                  <strong>NumPy & Pandas</strong>
                  <p>Numerical computation and data manipulation</p>
                </div>
              </div>
              <div className="tech-item">
                <div>
                  <strong>Matplotlib & Seaborn</strong>
                  <p>Statistical visualization and plotting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Models Analyzed */}
      <div className="note-card">
        <div className="note-content">
          <h2>Models Under Analysis</h2>

          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon"><Target size={20} strokeWidth={1.5} /></div>
              <h4>BERT</h4>
              <p><strong>Architecture:</strong> 12 layers, 768 hidden size, 12 attention heads</p>
              <p><strong>Signature:</strong> Generalist adaptive approach with flexible contextual patterns</p>
              <p><strong>Parameters:</strong> ~110M trainable parameters</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><Zap size={20} strokeWidth={1.5} /></div>
              <h4>DistilBERT</h4>
              <p><strong>Architecture:</strong> 6 layers, 768 hidden size, 12 attention heads</p>
              <p><strong>Signature:</strong> Compressed efficiency with stability</p>
              <p><strong>Parameters:</strong> ~66M trainable parameters (-39% vs BERT)</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><TrendingUp size={20} strokeWidth={1.5} /></div>
              <h4>RoBERTa</h4>
              <p><strong>Architecture:</strong> 12 layers, 768 hidden size, 12 attention heads</p>
              <p><strong>Signature:</strong> Optimized specialist with extreme specialization</p>
              <p><strong>Parameters:</strong> ~125M trainable parameters</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attention Analysis Methodology */}
      <div className="note-card">
        <div className="note-content">
          <h2>Analysis Methodology</h2>

          <h3>Attention Visualization Techniques</h3>
          <div className="parameter-grid">
            <div className="parameter-item">
              <h4>Model View</h4>
              <p>Attention patterns across all heads and layers</p>
            </div>
            <div className="parameter-item">
              <h4>Head View</h4>
              <p>Head-by-head analysis for functional specialization patterns</p>
            </div>
            <div className="parameter-item">
              <h4>Pattern Analysis</h4>
              <p>Metrics for attention distribution and behavioral characterization</p>
            </div>
          </div>

          <h3>Quantitative Metrics</h3>
          <div className="metrics-grid">
            <div className="metric-category">
              <h4>CLS Attention Max</h4>
              <p>Maximum attention score toward [CLS] token - measures aggregation efficiency</p>
            </div>

            <div className="metric-category">
              <h4>Self-Attention Mean</h4>
              <p>Average self-attention across diagonal - contextual vs intrinsic processing</p>
            </div>

            <div className="metric-category">
              <h4>Content/Function Ratio</h4>
              <p>Attention preference for semantic vs syntactic elements</p>
            </div>

            <div className="metric-category">
              <h4>Attention Entropy</h4>
              <p>Distribution concentration measure - decision precision</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Findings */}
      <div className="note-card">
        <div className="note-content">
          <h2>Key Research Findings</h2>

          <h3>Performance Rankings</h3>
          <div className="performance-table">
            <table>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>CLS Aggregation</th>
                  <th>Self-Attention</th>
                  <th>Content/Function</th>
                  <th>Entropy</th>
                  <th>Speed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="model-name">BERT</td>
                  <td>0.198</td>
                  <td>0.145</td>
                  <td>14.9</td>
                  <td>19.1</td>
                  <td>1.00x</td>
                </tr>
                <tr>
                  <td className="model-name">DistilBERT</td>
                  <td>0.279</td>
                  <td>0.123</td>
                  <td>15.4</td>
                  <td>20.3</td>
                  <td className="best-value">2.82x</td>
                </tr>
                <tr>
                  <td className="model-name">RoBERTa</td>
                  <td className="best-value">0.332</td>
                  <td>0.152</td>
                  <td className="best-value">54.2</td>
                  <td>20.0</td>
                  <td>1.55x</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Behavioral Signatures</h3>
          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon"><Target size={20} strokeWidth={1.5} /></div>
              <h4>BERT - The Generalist Adaptive</h4>
              <p><strong>Signature:</strong> Flexible contextual adaptation with variable entropy</p>
              <p><strong>Strength:</strong> Balanced syntax/semantics, polyvalent processing</p>
              <p><strong>Use case:</strong> General tasks, exploratory applications</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><Zap size={20} strokeWidth={1.5} /></div>
              <h4>DistilBERT - The Efficient Compressor</h4>
              <p><strong>Signature:</strong> Remarkable stability with intelligent compression</p>
              <p><strong>Strength:</strong> 282% speed improvement, consistent metrics</p>
              <p><strong>Use case:</strong> Resource-constrained, production environments</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><TrendingUp size={20} strokeWidth={1.5} /></div>
              <h4>RoBERTa - The Optimized Specialist</h4>
              <p><strong>Signature:</strong> Extreme specialization with deterministic patterns</p>
              <p><strong>Strength:</strong> Sharp decisions, semantic focus (90.9:1 ratio)</p>
              <p><strong>Use case:</strong> Specialized domains, maximum performance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="note-card">
        <div className="note-content">
          <h2>Technical Implementation</h2>

          <div className="code-section">
            <h3>Model Loading & Configuration</h3>
            <div className="code-highlight">
              <h4>Transformer Models Setup</h4>
              <pre className="code-block">
{`# Model configuration and loading
MODELS = {
    "BERT": {
        "name": "bert-base-uncased",
        "description": "BERT original - 12 layers, 768 hidden, 12 attention heads"
    },
    "DistilBERT": {
        "name": "distilbert-base-uncased",
        "description": "Version compressée de BERT - 6 layers, plus rapide"
    },
    "RoBERTa": {
        "name": "roberta-base",
        "description": "BERT optimisé - entraînement amélioré"
    }
}

def load_model_and_tokenizer(model_name):
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModel.from_pretrained(
        model_name,
        output_attentions=True,
        return_dict=True).to(device)
    config = AutoConfig.from_pretrained(model_name)
    return model, tokenizer, config`}
              </pre>
            </div>

            <h3>Attention Pattern Analysis</h3>
            <div className="code-highlight">
              <h4>Attention Computation Engine</h4>
              <pre className="code-block">
{`def analyze_attention_patterns(sentence, models_data):
    patterns_analysis = {}

    for model_name, data in models_data.items():
        tokenizer = data["tokenizer"]
        model = data["model"]

        inputs = tokenizer(sentence, return_tensors="pt")
        tokens = tokenizer.convert_ids_to_tokens(inputs["input_ids"][0])

        with torch.no_grad():
            outputs = model(**inputs)
            attentions = outputs.attentions

        last_attention = attentions[-1][0]  # [heads, seq_len, seq_len]

        # Calculate attention metrics
        cls_attention = last_attention[:, 0, :].mean(dim=0)
        self_attention = torch.diagonal(last_attention.mean(dim=0))

        patterns = {
            "cls_attention_max": float(cls_attention.max()),
            "self_attention_mean": float(self_attention.mean()),
            "attention_entropy": float(-torch.sum(
                last_attention.mean(dim=0) *
                torch.log(last_attention.mean(dim=0) + 1e-10)
            ).mean())
        }

        patterns_analysis[model_name] = patterns

    return patterns_analysis`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Visualization Features */}
      <div className="note-card">
        <div className="note-content">
          <h2>Visualization Features</h2>

          <h3>BertViz Interactive Visualizations</h3>
          <p>
            The project leverages BertViz for comprehensive attention pattern analysis across different model architectures.
          </p>

          <div className="interface-section">
            <h4>Head View Analysis</h4>
            <div className="project-screenshot">
              <img src={attentionView} alt="BertViz Head View showing 12x12 grid of attention patterns across layers and heads" className="interface-img" />
            </div>
            <p>12x12 grid visualization revealing specialized attention patterns for each head across all transformer layers</p>
          </div>

          <div className="interface-section">
            <h4>Model View Visualization</h4>
            <div className="project-screenshot">
              <img src={attentionModel} alt="BertViz Model View showing token-to-token attention flow with interactive layer navigation" className="interface-img" />
            </div>
            <p>Interactive attention flow visualization with layer-by-layer navigation and detailed token-to-token attention mapping</p>
          </div>
        </div>
      </div>

      {/* Research Insights */}
      <div className="note-card">
        <div className="note-content">
          <h2>Research Insights</h2>

          <h3>Architectural Discoveries</h3>
          <div className="highlight-grid">
            <div className="highlight-item">
              <div className="highlight-icon"><Cpu size={20} strokeWidth={1.5} /></div>
              <h4>Layer Specialization</h4>
              <p><strong>Lower layers (0-3):</strong> Syntactic features and local relationships</p>
              <p><strong>Middle layers (4-8):</strong> Semantic relationship development</p>
              <p><strong>Upper layers (9-11):</strong> Global aggregation for classification</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><Eye size={20} strokeWidth={1.5} /></div>
              <h4>Head Functionality</h4>
              <p><strong>Syntactic heads (0-3):</strong> Grammatical structure processing</p>
              <p><strong>Semantic heads (4-8):</strong> Meaning and context relationships</p>
              <p><strong>Aggregation heads (9-11):</strong> Information synthesis for output</p>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon"><BarChart2 size={20} strokeWidth={1.5} /></div>
              <h4>Model Optimization Trade-offs</h4>
              <p><strong>Compression (DistilBERT):</strong> Maintains performance with 50% fewer layers</p>
              <p><strong>Training optimization (RoBERTa):</strong> Sharper attention patterns</p>
              <p><strong>Baseline robustness (BERT):</strong> Consistent general-purpose performance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Demonstrated */}
      <div className="note-card">
        <div className="note-content">
          <h2>Skills Demonstrated</h2>

          <div className="impact-summary">
            <div className="skills-demonstrated">
              <div className="skills-grid">
                <span className="skill-tag">Transformer Architecture</span>
                <span className="skill-tag">Attention Mechanisms</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">HuggingFace</span>
                <span className="skill-tag">BertViz</span>
                <span className="skill-tag">Statistical Analysis</span>
                <span className="skill-tag">Data Visualization</span>
                <span className="skill-tag">Deep Learning</span>
                <span className="skill-tag">NLP</span>
                <span className="skill-tag">Jupyter Notebooks</span>
              </div>
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

export default AttentionComparatorProject
