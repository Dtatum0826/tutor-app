import axios from 'axios';
import { useEffect, useState } from 'react';

function WordDefinition() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  const fetchDefinition = async () => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      console.log(response.data)
      setDefinition(response.data[0].meanings[0].definitions[0].definition);
    } catch (error) {
      console.error('Error fetching definition:', error);
      setDefinition('Definition not found');
    }
  };

  useEffect(() => {
    if (word) {
      fetchDefinition();
    }
  }, [word]);

  return (
    <div>
      <input
        type="text"
        value={word}
        onChange={e => setWord(e.target.value)}
        placeholder="Enter a word"
      />
      {definition && <p>{definition}</p>}
    </div>
  );
}

export default WordDefinition;