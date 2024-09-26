import React, { useState } from 'react';

const NumberInput = ({text, initialValue, onChange}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  const rightPadding = text === "%" ? "pr-6" : "pr-0"; 
  return (
    <div className="relative inline-block">
      <input
        title=""
        id="number-input"
        className={`relative w-20 h-10 rounded border border-gray-300 px-1 py-2 text-xs md:text-xs ${rightPadding} appearance-none`}
        type="number"
        min="1"
        step="1"
        value={value}
        onChange={handleChange}
      />
      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">{text}</span>
    </div>
  );
};

export default NumberInput;