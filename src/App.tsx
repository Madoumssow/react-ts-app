// src/App.tsx
import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';
import './App.css';  // Importer le fichier CSS

const App: React.FC = () => {
  return (
    <div className="App">
      <Greeting name="Alice" />
      <Counter />
    </div>
  );
}

export default App;
