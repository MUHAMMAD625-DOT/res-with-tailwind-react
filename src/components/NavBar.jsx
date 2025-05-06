// // import React from "react";
// // import { AlignJustify } from "lucide-react";
// // import { ArrowRight } from "lucide-react";
// // import { BrainCog } from "lucide-react";
// // import { CirclePlus } from "lucide-react";

// // const Responsive = () => {
// //   return (
// //     <div>
// //       <nav className="p-3 flex justify-between items-center bg-white">
// //         <a href="#" id="brand" className="flex items-center p-4 gap-3">
// //           <img
// //             src="/public/images/stachu.jpg"
// //             alt=""
// //             className="object-cover max-w-20 max-h-12 rounded-3xl "
// //           />

// //           <span>ToDesktop</span>
// //         </a>
// //         <div id="nav-menu" className="hidden md:flex gap-5 ">
// //           <a href="#" className="font-medium hover:text-red-600">
// //             Pricing
// //           </a>
// //           <a href="#" className="font-medium hover:text-red-600">
// //             ChangeLog
// //           </a>
// //           <a href="#" className="font-medium hover:text-red-600">
// //             Icons
// //           </a>
// //           <a href="#" className="font-medium hover:text-red-600">
// //             Peoples
// //           </a>
// //           <a href="#" className="font-medium hover:text-red-600">
// //             News
// //           </a>
// //         </div>
// //         <button className="hidden md:flex gap-2 items-center border border-gray-400 p-2 rounded-2xl font-extrabold  hover:border-blue-400 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-pink-700 duration-100 ...">
// //           <BrainCog />
// //           <span> Electron Developers</span>
// //           <ArrowRight />
// //         </button>
// //         <button className=" md:hidden">
// //           <AlignJustify />
// //         </button>
// //         <div className=" fixed md:hidden inset-0 p-3">
// //           <div id="nav-bar " className="flex justify-between ">
// //             <a href="#" id="brand" className="flex items-center p-4 gap-3">
// //               <img
// //                 src="/public/images/stachu.jpg"
// //                 alt=""
// //                 className="object-cover max-w-20 max-h-12 rounded-3xl "
// //               />

// //               <span>ToDesktop</span>
// //             </a>
// //             <button className="md:hidden bg-white ">
// //               <CirclePlus />
// //             </button>
// //           </div>
// //           <div className="grid ">
// //             <a
// //               href=""
// //               className="hover:bg-slate-50 hover:shadow-2xl font-medium m-3 p-3 rounded-3xl"
// //             >
// //               Docs
// //             </a>
// //             <a
// //               href=""
// //               className="font-medium m-3 p-3 hover:bg-slate-50 hover:shadow-2xl "
// //             >
// //               Changelog
// //             </a>{" "}
// //             <a
// //               href=""
// //               className="font-medium m-3 p-3 hover:bg-slate-100 hover:shadow-2xl"
// //             >
// //               Blogs
// //             </a>{" "}
// //             <a
// //               href=""
// //               className="font-medium m-3 p-3 hover:bg-slate-100 hover:shadow-2xl"
// //             >
// //               Login
// //             </a>{" "}

// //           </div>
// //           <div className="h-[1px] bg-gray-400">
// //             <button className="w-full mt-12 md:flex gap-2 flex items-center border border-gray-400 p-2 rounded-2xl font-extrabold  hover:border-blue-400 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-pink-700 duration-100 ...">
// //               <BrainCog />
// //               <span> Electron Developers</span>
// //               <ArrowRight />
// //             </button>
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Responsive;

// import React from "react";

