import React from 'react';
import {Label, BoldLabel} from "./labels";
import SwitchToggle from "../utils/switch_toggle";
import MultiSelect from "../utils/multi_select";


const LabelChildren = ({ label, children }) => (
    <div className="relative inline-block flex flex-col gap-3 text-left">
        <Label text={label} />
        {children}
    </div>
);

export const LabelToggleSelect = ({ label, options, children }) => (

    <div className="relative inline-block flex flex-col gap-3 text-left">
        <div className="flex inline-block relative gap-3">
            <Label text={label}/>
            <SwitchToggle />
        </div>
        <div className="flex inline-block relative gap-3">
            <MultiSelect options={options} background="bg-customBlue text-white" customKey="options.lots"/>
            {children}
        </div>
    </div>

);

export default LabelChildren;