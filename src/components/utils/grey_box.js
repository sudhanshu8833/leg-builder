import React from "react";
import remove from "../../static/remove.png";
import copy from "../../static/copy.png";

const GreyBox = ({number, children}) => {
    return (
      <div className="relative flex flex-col gap-4 rounded bg-gray-100 p-5 md:p-6 m-4">
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
      </div>
    );
  };

export default GreyBox;