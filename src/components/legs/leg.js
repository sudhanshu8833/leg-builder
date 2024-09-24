import React from 'react';
import Options from './options';
import Futures from './futures';
import { useState } from 'react';

const LegBuilder = () => {
    const assetOption = (
        <Options />
    );
    const assetFuture = (
        <Futures />
    );
    const [asset, setAsset] = useState(assetOption);

    return asset;
}

export default LegBuilder;