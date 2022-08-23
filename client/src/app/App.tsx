import React from 'react';
import Header from '../shared/components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header room="aabc"/>
      <main>
        <nav></nav>
        <div></div>
      </main>
      <footer>
        copyright
      </footer>
    </div>
  );
}

export default App;
