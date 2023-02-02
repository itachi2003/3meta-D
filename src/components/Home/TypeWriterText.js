import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';



const Title = styled.h2`
font-size: 20px;
text-transform: capitalize;
padding: 10px;
width: 100%;
color: white;
align-self: flex-start;
span{
    text-transform: uppercase;
    font-family: 'coiny',sans-serif;
}
.text-1{
    color:Yellow;
    font-size: 15px;

}
.text-2{
    color: orange;
    font-size: 15px;

}
.text-3{
    color:magenta;
    font-size: 15px;

}

@media (max-width: 70em){
  font-size: 13px};
}
@media (max-width: 48em){
  align-self:center;
  text-align:center;

}
@media (max-width: 40em){
  width:90%;
}
`




const TypeWriterText = () => {
  return (
    <Title>
        
        <Typewriter
        options={{
            autoStart:true,
            loop:true,
        }

        }
  onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">NFTs.</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-2">Collectible items</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-3">Games and Art!</span>')
      .pauseFor(2000)
      .deleteAll()
      .start()

  }}
/>
    </Title>
  )
}

export default TypeWriterText