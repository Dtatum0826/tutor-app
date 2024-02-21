import React, { useState } from 'react';

function TestComponent({ word, definition, partOfSpeech, example }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const partOfSpeechOptions = [
    'noun',
    'verb',
    'adjective',
    'adverb',
    // ... other possible parts of speech
  ];

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === partOfSpeech);
  };

  return (
    <div>
      <h2>Test your knowledge</h2>
      <p>What part of speech is the word <strong>{word}</strong>?</p>

      <ul>
        {partOfSpeechOptions.map((option) => (
          <li key={option}>
            <button onClick={() => handleAnswerClick(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>

      {isCorrect !== null && (
        <p>
          {isCorrect ? 'Correct!' : 'Try Again'}
        </p>
      )}
    </div>
  );
}

export default TestComponent;