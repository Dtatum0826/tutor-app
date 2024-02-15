import React, { useState, useEffect } from "react";
import Problem from './Problem';
import InputRange from './InputRange';

function Problems() {
  const [minNum, setMinNum] = useState(1);
  const [maxNum, setMaxNum] = useState(10);
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    generateProblems();
  }, [minNum, maxNum]);

  const generateProblems = () => {
    const newProblems = [];
    for (let i = 0; i < 10; i++) {
      const num1 = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      const num2 = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      newProblems.push({
        num1: num1,
        num2: num2,
        answer: null,
        isCorrect: null,
      });
    }
    setProblems(newProblems);
  };

  const handleCheckAnswer = (problemIndex, isCorrect) => {
    const newProblems = [...problems];
    newProblems[problemIndex].isCorrect = isCorrect;

    if (isCorrect && problemIndex < problems.length - 1) {
      newProblems[problemIndex + 1].shouldFocus = true;
    }
    setProblems(newProblems);
  };

  return (
    <div>
      <div>
        <InputRange 
          label="Minimum Number" 
          id="minNum"
          value={minNum} 
          min={1} 
          max={maxNum - 1} // Prevent minNum from being equal to or greater than maxNum
          handleChange={(e) => setMinNum(parseInt(e.target.value))} 
        />
        <InputRange 
          label="Maximum Number" 
          id="maxNum" 
          value={maxNum} 
          min={minNum + 1} // Prevent maxNum from being equal to or less than minNum
          max={100} 
          handleChange={(e) => setMaxNum(parseInt(e.target.value))} 
        />
      </div>

      {problems.map((problem, index) => (
        <Problem
          key={index}
          index={index}
          num1={problem.num1}
          num2={problem.num2}
          answer={problem.answer}
          isCorrect={problem.isCorrect}
          shouldFocus={problem.shouldFocus || false} 
          onCheckAnswer={handleCheckAnswer}
        />
      ))}
    </div>
  );
}

export default Problems;