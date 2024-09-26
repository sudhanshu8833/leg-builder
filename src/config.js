import React, { createContext, useState } from 'react';
import LegConstants from './components/constants/legs';

export const LegContext = createContext();

// Create a provider component
export const LegProvider = ({ children }) => {
    const [globalData, setGlobalData] = useState({
                        present_config: "options",
                        futures: {
                            lots : 1,
                            position : LegConstants.BUY.value
                        },
                        options: {
                            lots : 1,
                            position : LegConstants.BUY.value,
                            optionType : LegConstants.CALL.value,
                            expiry: LegConstants.WEEKLY.value,
                            strikeCriteria: LegConstants.STRIKE_TYPE.value,
                            strikeType: "ATM"
                        },
                        legs: []
                    });

        const updateGlobalData = (path, value, index = null) => {
            setGlobalData(prevData => {
                const keys = path.split('.'); 
                const lastKey = keys.pop();
                const nestedObject = keys.reduce((acc, key) => acc[key], prevData);

                if (keys.length === 0) {
                    return {
                        ...prevData,
                        [lastKey]: value
                    };
                }

                return {
                    ...prevData,
                    [keys[0]]: {
                        ...nestedObject,
                        [lastKey]: value 
                    }
                };
            }
        );
    };

    return (
        <LegContext.Provider value={{ globalData, updateGlobalData }}>
            {children}
        </LegContext.Provider>
    );
};
