import React from 'react';

const SwitchToggle = () => {

  return (
    <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" className="sr-only peer"></input>
    <div className="w-9 h-5 bg-gray-400 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-400 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-toggleBlue hover:peer-checked:bg-toggleBlue"></div>
    </label>
  );
};

export default SwitchToggle;