// const Responsive = () => {
//   return (
//     <div className="m-4 gap-4 grid sm:grid-cols-12">
//       <div className=" sm:col-span-2 min-h-[100px] rounded-lg bg-orange-500 lg:bg-blue-800 shadow"></div>
//       <div className="sm:col-span-8  min-h-[100px] rounded-lg bg-teal-500 shadow  ">
//         <p className="hidden my-10 font-extrabold items-center justify-center sm:flex ">
//           WELCOME ON A LARGE SCREEN
//         </p>
//       </div>
//       <div className="sm:col-span-2  min-h-[100px] rounded-lg bg-teal-500 shadow  items-center justify-center md:flex ">
//         <button className="hidden my-10 font-extrabold items-center justify-center sm:flex  border-4 border-red-600 bg-slate-100 rounded-3xl h-12 w-20 hover:bg-slate-600 hover:border-gray-950">
//           SubmiT
//         </button>
//       </div>
//       {/* <div className='min-h-[100px] rounded-lg bg-orange-900 shadow'></div>
//       <div className='min-h-[100px] rounded-lg bg-orange-500 shadow'></div> */}
//     </div>
//   );
// };

// export default Responsive;
import React from "react";
// import { MoveUpRight } from 'lucide-react';
import { SquareArrowOutUpRight } from "lucide-react";
import { Menu } from "lucide-react";
const NavBar = () => {
  return (
    <div className="max-w-[1400px] rounded-b-[100px] bg-slate-200  border">
      <div className="flex justify-between items-center mt-10">
        <div className="md:flex  md:gap-5 ml-16 ">
          <a href="" className="font-semibold  sm:text-black hidden md:block  ">
            msajid9909@gmail.com
          </a>

          <button className=" bg-blue-700 hidden md:block w-20 h-9  md:bg-slate-50 border text-white md:text-black rounded-3xl font-semibold hover:bg-red-400">
            Copy
          </button>
          <button className=" bg-blue-700 hidden md:block w-20 h-9 text-white md:text-black  md:bg-slate-50 border rounded-3xl font-semibold hover:bg-red-400">
            Cx
          </button>
        </div>
        {/* div 1 end  */}
        {/* end */}

        {/* end  */}

        <div className="  md:gap-5 justify-center text-center items-center text-blue-700 md:text-black hidden md:block">
          <a href="" className="font-semibold">
            Linkedin
            <span className="pl-1 sm:pl-4">/</span>
          </a>{" "}
          <a href="" className="font-semibold">
            Dribble
            <span className="pl-1 sm:pl-4">/</span>
          </a>
          <a href="" className="font-semibold">
            Instagram
          </a>
        </div>
      </div>
      {/* end  */}

      <div className="flex justify-between items-center md:hidden m-4 ">
        <Menu />
        <div className="">
        <button className="mr-4 w-20 h-8 bg-white font-semibold rounded-full">
          Copy
        </button>
        <button className="w-20 h-8 bg-white font-semibold rounded-full">
          Cx
        </button>
        </div>
      </div>

      {/* end  */}
      {/* gggggggggggggggggg start */}

      <div className="max-w-[1400px] h-96 mt-10 rounded-full grid justify-center items-center bg-slate-200">
        <div className="ml-8 mt-20 md:mt-0 relative flex justify-center items-center text-center">
          <img
            src="/public/images/Myselfe.jpg"
            className="w-24 h-24 rounded-full border-white border-t-2 border-s-2 border-e-2"
            alt=""
          />
          <span className="  h-7 w-24 flex justify-center items-center rounded-3xl text-black bg-white  -rotate-12  top-6 right-10 md:right-16 lg:right-28 absolute">
            sajid{" "}
          </span>
        </div>
        <div className="flex justify-center items-center text-center">
          <div className="font-semibold lg:text-[45px] md:text-[35px] text-[25px]  lg:w-[500px] md:w-[400px] w-[350px] ">
            Building digital Products,brands,and experience
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mb-16 flex justify-center items-center">
        <button className=" flex justify-center font-semibold items-center w-28 h-10 text-white text-[10px] bg-black border hover:bg-slate-950 rounded-3xl ">
          Let's Start <SquareArrowOutUpRight className=" pl-2" />
        </button>
      </div>

      {/* ggggggggggggggg end */}
    </div>
  );
};

export default NavBar;
