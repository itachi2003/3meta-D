import React from 'react'
import Nav from "../Nav";
import Avatar1 from "./img/avatar.jpg";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"


const Team = () => {
  const [isshow, setshow] = useState(false)
  const changer = () =>{
    setshow(!isshow)
  }
  return (
    <div>
      <Nav fourth />
      <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <div class="xl:flex xl:items-center xL:-mx-4">
            <div class="xl:w-1/2 xl:mx-4">
                <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Our Team</h1>
                
                <p class="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>
            </div>
            
            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
                <div>
                    <img class="object-cover rounded-xl h-64 w-full" src={Avatar1} alt="avatar" />
                    
                    <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Colombia Orc</h1>
                    
                    <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">Owner & Artist</p>
                </div>

                <div>
                    <img class="object-cover rounded-xl h-64 w-full" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                    
                    <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Mia</h1>
                    
                    <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">Graphic Designer</p>
                </div>
            </div>
        </div>
    </div>
</section>
<div className='text-center mt-14 text-3xl '>
<button type="button" onClick={changer} class="text-black bg-gradient-to-r from-orangu via-white to-barda  rounded-lg  text-3xl font-bold px-5 py-2.5 text-center mr-2 mb-2 border-double border-4 border-white">
    Itroduction 3DMETA Company
  </button>
  <div className={isshow ? 'fixed block z-10 w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.6)] overflow-y-auto scrollbarr' : 'hidden'}>
    <div className='popup text-white'>
    <div className="md:text-[34px] text-[32px] ml-auto mt-7  cursor-pointer" onClick={changer}><AiOutlineClose className="hover:fill-error-txt"/></div>
      <h1 className='font-optivenus md:text-3xl text-2xl text-center md:-mt-7 -mt-7 mb-5 w-1/2 mx-auto text-barda' >Introduction</h1>
      <p className=''>
      At 3MetaD, our mission is to bring the ideas, dreams, and goals of our community, staff, and clients to life by creating high-quality, engaging content. We strive to be at the forefront of the digital world, leveraging cutting-edge technologies like smart contracts and NFTs to help our community navigate this rapidly evolving landscape.
      </p>
      <h1 className='text-barda'>Company Brief</h1>
      <p>Our Orc tribe is a pool of brilliant Orcs from various disciplines, including 3D artists, concept artists, game developers, graphic designers, community moderators, front developers, and blockchain developers worldwide. We have come together to bring high-quality 3D content to the Metaverse and NFT space and self-publish our collections, games, and items.</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Team