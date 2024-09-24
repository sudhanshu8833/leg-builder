import React from "react";


export const BoldLabel = (payload) => {
    return (
        <label className="font-bold text-sm text-black">{payload.text}</label>
    );
};

export const Label = (payload) => {
    return (
        <label className="text-sm text-black">{payload.text}</label>
    );
};
