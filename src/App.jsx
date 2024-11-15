import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage'; // Updated path for WelcomeMessage
import Header from './components/Header'; // Updated path for Header
import MainContent from './components/MainContent'; // Updated path for MainContent
import Footer from './components/Footer'; // Updated path for Footer
import UserProfile from './components/UserProfile'; // Path for UserProfile remains the same

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