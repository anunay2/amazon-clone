import React from "react";
import "../style/Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://gos3.ibcdn.com/top-1568020025.jpg"
          alt=""
        ></img>
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {/* BasketItem
           */}
          {/* BasketItem
           */}
          {/* BasketItem
           */}
          {/* BasketItem
           */}
        </div>
      </div>

      <div className="checkout__right">
           <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
