import React, { useContext, useEffect } from 'react';
import LegBuilderBox from "../utils/leg_builder_box";
import {BoldLabel} from "../utils/labels";
import ButtonToggle from "../utils/button_toggle";
import NumberInput from "../utils/numeric_input";
import MultiSelect from "../utils/multi_select";
import AddLegButton from "../utils/add_leg_button";
import LabelChildren from "../utils/combinations";
import { LegContext } from '../../config';
import { globalAgent } from 'http';


const Options = () => {
    const { globalData, updateGlobalData } = useContext(LegContext);
    const strikeOptions = ["Strike Type", "Closest Premium", "Premium >=", "Premium <=", "Premium Range", "Straddle Width", "% of ATM", "Synthetic Future","ATM Straddle Premium %"];

    const handleChange = (key, value) => {
       updateGlobalData(key, value);
    };

    const addLeg = () => {
        const object ={
            PositionType: globalData.options.position,
            Lots: globalData.options.lots,
            InstrumentKind: globalData.options.optionType,
            ExpiryKind: globalData.options.expiry,
            EntryType: globalData.options.strikeCriteria,
            StrikeParameter: globalData.options.strikeType
        }
        handleChange("options_legs", [...globalData.options_legs, object]);
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
                            <ButtonToggle left="Futures" right="Options" defaultValue="Options" customKey="present_config" onChange={handleChange}/>
                        </LabelChildren>
                        <LabelChildren label="Total Lot">
                            <NumberInput text="" initialValue="1" customKey="options.lots" onChange={handleChange}/>
                        </LabelChildren>
                        <LabelChildren label="Position">
                            <ButtonToggle left="Buy" right="Sell" defaultValue="Buy" customKey="options.position" onChange={handleChange}/>
                        </LabelChildren>
                        <LabelChildren label="Option Type">
                            <ButtonToggle left="Call" right="Put" defaultValue="Call" customKey="options.optionType" onChange={handleChange}/>
                        </LabelChildren>
                        <LabelChildren label="Expiry">
                            <MultiSelect options={["Weekly", "Next Weekly", "Monthly"]} customKey="options.expiry" onChange={handleChange}/>
                        </LabelChildren>
                        <LabelChildren label="Select Strike Criteria">
                            <MultiSelect options={strikeOptions} customKey="options.strikeCriteria" onChange={handleChange}/>
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