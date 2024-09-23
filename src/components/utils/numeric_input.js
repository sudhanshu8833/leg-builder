import React, { useState } from 'react';

const NumberInput = (payload) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const rightPadding = payload.text == "%" ? "pr-6" : "pr-0"; 
  return (
    <div className="relative inline-block">
      <input
        title=""
        id="number-input"
        className={`relative w-20 rounded border border-gray-300 px-1 py-2 text-xs md:text-xs ${rightPadding}`}
        type="number"
        min="1"
        step="1"
        value={value}
        onChange={handleChange}
      />
      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">{payload.text}</span>
    </div>
  );
};

export default NumberInput;