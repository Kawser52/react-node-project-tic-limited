import React from 'react';
import AboutHome from '../About/AboutHome/AboutHome';
import DomainHosting from '../DomainHosting/DomainHosting';
import Events from '../Events/Events';
import Counter from './Counter/Counter';
import Courses from './Courses/Courses';
import Slide from './Slider/Slide';
import Testimonial from './Testimonial/Testimonial';
import WhatWeDo from './WhatWeDo/WhatWeDo';

const Home = () => {
    
    return (
        <>
            <Slide></Slide>
            <AboutHome></AboutHome>
            <Counter></Counter>
            <WhatWeDo></WhatWeDo>
            <Courses></Courses>
            <Testimonial></Testimonial>
            <Events></Events>
            <DomainHosting></DomainHosting>
        </>
    );
};

export default Home;
