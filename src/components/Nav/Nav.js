import { Link } from "react-router-dom";
import discord from "./logos/discord-logo.png";
import opensea from "./logos/open-sea.png";
import twitter from "./logos/twitter.png";
import "./style.css";
import { useState } from "react";

const Nav = ({ first, second, third, fourth, fifth }) => {

  const [isshown, setshown] = useState(true);
  const ChangeNav = () => {
    setshown(!isshown);
  };
  return (
    <div className="text-white bg-black w-full h-16 font-robot">
      <ul className="flex flex-row items-center p-3 ">
        <li className="z-[51] ml-5 ">
          <Link to="/">
          <h3 className='text-barda text-4xl font-robot 	hover:scale-110'>
        <span className='text-orangu'>3</span>
        META
        <span className='text-orangu' >D</span>
      </h3>
          </Link>
        </li>
        <div className="flex lg:hidden">
          <input type="checkbox" id="active" />
          <label htmlFor="active" className="menu-btn">
            <div
              className={isshown ? "show" : "show hide"}
              onClick={ChangeNav}
            ></div>
          </label>
          <div className="wrapper">
            <ul>
              <li>
                <Link to="/" className={first ? "text-orangu" : "text-barda"}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/TheTribe" className={second ? "text-orangu" : "text-barda"}>
                  The Tribe
                </Link>
              </li>
              <li>
                <Link to="/Roadmap" className={third ? "text-orangu" : "text-barda"}>
                  Roadmap
                  </Link>
              </li>
              <li>
                <Link to="/team" className={fourth ? "text-orangu" : "text-barda"} >Team</Link>
              </li>
              <li>
                <Link to="/Collections" className={fifth ? "text-orangu" : "text-barda"} >Collections</Link>
              </li>
              <div className="size">
              <li id="sz">
                {" "}
                <a href="/" target="_blank" rel="noopener noreferrer" className="logo">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                {" "}
                <a href="/" target="_blank" rel="noopener noreferrer"  className="logo">
                  <img src={discord} alt="discord" />
                </a>
              </li>
              <li>
                {" "}
                <a href="/" target="_blank" rel="noopener noreferrer"  className="logo">
                  <img src={opensea} alt="opensea" />
                </a>
              </li>
            </div>
            </ul>
  
          </div>
        </div>
        <div className=" ml-auto font-bold text-lg	hidden flex-row items-center space-x-8 lg:flex">
          <li
            className={` ml-auto  border-2 border-solid px-2 ${
              first
                ? "border-orangu text-white "
                : "border-barda text-white hover:border-white hover:bg-orangu  hover:text-black"
            } `}
          >
            <Link to="/" className="py-2">Home</Link>
          </li>
          <li
            className={`  ml-9  border-2 border-solid px-2 ${
              second
                ? "border-orangu text-white"
                : "border-barda text-white hover:border-white hover:bg-orangu  hover:text-black"
            } `}
          >
            <Link to="/TheTribe" className="py-2">The Tribe</Link>
          </li>
          <li className={` ml-9 border-2 border-solid px-5 ${
            third
            ? "border-orangu text-white"
            : "border-barda text-white hover:border-white  hover:bg-orangu hover:text-black"
          }  `}
            >
            <Link to="/Roadmap" className="py-2">Roadmap</Link>
          </li>
          <li 
           className={` ml-9 border-2 border-solid px-5 ${
            fourth
            ? "border-orangu text-white"
            : "border-barda text-white hover:border-white hover:bg-orangu hover:text-black"
          }  `}
          
          >
            <Link to="/team" className="py-2">Team</Link>
          </li>
          <li 
          className={` ml-9 border-2 border-solid px-5 ${
            fifth
            ? "border-orangu text-white"
            : "border-barda text-white hover:border-white hover:bg-orangu hover:text-black"
          }  `}
          >
            <Link to="/Collections" className="py-2">Collections</Link>
          </li>
          <li className="ml-20 w-10">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li className="ml-4 w-10">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={discord} alt="discord" />
            </a>
          </li>
          <li className="mx-4 w-10">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={opensea} alt="opensea" />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Nav;