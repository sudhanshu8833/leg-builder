import React from "react";
import LegConstants from "../constants/leg_constants";
import LabelChildren from "../utils/combinations";
import NumberInput from "./numeric_input";
import MultiSelect from "./multi_select";
import { Label } from "./labels";


const StrikeElementReturn = ({strikeCriteria}) => {
    let StrikeParameter = null;

    if((strikeCriteria == LegConstants.STRIKE_TYPE.value) || (strikeCriteria == LegConstants.SYNTHETIC_FUTURE.value)){
        StrikeParameter = (
            <LabelChildren label="Strike Type">
                <MultiSelect initialValue="ATM" options={LegConstants.STRIKE_TYPE_VALUES}/>
            </LabelChildren>
        );
    } else if((strikeCriteria == LegConstants.CLOSEST_PREMIUM.value) || (strikeCriteria == LegConstants.PREMIUM_GREATER_THAN.value) || (strikeCriteria == LegConstants.PREMIUM_LESS_THAN.value)){
        StrikeParameter = (
            <LabelChildren label="Premium">
                <NumberInput initialValue="50"/>
            </LabelChildren>
        );
    } else if (strikeCriteria == LegConstants.PREMIUM_RANGE.value){
        StrikeParameter = (
            <LabelChildren label="Premium Range">
                <div className="flex gap-2">
                    <NumberInput initialValue="50"/>
                    <NumberInput initialValue="200"/>
                </div>
            </LabelChildren>
        );
    } else if (strikeCriteria == LegConstants.ATM_STRADDLE_PREMIUM_PER.value){
        StrikeParameter = (
            <LabelChildren label="&nbsp;">
                <NumberInput initialValue="50" text ="%"/>
            </LabelChildren>
        );
    } else if (strikeCriteria == LegConstants.STRADDLE_WIDTH.value){
        StrikeParameter = (
            <LabelChildren label="&nbsp;">
                <div className="flex gap-2 items-center">
                    <Label text="[ ATM Strike"/>
                    <MultiSelect initialValue="+" options={LegConstants.OPERATOR_VALUES}/>
                    <Label text="("/>
                    <NumberInput initialValue="0.5"/>
                    <Label text="x ATM Straddle Price )]"/>
                </div>
            </LabelChildren>
        );
    } else if (strikeCriteria == LegConstants.PERCENT_OF_ATM.value){
        StrikeParameter = (
            <LabelChildren label="&nbsp;">
                <div className="flex gap-2 items-center">
                    <Label text="ATM"/>
                    <MultiSelect initialValue="+" options={LegConstants.OPERATOR_VALUES}/>
                    <NumberInput initialValue="0.5" text = "%"/>
                    <Label text="of ATM"/>
                </div>
            </LabelChildren>
        );
    }

    return StrikeParameter;
};

export default StrikeElementReturn;