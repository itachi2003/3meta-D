import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Mint from "../../Mint";

// const Box = styled.div`
// width:21vw;
// position:relative;
// bottom:0px;
// left:40vw;
// `

const MintButton = () => {
  const [isshow, setshow] = useState(false);

  const changer = () => {
    setshow(!isshow);
  };
  return (
    <>
      <div className="absolute bottom-0 right-[45%] medium:right-[20%] ">
        <div>
        <div className="absolute medium:top-[-50px] top-[-90px] right-0 bg-white border-double border-red-300  flex flex-row justify-center align-center p-[20px_40px] small:p-[14px_40px]  cursor-pointer" onClick={changer}>
            <h1 className="text-2xl  sm:text-sm flex-none flex-grow-0 order-none leading-5 " >
             mint now
            </h1>
          </div>
        
       
        </div>
      </div>

      <div
        className={
          isshow
            ? "scrollbarr fixed top-0 left-0 z-10 block h-full w-full overflow-y-auto bg-black"
            : "hidden"
        }
      >
        <div id="minting-dapp"  >
          <div
            className="ml-auto mt-7 cursor-pointer text-[32px]  md:text-[34px]"
            onClick={changer}
          >
            <AiOutlineClose className="hover:text-red-800" />
          </div>
          <h1 className=" mx-auto -mt-7 mb-5 w-1/2 text-center text-2xl md:-mt-7 md:text-3xl">
            MINT
          </h1>

          <Mint />
        </div>
      </div>
    </>
  );
};

export default MintButton;
