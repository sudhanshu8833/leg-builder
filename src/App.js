import React, { useState } from 'react';
import './App.css';
import Options from './components/leg_builder/options';
import Legs from './components/legs/legs';
import Futures from './components/leg_builder/futures';
import SendDataButton from './components/utils/send_data_button';

function App() {
  const [showFutures, setShowFutures] = useState(false);

  const handleToggle = () => {
    setShowFutures(!showFutures);
  };

  return (
    <div className="App pb-5">
      {showFutures ? <Futures onChange={handleToggle} /> : <Options onChange={handleToggle} />}
      <Legs />
      <SendDataButton text="Send Data"/>
    </div>
  );
}

export default App;
