import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import menuItems from "./menuItems.json";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar py-5 flex justify-between items-center">
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="logo w-[150px] max-[1050px]:w-[140px]"
        />
      </Link>
      <ul className="navbar-menu flex gap-5 color-[#49557e] text-lg max-[1050px]:text-[17px] max-[900px]:gap-[15px] max-[900px]:text-[16px] max-[750px]:hidden">
        {/* {menuItems.map((item, index) => (
          <Link to={item.url} key={index}>
            <li
              onClick={() => setMenu(item.title)}
              className={`cursor-pointer ${
                menu === item.title ? "activeForNavbar" : ""
              }`}
            >
              {item.title}
            </li>
          </Link>
        ))} */}

        <li
          onClick={() => setMenu("Home")}
          className={`cursor-pointer ${
            menu === "Home" ? "activeForNavbar" : ""
          }`}
        >
          <Link to="/">Home</Link>
        </li>

        <li
          onClick={() => setMenu("Menu")}
          className={`cursor-pointer ${
            menu === "Menu" ? "activeForNavbar" : ""
          }`}
        >
          <a href="#explore-menu">Menu</a>
        </li>
        <li
          onClick={() => setMenu("Mobile-app")}
          className={`cursor-pointer ${
            menu === "Mobile-app" ? "activeForNavbar" : ""
          }`}
        >
          <a href="#app-download">Mobile-App</a>
        </li>
        <li
          onClick={() => setMenu("Contact-us")}
          className={`cursor-pointer ${
            menu === "Contact-us" ? "activeForNavbar" : ""
          }`}
        >
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
      <div className="navbar-right flex items-center gap-10 max-[1050px]:gap-[30px] max-[900px]:gap-[20px]">
        <img
          className="max-[1050px]:w-[22px] max-[900px]:w-[20px]"
          src={assets.search_icon}
          alt="search icon"
        />
        <div className="navbar-search-icon relative">
          <Link to="/cart">
            <img
              className="min-w-7 max-[1050px]:w-[22px] max-[900px]:w-[20px]"
              src={assets.basket_icon}
              alt="basket_icon"
            />
          </Link>
          {getTotalCartAmount() > 0 && (
            <>
              <div className="dot absolute -top-2 -right-2 z-50 min-w-[10px] min-h-[10px] bg-[tomato] rounded-full animate-ping "></div>
              <div className="dot absolute -top-2 -right-2 z-50 min-w-[10px] min-h-[10px] bg-[tomato] rounded-full  "></div>
            </>
          )}
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-transparent text-base color-[#49557e] border border-[tomato] py-[10px] px-[30px] cursor-pointer rounded-full duration-300 hover:bg-[#fff4f2] max-[1050px]:py-2 max-[1050px]:px-[25px] max-[900px]:py-[7px] max-[900px]:px-[20px] max-[900px]:text-[15px]"
        >
          SignIn
        </button>
      </div>
    </div>
  );
}

export default Navbar;
