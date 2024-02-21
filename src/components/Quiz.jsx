import React, { useState, useEffect } from 'react';
import Card from '../shared/Card';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      // Replace with your actual question fetching logic (from API or local data)
      const questionsData = [
        {
          questionText: "What is the capital of France?",
          answers: [
            { text: "Paris", isCorrect: true },
            { text: "Berlin", isCorrect: false },
            { text: "Madrid", isCorrect: false },
            { text: "Rome", isCorrect: false },
          ],
        },
        {
          questionText: "What is the capital of Spain?",
          answers: [
            { text: "Paris", isCorrect: false },
            { text: "Berlin", isCorrect: false },
            { text: "Madrid", isCorrect: true },
            { text: "Rome", isCorrect: false },
          ],
        },
        {
          questionText: "What is the capital of Germany?",
          answers: [
            { text: "Paris", isCorrect: false },
            { text: "Berlin", isCorrect: true },
            { text: "Madrid", isCorrect: false },
            { text: "Rome", isCorrect: false },
          ],
        },
        {
          questionText: "What is the capital of Italy?",
          answers: [
            { text: "Paris", isCorrect: false },
            { text: "Berlin", isCorrect: false },
            { text: "Madrid", isCorrect: false },
            { text: "Rome", isCorrect: true },
          ],
        },
        // ... more questions
      ];
      setQuestions(shuffleAnswers(questionsData));
    };

    fetchQuestions();
  }, []);

  const shuffleAnswers = (questions) => {
    // Shuffle answers for each question
    const shuffledQuestions = questions.map((question) => ({
      ...question,
      answers: question.answers.sort(() => Math.random() - 0.5),
    }));
  
    
    return shuffledQuestions
  };
  const handleAnswerClick = (isCorrect) => {
    setSelectedAnswer(isCorrect);

    // Move to next question after a short delay
    setTimeout(() => {
      const nextIndex = (currentQuestionIndex + 1) % questions.length;
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer(null);
    }, 1000); // Delay in milliseconds
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
   <Card>
   <div>
      {currentQuestion ? (
        <div>
          <h2>{currentQuestion.questionText}</h2>
          <ul>
            {currentQuestion.answers.map((answer) => (
              <li key={answer.text}>
                <button
                  onClick={() => handleAnswerClick(answer.isCorrect)}
                  disabled={selectedAnswer !== null}
                >
                  {answer.text}
                </button>
              </li>
            ))}
          </ul>
          {selectedAnswer !== null && (
            <p>
              {selectedAnswer ? "Correct!" : "Incorrect, try again."}
            </p>
          )}
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
    </Card>
  );
}

export default Quiz;