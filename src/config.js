import React, { createContext, useState } from 'react';
import LegConstants from './components/constants/leg_constants';

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

    const updateGlobalData = (path, value) => {
        setGlobalData(prevData => {
            const keys = path.split('.');
            const lastKey = keys.pop();
            let nestedObject = { ...prevData };
            let currentLevel = nestedObject;

            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                if (!isNaN(key)) {
                    const arrayIndex = Number(key);
                    currentLevel = prevData.legs[arrayIndex];
                } else {
                    if (!currentLevel[key]) {
                        currentLevel[key] = { ...prevData[key] }; 
                    }
                    currentLevel = currentLevel[key];
                }
            }
            currentLevel[lastKey] = value;
            return nestedObject;
        });
    };

    return (
        <LegContext.Provider value={{ globalData, updateGlobalData }}>
            {children}
        </LegContext.Provider>
    );
};
