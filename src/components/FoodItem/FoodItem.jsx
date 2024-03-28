import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image, category }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div
      id={category}
      className="food-item w-[100%] m-auto rounded-2xl shadow-foodItem animate-fadeIn duration-1000"
    >
      <div className="food-item-img-container relative">
        <img
          className="food-item-image w-[100%] rounded-t-2xl "
          src={image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] bg-white rounded-full">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              className="w-[30px] cursor-pointer"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
              className="w-[30px] cursor-pointer"
            />
          </div>
        )}
      </div>
      <div className="food-item-info p-5">
        <div className="food-item-name-rating flex justify-between items-center mb-[10px]">
          <p className="text-base font-medium">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc text-[#676767] text-xs">{description}</p>
        <p className="food-item-price text-[tomato] text-xl font-medium my-[10px]">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
