import React, { createContext, useState } from 'react';

// Create the context
export const LegContext = createContext();




// Create a provider component
export const LegProvider = ({ children }) => {
    const [globalData, setGlobalData] = useState({
                        present_config: "options",
                        futures: {
                            lots : 1,
                            position : "Buy"
                        },
                        options: {
                            lots : 1,
                            position : "Buy",
                            optionType : "Call",
                            expiry: "Weekly",
                            strikeCriteria: "Strike Type",
                            strikeType: "ATM"
                        },
                        futures_legs: [],
                        options_legs: []
                    });

        const updateGlobalData = (path, value) => {
            setGlobalData(prevData => {
                const keys = path.split('.'); // Assuming path is 'futures_config.strategy.risk'
                const lastKey = keys.pop(); // Get the last key
                const nestedObject = keys.reduce((acc, key) => acc[key], prevData); // Navigate to the nested object
        
                // Return a new object with the updated value
                return {
                    ...prevData,
                    [keys[0]]: {
                        ...nestedObject,
                        [lastKey]: value // Update the specific nested property
                    }
                };
            });
        };

    return (
        <LegContext.Provider value={{ globalData, updateGlobalData }}>
            {children}
        </LegContext.Provider>
    );
};
