import React from "react";
import "./style.css";

export const Banner = ({ className }) => {
  return (
    <div className={`banner ${className}`}>
      <div className="frame">
        <div className="rectangle" />
        <div className="rectangle-2" />
        <div className="rectangle" />
        <div className="rectangle" />
      </div>
    </div>
  );
};
