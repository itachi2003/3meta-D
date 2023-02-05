import React from 'react'
import Nav from "../Nav";
import Avatar1 from "./img/avatar.jpg";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"
import EachDescription from './EachDescription';


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
  <div className={isshow ? 'fixed block z-[65] w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.6)] overflow-y-auto scrollbarr' : 'hidden'}>
    <div className='popup text-white '>
    <div className="md:text-[34px] text-[32px] ml-auto mt-7  cursor-pointer" onClick={changer}><AiOutlineClose className="hover:fill-error-txt"/></div>
      {/* <h1 className='font-optivenus md:text-3xl text-2xl text-center md:-mt-7 -mt-7 mb-5 w-1/2 mx-auto text-barda' >Introduction</h1>
      <p className=''>
      At 3MetaD, our mission is to bring the ideas, dreams, and goals of our community, staff, and clients to life by creating high-quality, engaging content. We strive to be at the forefront of the digital world, leveraging cutting-edge technologies like smart contracts and NFTs to help our community navigate this rapidly evolving landscape.
      </p> */}
     <EachDescription 
     title="description"
     description="At 3MetaD, our mission is to bring the ideas, dreams, and goals of our community, staff, and clients to life by creating high-quality, engaging content. We strive to be at the forefront of the digital world, leveraging cutting-edge technologies like smart contracts and NFTs to help our community navigate this rapidly evolving landscape.     "
     />
     <EachDescription 
     title="Company Brief"
     description="Our Orc tribe is a pool of brilliant Orcs from various disciplines, including 3D artists, concept artists, game developers, graphic designers, community moderators, front developers, and blockchain developers worldwide. We have come together to bring high-quality 3D content to the Metaverse and NFT space and self-publish our collections, games, and items.     "
     />
     <EachDescription 
     title="Mission"
     description="As we continue to grow and evolve, we remain committed to our community's long-term success. We are dedicated to educating and guiding our users through the fundamentals in various topics, disciplines, and the many benefits of smart contracts and NFT ownership. We believe these technologies can improve lives and are dedicated to contributing to this field. We are driven to build our reputation and grow our business; we are also committed to giving back to those in need. Once profitable, we plan to use a portion of our profits to support poverty-stricken communities, especially young children, who need our help the most."
     />
     <EachDescription 
     title="Vision"
     description="VR technology and Metaverse platforms will reach their true potential in the coming years. Leading the effort are tech giants like Meta, formerly known as Facebook, who continue to invest billions of dollars in developing more inexpensive, higher-performing gear that expands capabilities while improving the user's immersion experience. Along with delivering enhanced ergonomic design to produce a smooth experience and allow VR devices to be used for long-term use sessions. When these hurdles are no longer discernible, the general market will adopt these products, allowing the utility and use cases to reveal themselves. That's where 3MetaD comes in; once these venues are flourishing, the market will require a constant supply of new material to keep this ecosystem alive and growing. Large studio chains, smaller indie teams, and individual artists who can transport their products to these markets will satisfy this need. We are here to provide users with products ranging from Mini games, 3D and physical merchandise, In-game merchandise, NFT collections, characters, architectures, and custom orders to external parties. "
     />
     <EachDescription 
     title="Virtual Reality and Its Future"
     description="Virtual reality has the potential to become one of this era's most influential technologies. While virtual reality may still appear to be a niche product today, Currently, many developers are working on a range of projects, apps, websites, Defi, and games that continue to be improved, enhanced, and built upon. These trends will only continue to grow in the coming years as adoption grows worldwide. Virtual reality is poised to become a global trend. Over the last decade, it's been steadily improving in terms of viability, and it's now at the point where efficient and profitable applications are emerging and being adopted or developed by large corporations ranging in industries and use case scenarios along with complexity and realism prior achieved. Virtual reality has the potential to become one of this era's most influential technologies. While virtual reality may still appear to be a niche product today, many developers are working on various projects, apps, websites, Defi, and games that continue to be improved, enhanced, and built upon. These trends will only continue to grow in the coming years as adoption grows worldwide. Virtual reality is poised to become a global trend."
     />
     <EachDescription 
     title="Future use case"
     description="🟡The use of a metaverse where people will explore and interact with other people. Spawn and edit a virtual world where customers can be entertained, communicate, play and interact with others.
     🟡Organize virtual events or experiences for people to enjoy in different worlds or spaces.
     🟡Virtual and Augmented reality s use case continues to rise and will achieve mainstream adoption as the technology and resources continue to expand
     "
     />
     <EachDescription 
     title="Product and Services"
     description="We are also embracing the trends of Non-fungible Tokens (NFTs), which are blockchain-based digital products with unique units instead of standard cryptocurrencies with replaceable units. The data associated with these tokens can be used for media such as photographs, videos, audio, or even actual items. NFTs often grant the holder ownership of the data, material, or object related to the token, and they are frequently bought and sold on specialized marketplaces.
     "
     />
     <EachDescription 
     title="NFT - Non-Fungible Tokens"
     description="We are also embracing the trends of Non-fungible Tokens (NFTs), which are blockchain-based digital products with unique units instead of standard cryptocurrencies with replaceable units. The data associated with these tokens can be used for media such as photographs, videos, audio, or even actual items. NFTs often grant the holder ownership of the data, material, or object related to the token, and they are frequently bought and sold on specialized marketplaces.
     "
     />
     <EachDescription 
     title="Conclusions"
     description="The game industry’s future looks bright, with continued growth and annual technology improvements. We look forward to the ever-expanding possibilities that virtual reality offers and are dedicated to ensuring that 3MetaD is at the forefront of this technology."
     />
    </div>
  </div>
</div>
    </div>
  )
}

export default Team