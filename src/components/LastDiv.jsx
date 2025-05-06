import React from "react";
import { CarFront } from "lucide-react";
import { Inbox } from "lucide-react";
const LastDiv = () => {
  return (
    <div className="bg-gray-200">
      <div className="max-w-[1400px] h-96  grid justify-center items-center rounded-t-[100px]  bg-white ">
        <div className="ml-[124px] sm:ml-[120px] md:ml-[180px] lg:ml-[405px] xl:ml-[523px] -mb-16">
          <img
            src="/public/images/Hnadshaking.jpg"
            className="w-16 h-16 md:w-24 md:h-24 rounded-full border "
            alt=""
          />
        </div>
        <div className="font-bold text-[20px] md:text-[40px]">
          <p className="ml-10 sm:ml-[42px] md:ml-[0px] lg:ml-[230px] xl:ml-[350px] ">Tell me about your next </p>
          <p className=" ml-[118px] sm:ml-[120px] md:ml-[154px] lg:ml-[385px] xl:ml-[502px] "> project</p>
        </div>

        <div className="ml-[85px] sm:ml-[85px] md:ml-[120px] lg:ml-[354px] xl:ml-[470px] -mt-16 md:-mt-8 flex">
          <button className="md:w-24 md:h-10 w-16 h-8 text-white font-semibold text-[6px] md:text-[10px] bg-black border  rounded-3xl flex justify-center items-center gap-2">
            <Inbox className="w-4 h-4" />
            Email Me
          </button>
          <button className="md:w-24 md:h-10 w-16 h-8 bg-white border font-semibold text-[6px] rounded-3xl ml-2 ">
            Whatsapp
          </button>
        </div>
        {/* gggggggggggggggg */}
        <hr className="h-[1px] bg-gray-600 md:w-[440px] lg:w-[950px] xl:w-[1200px] w-[300px] " />
      </div>
    </div>
  );
};

export default LastDiv;
