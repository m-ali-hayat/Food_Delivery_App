import React from "react";

const Header = () => {
  return (
    <div className="header h-[34vw] my-[30px] mx-auto bg-[url('/header_img.png')] bg-contain bg-no-repeat relative">
      <div className="hearder-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn max-[1050px]:max-w-[45%] max-[750px]:max-w-[65%]">
        <h2 className="text-[max(4.5vw,22px)] leading-tight font-medium text-white   ">
          Order your favourite food here
        </h2>
        <p className="text-[1vw] text-white max-[750px]:hidden">
          Choose from a diverse menu featuring delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="border-none text-[#747474] font-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-full max-[750px]:py-[2vw] max-[750px]:px-[4vw] ">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
