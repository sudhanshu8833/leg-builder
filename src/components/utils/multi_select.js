import React, { useState } from 'react';

const MultiSelect = ({options, background ,customKey , onChange}) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
        if(onChange) {
            onChange(customKey, e.target.value);
        }
    };
  
    return (
      <div className="relative w-max">
        <select
          title="Position"
          className={`w-max h-max cursor-pointer appearance-none rounded py-2 text-xs md:text-xs/4 border border-gray-300 text-black-800 text-left pr-10 pl-3 py-3 ${background}`}
          value={selectedOption}
          onChange={handleChange}
        >
            {options.map((option) => (
                <option className="w-max">
                    {option}
                </option>
            ))}
        </select>
  
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`pointer-events-none absolute right-0 top-1/2 transform -translate-y-1/2 mr-3 h-4 w-4 md:top-1/2 md:-translate-y-1/2 ${background}`}
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    );
};

export default MultiSelect;
