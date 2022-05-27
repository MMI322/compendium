import React from "react";
import ReactTooltip from "react-tooltip";

interface ToolTipProps {
  target: string;
  children?: React.ReactNode;
  place?: "top" | "right" | "bottom" | "left";
  heightOffset?: string;
  maxWidth?: string;
}

export const Tooltip: React.FC<ToolTipProps> = (x) => {
  return (
    <ReactTooltip
      className="tooltip"
      id={x.target}
      place={x.place ?? "right"}
      backgroundColor="#00000000"
      textColor="#989898"
      effect="float"
    >
      <div
        className="tooltipWrapper"
        style={{ height: x.place ?? "0", width: x.maxWidth }}
      >
        <div className="card">{x.children}</div>
      </div>
    </ReactTooltip>
  );
};
