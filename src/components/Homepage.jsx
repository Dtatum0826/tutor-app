// import { Link } from 'react-router-dom';
// import './Homepage.css';

// function HomePage() {
//   return (
//     <div>
//       <h1>Welcome!</h1>
//       <Link to="/problems">
//         <button>Go to Problems</button>
//       </Link>
//       <Link to="/word-definition">
//         <button>Go to Word Definition</button>
//       </Link>
//     </div>
//   );
// }
// export default HomePage;

import { Link } from 'react-router-dom';
import Descriptions from './Descriptions';


function HomePage() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="/problems">
        <button>Go to Problems</button>
      </Link>
      <Link to="/quiz">
        <button>Take the Quiz</button>
      </Link> 
      <Link to="/word-definition">
        <button>Go to Word Definition</button>
      </Link>
      <Link to="/planets">
        <button>Go to Solar System</button>
      </Link>
      <Descriptions  />
    </div>
  );
}

export default HomePage;
