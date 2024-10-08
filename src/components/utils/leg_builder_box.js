import React from "react";

const LegBuilderBox = ({children, border}) => {
    return (
      <div className={`relative flex flex-col gap-4 rounded bg-gray-100 pl-5 md:p-6 mx-4 mt-2 ${border}`}>
      {children}
      </div>
    );
  };

export default LegBuilderBox;