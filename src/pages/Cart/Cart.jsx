import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart mt-[100px]">
      <div className="cart-items ">
        <div className="cart-items-title grid grid-cols-6 items-center text-[grey] text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="h-[1px] bg-[#e2e2e2] border-none" />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title grid grid-cols-6 items-center text-[max(1vw,12px)] cart-items-item my-[10px] text-black">
                  <img className="w-2/4" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cross cursor-pointer"
                  >
                    x
                  </p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2] border-none" />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom  mt-20 flex justify-between gap-[max(12vw,20px)] max-[750px]:flex-col-reverse">
        <div className="cart-total grow flex flex-col gap-5">
          <h2 className="text-3xl font-semibold">Cart Totals</h2>
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
          <button
            onClick={() => navigate("/order")}
            className="text-white bg-[tomato] w-[max(15vw,200px)] py-3 rounded cursor-pointer"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode grow-[0.4] max-[750px]:justify-start">
          <div>
            <p className="text-[#555]">
              If you have a promo code, Enter it here
            </p>
            <div className="cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded">
              <input
                className="bg-transparent focus:outline-0 pl-[10px]"
                type="text"
                placeholder="Enter Promo Code"
              />
              <button className="w-[max(8vw,150px)] py-3 px-[5px] bg-black text-white rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
