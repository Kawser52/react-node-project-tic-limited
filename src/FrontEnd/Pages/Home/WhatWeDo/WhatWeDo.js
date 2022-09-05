import React from 'react';
import Slider from 'react-slick';
import './WhatWeDo.css';

const WhatWeDo = () => {
    const settings = {
         dots: false,
         infinite: true,
         slidesToShow: 4,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 4,
             slidesToScroll: 4,
             infinite: true,
             dots: false
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             initialSlide: 2
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ]
     };
    return (
            <div className='container py-5'>
                <div className="what-we-do">
                    <span>CHECK SERVICES</span>
                    <p>We do awesome Services for our clients. Check some of our Services.</p>
                </div>
                <Slider {...settings}>
                    <div className='we-do'>
                        <div className="we-do-content">
                            <h4>Graphics <span>Design</span></h4>
                             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                    <div className='we-do'>
                      <div className="we-do-content">
                         <h1>Test</h1>
                        </div>
                    </div>
                    <div className='we-do'>
                      <div className="we-do-content">
                         <h1>Test</h1>
                      </div>
                    </div>
                    <div className='we-do'>
                    <div className="we-do-content">
                         <h1>Test</h1>
                        </div>
                    </div>
                    <div className='we-do'>
                       <div className="we-do-content">
                         <h1>Test</h1>
                        </div>
                    </div>
                    <div className='we-do'>
                       <div className="we-do-content">
                         <h1>Test</h1>
                       </div>
                    </div>
                    
                </Slider>
            </div>
    );
};

export default WhatWeDo;