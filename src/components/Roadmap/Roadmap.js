import React from 'react'
import Nav from "../Nav";
import Road from './Road'
const Roadmap = () => {
  return (
    <div className='overflow-visible bg-black'>
        <Nav third />
        <div className='' >
          <h1 className='block text-center mt-5 text-3xl text-white' >Roadmap</h1>
          <Road />
        </div>

    </div>
  )
}

export default Roadmap