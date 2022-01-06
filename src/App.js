import './App.css';
import LineupView from "./components/LineupView";
import LineupSettings from "./components/LineupSettings";
import React from 'react'
function App() {

  return (
    <div className="App">
      <LineupView />
      <LineupSettings/>
    </div>

  );
}

export default App;
