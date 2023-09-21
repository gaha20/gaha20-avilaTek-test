import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PrimaryButton = ({ property1, className, divClassName, text = "Title" }) => {
  return (
    <div className={`primary-button ${property1} ${className}`}>
      <div className={`title ${divClassName}`}>{text}</div>
    </div>
  );
};

PrimaryButton.propTypes = {
  property1: PropTypes.oneOf(["disabled", "hover", "active", "default"]),
  text: PropTypes.string,
};
