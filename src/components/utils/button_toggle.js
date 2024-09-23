import React from "react";


const ButtonToggle = (payload) => {
    console.log(payload);
    return (
        <div className="inline-block">
            <button
                id="add-leg-left"
                className="border border-customBlue bg-customBlue text-white font-semibold rounded-l px-6 py-3 text-xs md:px-4 md:py-3"
            >
                {payload.left}
            </button>
            <button
                id="add-leg-right"
                className="border border-customBlue bg-white text-customBlue font-semibold rounded-r px-6 py-3 text-xs md:px-4 md:py-3"
            >
                {payload.right}
            </button>
        </div>
    );
};

export default ButtonToggle;