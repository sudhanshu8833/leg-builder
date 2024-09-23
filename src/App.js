import React from 'react';
import './App.css';
import AddLegButton from './components/utils/add_leg_button';
import ButtonToggle from './components/utils/button_toggle';
import NumericInput from './components/utils/numeric_input';
import ToggleSwitch from './components/utils/switch_toggle';
import GreyBox from './components/utils/grey_box';
import TimeInput from './components/utils/time_input';

function App() {
  return (
    <div className="App">
      {/* <div className="bg-blue-900 text-white p-4">
        This is a Tailwind CSS styled component.
      </div> */}
      <AddLegButton text = "hello"/>
      <ButtonToggle left = "left" right = "right"/>
      <NumericInput />
      <ToggleSwitch />
      <GreyBox number = "3">
        </GreyBox>
      <TimeInput />
    </div>
  );
}

export default App;
