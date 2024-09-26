import React from 'react';
import './App.css';
// import Options from './components/legs/options';
import SwitchToggle from './components/utils/switch_toggle';
import Options from './components/leg_builder/options';
import Futures from './components/leg_builder/futures';

function App() {
  return (
    <div className="App">
      <Options />
    </div>
  );
}

export default App;
