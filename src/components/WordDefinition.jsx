import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../shared/Card';
import TestComponent from './TestComponent';


function WordDefinition() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [example, setExample] = useState('');
  const [error, setError] = useState(null);
  const [showTest, setShowTest] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

      // Extract the relevant data
      const firstMeaning = response.data[0].meanings[0];
      const partOfSpeech = firstMeaning.partOfSpeech;
      const definition = firstMeaning.definitions[0].definition;
      const example = firstMeaning.definitions[0].example; 

      // Update the state
      setDefinition(definition);
      setPartOfSpeech(partOfSpeech); // Add state for this if you want to store  it
      setExample(example); // Add state for this if you want to store it 
      setError(null); 
    } catch (err) {
      // ... (error handling) ...
    }
  };
   

  return (
    <><Card><div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
        <button type="submit">Get Definition</button>
      </form>

      {!showTest && ( // Hide definition and part of speech when test is active
          <div>
            <p><strong>Part of Speech:</strong> {partOfSpeech}</p> 
            <p><strong>Definition:</strong> {definition}</p>
            {example && <p><strong>Example:</strong> {example}</p>}
          </div>
        )}

        <button onClick={() => setShowTest(true)}>Test</button>

        {showTest && (
          <TestComponent
            word={word}
            definition={definition} // Remove these props if not needed in the test
            partOfSpeech={partOfSpeech}
            example={example}
          />
        )}
    </div>
    </Card>
    </>
  );
}

export default WordDefinition;