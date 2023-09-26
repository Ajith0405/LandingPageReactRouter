import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banner from '../assets/banner1.jpg';
import ban1 from '../assets/ban1.jpg';
import ban2 from '../assets/ban2.jpg';
import ban3 from '../assets/ban3.jpg';
import wed3 from '../assets/wed3.jpeg';
import bann1 from '../assets/bann1.jpeg';
const Slider = () => {
  return (
    <Carousel className='mt-3'>
      <Carousel.Item  >
       <img src={wed3} alt='banner1' width={'100%'}></img>
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={bann1} alt='banner1' width={'100%'} ></img>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban3} alt='banner1' width={'100%'} ></img>

      </Carousel.Item>
    </Carousel>
  )
}

export default Slider