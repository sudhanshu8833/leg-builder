import React from "react";
import LegBuilderBox from "./leg_builder_box";
import remove from "../../static/remove.png";
import copy from "../../static/copy.png";

const LegBox = ({number, children}) => {
    return (
      <LegBuilderBox>
      <button className="absolute top-0 right-0 p-1 rounded-full transform -translate-y-1/2 translate-x-1/2">
        <img src={remove} alt="Button Icon" className="h-5 w-5" />
      </button>
      <button className="absolute top-4 right-0 p-1 rounded-full transform translate-x-1/2">
        <img src={copy} alt="Button Icon" className="h-5 w-5" />
      </button>
      <h3 className="absolute top-0 left-0 p-1.5 py-1 text-xs font-semibold bg-gray-200 rounded">
        # {number}
      </h3>
      {children}
      </LegBuilderBox>
    );
  };

export default LegBox;