import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu flex flex-col gap-5  " id="explore-menu">
      <h1 className="text-[#262626] text-3xl font-medium">Explore our menu</h1>
      <p className="explore-menu-text max-w-[60%] text-[#808080] max-[1050px]:max-w-full max-[1050px]:text-[14px]">
        Choose from a diverse menu featuring delectable array of dishes crafted
        with the finest ingredients and culinary expertise. Our mission is to
        satisfy your cravings and elevate your dining experience, one delicious
        meal at a time.
      </p>
      <div className="explore-menu-list flex justify-between items-center gap-[30px] text-center my-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <a href={`#${category}`}>
                <img
                  src={item.menu_image}
                  alt="menu_image"
                  className={`w-[7.5vw] min-w-20 cursor-pointer rounded-e-full duration-200 ${
                    category === item.menu_name ? "activeForMenuitems" : ""
                  }`}
                />
              </a>
              <p className="mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-[10px] h-[2px] bg-[#e2e2e2] border-none " />
    </div>
  );
};

export default ExploreMenu;
