import React, { useContext } from 'react';
import LegBuilderBox from "../utils/leg_builder_box";
import {BoldLabel} from "../utils/labels";
import ButtonToggle from "../utils/button_toggle";
import NumberInput from "../utils/numeric_input";
import MultiSelect from "../utils/multi_select";
import AddLegButton from "../utils/add_leg_button";
import LabelChildren from "../utils/combinations";
import { LegContext } from '../../config';
import LegConstants from '../constants/legs';

const Options = () => {
    const { globalData, updateGlobalData } = useContext(LegContext);

    const handleChange = (key, value) => {
       updateGlobalData(key, value);
    };

    const addLeg = () => {
        const legObject = {
            [LegConstants.POSITION_TYPE]: globalData.options.position,
            [LegConstants.LOTS]: globalData.options.lots,
            [LegConstants.INSTRUMENT_KIND]: globalData.options.optionType,
            [LegConstants.EXPIRY_KIND]: globalData.options.expiry,
            [LegConstants.ENTRY_TYPE]: globalData.options.strikeCriteria,
            [LegConstants.STRIKE_PARAMETER]: globalData.options.strikeType
        };
        console.log(legObject);
        
        handleChange("legs", [...globalData.legs, legObject]);
    }

    return (
        <div>
            <div className="text-left pt-4 pl-5">
                <BoldLabel text="Leg Builder"/>
            </div>
            <LegBuilderBox>
                <div className="flex flex-col gap-5 justify-center items-center p-4">
                    <div className="flex flex-wrap gap-10 justify-center items-center p-2">
                        <LabelChildren label="Select Segments">
                            <ButtonToggle left={LegConstants.FUTURES} right={LegConstants.OPTIONS} defaultValue={LegConstants.OPTIONS} customKey="present_config" onChange={handleChange}/>
                        </LabelChildren>
                        <LabelChildren label="Total Lot">
                            <NumberInput text="" initialValue="1" customKey="options.lots" onChange={handleChange}/>
                        </LabelChildren>
                        <LabelChildren label="Position">
                            <ButtonToggle left={LegConstants.BUY} right={LegConstants.SELL} defaultValue={LegConstants.BUY} customKey="options.position" onChange={handleChange}/>
                        </LabelChildren>
                        <LabelChildren label="Option Type">
                            <ButtonToggle left={LegConstants.CALL} right={LegConstants.PUT} defaultValue={LegConstants.CALL} customKey="options.optionType" onChange={handleChange}/>
                        </LabelChildren>
                        <LabelChildren label="Expiry">
                            <MultiSelect options={LegConstants.MULTI_EXPIRY_TYPE} customKey="options.expiry" onChange={handleChange}/>
                        </LabelChildren>
                        <LabelChildren label="Select Strike Criteria">
                            <MultiSelect options={LegConstants.MULTI_ENTRY_TYPE} customKey="options.strikeCriteria" onChange={handleChange}/>
                        </LabelChildren>
                        <LabelChildren label="Strike Type">
                            <MultiSelect options={["ATM", "OTP1"]} customKey="options.strikeType" onChange={handleChange}/>
                        </LabelChildren>
                    </div>
                    <AddLegButton text="Add Leg" onClick={addLeg}/>
                </div>
            </LegBuilderBox>
        </div>
    );
};

export default Options;