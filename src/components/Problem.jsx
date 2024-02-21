import { useEffect, useRef, useState } from "react";



function Problem({ num1, num2, ...props }) { // Receive necessary props

  const [answer, setAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.shouldFocus) {
      inputRef.current.focus();
    }
  }, [props.shouldFocus]);

  const handleAnswerChange = (event) => {
    setAnswer(parseInt(event.target.value));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      let correctAnswer;
switch (props.operator) {
  case 'add':
    correctAnswer = num1 + num2;
    break;
  case 'subtract':
    correctAnswer = num1 - num2;
    break;
  case 'multiply':
    correctAnswer = num1 * num2;
    break;
  case 'divide':
    // Ensure num2 is not 0 to avoid division by zero
    while (num2 === 0) {
      num2 = Math.floor(Math.random() * (props.maxNum - props.minNum + 1)) + minNum;
    }
    correctAnswer = num1 / num2;
    break;
  default: // Default to multiplication
    correctAnswer = num1 * num2;
}

const calculatedIsCorrect = parseFloat(answer) === correctAnswer; // Convert to float for division
setIsCorrect(calculatedIsCorrect);


      // Call an external callback (if needed) to update problems array in the parent
      if (props.onCheckAnswer) {
        props.onCheckAnswer(props.index, calculatedIsCorrect); 
      }
    }
  };

  function getOperatorSymbol(operator) {
    switch (operator) {
      case 'add': return '+';
      case 'subtract': return '-';
      case 'multiply': return 'x';
      case 'divide': return '÷'; 
      default: return '?';
    }
  }
  

  return (
    <div>
      <span>{num1} {getOperatorSymbol(props.operator)} {num2} = </span>
      <input
        type="number"
        ref={inputRef}
        value={answer !== null ? answer : ''}
        onChange={handleAnswerChange}
        onKeyDown={handleKeyDown}
        style={{ backgroundColor: isCorrect === false ? 'red' : null }}
      />
    </div>
  );
}

export default Problem;