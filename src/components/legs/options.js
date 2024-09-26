import React, { useContext, useEffect } from 'react';
import LegBox from "../utils/leg_box";
import {Label, BoldLabel} from "../utils/labels";
import NumberInput from "../utils/numeric_input";
import MultiSelect from "../utils/multi_select";
import SwitchToggle from "../utils/switch_toggle";
import LabelChildren, { LabelToggleSelect } from "../utils/combinations";
import { LegContext } from '../../config';
import LegConstants from "../constants/legs";

const Options = () => {
    const { globalData, updateGlobalData } = useContext(LegContext);

    const handleChange = (key, value) => {
        updateGlobalData(key, value);
     };

    return (
        <div>
            <div className="text-left pt-4 pl-5">
                <BoldLabel text="Leg"/>
            </div>
            <LegBox number = "1">
                <div className="flex flex-col gap-5 justify-center items-center px-4">
                    <div className="flex flex-wrap gap-10 justify-center items-center p-2">
                        <LabelChildren label="Lots">
                            <NumberInput initialValue="1"/>
                        </LabelChildren>
                        <LabelChildren label="Position">
                            <MultiSelect options={LegConstants.MULTI_POSITION_TYPE} customKey="options.lots" onChange={handleChange}/>
                        </LabelChildren>
                        <LabelChildren label="Option Type">
                            <MultiSelect options={LegConstants.MULTI_OPTION_TYPE} customKey="options.lots" onChange={handleChange}/>
                        </LabelChildren>
                        <LabelChildren label="Expiry">
                            <MultiSelect options={LegConstants.MULTI_EXPIRY_TYPE} customKey="options.lots" onChange={handleChange}/>
                        </LabelChildren>
                        <LabelChildren label="Select Strike Criteria">
                            <MultiSelect options={LegConstants.MULTI_ENTRY_TYPE} customKey="options.lots" onChange={handleChange}/>
                        </LabelChildren>
                        <LabelChildren label="Strike Type">
                            <MultiSelect options={["ATM", "OTP1"]} customKey="options.lots" onChange={handleChange}/>
                        </LabelChildren>
                    </div>
                    <div className="flex flex-wrap gap-10 justify-center items-center p-2">
                        <LabelToggleSelect label="Target Profit" options={LegConstants.MULTI_TP_TYPE}>
                            <NumberInput initialValue="0"/>
                        </LabelToggleSelect>
                        <LabelToggleSelect label="Stop loss" options={LegConstants.MULTI_SL_TYPE}>
                            <NumberInput initialValue="0"/>
                        </LabelToggleSelect>
                        <LabelToggleSelect label="Trail SL" options={LegConstants.MUTLI_TRAIL_TYPE}>
                            <NumberInput initialValue="0"/>
                            <NumberInput initialValue="0"/>
                        </LabelToggleSelect>
                    </div>
                </div>
            </LegBox>
        </div>
    );
};

export default Options;