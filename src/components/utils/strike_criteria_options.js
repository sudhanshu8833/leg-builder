import React,{useContext} from "react";
import LegConstants from "../constants/leg_constants";
import LabelChildren from "../utils/combinations";
import NumberInput from "./numeric_input";
import MultiSelect from "./multi_select";
import { Label } from "./labels";
import { LegContext } from '../../config';


export const getStrikeParameterArray = (strikeCriteria) => {
    switch (strikeCriteria) {
        case LegConstants.STRIKE_TYPE.value:
        case LegConstants.SYNTHETIC_FUTURE.value:
            return ["StrikeType.ATM"];
        case LegConstants.CLOSEST_PREMIUM.value:
        case LegConstants.PREMIUM_GREATER_THAN.value:
        case LegConstants.PREMIUM_LESS_THAN.value:
            return ["50"];
        case LegConstants.PREMIUM_RANGE.value:
            return ["50", "200"];
        case LegConstants.ATM_STRADDLE_PREMIUM_PER.value:
            return ["0"];
        case LegConstants.STRADDLE_WIDTH.value:
            return ["+", "0.5"];
        case LegConstants.PERCENT_OF_ATM.value:
            return ["+", "0.5"];
        default:
            return [];
    }
};

const StrikeElementReturn = ({strikeCriteria, onChange, type, defaultValue, legIndex}) => {
    const { globalData, updateGlobalData } = useContext(LegContext);

    let StrikeParameter = null;

    const strikeParameterChange = (index, value, extra = null) => {
        if (!extra){
            const key = `${type}.StrikeParameter.value.${index}`;
            onChange(key,value);
        } else {
            const key = `${type}.StrikeParameter.value.${index}`;
            onChange(key,value);
            const extraKey = `${type}.StrikeParameter.value.${extra[0]}`;
            onChange(extraKey,extra[1]);
        }
    };

    if((strikeCriteria == LegConstants.STRIKE_TYPE.value) || (strikeCriteria == LegConstants.SYNTHETIC_FUTURE.value)){
        StrikeParameter = (
            <LabelChildren label="Strike Type">
                <MultiSelect initialValue={defaultValue ? globalData.legs[legIndex][LegConstants.STRIKE_PARAMETER].value[0] :"StrikeType.ATM"} options={LegConstants.STRIKE_TYPE_VALUES} onChange={(value)=>strikeParameterChange('0',value)}/>
            </LabelChildren>
        );
    } else if((strikeCriteria == LegConstants.CLOSEST_PREMIUM.value) || (strikeCriteria == LegConstants.PREMIUM_GREATER_THAN.value) || (strikeCriteria == LegConstants.PREMIUM_LESS_THAN.value)){
        StrikeParameter = (
            <LabelChildren label="Premium">
                <NumberInput initialValue={defaultValue ? globalData.legs[legIndex][LegConstants.STRIKE_PARAMETER].value[0] :"50"}  onChange={(value)=>strikeParameterChange('0',value)}/>
            </LabelChildren>
        );
    } else if (strikeCriteria == LegConstants.PREMIUM_RANGE.value){
        StrikeParameter = (
            <LabelChildren label="Premium Range">
                <div className="flex gap-2">
                    <NumberInput initialValue={defaultValue ? globalData.legs[legIndex][LegConstants.STRIKE_PARAMETER].value[0] :"50"} onChange={(value)=>strikeParameterChange('0',value,['1','200'])}/>
                    <NumberInput initialValue={defaultValue ? globalData.legs[legIndex][LegConstants.STRIKE_PARAMETER].value[1] :"200"} onChange={(value)=>strikeParameterChange('1',value,['0','50'])}/>
                </div>
            </LabelChildren>
        );
    } else if (strikeCriteria == LegConstants.ATM_STRADDLE_PREMIUM_PER.value){
        StrikeParameter = (
            <LabelChildren label="&nbsp;">
                <NumberInput initialValue={defaultValue ? globalData.legs[legIndex][LegConstants.STRIKE_PARAMETER].value[0] :"50"} text ="%" onChange={(value)=>strikeParameterChange('0',value)}/>
            </LabelChildren>
        );
    } else if (strikeCriteria == LegConstants.STRADDLE_WIDTH.value){
        StrikeParameter = (
            <LabelChildren label="&nbsp;">
                <div className="flex gap-2 items-center">
                    <Label text="[ ATM Strike"/>
                    <MultiSelect initialValue={defaultValue ? globalData.legs[legIndex][LegConstants.STRIKE_PARAMETER].value[0] :"+"} options={LegConstants.OPERATOR_VALUES} onChange={(value)=>strikeParameterChange('0',value,['1','0.5'])}/>
                    <Label text="("/>
                    <NumberInput initialValue={defaultValue ? globalData.legs[legIndex][LegConstants.STRIKE_PARAMETER].value[1] :"0.5"} onChange={(value)=>strikeParameterChange('1',value,['0','+'])}/>
                    <Label text="x ATM Straddle Price )]"/>
                </div>
            </LabelChildren>
        );
    } else if (strikeCriteria == LegConstants.PERCENT_OF_ATM.value){
        StrikeParameter = (
            <LabelChildren label="&nbsp;">
                <div className="flex gap-2 items-center">
                    <Label text="ATM"/>
                    <MultiSelect initialValue={defaultValue ? globalData.legs[legIndex][LegConstants.STRIKE_PARAMETER].value[0] :"+"} options={LegConstants.OPERATOR_VALUES} onChange={(value)=>strikeParameterChange('0',value,['1','0.5'])}/>
                    <NumberInput initialValue={defaultValue ? globalData.legs[legIndex][LegConstants.STRIKE_PARAMETER].value[1] :"0.5"} text = "%" onChange={(value)=>strikeParameterChange('1',value,['0','+'])}/>
                    <Label text="of ATM"/>
                </div>
            </LabelChildren>
        );
    }

    return StrikeParameter;
};

export default StrikeElementReturn;