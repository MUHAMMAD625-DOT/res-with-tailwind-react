import React from "react";

const Collaborate = () => {
  return (
    <div>
      <div className="max-w-[1400px] py-10 pt-56 flex flex-col justify-center items-center border-b-2 bg-slate-200">
        <div className="flex items-center text-center">
          <p className="font-bold lg:text-[35px] md:text-[20px]  text-red-900 sm:text-black">
            Collaborate with brand and agencies <br />
            to create impactful results.
          </p>
        </div>
        <div>
          <hr className="h-[2px] bg-gray-300 px-10  w-[250px] sm:w-[500px] md:-[700px] lg:w-[880px] mt-20 relative" />
          <span className=" w-24 h-8  ml-20 sm:ml-48 md:ml-52 lg:ml-[400px] -mt-4 bg-white border rounded-3xl  flex justify-center items-center -rotate-12 font-extrabold text-[10px]">
            services
          </span>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
