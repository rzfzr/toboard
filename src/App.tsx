import React from 'react';
import './App.css';
import Progress from './components/Progress'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Progress value={10} />
      <Progress value={30} />
      <Progress value={70} />
      <Progress value={100} />
      <h2>hey</h2>
    </div>
  );
}

export default App;
