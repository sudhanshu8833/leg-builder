import React from "react";

const AddLegButton = ({text, onClick, background = null}) => {

  const handleClick = () => {
    onClick();
  }
  return (
    <button
      id="add-leg"
      className={`border bg-addLegBlueButton-900 text-white hover:bg-addLegBlueButton-800 font-semibold rounded px-6 py-3 text-xs md:px-4 md:py-3 ${background}`}
      onClick={handleClick}
    >      {text}
    </button>
  );
};

export default AddLegButton;
