import React from "react";
import LegBuilderBox from "../utils/leg_builder_box";
import {Label, BoldLabel} from "../utils/labels";
import ButtonToggle from "../utils/button_toggle";
import NumberInput from "../utils/numeric_input";
import AddLegButton from "../utils/add_leg_button";
import LabelChildren from "../utils/combinations";

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
                        <LabelChildren label="Select Segments">
                            <ButtonToggle left="Futures" right="Options" defaultValue="Futures"/>
                        </LabelChildren>
                        <LabelChildren label="Total Lot">
                            <NumberInput text="" initialValue="1"/>
                        </LabelChildren>
                        <LabelChildren label="Position">
                            <ButtonToggle left="Buy" right="Sell" defaultValue="Buy"/>
                        </LabelChildren>
                    </div>
                    <AddLegButton text="Add Leg"/>
                </div>
            </LegBuilderBox>
        </div>
    );
};

export default Futures;