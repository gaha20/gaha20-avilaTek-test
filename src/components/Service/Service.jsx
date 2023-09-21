import PropTypes from "prop-types";
import React from "react";
import { PrimaryButton } from "../PrimaryButton";
import "./style.css";

export const Service = ({ property1, text = "Peluquería" }) => {
  return (
    <div className={`service property-1-12-${property1}`}>
      <div className="dog">
        <div className="dog-icon" />
        <div className="peluquer-a">{text}</div>
      </div>
      <div className="text">
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus
          facilisi.
        </p>
      </div>
      {property1 === "w-CTA" && (
        <PrimaryButton className="primary-button-2" divClassName="primary-button-3" property1="default" text="Ver" />
      )}
    </div>
  );
};

Service.propTypes = {
  property1: PropTypes.oneOf(["w-CTA", "default"]),
  text: PropTypes.string,
};
