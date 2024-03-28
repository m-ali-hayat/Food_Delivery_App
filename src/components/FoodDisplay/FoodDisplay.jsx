import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display mt-[30px]" id="food-display">
      <h2 className="text-[max(2vw,24px)] font-semibold">
        Top dishes near you
      </h2>
      <div className="food-display-list grid md:grid-cols-4 mt-[30px] gap-[30px] gap-x-[30px]">
        {food_list.map((item, index) => {
          if (category === "All" || item.category === category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                category={item.category}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
