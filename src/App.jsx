// import React from "react";

// import NavBar from "./components/NavBar";

// import Hero2 from "./components/Hero2";
// import Collaborate from "./components/Collaborate";
// import Cards from "./components/Cards";
// import LastDiv from "./components/LastDiv";
// import SixDivs from "./components/SixDivs";
// import EndNavbar from "./components/EndNavbar";

// const App = () => {
//   return (
//     <div className="absolute w-full">
//       <NavBar />
//       <Hero2 />
//       <div  className="relative top-20 ">
//       <SixDivs />
//       </div>
//       <div>
//       <Collaborate />
//       </div>
//       <Cards />
//       <div className="relative  -top-5">
//       <LastDiv />
//       <EndNavbar/>

//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";

function App() {
  return (
    <div className="flex flex-col gap-2  bg-yellow-200">
      <div className="flex justify-center items-center gap-2 ">
        <div className="w-80 h-80 border border-blue-900 bg-blue-600 flex justify-center items-center ">
          <div className="w-60 h-60 border-black rounded-full rotate-45  border-t-8 border-b-8 border-r-8 border-l-8 flex  justify-center items-center gap-10">
            <div className="flex flex-col gap-10">
              <div className="bg-white  w-14 h-14 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-8 h-8 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
              <div className="bg-white  w-14 h-14 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-8 h-8 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="bg-white  w-14 h-14 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-8 h-8 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
              <div className="bg-white  w-14 h-14 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-8 h-8 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-44 h-80 border-t-2 border-b-2 border-r-2 border-l-2 border-black flex justify-center items-center">
          <div>
            <div className="w-[58px] h-[53px] border  border-black flex justify-center items-center"></div>
            <div className="w-[58px] h-[53px] border border-black"></div>
            <div className="w-[58px] h-[53px] border border-black bg-red-600 flex justify-center items-center">
              <div className="bg-white  w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[58px] h-[53px] border border-black "></div>
            <div className="w-[58px] h-[53px] border border-black"></div>
            <div className="w-[58px] h-[53px] border border-black"></div>
          </div>
          <div>
            <div className="w-[58px] h-[53px] border border-black"></div>
            <div className="w-[58px] h-[53px] border border-black bg-red-600 flex justify-center items-center">
              <div className="bg-white  w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[58px] h-[53px] border border-black bg-red-600 flex justify-center items-center">
              <div className="bg-white  w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[58px] h-[53px] border border-black bg-red-600 flex justify-center items-center">
              <div className="bg-white  w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[58px] h-[53px] border border-black bg-red-600 flex justify-center items-center">
              <div className="bg-white  w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[58px] h-[53px] border border-black bg-red-600 flex justify-center items-center">
              <div className="bg-white w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[58px] h-[53px] border border-black"></div>
            <div className="w-[58px] h-[53px] border border-black bg-red-600 flex justify-center items-center">
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[58px] h-[53px] border border-black"></div>
            <div className="w-[58px] h-[53px] border border-black"></div>
            <div className="w-[58px] h-[53px] border border-black"></div>
            <div className="w-[58px] h-[53px] border border-black"></div>
          </div>
        </div>
        <div className="w-80 h-80 border border-blue-900 bg-red-600 flex justify-center items-center">
          <div className="w-10 h-12 border-t-4 -rotate-45  border-b-4 border-r-4 border-l-4 mt-40  border border-black rounded-md flex flex-col justify-center items-center bg-white gap-1">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
          </div>
          <div className="w-60 h-60 border-black rounded-full rotate-45  border-t-8 border-b-8 border-r-8 border-l-8 flex  justify-center items-center gap-10">
            <div className="flex flex-col gap-10">
              <div className="bg-white  w-14 h-14 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-8 h-8 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
              <div className="bg-white  w-14 h-14 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-8 h-8 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="bg-white  w-14 h-14 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-8 h-8 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
              <div className="bg-white  w-14 h-14 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-8 h-8 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="w-80 h-44 border border-t-2 border-b-2 border-r-2 border-l-2 border-black flex justify-center items-center">
          <div>
            <div className="w-[53px] h-[58px] border border-black"></div>
            <div className="w-[53px] h-[58px] border border-black "></div>
            <div className="w-[53px] h-[58px] border border-black "></div>
          </div>
          <div>
            <div className="w-[53px] h-[58px] border border-black  bg-blue-600 flex justify-center items-center">
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[53px] h-[58px] border border-black bg-blue-600  flex justify-center items-center">
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[53px] h-[58px] border border-black "></div>
          </div>
          <div>
            <div className="w-[53px] h-[58px] border border-black"></div>
            <div className="w-[53px] h-[58px] border border-black  bg-blue-600 flex justify-center items-center">
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[53px] h-[58px] border border-black  bg-blue-600 flex justify-center items-center">
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[53px] h-[58px] border border-black"></div>
            <div className="w-[53px] h-[58px] border border-black  bg-blue-600 flex justify-center items-center">
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[53px] h-[58px] border border-black"></div>
          </div>
          <div>
            <div className="w-[53px] h-[58px] border border-black"></div>
            <div className="w-[53px] h-[58px] border border-black  bg-blue-600 flex justify-center items-center">
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[53px] h-[58px] border border-black"></div>
          </div>
          <div>
            <div className="w-[53px] h-[58px] border border-black"></div>
            <div className="w-[53px] h-[58px] border border-black  bg-blue-600 flex justify-center items-center">
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[53px] h-[58px] border border-black"></div>
          </div>
        </div>
        <div className="w-44 h-44 border border-blue-900 flex justify-center items-center bg-fuchsia-600 relative">
          <div className="w-40 h-40 border border-t-8 border-b-8 border-r-8 border-l-8 border-black rounded-full flex justify-center items-center">
            <div className="w-32 h-32 border  border-t-8 border-b-8 border-r-8 border-l-8 border-black rounded-full  flex justify-center items-center">
              <div className="w-24 h-24 border border-t-8 border-b-8 border-r-8 border-l-8 border-black rounded-full flex justify-center items-center">
                <div className="w-16 h-16 border border-t-8 border-b-8 border-r-8 border-l-8 border-black rounded-full flex justify-center items-center">
                  <div className="w-10 h-10 border border-t-8 border-b-8 border-r-8 border-l-8 border-black rounded-full flex justify-center items-center ">
                    <div className="w-4 h-4 bg-black rounded-full "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className=" polygon(50% 0%, 0% 100%, 100% 100%) border "></div> */}
        </div>
        <div className="w-80 h-44 border border-t-2 border-b-2 border-r-2 border-l-2 border-black flex justify-center items-center">
          <div>
            <div className="w-[53px] h-[58px] border border-black  "></div>
            <div className="w-[53px] h-[58px] border border-black bg-green-600 flex justify-center items-center">
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[53px] h-[58px] border border-black"></div>
          </div>
          <div>
            <div className="w-[53px] h-[58px] border border-black"></div>
            <div className="w-[53px] h-[58px] border border-black bg-green-600 flex justify-center items-center">
              {" "}
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[53px] h-[58px] border border-black"></div>
          </div>
          <div>
            <div className="w-[53px] h-[58px] border border-black"></div>
            <div className="w-[53px] h-[58px] border border-black bg-green-600 flex justify-center items-center">
              {" "}
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[53px] h-[58px] border border-black"></div>
          </div>
          <div>
            <div className="w-[53px] h-[58px] border border-black bg-green-600 flex justify-center items-center">
              {" "}
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[53px] h-[58px] border border-black bg-green-600 flex justify-center items-center">
              {" "}
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[53px] h-[58px] border border-black"></div>
          </div>
          <div>
            <div className="w-[53px] h-[58px] border border-black"></div>
            <div className="w-[53px] h-[58px] border border-black bg-green-600 flex justify-center items-center">
              {" "}
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[53px] h-[58px] border border-black bg-green-600 flex justify-center items-center">
              {" "}
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[53px] h-[58px] border border-black "></div>
            <div className="w-[53px] h-[58px] border border-black "></div>
            <div className="w-[53px] h-[58px] border border-black"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="w-80 h-80 border border-blue-900 bg-yellow-400 flex justify-center items-center">
          <div className="w-60 h-60 border-black rounded-full rotate-45  border-t-8 border-b-8 border-r-8 border-l-8 flex  justify-center items-center gap-10">
            <div className="flex flex-col gap-10">
              <div className="bg-white  w-14 h-14 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-8 h-8 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
              <div className="bg-white  w-14 h-14 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-8 h-8 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="bg-white  w-14 h-14 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-8 h-8 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
              <div className="bg-white  w-14 h-14 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-8 h-8 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-44 h-80 border border-t-2 border-b-2 border-r-2 border-l-2 border-black flex justify-center items-center ">
          <div>
            <div className="w-[58px] h-[53px] border border-black "></div>
            <div className="w-[58px] h-[53px] border border-black "></div>
            <div className="w-[58px] h-[53px] border border-black"></div>
            <div className="w-[58px] h-[53px] border border-black"></div>
            <div className="w-[58px] h-[53px] border border-black bg-yellow-400 flex justify-center items-center">
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[58px] h-[53px] border border-black"></div>
          </div>
          <div>
            <div className="w-[58px] h-[53px] border border-black bg-yellow-400 flex justify-center items-center">
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[58px] h-[53px] border border-black bg-yellow-400 flex justify-center items-center">
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[58px] h-[53px] border border-black bg-yellow-400 flex justify-center items-center">
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[58px] h-[53px] border border-black bg-yellow-400 flex justify-center items-center">
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[58px] h-[53px] border border-black bg-yellow-400 flex justify-center items-center">
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[58px] h-[53px] border border-black "></div>
          </div>
          <div>
            <div className="w-[58px] h-[53px] border border-black"></div>
            <div className="w-[58px] h-[53px] border border-black "></div>
            <div className="w-[58px] h-[53px] border border-black"></div>
            <div className="w-[58px] h-[53px] border border-black bg-yellow-400 flex justify-center items-center">
              <div className="w-10 h-10 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center bg-white">
                <div className="w-6 h-6 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-2 h-2 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="w-[58px] h-[53px] border border-black "></div>
            <div className="w-[58px] h-[53px] border border-black"></div>
          </div>
        </div>
        <div className="w-80 h-80 border border-blue-900 bg-green-600 flex justify-center items-center">
          <div className="w-60 h-60 border-black rounded-full rotate-45  border-t-8 border-b-8 border-r-8 border-l-8 flex  justify-center items-center gap-10">
            <div className="flex flex-col gap-10">
              <div className="bg-white  w-14 h-14 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-8 h-8 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
              <div className="bg-white  w-14 h-14 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-8 h-8 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="bg-white  w-14 h-14 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-8 h-8 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
              <div className="bg-white  w-14 h-14 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                <div className="w-8 h-8 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 border border-t-4 border-b-4 border-r-4 border-l-4 border-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
