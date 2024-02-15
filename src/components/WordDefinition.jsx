import axios from 'axios';
import { useEffect, useState } from 'react';


function WordDefinition() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const firstDefinition = response.data[0].meanings[0].definitions[0].definition;
      setDefinition(firstDefinition);
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error('Error fetching definition:', err);
      setError('Word not found or an error occurred.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
        <button type="submit">Get Definition</button>
      </form>

      {error && <p className="error-message">{error}</p>}
      {definition && <p>{definition}</p>} 
    </div>
  );
}

export default WordDefinition;