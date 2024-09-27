import React, { useContext, useEffect } from 'react';
import LegBuilderBox from "../utils/leg_builder_box";
import {BoldLabel} from "../utils/labels";
import ButtonToggle from "../utils/button_toggle";
import NumberInput from "../utils/numeric_input";
import AddLegButton from "../utils/add_leg_button";
import LabelChildren from "../utils/combinations";
import { LegContext } from '../../config';
import LegConstants from '../constants/leg_constants';

const Futures = ({onChange}) => {
    const { globalData, updateGlobalData } = useContext(LegContext);

    const handleChange = (key, value) => {
       updateGlobalData(key, value);
    };

    const addLeg = () => {
        const legObject = {
            [LegConstants.LEG_TYPE]: 'futures',
            [LegConstants.POSITION_TYPE]: globalData.futures.position,
            [LegConstants.LOTS]: globalData.futures.lots,
            ...JSON.parse(JSON.stringify(LegConstants.DEFAULT_LEG_VALUES))
        };

        handleChange("legs", [...globalData.legs, legObject]);
    }

    useEffect(() => {
        console.log("Global data updated:", globalData);
    }, [globalData]);

    return (
        <div>
            <div className="text-left pt-4 pl-5">
                <BoldLabel text="Leg Builder"/>
            </div>
            <LegBuilderBox>
                <div className="flex flex-col gap-5 justify-center items-center p-4">
                    <div className="flex flex-wrap gap-10 justify-center items-center p-2">
                        <LabelChildren label="Select Segments">
                            <ButtonToggle left={LegConstants.FUTURES} right={LegConstants.OPTIONS} defaultValue={LegConstants.FUTURES} onChange={onChange}/>
                        </LabelChildren>
                        <LabelChildren label="Total Lot">
                            <NumberInput text="" initialValue="1" onChange={(value)=> handleChange('futures.lots',value)}/>
                        </LabelChildren>
                        <LabelChildren label="Position">
                            <ButtonToggle left={LegConstants.BUY} right={LegConstants.SELL} defaultValue={LegConstants.BUY} onChange={(value)=> handleChange('futures.position',value)}/>
                        </LabelChildren>
                    </div>
                    <AddLegButton text="Add Leg" onClick={addLeg}/>
                </div>
            </LegBuilderBox>
        </div>
    );
};

export default Futures;