import React from "react";
import shoes from "../images/Nike01.png";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src={shoes} />
          </div>
          <div className="contentBx">
            <h2>Nike Runner</h2>
            <div className="size">
              <h3>Size :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <div className="color">
              <h3>Color :</h3>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
