import reactImg from '../../assets//react-core-concepts.png'
import './Header.css';

import { Link } from 'react-router-dom';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
       
       <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/problems">
          <button>Problems</button>
        </Link>
        <Link to="/word-definition">
          <button>Word Definition</button>
        </Link>
        <Link to="/quiz"> 
          <button>Quiz</button>
        </Link>
        <Link to="/planets"> 
          <button>Solar System</button>
        </Link>
      </nav>
    
      <img src={reactImg} alt="Stylized atom" />
      <h1>Learning Essentials</h1>
      <p>
        {description} concepts you will need for almost any life you are
        going to build!
      </p>
    </header>
  );
}