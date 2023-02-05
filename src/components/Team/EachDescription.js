import React from 'react'

const EachDescription = (props) => {
  return (
    <div className=''>
        <div className='text-3xl block w-full font-semibold text-orangu'>{props.title}</div>
        <div className='text-xl block mt-5 mb-5 text-white'>
            <p className=''>{props.description}</p>
        </div>
    </div>
  )
}

export default EachDescription