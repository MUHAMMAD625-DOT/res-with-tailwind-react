import React from "react";

const SixDivs = () => {
  return (
    <div className="max-w-[1400px]  rounded-[100px] py-14 md:text-black bg-white flex  justify-center items-center gap-5   ">
      {/* <img src="/public/images/bank.png" className='w-56 h-44' alt="" />
      <img src="/public/images/matter.png" alt="" className='w-56 h-44'/>
      <img src="/public/images/grmt.png" alt="" className='w-56 h-44'/>
      <img src="/public/images/adob.png" alt="" className='w-56 h-44'/>
      <img src="/public/images/sbwy.png" alt="" className='w-56 h-44'/>
      <img src="/public/images/code.png" alt="" className='w-56 h-44'/> */}

      <div className="flex lg:gap-14 gap-5 lg:flex-row flex-col  ">
        <a href="" className="font-extrabold  text-[10px] ">
          NatioNal Bank
        </a>
        <a href="" className=" font-extrabold  text-[10px]">
          matttered
        </a>
        
      </div>

      {/* fffffffffff */}
      
      <div className="flex lg:gap-14 gap-5 lg:flex-row flex-col ">
        <a href="" className="font-extrabold  text-[10px]">
        Gourmet
        </a>
        <a href="" className="font-extrabold  text-[10px]">
          Adobe
        </a>
       
      </div>
      <div className="flex lg:gap-14 gap-5 lg:flex-row flex-col ">
        
        <a href="" className="font-extrabold  text-[10px]">
          SubWay
        </a>
        <a href="" className="font-extrabold  text-[10px]">
          Code Academy
        </a>
      </div>
    </div>
  );
};

export default SixDivs;
