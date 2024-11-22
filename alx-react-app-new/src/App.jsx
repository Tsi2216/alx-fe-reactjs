import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header'; // Import the Header component
import MainContent from './components/MainContent'; // Import the MainContent component
import Footer from './components/Footer'; // Import the Footer component
import WelcomeMessage from './components/WelcomeMessage'; // Import the WelcomeMessage component
import UserProfile from './components/UserProfile'; 
import Counter from './components/Counter';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <h1>User Profiles</h1>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Bob" age="30" bio="Avid traveler and foodie" />
      <div>
        <h1>Simple Counter App</h1>
        <Counter />
      </div>
      <Footer />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;