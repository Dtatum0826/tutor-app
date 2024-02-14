import { useEffect, useRef } from "react";

function Problem({ num1, num2, answer, isCorrect, handleAnswerChange, handleKeyDown ,...props}) {
  
  const inputRef = useRef(null);

  useEffect(() => {
    if (props.shouldFocus) {
      inputRef.current.focus();
    }
  }, [props.shouldFocus]);
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