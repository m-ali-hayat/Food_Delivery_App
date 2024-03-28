import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order flex justify-between items-start gap-[50px] mt-[100px]">
      <div className="place-order-left w-full max-w-[max(30%,500px)]">
        <p className="title text-3xl font-semibold mb-[50px]">
          Delivery Information
        </p>
        <div className="multi-fields flex gap-[10px]">
          <input
            className="place-order-left-inputs"
            type="email"
            placeholder="First name"
          />
          <input
            className="place-order-left-inputs"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="place-order-left-inputs"
          type="text"
          placeholder="Email address"
        />
        <input
          className="place-order-left-inputs"
          type="text"
          placeholder="Street"
        />
        <div className="multi-fields flex gap-[10px]">
          <input
            className="place-order-left-inputs"
            type="email"
            placeholder="City"
          />
          <input
            className="place-order-left-inputs"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="multi-fields flex gap-[10px]">
          <input
            className="place-order-left-inputs"
            type="email"
            placeholder="Zip code"
          />
          <input
            className="place-order-left-inputs"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="place-order-left-inputs"
          type="text"
          placeholder="Phone number"
        />
      </div>
      <div className="place-order-right w-full max-w-[max(40%,500px)]">
        <div className="cart-total grow flex flex-col gap-5">
          <h2 className="text-3xl font-semibold mb-[25px]">Cart Totals</h2>
          <div>
            <div className="cart-totle-details flex justify-between text-[#555]">
              <p>Subtotle</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-totle-details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-totle-details flex justify-between text-[#555]">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button className="text-white bg-[tomato] w-[max(15vw,200px)] py-3 mt-[30px] rounded cursor-pointer">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
