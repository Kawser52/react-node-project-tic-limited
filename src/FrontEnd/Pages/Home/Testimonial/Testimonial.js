import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
            <div className="container mt-5">
                <h2> Single Item</h2>
                    <Slider {...settings}>
                        <div className='riview'>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
            </Slider>
            </div>
      </div>
    );
};

export default Testimonial;
