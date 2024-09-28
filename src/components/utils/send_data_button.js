import React, { useContext, useEffect } from 'react';
import { LegContext } from '../../config';
import LegConstants from '../constants/leg_constants';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../firebase";

const updateStrikeParameter = (leg) => {
    if (leg.LegType === 'options') {
        const strikeCriteria = leg.EntryType;
        switch (strikeCriteria) {
            case LegConstants.STRIKE_TYPE.value:
            case LegConstants.SYNTHETIC_FUTURE.value:
                return leg.StrikeParameter.value[0];
            case LegConstants.CLOSEST_PREMIUM.value:
            case LegConstants.PREMIUM_GREATER_THAN.value:
            case LegConstants.PREMIUM_LESS_THAN.value:
            case LegConstants.ATM_STRADDLE_PREMIUM_PER.value:
                return leg.StrikeParameter.value[0];
            case LegConstants.PREMIUM_RANGE.value:
                return {
                    lower: leg.StrikeParameter.value[0],
                    upper: leg.StrikeParameter.value[1]
                };
            case LegConstants.STRADDLE_WIDTH.value:
            case LegConstants.PERCENT_OF_ATM.value:
                return {
                    Adjustment: leg.StrikeParameter.value[0] == '+'? 'Plus':'Minus',
                    Multiplier: leg.StrikeParameter.value[1]
                };
            default:
                return "";
        }
    }
};



const SendDataButton = ({text}) => {
    const { globalData, updateGlobalData } = useContext(LegContext);

    const handleClick = () => {
        const dataToSend = [];
        globalData.legs.forEach((leg, index) => {
            let legCopy = JSON.parse(JSON.stringify(leg));
            if (leg.LegType === 'options') {
                legCopy.StrikeParameter = updateStrikeParameter(globalData.legs[index]);

            }
            delete legCopy.LegType;
            dataToSend.push(legCopy);
        });
        addData(dataToSend);
    }

    let showButton = globalData.legs.length > 0? '':'hidden';
    return (
        <button
        id="add-leg"
        className={`border bg-green-700 text-white hover:bg-addLegBlueButton-800 font-semibold rounded px-6 py-3 text-xs md:px-4 md:py-3 m-3 ${showButton}`}
        onClick={handleClick}
        >      {text}
        </button>
    );
};

const addData = async (dataToSend) => {
    try {
        console.log(dataToSend);
        const docRef = await addDoc(collection(db, "leg_instances"), {legs: dataToSend});
        console.log("Document written with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

export default SendDataButton;
