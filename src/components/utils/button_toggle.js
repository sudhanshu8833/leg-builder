import React from "react";
import { useState } from "react";

const ButtonToggle = ({left, right, customKey, onChange, defaultValue}) => {
    const [toggle, setToggle] = useState(defaultValue);
    
    const blueSide = "bg-customBlue text-white";
    const whiteSide = "bg-white text-customBlue";

    const handleToggle = (side) => {
        if (toggle === left && side === right) {
            onChange(customKey, right);
            setToggle(right);
        } else if (toggle === right && side === left) {
            onChange(customKey, left);
            setToggle(left);
        }
    }
    return (
        <div className="inline-block">
            <button
                id="add-leg-left"
                className={`${toggle === left ? blueSide : whiteSide} rounded-l border-customBlue border font-semibold px-6 py-3 text-xs md:px-4 md:py-3`}
                onClick={() => handleToggle(left)}
            >
                {left}
            </button>
            <button
                id="add-leg-right"
                className={`${toggle === right ? blueSide : whiteSide} rounded-r border-customBlue border font-semibold px-6 py-3 text-xs md:px-4 md:py-3`}
                onClick={() => handleToggle(right)}
            >
                {right}
            </button>
        </div>
    );
};

export default ButtonToggle;