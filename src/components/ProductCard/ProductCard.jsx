import PropTypes from "prop-types";
import React from "react";
import { PrimaryButton } from "../PrimaryButton";
import "./style.css";

export const ProductCard = ({ property1, rating = "/img/rating-25.svg" }) => {
  return (
    <div className={`product-card property-1-0-${property1}`}>
      {["default", "horizontal", "related", "responsive"].includes(property1) && (
        <>
          <div className="details-4">
            {["default", "responsive"].includes(property1) && (
              <>
                <div className="text-wrapper">1st Choice Puppy Chiot</div>
                <div className="div">$9.99</div>
                <img className="rating" alt="Rating" src="/img/rating-29.svg" />
              </>
            )}

            {["horizontal", "related"].includes(property1) && (
              <img
                className="puppy-chiot"
                alt="Puppy chiot"
                src={property1 === "related" ? "/img/puppy-chiot-1-29.png" : "/img/puppy-chiot-1-30.png"}
              />
            )}
          </div>
          <div className="product-s-photo-2">
            {["default", "responsive"].includes(property1) && (
              <img
                className="img"
                alt="Puppy chiot"
                src={property1 === "responsive" ? "/img/puppy-chiot-1-31.png" : "/img/puppy-chiot-1-25.png"}
              />
            )}

            {property1 === "horizontal" && (
              <>
                <div className="text-wrapper-2">1st Choice Puppy Chiot</div>
                <div className="text-wrapper-3">$9.99</div>
                <img className="rating-2" alt="Rating" src="/img/rating-29.svg" />
              </>
            )}

            {property1 === "related" && (
              <>
                <div className="details">
                  <div className="text-wrapper-4">1st Choice Puppy Chiot</div>
                  <img className="rating-3" alt="Rating" src="/img/rating-28.svg" />
                  <div className="text-wrapper-5">$9.99</div>
                </div>
                <div className="text-wrapper-6">Comprar ahora</div>
              </>
            )}
          </div>
        </>
      )}

      {["adding", "paw-rating", "w-button", "w-category"].includes(property1) && (
        <>
          <div className="details-2">
            <div className="text-wrapper-7">1st Choice Puppy Chiot</div>
            <div className="text-wrapper-8">$9.99</div>
            {["adding", "paw-rating", "w-button"].includes(property1) && (
              <img className="rating-4" alt="Rating" src={property1 === "w-button" ? "/img/rating-27.svg" : rating} />
            )}

            {property1 === "w-category" && <div className="comida-de-perro">COMIDA DE PERRO</div>}
          </div>
          <div className="product-s-photo">
            <img className="puppy-chiot-2" alt="Puppy chiot" src="/img/puppy-chiot-1-25.png" />
          </div>
          <button className="button">
            <div className="overlap-group">
              <PrimaryButton
                className="instance-node"
                divClassName="primary-button-instance"
                property1="default"
                text="&nbsp;&nbsp;&nbsp;&nbsp;Agregar"
              />
              <img className="shopping-cart" alt="Shopping cart" src="/img/shopping-cart-25.svg" />
            </div>
          </button>
        </>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  property1: PropTypes.oneOf([
    "adding",
    "default",
    "horizontal",
    "w-button",
    "w-category",
    "responsive",
    "paw-rating",
    "related",
  ]),
  rating: PropTypes.string,
};
