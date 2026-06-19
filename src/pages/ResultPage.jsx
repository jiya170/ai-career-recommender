import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function ResultPage() {
  const location = useLocation();

  const answers = useMemo(
    () => location.state?.answers || {},
    [location.state]
  );

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAI = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers })
        });

        const data = await res.json();
        setResult(data.result || "No response");
      } catch (err) {
        setResult("Backend error");
      } finally {
        setLoading(false);
      }
    };

    fetchAI();
  }, [answers]);

  // 🎯 fake skill data (AI future upgrade: backend se aayega)
  const radarData = {
    labels: ["Coding", "Problem Solving", "Statistics", "Web Dev", "Security", "Data Analysis"],
    datasets: [
      {
        label: "Your Skill Level",
        data: [7, 8, 6, 7, 5, 8],
        backgroundColor: "rgba(99, 102, 241, 0.3)",
        borderColor: "#6366f1",
        borderWidth: 2
      }
    ]
  };

  return (
    <div style={styles.page}>

      {/* HEADER */}
      <div style={styles.header}>
        <h1>🤖 AI Career Advisor</h1>
        <p>Next-Gen Career Intelligence Dashboard</p>
      </div>

      {/* INPUTS */}
      <div style={styles.card}>
        <h3>📌 Your Profile</h3>
        <pre style={styles.pre}>
          {JSON.stringify(answers, null, 2)}
        </pre>
      </div>

      {/* RADAR CHART */}
      <div style={styles.chartCard}>
        <h3>📊 Skill Radar</h3>
        <Radar data={radarData} />
      </div>

      {/* RESULT */}
      <div style={styles.resultCard}>
        <h3>🧠 AI Career Report</h3>

        {loading ? (
          <p>Generating insights...</p>
        ) : (
          <ReactMarkdown>{result}</ReactMarkdown>
        )}
      </div>

    </div>
  );
}

const styles = {
  page: {
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    minHeight: "100vh",
    padding: "30px",
    color: "white",
    fontFamily: "Arial"
  },

  header: {
    textAlign: "center",
    marginBottom: "20px"
  },

  card: {
    background: "#111827",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "20px"
  },

  pre: {
    whiteSpace: "pre-wrap",
    maxHeight: "200px",
    overflowY: "auto",
    background: "#1f2937",
    padding: "10px",
    borderRadius: "8px"
  },

  chartCard: {
    background: "#0b1220",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px"
  },

  resultCard: {
    background: "#111827",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "50px"
  }
};

export default ResultPage;