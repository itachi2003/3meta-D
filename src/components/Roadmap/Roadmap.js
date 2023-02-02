import React from 'react'
import Nav from "../Nav";
import Road from './Road'
const Roadmap = () => {
  return (
    <div className='overflow-visible'>
        <Nav third />
        <div className='mt-20' >
          <Road />
        </div>

    </div>
  )
}

export default Roadmap