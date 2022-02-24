import React, { useState } from 'react';
import './Slider.css';
import { sliderData } from './sliderData';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesLength = slides.length;

  const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0 ? slidesLength - 1 : currentSlide - 1)
  }

  const nextSlide = () =>{
    setCurrentSlide(currentSlide === slidesLength - 1 ? 0 : currentSlide + 1)
  }


  return (
    <div>
      <div className='slider-container' >
        {sliderData.map((slide, index) =>(
          <div key={index} className={"fade knowledge-sub-container " + (index === currentSlide ? 'active-slide' : '')}>
            <MdKeyboardArrowLeft className='slide-left' onClick={prevSlide}/>
            <p className='slider-title'>{slide.title}</p>
            <p><i>{slide.message}</i></p>
            <MdKeyboardArrowRight className='slide-right' onClick={nextSlide}/>
          </div> 
        ))}
        
      </div>
    </div>
  )
}

export default Slider;