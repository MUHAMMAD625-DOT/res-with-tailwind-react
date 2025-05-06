import React from "react";

const EndNavbar = () => {
  return (
    <div>
      <div className="max-w-[1400px] h-12  bg-white">
        <div className=" flex justify-between items-center ml-6 text-[10px] sm:text-[20px]">
          <div className="flex justify-center items-center xl:ml-[48px] ">
            <a href="" className="font-semibold ">
              2024 All  rights  restored
            </a>
          </div>
          <div>
            <div className="justify-center items-center mr-7 xl:mr-[72px] sm:gap-5 ">
              <a href="" className="font-semibold">
                Linkedin
                <span className="pl-1 sm:pl-4">/</span>
              </a>
              
              <a href="" className="font-semibold">
                Dribble
                <span className="pl-1 sm:pl-4">/</span>
              </a>
             
              <a href="" className="font-semibold">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndNavbar;
