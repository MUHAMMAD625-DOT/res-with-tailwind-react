import React from "react";

import NavBar from "./components/NavBar";

import Hero2 from "./components/Hero2";
import Collaborate from "./components/Collaborate";
import Cards from "./components/Cards";
import LastDiv from "./components/LastDiv";
import SixDivs from "./components/SixDivs";
import EndNavbar from "./components/EndNavbar";


const App = () => {
  return (
    <div className="absolute w-full">
      <NavBar />
      <Hero2 />
      <div  className="relative top-20 ">
      <SixDivs />
      </div>
      <div>
      <Collaborate />
      </div>
      <Cards />
      <div className="relative  -top-5">
      <LastDiv />
      <EndNavbar/>
    
      </div>
    </div>
  );
};

export default App;
