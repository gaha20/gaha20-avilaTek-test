import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Input = ({
  property1,
  className,
  barClassName,
  overlapGroupClassName,
  divClassName,
  text = "Lorem ipsum",
}) => {
  return (
    <div className={`input property-1-13-${property1} ${className}`}>
      {["area", "default", "filled", "focus"].includes(property1) && (
        <>
          <div className="text-wrapper-15">Label</div>
          <div className="bar">
            <div className="placeholder-wrapper">
              <div className="placeholder">
                {["area", "default", "focus"].includes(property1) && <>Placeholder</>}

                {property1 === "filled" && <>{text}</>}
              </div>
            </div>
          </div>
        </>
      )}

      {property1 === "labeless" && (
        <div className={`overlap-group-wrapper ${barClassName}`}>
          <div className={`lorem-ipsum-wrapper ${overlapGroupClassName}`}>
            <div className={`lorem-ipsum ${divClassName}`}>{text}</div>
          </div>
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  property1: PropTypes.oneOf(["area", "default", "filled", "focus", "labeless"]),
  text: PropTypes.string,
};
