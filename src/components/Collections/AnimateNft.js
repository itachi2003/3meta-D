import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from './img/hidden.jpg';



const Container = styled.div`
width:25vw;
height:60vh;
@media (max-width:70em){
  heigth:60vh;
}


@media (max-width:64em){
  heigth:50vh;
  width:30vw;
}
@media (max-width:48em){
  heigth:50vh;
  width:40vw;
}
@media (max-width:30em){
  heigth:45vh;
  width:60vw;
}

.swiper{
    width:100%;
    height:100%;
}
.swiper-slide{
  background-color: white;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: top;
}
.swiper-button-next{
  color: white;
  right:20;

  @media (max-width: 64em){
    width: 3rem;
  }
  @media (max-width: 48em){
    width: 2rem;
  }

}
.swiper-button-prev{
  color:black;
  left:20;
}
`




const AnimateNft = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction:false,
        }}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[Pagination, Navigation, Autoplay, EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>  <img src={img1} alt='IMG1' />   </SwiperSlide>
        <SwiperSlide> <img src={img1} alt='IMG2' /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt='IMG3' /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt='IMG4' /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt='IMG5' /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt='IMG6' /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt='IMG7' /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt='IMG8' /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt='IMG9' /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt='IMG10' /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt='IMG11' /> </SwiperSlide>
        <SwiperSlide> <img src={img1} alt='IMG12' /> </SwiperSlide>

      </Swiper>
    </Container>
  )
}

export default AnimateNft