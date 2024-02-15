import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import InputRange from "./components/InputRange";
import Problem from "./components/Problem";
import WordDefinition from "./components/WordDefinition";

function App() {
  const [minNum, setMinNum] = useState(1);
  const [maxNum, setMaxNum] = useState(10);
  const [problems, setProblems] = useState([]);
  const answerRefs = useRef([]); // Array to store references to answer inputs


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


  const handleMinChange = (event) => {
    setMinNum(parseInt(event.target.value));
  };


  const handleMaxChange = (event) => {
    setMaxNum(parseInt(event.target.value));
  };


  const handleAnswerChange = (index, event) => {
    const newProblems = [...problems];
    newProblems[index].answer = parseInt(event.target.value);
    setProblems(newProblems);
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Enter') {
      const correctAnswer = problems[index].num1 * problems[index].num2;
      const isCorrect = problems[index].answer === correctAnswer;
        console.log(correctAnswer)

  const newProblems = [...problems];
  console.log(newProblems)
  newProblems[index].isCorrect = isCorrect;
  
  setProblems(newProblems);
  
  if (isCorrect && index < problems.length - 1) {
    const newProblems = [...problems];
    newProblems[index + 1].shouldFocus = true;
    setProblems(newProblems);
  }
}

  };
  


  return (
    <div>
      {/* Inputs for minimum and maximum numbers (future component) */}
      <div>
  <InputRange
    label="Minimum number:"
    id="min-num"
    value={minNum}
    min={1} 
    max={maxNum} 
    handleChange={handleMinChange}
  />
  <InputRange
    label="Maximum number:"
    id="max-num"
    value={maxNum}
    min={minNum} // Make sure minNum cannot be greater than maxNum
    max={100}  // You might want to have an overall maximum
    handleChange={handleMaxChange}
  />
</div>

      {/* Multiplication problems (future component) */}
      <div>
  {problems.map((problem, index) => (
    <Problem
      key={index}
      num1={problem.num1}
      num2={problem.num2}
      answer={problem.answer}
      isCorrect={problem.isCorrect}
      handleAnswerChange={(event) => handleAnswerChange(index, event)}
      handleKeyDown={(event) => handleKeyDown(index, event)}
      shouldFocus={problem.shouldFocus}
    />
  ))}
</div>
<WordDefinition/>
    </div>
  );
}


export default App;