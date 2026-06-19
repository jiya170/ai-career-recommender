import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";
function LandingPage() {
    const navigate = useNavigate();
  return (
    
    <div className="landing-container">

      <div className="stars"></div>

      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      <div className="glass-card">

        <div className="ai-badge">🤖 AI Powered</div>

        <h1>
          AI Career
          <span> Navigator</span>
        </h1>

        <p>
          Multi-Agent AI System for Personalized Career Guidance,
          Skill Gap Analysis and Learning Roadmap Generation.
        </p>

        <button onClick={() => navigate("/questions")}>
            Start Analysis 🚀
        </button>

        <div className="stats">

          <div className="stat-card">
            <h2>500+</h2>
            <p>Career Paths</p>
          </div>

          <div className="stat-card">
            <h2>50+</h2>
            <p>Skills Tracked</p>
          </div>

          <div className="stat-card">
            <h2>AI</h2>
            <p>Powered Guidance</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default LandingPage;