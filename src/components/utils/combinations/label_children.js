import React from 'react';
import {Label, BoldLabel} from "../utils/labels";

const FormSection = ({ label, children }) => (
    <div className="relative inline-block flex flex-col gap-3 text-left">
        <Label text={label} />
        {children}
    </div>
);

export const 