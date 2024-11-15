import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './WelcomeMessage'; // Import the WelcomeMessage component
import Header from './Header'; // Import the Header component
import MainContent from './MainContent'; // Import the MainContent component
import Footer from './Footer'; // Import the Footer component
import UserProfile from './components/UserProfile'; // Import the UserProfile component
import Counter from './components/Counter'; // Import the Counter component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header /> {/* Include the Header component */}
      <MainContent /> {/* Include the MainContent component */}

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Vite + React</h1>
      <WelcomeMessage /> {/* Include the WelcomeMessage component here */}
      
      {/* Include UserProfile components with props */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Bob" age="30" bio="Avid traveler and foodie" />
      
      {/* Include the Counter component */}
      <Counter /> {/* This is where the Counter will be displayed */}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer /> {/* Include the Footer component */}
    </>
  );
}

export default App;