import React, { useState } from 'react';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../styles/carousel.css';
import data from '../data/data.json'


const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }
    console.log(current)

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
     
    }

  return (
    <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    {data.map((slide,index) => {
        return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current  && (<img src={slide.pictures} alt="img" className='image' />
                )}
            </div>
        )
    })}
        </section>
  )
}

export default Carousel