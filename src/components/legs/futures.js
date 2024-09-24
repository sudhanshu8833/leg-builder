import React from "react";
import LegBuilderBox from "../utils/leg_builder_box";
import {Label, BoldLabel} from "../utils/labels";
import ButtonToggle from "../utils/button_toggle";
import NumberInput from "../utils/numeric_input";
import MultiSelect from "../utils/multi_select";
import AddLegButton from "../utils/add_leg_button";

const Futures = (payload) => {

    const strikeOptions = ["Strike Type", "Closest Premium", "Premium >=", "Premium <=", "Premium Range", "Straddle Width", "% of ATM", "Synthetic Future","ATM Straddle Premium %"];

    return (
        <div>
            <div className="text-left pt-4 pl-5">
                <BoldLabel text="Leg Builder"/>
            </div>
            <LegBuilderBox>
                <div className="flex flex-col gap-5 justify-center items-center p-4">
                    <div className="flex flex-wrap gap-10 justify-center items-center p-2">
                        <div className="relative inline-block flex flex-col gap-3">
                            <Label text="Select Segments"/>
                            <ButtonToggle left="Futures" right="Options" defaultValue="Futures"/>
                        </div>
                        <div className="relative inline-block flex flex-col gap-3">
                            <Label text="Total Lot"/>
                            <NumberInput text = "" initialValue = "1"/>
                        </div>
                        <div className="relative inline-block flex flex-col gap-3">
                            <Label text="Position"/>
                            <ButtonToggle left="Buy" right="Sell" defaultValue="Buy"/>
                        </div>
                    </div>
                    <AddLegButton text="Add Leg"/>
                </div>
            </LegBuilderBox>
        </div>
    );
};

export default Futures;