import React, { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup absolute z-10 w-full h-full bg-[#00000090] grid">
      <form className="login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6 py-[25px] px-[30px] rounded-lg text-sm animate-fadeIn duration-300">
        <div className="login-popup-title flex justify-between items-center text-black">
          <h2 className="text-3xl font-bold">{currState}</h2>
          <img
            className="w-4 cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="cross_icon"
          />
        </div>
        <div className="login-popup-inputs flex flex-col gap-5">
          {currState === "Sign Up" ? (
            <input
              className="input-style"
              type="text"
              name=""
              placeholder="Enter your name"
              required
            />
          ) : (
            <></>
          )}

          <input
            className="input-style"
            type="email"
            name=""
            placeholder="Enter your email"
            required
          />
          <input
            className="input-style"
            type="password"
            name=""
            placeholder="Enter password"
            required
          />
        </div>
        <button className="p-[10px] rounded text-white bg-[tomato] text-[15px] cursor-pointer ">
          {currState === "Sign Up" ? "Create Account" : "LogIn"}
        </button>
        <div className="login-popup-condition flex items-start gap-2 -mt-[15px] ">
          <input className="mt-[5px]" type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy. </p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?
            <span
              className="text-[tomato] font-medium cursor-pointer pl-1"
              onClick={() => setCurrState("Sign Up")}
            >
              Click Here
            </span>
          </p>
        ) : (
          <p>
            Alrady have an account?
            <span
              className="text-[tomato] font-medium cursor-pointer pl-1"
              onClick={() => setCurrState("LogIn")}
            >
              LogIn Here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
