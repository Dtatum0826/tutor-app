import React, { useState, useEffect } from "react";
import Problem from './Problem';
import InputRange from './InputRange';
import Card from "../shared/Card";

function Problems() {
  const [minNum, setMinNum] = useState(1);
  const [maxNum, setMaxNum] = useState(10);
  const [operator, setOperator] = useState('multiply'); 
  const [problems, setProblems] = useState([]);


  useEffect(() => {
    generateProblems(operator);
  }, [minNum, maxNum, operator]);
  
  

  useEffect(() => {
    const allAnsweredCorrectly = problems.every(problem => problem.isCorrect);

    if (allAnsweredCorrectly) {
      generateProblems(); // Regenerate problems
      setProblems(newProblems => newProblems.map(p => ({ ...p, answer: null, isCorrect: null }))); // Clear answers and correctness state
    }
  }, [problems]);
  
 


  
  const generateProblems = () => {
    const newProblems = [];
    for (let i = 0; i < 10; i++) {
      const num1 = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      let num2 = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

      let answer;
      switch (operator) {
        case 'add':
          answer = num1 + num2;
          break;
        case 'multiply':
          answer = num1 * num2;
          break;
        case 'subtract':
          answer = num1 - num2;
          break;
        case 'divide':
          // Ensure num2 is not 0 to avoid division by zero
          while (num2 === 0) {
            num2 = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
          }
          answer = num1 / num2;
          break;
        default: // 'multiply'
          answer = num1 * num2;
      }

      newProblems.push({
        num1: num1,
        num2: num2,
        answer: null,
        isCorrect: null,
        operator: operator, // Include the operator in each problem object
      });
    }
    setProblems(newProblems);
  };


  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
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
    <Card>
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
         <select value={operator} onChange={handleOperatorChange}>
          <option value="multiply">Multiply</option>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="divide">Divide</option>
        </select>
      </div>

      {problems.map((problem, index) => (
        <Problem
          key={`${index}-${problem.num1}-${problem.num2}-${problem.operator}`}
          index={index}
          num1={problem.num1}
          num2={problem.num2}
          answer={problem.answer}
          isCorrect={problem.isCorrect}
          operator={operator} 
          shouldFocus={problem.shouldFocus || false} 
          onCheckAnswer={handleCheckAnswer}
        />
      ))}
    </div>
    </Card>
  );
}

export default Problems;