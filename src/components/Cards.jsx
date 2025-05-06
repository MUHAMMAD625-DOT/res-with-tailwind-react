import React from "react";
import { AlignCenterHorizontal } from "lucide-react";
import { AppWindow } from "lucide-react";
import { Archive } from "lucide-react";
import { Armchair } from "lucide-react";
const Cards = () => {
  return (
    <div className="bg-slate-200 w-full">

      <div className="max-w-[1000px] mx-auto h-auto grid sm:grid-cols-2 place-items-center  md:grid-cols-4 justify-center pb-48 pt-28 items-center   gap-12 ">
        <div className=" h-auto w-full sm:w-36 sm:ml-10 ">
          <AlignCenterHorizontal className="mb-4" />
          <p className="font-semibold">UX&UI</p>
          <p className="text-[12px] pt-1">
            Sajid What Are you doing Doing practice on a <br />
            WEBSITE
          </p>
        </div>
        <div className=" h-auto w-full sm:w-36  ">
          <AppWindow className="mb-4" />
          <p className="font-semibold">Web&Mobile App</p>
          <p className="text-[12px]  pt-1">
            Sajid What Are you doing Doing practice on a <br />
            WEBSITE
          </p>
        </div>

        {/* end  */}

        <div className=" h-auto w-full sm:w-36 sm:ml-10 ">
          <Archive className="mb-4" />
          <p className="font-semibold">Design& Creative</p>
          <p className="text-[12px]  pt-1">
            Sajid What Are you doing 
            Doing practice on a <br /> WEBSITE
          </p>
        </div>
        <div className=" h-auto w-full sm:w-36 ">
          <Armchair className="mb-4" />
          <p className="font-semibold">Development</p>
          <p className="text-[12px]  pt-1">
            Sajid What Are you doing Doing practice on a <br />
            WEBSITE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
