import React from 'react'
import Nav from "../Nav";
import MintButton from "./MintButton"
import AnimateNft from './AnimateNft';
const Collections = () => {
  return (
    <div>
      <Nav fifth />
      <div className="flex justify-center mt-10" >
        <AnimateNft />
      </div>
      <MintButton />
    </div>
  )
}

export default Collections