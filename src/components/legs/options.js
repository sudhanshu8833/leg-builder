import React from "react";
import LegBox from "../utils/leg_box";
import {Label, BoldLabel} from "../utils/labels";
import NumberInput from "../utils/numeric_input";
import MultiSelect from "../utils/multi_select";
import SwitchToggle from "../utils/switch_toggle";
import LabelChildren, { LabelToggleSelect } from "../utils/combinations";

const Options = () => {

    const strikeOptions = ["Strike Type", "Closest Premium", "Premium >=", "Premium <=", "Premium Range", "Straddle Width", "% of ATM", "Synthetic Future","ATM Straddle Premium %"];

    return (
        <div>
            <div className="text-left pt-4 pl-5">
                <BoldLabel text="Leg"/>
            </div>
            <LegBox number = "1">
                <div className="flex flex-col gap-5 justify-center items-center px-4">
                    <div className="flex flex-wrap gap-10 justify-center items-center p-2">
                        <LabelChildren label="Lots">
                            <NumberInput text="" initialValue="1"/>
                        </LabelChildren>
                        <LabelChildren label="Position">
                            <MultiSelect options={["Buy", "Sell"]}/>
                        </LabelChildren>
                        <LabelChildren label="Option Type">
                            <MultiSelect options={["Call", "Put"]}/>
                        </LabelChildren>
                        <LabelChildren label="Expiry">
                            <MultiSelect options={["Weekly", "Next Weekly", "Monthly"]}/>
                        </LabelChildren>
                        <LabelChildren label="Select Strike Criteria">
                            <MultiSelect options={strikeOptions}/>
                        </LabelChildren>
                        <LabelChildren label="Strike Type">
                            <MultiSelect options={["ATM", "OTP1"]}/>
                        </LabelChildren>
                    </div>
                    <div className="flex flex-wrap gap-10 justify-center items-center p-2">
                        <LabelToggleSelect label="Target Profit" options={["ATM", "OTP1"]}>
                            <NumberInput text="" initialValue="1"/>
                        </LabelToggleSelect>
                        <LabelToggleSelect label="Target Profit" options={["ATM", "OTP1"]}>
                            <NumberInput text="" initialValue="1"/>
                        </LabelToggleSelect>
                        <LabelToggleSelect label="Target Profit" options={["ATM", "OTP1"]}>
                            <NumberInput text="" initialValue="1"/>
                        </LabelToggleSelect>
                    </div>
                </div>
            </LegBox>
        </div>
    );
};

export default Options;