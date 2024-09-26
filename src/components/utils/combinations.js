import React, { useContext, useEffect } from 'react';
import {Label, BoldLabel} from "./labels";
import SwitchToggle from "../utils/switch_toggle";
import MultiSelect from "../utils/multi_select";

function LabelChildren({ label, children }) {

    return (
        <div className="relative inline-block flex flex-col gap-3 text-left">
            <Label text={label} />
            {children}
        </div>
    );
}


export const LabelToggleSelect = ({ initialValue, label, options, children, onChange }) => {
    const handleSwitchChange = (value) => {
        onChange('switch', value);
    };

    const handleMultiSelectChange = (value) => {
        onChange('multiSelect', value);
    };

    return (
        <div className="relative inline-block flex flex-col gap-3 text-left">
            <div className="flex inline-block relative gap-3">
                <Label text={label} />
                <SwitchToggle onChange={handleSwitchChange}/>
            </div>
            <div className="flex inline-block relative gap-3">
                <MultiSelect initialValue={initialValue} options={options} background="bg-customBlue text-white" onChange={handleMultiSelectChange} />
                {children}
            </div>
        </div>
    );
};

export default LabelChildren;