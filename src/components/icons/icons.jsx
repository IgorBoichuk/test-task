import React from "react";

const Icon = ({ name, color }) => {
  return (
    <svg className="icon">
      <use
        xlinkHref={`../../galary/svg/symbol-defs.svg#${name}`}
        fill={color}
      />
    </svg>
  );
};

export default Icon;
