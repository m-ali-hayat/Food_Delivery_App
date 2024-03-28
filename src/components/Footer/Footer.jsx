import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      className="footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-5 py-5 px-[8vw] pt-20 mt-[100px]"
      id="footer"
    >
      <div className="footer-content w-full grid grid-cols-4 gap-20 max-[750px]:flex max-[750px]:flex-col max-[750px]:gap-[35px]">
        <div className="footer-content-left col-span-2 flex flex-col items-start gap-5">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            voluptatem suscipit deserunt dignissimos ipsum eligendi quasi animi.
            Sed, laborum optio?
          </p>
          <div className="footer-social-icons flex w-10 gap-[15px]">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center flex flex-col items-start  gap-5">
          <h2 className="text-white">COMPANY</h2>
          <ul>
            <li className="mb-[10px] cursor-pointer">Home</li>
            <li className="mb-[10px] cursor-pointer">About Us</li>
            <li className="mb-[10px] cursor-pointer">Delivery</li>
            <li className="mb-[10px] cursor-pointer">Privay Policy</li>
          </ul>
        </div>
        <div className="footer-content-right flex flex-col items-start gap-5">
          <h2 className="text-white">GET IN TOUCH</h2>
          <ul>
            <li className="mb-[10px] cursor-pointer">0300-0000000</li>
            <li className="mb-[10px] cursor-pointer">contect@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] my-5 bg-[grey] border-none" />
      <p className="footer-copyright max-[750px]:text-center">
        Copyright 2024 &copy; Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
