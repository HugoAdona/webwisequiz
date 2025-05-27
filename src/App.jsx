import React from "react";
import "./App.css";
import { useState } from "react";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "HyperText Markup Language",
      "HyperTool Markup Language",
    ],
    correctAnswer: "HyperText Markup Language",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-size", "type-size", "font-style", "text-size"],
    correctAnswer: "font-size",
  },
  {
    question: "What is the default HTTP method used when submitting a form without specifying method?",
    options: ["POST", "GET", "PUT", "FETCH"],
    correctAnswer: "GET",
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: ["String", "Number", "Character", "Boolean"],
    correctAnswer: "Character",
  },
   {
    question: "What tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<hyper>"],
    correctAnswer: "<a>",
  },
];

function App() {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showText, setShowText] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerOptionClick = (selectedAnswer) => {
    selectedAnswer === questions[currentQuestion].correctAnswer &&
      setScore(score + 1);

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      score == questions.length - 1 && setShowText(true);
    }
  };

  return (
    <>
      <h1>WebWise: The Dev Challenge</h1>
      <div className="quiz-app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
            {showText && (
              <h4>Congratulations! You got all the answers correct!</h4>
            )}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span> / {questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].question}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].options.map((option) => (
                <button
                  className="answer-button"
                  key={option}
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
