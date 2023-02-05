import React from "react";
import Nav from "../Nav";
import img from "./img/people.png"
import hey from "./img/hey.svg"

const Tribe = () => {
  return (
    <>
      <div className="mb-16">
        <Nav second />
        <div class=" flex lg:mt-44 2xl:mt-68 lg:mx-52 sm:m-[10rem_calc(2rem+1vw)_0px] m-[3rem_calc(1rem+2vw)_0px] max-[640px]:items-center justify-center flex-col">
          <div>
            <h1 class="inline-block text-[2rem] text-white">The Tribe</h1>
          </div>
          <div class="flex sm:flex-row items-center justify-between flex-col">
            <div class="flex place-content-center sm:w-[40%] w-[50vw] animate-[3.5s_ease_0s_infinite_normal_none_running_move]">
              <img
                src={img}
                alt="rocket"
                width="400"
                height="400"
              />
            </div>
            <div class="relative bg-[rgb(255,255,255)] bg-opacity-[0.15] rounded-lg sm:w-1/2 w-full ">
              <div class="sm:block absolute right-0 bottom-full w-1/2 hidden ">
                <img
                  src={hey}
                  alt="human"
                  width="400"
                  height="400"
                />
              </div>
              <h4 class="p-4 text-[calc(0.5rem+1vw)] leading-6 text-white">
                Our tribe is a pool of brilliant minds from many disciplines
                such as 3D artists, concept artists, game developers, graphic
                designers, community moderators, front developers, and
                blockchain developers from all over the world. <br />
                <br />
                We banded together to bring high-quality 3D content to the
                Metaverse and NFT Space, as well as self-publish our own
                collections, games and items. A 3D metaverse-driven company that
                provides users with products ranging from Mini games, 3D and
                physical merchandise, In-game merchandise, characters,
                architectures, and custom orders.
                <br/> <br/>

                ⚫🟡🟢
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tribe;
