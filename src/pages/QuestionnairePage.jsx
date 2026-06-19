import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";

function QuestionnairePage() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState({});

  const question = questions[currentQuestion];

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    setAnswers({
      ...answers,
      [question.question]: option,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      console.log("Final Answers:", answers);
      navigate("/result", { state: { answers } });
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption("");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "700px",
          padding: "30px",
          background: "#111827",
          borderRadius: "20px",
          boxShadow: "0 0 20px rgba(99,102,241,.3)",
        }}
      >
        <h2 style={{ color: "#a5b4fc" }}>
          Question {currentQuestion + 1} of {questions.length}
        </h2>

        <h1 style={{ marginTop: "20px", marginBottom: "25px" }}>
          {question.question}
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: "15px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                color: "white",
                fontSize: "16px",
                transition: "0.3s",
                background:
                  selectedOption === option
                    ? "#6366f1"
                    : "#1e293b",
              }}
            >
              {option}
            </button>
          ))}
        </div>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
            style={{
              padding: "12px 20px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Previous
          </button>

          <button
            onClick={nextQuestion}
            disabled={!selectedOption}
            style={{
              padding: "12px 20px",
              border: "none",
              borderRadius: "10px",
              background: "#6366f1",
              color: "white",
              cursor: "pointer",
            }}
          >
            {currentQuestion === questions.length - 1
              ? "Finish"
              : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionnairePage;