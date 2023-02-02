import Nav from "../Nav";
import React from "react";
import TypeWriterText from "./TypeWriterText";
import Logo from './img/main.png';
const Home = () => {
  
  return (
    <div className=" ">
      <Nav first />
        <div className="backdark flex flex-col justify-center " >
          <div className="flex justify-center relative kukuba">
            <div className="kokoba">
              <div className="sectionkokoba">
                <span className="fleqsa">
                  <span className="fleqsa1"></span>
                  <span className="fleqsa2">The tribe that connects</span>
                </span>
                <h1 className="main-h1 text-5xl	 p-[0.5rem 0px] text-barda">
                  <span className="text-orangu">3</span>
                  META
                  <span className="text-orangu">D</span>
                </h1>
                <h5 className="text-sm	text-white pb-8 ">
                  <div>
                  <TypeWriterText />
                  </div>
                  <span className="text-sm font-semibold">
                  Our objective and promise is to create great material for our community and clients that depict and brings life to ideas, dreams, and goals of our community, staff, and clients, as well as any inspiration we encounter along the way.
                  </span>
                </h5>
                <button className="klashnu" >
                  <a href="/collections" className="text-white">
                  Browse Collection
                  </a>
                </button>
              </div>
              <div className="animu ">
                <img className="w-full h-auto " src={Logo} alt="logo"  />
              </div>
           </div>
          </div>
        </div>
      
    </div>
  );
};

export default Home;