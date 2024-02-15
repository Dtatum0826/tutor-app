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
      const correctAnswer = num1 * num2;
      const calculatedIsCorrect = answer === correctAnswer;
      setIsCorrect(calculatedIsCorrect);

      // Call an external callback (if needed) to update problems array in the parent
      if (props.onCheckAnswer) {
        props.onCheckAnswer(props.index, calculatedIsCorrect); 
      }
    }
  };

  return (
    <div>
      <span>{num1} x {num2} = </span>
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