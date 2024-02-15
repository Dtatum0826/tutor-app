
import { useState } from "react";

import WordDefinition from "./components/WordDefinition";
import Problems from "./components/Problems";

function App() {
  const [minNum, setMinNum] = useState(1);
  const [maxNum, setMaxNum] = useState(10);
  
  
  const handleNumChange = (name, value) => {
    if (name === 'minNum') {
      setMinNum(parseInt(value));
    } else {
      setMaxNum(parseInt(value));
    }
  };

 


  return (
    <div>
      <Problems minNum={minNum} maxNum={maxNum} onNumChange={handleNumChange} />
      <WordDefinition/>
    </div>
  );
}
export default App;