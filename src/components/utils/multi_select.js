import React, { useState } from "react";
import { map } from 'lodash';


function MultiSelect() {
    const [selectedOption, setSelectedOption] = useState("ExpiryType.Weekly");
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    
    const elements = [
        {
        value: "ExpiryType.Weekly",
        label: "Weekly",
        },
        {
        value: "ExpiryType.NextWeekly",
        label: "Next Weekly",
        },
        {
        value: "ExpiryType.Monthly",
        label: "Monthly",
        }
    ];

    return (
        <div className="relative inline-block">
            <select
                title="Expiry"
                value={selectedOption}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`w-max cursor-pointer appearance-none rounded p-2 text-s md:text-xs/4 border ${
                isFocused ? 'border-blue-500' : 'border-primaryBlue-200'
                } text-primaryBlack-800`}
            >
            {map(elements, (element) => (
                <option value={element.value}>
                {element.label}
                </option>
            ))}
            </select>
        </div>
    );
}

export default MultiSelect;